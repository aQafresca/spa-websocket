import { useContext } from 'react';

import { ChatContext } from './chatContext.ts';

export const useChatSocket = () => {
  const context = useContext(ChatContext);

  if (!context) throw new Error('useChatSocket must be used within ChatProvider');

  return context;
};
