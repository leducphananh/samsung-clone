import { Star } from 'lucide-react';

const Rating = ({
  rating,
  ratingCount,
}: {
  rating: number;
  ratingCount: number;
}) => {
  const fullStars = Math.round(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center gap-1.5">
      <div className="hidden items-center gap-0.5 md:flex">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} fill="#ffaa4e" strokeWidth={0} size={16} />
        ))}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={i} className="text-gray-300">
            <Star key={i} fill="#bbbbbb" strokeWidth={0} size={16} />
          </span>
        ))}
      </div>
      <div className="block md:hidden">
        <Star fill="#ffaa4e" strokeWidth={0} size={16} />
      </div>
      <span className="text-[14px] font-bold">
        {rating.toFixed(1)}
        <span className="font-normal md:hidden">/5</span>
      </span>
      <span className="text-[14px] underline">
        ({ratingCount > 9999 ? '9999+' : ratingCount})
      </span>
    </div>
  );
};

export default Rating;
