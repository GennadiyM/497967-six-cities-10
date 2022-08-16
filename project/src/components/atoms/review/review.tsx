import { RatingClass } from '../../../const';
import Rating from '../rating/rating';

export default function Review() {
  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src='img/avatar-max.jpg'
            width='54'
            height='54'
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>Max</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <Rating rating={4} ratingClass={RatingClass.Reviews} />
        </div>
        <p className='reviews__text'>
          A quiet cozy and picturesque that hides behind a a river by the unique
          lightness of Amsterdam. The building is green and from 18th century.
        </p>
        <time className='reviews__time' dateTime='2019-04-24'>
          April 2019
        </time>
      </div>
    </li>
  );
}
