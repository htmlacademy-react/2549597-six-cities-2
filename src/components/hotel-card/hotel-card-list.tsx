import HotelCard from './hotel-card.tsx';
import {Offers} from '../../types.ts';
import { Link } from 'react-router-dom';

type HotelCardListProps = {
  offers: Offers;
  setCurrentCard: (value: string) => void;
};

export default function HotelCardList({offers, setCurrentCard}: HotelCardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        (
          <article className='cities__card place-card' key={offer.id}>
            <div className='cities__image-wrapper place-card__image-wrapper'>
              <Link to={{pathname: `/offer/${offer.id}`}} state={offer}>
                <img className="place-card__image" src={offer.imageSource} width="260" height="200" alt="Place image"/>
              </Link>
            </div>
            {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
            <HotelCard offer={offer} setCurrentCard={setCurrentCard} key={offer.id}/>
          </article>
        )
      )}
    </div>
  );
}
