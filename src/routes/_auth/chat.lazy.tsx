import { createLazyFileRoute } from '@tanstack/react-router';

import ChatPage from '@/pages/chat';

export const Route = createLazyFileRoute('/_auth/chat')({
  component: ChatPage,
});
