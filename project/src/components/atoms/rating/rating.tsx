import { RatingClass } from '../../../const';

const FULL_RATING = 100;
const COUNT_STARS = 5;

const getRating = (rating: number): number =>
  (rating * FULL_RATING) / COUNT_STARS;

export default function Rating({
  rating,
  ratingClass = RatingClass.Card,
}: {
  rating: number;
  ratingClass?: RatingClass;
}) {
  return (
    <div className={`${ratingClass}__rating rating`}>
      <div className={`${ratingClass}__stars rating__stars`}>
        <span
          style={{
            width: `${getRating(rating)}%`,
          }}
        />
        <span className='visually-hidden'>Rating</span>
      </div>
    </div>
  );
}
