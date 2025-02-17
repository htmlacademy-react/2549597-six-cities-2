import classnames from 'classnames';
import {Feauture} from '../../types';

export default function OfferFeautures ({feauture, id}: Feauture): JSX.Element {

  return (
    <li className={classnames('offer__feature', {
      'offer__feature--entire' : id === 0,
      'offer__feature--bedrooms' : id === 1,
      'offer__feature--adults' : id === 2
    })}
    >
      {feauture}
    </li>
  );
}
