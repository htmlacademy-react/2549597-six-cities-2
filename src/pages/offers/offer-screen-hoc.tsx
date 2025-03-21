import { ComponentType, useEffect, useState } from 'react' ;
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getDataCurrentOffer, getReviews } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { getCurrentOffer, getReviewsData } from '../../store/reducer';
import { changeTown } from '../../store/action';
import { City } from '../../types/models';

type OfferScreenPorps = {
  id: string | undefined;
}

export const OfferScreenHOC = <P extends OfferScreenPorps>(Component: ComponentType<P>) => function OfferScreenWrapper(props: P) {
  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string}>();
  const [loading, setLoading] = useState(true);
  const currentOffer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getReviewsData);

  useEffect(() => {
    if (id !== currentOffer?.id) {
      dispatch(getDataCurrentOffer(id));
      dispatch(getReviews(id));
    }
  }, [currentOffer?.id, dispatch, id]);

  const town = currentOffer?.city as City;

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

  if (loading) {
    return;
  }

  return <Component {...props} id={id} currentOffer={currentOffer} reviews={reviews}/>;
};
