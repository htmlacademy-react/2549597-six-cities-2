import { Reviews } from '../../types';
import OfferReview from './offer-review';

export default function OfferReviewList (reviews: Reviews): JSX.Element {
  return (
    <ul className="reviews__list">{reviews.map((review) => OfferReview(review))}</ul>
  );
}
