import { useChatQuery } from './useChatQuery.ts';
import { useChatSocket } from './useChatSocked.ts';

export const useChatMessages = () => {
  const { sendMessage, isConnected } = useChatSocket();
  const { data: messages = [] } = useChatQuery();

  return {
    messages,
    sendMessage,
    isConnected,
  };
};
