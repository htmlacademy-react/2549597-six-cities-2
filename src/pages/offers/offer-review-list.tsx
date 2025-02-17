import { Reviews } from '../../types';
import OfferReview from './offer-review';

type ReviewProps = {
  review: Reviews;
};

export default function OfferReviewList ({review}: ReviewProps): JSX.Element {
  return (
    <ul className="reviews__list">{review.map((currentReview) => OfferReview(currentReview))}</ul>
  );
}
