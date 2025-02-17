import {Image} from '../../types';

export default function OfferImage ({image}: Image): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio"/>
    </div>
  );
}
