import type { IMessagesProps } from '@/entities/chat/model';
import { Message } from '@/entities/chat/ui';

export const Messages = ({ messages }: IMessagesProps) => {
  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <p>have no message</p>
      </div>
    );
  }

  return (
    <>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </>
  );
};
