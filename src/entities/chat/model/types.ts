export type TMessageStatus = 'sending' | 'sent' | 'error';
export type TMessageSender = 'me' | 'bot';

export interface IMessage {
  id: string;
  text: string;
  sender: TMessageSender;
  timestamp: string;
  status: TMessageStatus;
}

export interface IMessagesProps {
  messages: IMessage[];
}

export interface IMessageFormProps {
  onSendMessage: (text: string) => void;
}
