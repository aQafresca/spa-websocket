interface IProps {
  productId: string;
}

const DetailPage = ({ productId }: IProps) => {
  return (
    <div>
      <h1>DetailPage</h1>
      <h3>{productId}</h3>
    </div>
  );
};

export default DetailPage;
