import Rating from '../rating/rating';

const TEMPLATE_PREMIUM = <div className="place-card__mark"><span>Premium</span></div>;

export interface Offer {
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
  title: string;
  rating: number;
  type: string;
  price: number;
  id: number;
}

type PlaceCardProps = {
  offer: Offer;
}

export default function PlaceCard({offer}: PlaceCardProps): JSX.Element {
  const {isPremium, isFavorite, previewImage, title, rating, type, price, id} = offer;

  return (
    <article className="cities__card place-card">
      {isPremium ? TEMPLATE_PREMIUM : ''}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating rating={rating}/>
        <h2 className="place-card__name">
          <a href={`/offer/${id}`}>Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
