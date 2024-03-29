import {
  AuthorizationStatus,
  BookmarksBtnClass,
  MAX_COUNT_IMAGE,
  RatingClass,
} from '../../../const';
import { useAppSelector } from '../../../hooks/redux';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';
import { Offer } from '../../../types/offer';
import { ReviewType } from '../../../types/review/review-type';
import BookmarksBtn from '../../atoms/bookmarksBtn/bookmarks-btn';
import Host from '../../atoms/host/host';
import Rating from '../../atoms/rating/rating';
import Reviews from '../../molecules/reviews/reviews';

export default function FullCard({
  offer,
  comments,
}: {
  offer: Offer;
  comments: ReviewType[] | [];
}) {
  const {
    images,
    title,
    id,
    isPremium,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    rating,
  } = offer;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <>
      <div className='property__gallery-container container'>
        <div className='property__gallery'>
          {images.length > 0 &&
            images.slice(0, MAX_COUNT_IMAGE).map((urlImage) => (
              <div key={urlImage} className='property__image-wrapper'>
                <img
                  className='property__image'
                  src={urlImage}
                  alt='в studio'
                />
              </div>
            ))}
        </div>
      </div>
      <div className='property__container container'>
        <div className='property__wrapper'>
          {isPremium && (
            <div className='property__mark'>
              <span>Premium</span>
            </div>
          )}
          <div className='property__name-wrapper'>
            <h1 className='property__name'>{title}</h1>
            <BookmarksBtn id={id} modifier={BookmarksBtnClass.Property}/>
          </div>
          <div className='property__rating rating'>
            <Rating rating={rating} ratingClass={RatingClass.Property} />
            <span className='property__rating-value rating__value'>
              {rating}
            </span>
          </div>
          <ul className='property__features'>
            <li className='property__feature property__feature--entire'>
              {type}
            </li>
            <li className='property__feature property__feature--bedrooms'>
              {bedrooms} Bedroom{bedrooms === 1 ? '' : 's'}
            </li>
            <li className='property__feature property__feature--adults'>
              Max {maxAdults} adult{maxAdults === 1 ? '' : 's'}
            </li>
          </ul>
          <div className='property__price'>
            <b className='property__price-value'>&euro;{price}</b>
            <span className='property__price-text'>&nbsp;night</span>
          </div>
          {goods.length > 0 && (
            <div className='property__inside'>
              <h2 className='property__inside-title'>What&apos;s inside</h2>
              <ul className='property__inside-list'>
                {goods.map((good) => (
                  <li key={good} className='property__inside-item'>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Host host={host} description={description} />
          {authorizationStatus === AuthorizationStatus.Auth &&
            comments.length > 0 && <Reviews comments={comments} />}
        </div>
      </div>
    </>
  );
}
