import HotelCard from '../hotel-card/hotel-card.tsx';
import {MainScreenProps} from '../../types.ts';
import { useState } from 'react';

export default function HotelCardList({offersData}:MainScreenProps) :JSX.Element {
  const [currentCard, setCurrentCard] = useState(false);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((offer) => HotelCard(offer, currentCard, setCurrentCard))}
    </div>
  );
}
