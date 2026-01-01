import type { IconType } from 'react-icons';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface IStarRatingProps {
  rating: number;
  totalStars?: number;
  iconSize?: number;
}

export const StarRating = ({ rating, totalStars = 5, iconSize = 16 }: IStarRatingProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: totalStars }).map((_, index) => {
        let StarIcon: IconType;

        const diff = rating - index;

        if (diff >= 1) {
          StarIcon = FaStar;
        } else if (diff >= 0.5) {
          StarIcon = FaStarHalfAlt;
        } else {
          StarIcon = FaRegStar;
        }

        return (
          <StarIcon
            key={index}
            size={iconSize}
            className={StarIcon === FaRegStar ? 'text-gray-300' : 'text-amber-400'}
          />
        );
      })}
      <span className="ml-1 text-xs text-primary font-medium">({rating.toFixed(2)})</span>
    </div>
  );
};
