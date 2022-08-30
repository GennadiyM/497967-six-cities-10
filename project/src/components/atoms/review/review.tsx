import dayjs from 'dayjs';
import { RatingClass } from '../../../const';
import { ReviewType } from '../../../types/review/review-type';
import Rating from '../rating/rating';

export default function Review({comment}: {comment: ReviewType}) {
  const {user} = comment;

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={user.avatarUrl}
            width='54'
            height='54'
            alt={`${user.name} avatar`}
          />
        </div>
        <span className='reviews__user-name'>{user.name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <Rating rating={comment.rating} ratingClass={RatingClass.Reviews} />
        </div>
        <p className='reviews__text'>
          {comment.comment}
        </p>
        <time className='reviews__time' dateTime={comment.date}>
          {dayjs(comment.date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}
