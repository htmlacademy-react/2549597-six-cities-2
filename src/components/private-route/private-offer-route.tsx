import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppSelector } from '../../hooks';
import { getAllOffers } from '../../store/slices/offers-slice/offers-reducer';
import { OfferScreenHOC } from '../../pages/offers/offer-screen-hoc';

export default function PrivateOfferRoute() {
  const {id} = useParams<{id: string}>();
  const offers = useAppSelector(getAllOffers);

  const currentOffer = offers.find((offer) => offer.id === id);

  if (!currentOffer) {
    return <Navigate to={AppRoute.Error} />;
  }

  return <OfferScreenHOC />;
}
