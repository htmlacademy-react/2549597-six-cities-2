import HotelCard from './hotel-card.tsx';
import {AppProps} from '../../types.ts';
import { useState } from 'react';

type HotelCardListProps = AppProps;

export default function HotelCardList({offers}: HotelCardListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCard, setCurrentCard] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <HotelCard offer={offer} setCurrentCard={setCurrentCard} key={offer.id}/>)}
    </div>
  );
}
