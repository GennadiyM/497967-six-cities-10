const FULL_RATING = 100;
const COUNT_STARS = 5;

const getRating = (rating: number): number => (rating * FULL_RATING) / COUNT_STARS;

export default function Rating({ rating }: { rating: number }): JSX.Element {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span
          style={{
            width: `${getRating(rating)}%`,
          }}
        >
        </span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
