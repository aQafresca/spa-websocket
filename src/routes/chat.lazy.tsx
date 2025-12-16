import { createLazyFileRoute } from '@tanstack/react-router';

import ChatPage from '@/pages/chat';

export const Route = createLazyFileRoute('/chat')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ChatPage />;
}
