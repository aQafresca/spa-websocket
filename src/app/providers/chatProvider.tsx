import { useQueryClient } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';

import { useChatSocketTransport } from '@/entities/chat/lib';
import type { IMessage } from '@/entities/chat/model';
import { ChatContext } from '@/entities/chat/model';

const url = 'wss://ws.ifelse.io';

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const queryClient = useQueryClient();

  const syncCache = useCallback(
    (message: IMessage) => {
      queryClient.setQueryData<IMessage[]>(['messages'], (old = []) => [...old, message]);
    },
    [queryClient],
  );

  const { sendMessage: sendRaw } = useChatSocketTransport({
    url,
    onMessage: (text) =>
      syncCache({
        id: crypto.randomUUID(),
        text,
        sender: 'bot',
        timestamp: new Date().toISOString(),
        status: 'sent',
      }),
    onStatusChange: setIsConnected,
  });

  const sendMessage = useCallback(
    (text: string) => {
      const myMessage: IMessage = {
        id: crypto.randomUUID(),
        text,
        sender: 'me',
        timestamp: new Date().toISOString(),
        status: 'sent',
      };

      syncCache(myMessage);
      sendRaw(text);
    },
    [sendRaw, syncCache],
  );

  return <ChatContext.Provider value={{ isConnected, sendMessage }}>{children}</ChatContext.Provider>;
};
