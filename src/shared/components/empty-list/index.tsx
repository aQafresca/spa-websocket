interface IEmptyListProps {
  message: string;
}

export const EmptyList = ({ message }: IEmptyListProps) => {
  return (
    <div>
      <p>{message} is not found</p>
    </div>
  );
};
