import { Feauture } from '../../types/models';

type OfferFeauturesProps = Feauture;

export default function OfferFeautures ({bedrooms, type, maxAdults}: OfferFeauturesProps) {

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms}
      </li>
      <li className="offer__feature offer__feature--adults">
        {maxAdults}
      </li>
    </ul>
  );
}
