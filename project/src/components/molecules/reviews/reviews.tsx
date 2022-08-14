import ReviewForm from '../../atoms/review-form/review-form';
import Review from '../../atoms/review/review';

export default function Reviews() {
  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews &middot; <span className='reviews__amount'>1</span>
      </h2>
      <ul className='reviews__list'>
        <Review />
      </ul>
      <ReviewForm />
    </section>
  );
}
