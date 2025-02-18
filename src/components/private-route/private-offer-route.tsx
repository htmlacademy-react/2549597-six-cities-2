import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../constants';
import { Offers } from '../../types';

type PrivateOfferRouteProps = {
  offers: Offers;
  children: JSX.Element;
}

export default function PrivateOfferRoute(props: PrivateOfferRouteProps) {
  const {offers, children} = props;
  const id = window.location.pathname.slice(7);
  const currentOffer = offers.find((offer) => offer.id === id);

  if (!currentOffer) {
    return <Navigate to={AppRoute.Error} />;
  }

  return children;
}
