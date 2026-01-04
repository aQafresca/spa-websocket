import { getRelativeTime } from '@/entities/chat/lib';
import type { IMessage } from '@/entities/chat/model';

export const Message = ({ text, sender, timestamp, status }: IMessage) => {
  const isMe = sender === 'me';

  const relativeTime = getRelativeTime(timestamp);

  return (
    <div className={`flex w-full mb-4 ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm ${
          isMe ? 'bg-primary text-white rounded-tr-none' : 'bg-gray-300 text-gray-800 rounded-tl-none'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>

        <div
          className={`flex items-center mt-1 text-[10px] gap-1 ${
            isMe ? 'text-blue-100 justify-end' : 'text-gray-500 justify-start'
          }`}
        >
          <span>{relativeTime}</span>

          {isMe && (
            <span className="font-bold">
              {status === 'sending' && '...'}
              {status === 'sent' && '✓'}
              {status === 'error' && '✕'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
