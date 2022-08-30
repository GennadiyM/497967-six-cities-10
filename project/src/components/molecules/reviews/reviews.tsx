import { ReviewType } from '../../../types/review/review-type';
import { compareDays } from '../../../utils';
import ReviewForm from '../../atoms/review-form/review-form';
import Review from '../../atoms/review/review';

export default function Reviews({ comments }: { comments: ReviewType[] }) {

  const sortedComments = [...comments].sort(compareDays);


  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews &middot; <span className='reviews__amount'>{comments.length}</span>
      </h2>
      <ul className='reviews__list'>
        {sortedComments.map((comment) => (
          <Review key={comment.id} comment={comment} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}
