import { MAX_COUNT_IMAGE, RatingClass } from '../../../const';
import { FullOffer } from '../../../types/base-offer';
import Rating from '../../atoms/rating/rating';

export default function FullCard({ offer }: { offer: FullOffer }) {
  const {
    images,
    title,
    isFavorite,
    isPremium,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    rating
  } = offer;

  return (
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images.length > 0 &&
            images.slice(0, MAX_COUNT_IMAGE).map((urlImage) => (
              <div key={urlImage} className="property__image-wrapper">
                <img
                  className="property__image"
                  src={urlImage}
                  alt="в studio"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
            <button
              className={`property__bookmark-button button ${
                isFavorite && 'property__bookmark-button--active'
              }`}
              type="button"
            >
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <Rating rating={rating} ratingClass={RatingClass.Property}/>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            {goods.length > 0 && (
              <ul className="property__inside-list">
                {goods.map((good) => (
                  <li key={good} className="property__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="property__avatar user__avatar"
                  src={host.avatarUrl}
                  width="74"
                  height="74"
                  alt={host.name}
                />
              </div>
              <span className="property__user-name">{host.name}</span>
              {host.isPro && <span className="property__user-status">Pro</span>}
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">
              Reviews &middot; <span className="reviews__amount">1</span>
            </h2>
            <ul className="reviews__list">
              <li className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img
                      className="reviews__avatar user__avatar"
                      src="img/avatar-max.jpg"
                      width="54"
                      height="54"
                      alt="Reviews avatar"
                    />
                  </div>
                  <span className="reviews__user-name">Max</span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating"></div>
                  <p className="reviews__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">
                    April 2019
                  </time>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}