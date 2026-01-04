import { useChatMessages } from '@/entities/chat/model';
import { UserProfile } from '@/entities/user/ui';
import { useMeQuery } from '@/features/auth/api';

import { MessageForm } from './messageForm.tsx';
import { Messages } from './messages.tsx';

export const ChatWindow = () => {
  const { messages, sendMessage, isConnected } = useChatMessages();
  const { data: user } = useMeQuery();

  if (!user) return null;

  return (
    <div className="flex flex-col w-full max-w-md h-[600px] mx-auto border rounded-xl shadow-2xl bg-white overflow-hidden">
      <div className="flex justify-between px-6 py-4 bg-black text-white shadow-md">
        <div>
          <h2 className="font-bold text-lg">Echo Chat</h2>
          <span className="text-xs text-blue-100 flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${isConnected ? 'bg-green-400' : 'bg-gray-400'}`}
            ></span>
            ws.ifelse.io
          </span>
        </div>
        <UserProfile firstName={user.firstName} lastName={user.lastName} image={user.image} />
      </div>
      <div className="flex-1 overflow-y-auto p-4 bg-gray-400">
        <Messages messages={messages} />
      </div>

      <div className="p-4 border-t bg-gray-dark">
        <MessageForm onSendMessage={sendMessage} />
      </div>
    </div>
  );
};
