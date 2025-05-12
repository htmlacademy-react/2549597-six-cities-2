import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAllOffers } from '../../store/slices/offers/selectors';
import { OfferScreenHOC } from '../../components/offer-screen-hoc/offer-screen-hoc';
import NotFoundScreen from '../not-found-screen/not-found-screen';

export default function OfferScreen() {
  const {id} = useParams<{id: string}>();
  const offers = useAppSelector(getAllOffers);

  const currentOffer = offers.find((offer) => offer.id === id);

  if (!currentOffer) {
    return <NotFoundScreen />;
  }

  return <OfferScreenHOC id={id}/>;
}
