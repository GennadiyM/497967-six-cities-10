import { ChangeEvent, useEffect, useState } from 'react';
import { RatingTitle, ReviewLength } from '../../../const';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isDisableSubmit, setDisableSubmit] = useState(true);

  const textareaChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) =>
    setComment(evt.target.value);

  useEffect(() => {
    if (
      rating > 0 &&
      comment.length > ReviewLength.MIN &&
      comment.length <= ReviewLength.MAX
    ) {
      setDisableSubmit((prev) => !prev);
    }
  }, [rating, comment]);

  return (
    <form className='reviews__form form' action='#' method='post'>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>

      <div className='reviews__rating-form form__rating'>
        {Object.entries(RatingTitle).map(([value, name]) => (
          <>
            <input
              className='form__rating-input visually-hidden'
              name='rating'
              value={value}
              id={`${value}-stars}`}
              type='radio'
              onChange={() => setRating(+value)}
              checked={rating === +value}
            />
            <label
              htmlFor={`${value}-stars}`}
              className='reviews__rating-label form__rating-label'
              title={name}
            >
              <svg className='form__star-image' width='37' height='33'>
                <use xlinkHref='#icon-star'></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        onChange={textareaChangeHandle}
      >
        {comment}
      </textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={isDisableSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
