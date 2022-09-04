import { ChangeEvent, FormEvent, Fragment, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RatingValue, RatingTitle, ReviewLength } from '../../../const';
import { useAppDispatch } from '../../../hooks/redux';
import { postReviewAction } from '../../../store/api-actions';

const INITIAL_FORM_DATA = {
  rating: '0',
  comment: '',
};

export default function ReviewForm() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fieldChangeHandle = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isDisableSubmit = () =>
    +formData.rating < RatingValue.MIN ||
    +formData.rating > RatingValue.MAX ||
    formData.comment.length <= ReviewLength.MIN ||
    formData.comment.length >= ReviewLength.MAX;

  const handelReviewSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isDisableSubmit() && id) {
      dispatch(postReviewAction({ id, formData }));
      setFormData(INITIAL_FORM_DATA);

      if (textareaRef.current) {
        textareaRef.current.value = '';
      }
    }
  };

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handelReviewSubmit}
    >
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>

      <div className='reviews__rating-form form__rating'>
        {Object.entries(RatingTitle)
          .reverse()
          .map(([value, name]) => (
            <Fragment key={name}>
              <input
                className='form__rating-input visually-hidden'
                name='rating'
                value={value}
                id={`${value}-stars`}
                type='radio'
                onChange={fieldChangeHandle}
                checked={formData.rating === value}
              />
              <label
                htmlFor={`${value}-stars`}
                className='reviews__rating-label form__rating-label'
                title={name}
              >
                <svg className='form__star-image' width='37' height='33'>
                  <use xlinkHref='#icon-star'></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='comment'
        name='comment'
        placeholder='Tell how was your stay, what you like and what can be improved'
        onChange={fieldChangeHandle}
        defaultValue={formData.comment}
        ref={textareaRef}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={isDisableSubmit()}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
