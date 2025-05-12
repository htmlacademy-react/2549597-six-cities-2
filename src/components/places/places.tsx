import { useAppSelector } from '../../hooks';
import { getSortedOffers } from '../../store/reducer';
import { getCityName } from '../../store/slices/town/selectors';

export default function Places () {
  const offers = useAppSelector(getSortedOffers);
  const cityName = useAppSelector(getCityName);

  return <b className="places__found" data-testid='places-contaner'>{offers.length} places to stay in {cityName}</b>;
}
