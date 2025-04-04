import { memo } from 'react';
import { Reviews } from '../../types/models';
import OfferReview from './offer-review';

type ReviewProps = {
  reviews: Reviews;
};

function OfferReviewList ({reviews}: ReviewProps) {
  return (
    <ul className="reviews__list">{reviews.map((currentReview) => <OfferReview currentReview={currentReview} key={currentReview.id}/>)}</ul>
  );
}

export const OfferReviewListMemo = memo(OfferReviewList, (prevProps, nextProps) => prevProps.reviews === nextProps.reviews);
