interface IEmptyListProps {
  message: string;
}

export const EmptyList = ({ message }: IEmptyListProps) => {
  return (
    <div className={'h-full'}>
      <p>{message}</p>
    </div>
  );
};
