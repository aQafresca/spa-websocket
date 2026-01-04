import { createContext } from 'react';

interface ChatContextType {
  isConnected: boolean;
  sendMessage: (text: string) => void;
}

export const ChatContext = createContext<ChatContextType | null>(null);
