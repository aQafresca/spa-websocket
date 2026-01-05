import { useRef, useEffect, useCallback } from 'react';

import { SOCKET_CONFIG } from '@/entities/chat/model/constants.ts';

interface IUseChatSocketTransportProps {
  url: string;
  onMessage: (msg: string) => void;
  onStatusChange?: (connected: boolean) => void;
}

export const useChatSocketTransport = ({ url, onMessage, onStatusChange }: IUseChatSocketTransportProps) => {
  const socketRef = useRef<WebSocket | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const heartbeatTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const messageHandler = useRef(onMessage);
  const statusHandler = useRef(onStatusChange);
  const connectRef = useRef<() => void>(() => {});

  useEffect(() => {
    messageHandler.current = onMessage;
    statusHandler.current = onStatusChange;
  });

  const stopHeartbeat = useCallback(() => {
    if (heartbeatTimerRef.current) {
      clearInterval(heartbeatTimerRef.current);
      heartbeatTimerRef.current = null;
    }
  }, []);

  const startHeartbeat = useCallback(() => {
    stopHeartbeat();
    heartbeatTimerRef.current = setInterval(() => {
      if (socketRef.current?.readyState === WebSocket.OPEN) {
        socketRef.current.send('ping');
      }
    }, SOCKET_CONFIG.HEARTBEAT_INTERVAL);
  }, [stopHeartbeat]);

  const connect = useCallback(() => {
    if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
    if (socketRef.current) {
      socketRef.current.onclose = null;
      socketRef.current.close();
    }

    const ws = new WebSocket(url);

    ws.onopen = () => {
      reconnectAttemptsRef.current = 0;
      statusHandler.current?.(true);
      startHeartbeat();
    };

    ws.onmessage = (event) => {
      if (event.data === SOCKET_CONFIG.PONG_PAYLOAD || event.data === SOCKET_CONFIG.PING_PAYLOAD) return;
      if (typeof event.data === 'string') {
        if (event.data.startsWith('Request served by')) return;
        messageHandler.current(event.data);
      }
    };

    ws.onclose = (event) => {
      statusHandler.current?.(false);
      stopHeartbeat();
      socketRef.current = null;

      if (event.code !== 1000) {
        const delay = Math.min(
          SOCKET_CONFIG.MAX_RECONNECT_DELAY * Math.pow(2, reconnectAttemptsRef.current),
          SOCKET_CONFIG.MAX_RECONNECT_DELAY,
        );

        reconnectTimeoutRef.current = setTimeout(() => {
          reconnectAttemptsRef.current++;
          connectRef.current();
        }, delay);
      }
    };

    ws.onerror = (err) => console.error('WebSocket Error:', err);

    socketRef.current = ws;
  }, [url, startHeartbeat, stopHeartbeat]);

  useEffect(() => {
    connectRef.current = connect;
  }, [connect]);

  useEffect(() => {
    connect();

    return () => {
      stopHeartbeat();
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      if (socketRef.current) {
        socketRef.current.onclose = null;
        socketRef.current.close(SOCKET_CONFIG.NORMAL_CLOSE_CODE);
      }
    };
  }, [connect, stopHeartbeat]);

  const sendMessage = useCallback((text: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(text);
    } else {
      console.error('Failed to send message: Socket is not open');
    }
  }, []);

  return { sendMessage };
};
