import { useEffect, useState } from 'react' ;
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getDataCurrentOffer, getReviews } from '../../store/api-actions';
import { changeTown } from '../../store/slices/town/town';
import { getReviewsData } from '../../store/slices/review/selectors';
import { getCurrentOffer } from '../../store/slices/current-offer/selectors';
import { OfferPage } from '../../pages/offer-screen/offer-page';
import { sortingReview } from '../../utils';

type OfferScreenHOCProps = {
  id?: string;
}

export const OfferScreenHOC = ({id}: OfferScreenHOCProps) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const currentOffer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getReviewsData);

  useEffect(() => {
    if (id !== currentOffer?.id) {
      dispatch(getDataCurrentOffer(id));
      dispatch(getReviews(id));
    }
  }, [currentOffer?.id, dispatch, id]);

  const town = currentOffer?.city ;

  useEffect(() => {
    if (currentOffer) {
      setLoading(false);
    }
  }, [currentOffer]);

  useEffect(() => {
    if (town) {
      dispatch(changeTown(town));
    }
  }, [dispatch, town]);

  if (!reviews) {
    return;
  }

  if (loading) {
    return;
  }

  return <OfferPage id={id} currentOffer={currentOffer} reviews={sortingReview(reviews)} />;
};
