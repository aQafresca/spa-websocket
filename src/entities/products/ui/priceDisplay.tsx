interface PriceDisplayProps {
  price: number;
  finalPrice: string;
  hasDiscount: boolean;
}

export const PriceDisplay = ({ price, finalPrice, hasDiscount }: PriceDisplayProps) => {
  if (!hasDiscount) {
    return <span className={'text-gray-400 font-bold text-center'}>${price}</span>;
  }

  return (
    <div className="flex items-baseline gap-4">
      <span className={'line-through text-error text-sm'}>${price}</span>
      <span className={'text-accent font-bold'}>${finalPrice}</span>
    </div>
  );
};
