import { Link } from 'react-router-dom';
import { PlaceCardClass, ImageSize, AppRoute } from '../../../const';
import { BaseOffer } from '../../../types/base-offer';
import Rating from '../rating/rating';

type PlaceCardProps = {
  offer: BaseOffer;
  cardClass?: PlaceCardClass;
}

export default function PlaceCard({offer, cardClass = PlaceCardClass.Main}: PlaceCardProps) {
  const {isPremium, isFavorite, previewImage, title, rating, type, price, id} = offer;
  const isFavoriteClass = cardClass === PlaceCardClass.Favorite;
  const imageSize = isFavoriteClass ? ImageSize.Small : ImageSize.Big;

  return (
    <article className={`${cardClass}__card place-card`}>
      {isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt={title}
          />
        </Link>
      </div>
      <div className={`place-card__info ${isFavoriteClass && 'favorites__card-info'}`}>
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
          <Link to={`${AppRoute.Room}/${id}`}>Beautiful &amp; luxurious apartment at great location</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
