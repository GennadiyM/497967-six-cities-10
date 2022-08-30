import { Link } from 'react-router-dom';
import { PlaceCardClassType, ImageSize, AppRoute } from '../../../const';
import { BaseOffer } from '../../../types/offer';
import BookmarksBtn from '../bookmarksBtn/bookmarks-btn';
import Rating from '../rating/rating';

type PlaceCardProps = {
  offer: BaseOffer;
  cardClass?: PlaceCardClassType;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
};

export default function PlaceCard({
  offer,
  cardClass = PlaceCardClassType.Main,
  onMouseOver,
  onMouseOut,
}: PlaceCardProps) {
  const {
    isPremium,
    previewImage,
    title,
    rating,
    type,
    price,
    id,
  } = offer;
  const isFavoriteClass = cardClass === PlaceCardClassType.Favorite;
  const imageSize = isFavoriteClass ? ImageSize.Small : ImageSize.Big;

  return (
    <article
      className={`${cardClass}__card place-card`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img
            className='place-card__image'
            src={previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt={title}
          />
        </Link>
      </div>
      <div
        className={`place-card__info ${
          isFavoriteClass && 'favorites__card-info'
        }`}
      >
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <BookmarksBtn id={id}/>
        </div>
        <Rating rating={rating} />
        <h2 className='place-card__name'>
          <Link to={`${AppRoute.Room}/${id}`}>
            Beautiful &amp; luxurious apartment at great location
          </Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}
