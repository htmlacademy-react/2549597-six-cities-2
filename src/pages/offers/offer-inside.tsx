import {Inside} from '../../types';

export default function OfferInside ({inside}: Inside): JSX.Element {
  return(
    <li className="offer__inside-item">
      {inside}
    </li>
  );
}
