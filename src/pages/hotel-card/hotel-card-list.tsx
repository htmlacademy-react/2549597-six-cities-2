import HotelCard from '../hotel-card/hotel-card.tsx';
import {MainScreenProps} from '../../types.ts';
import { useState } from 'react';

export default function HotelCardList({offerData}:MainScreenProps) :JSX.Element {
  const [currentCard, setCurrentCard] = useState(false);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerData.map((offer) => HotelCard(offer, currentCard, setCurrentCard))}
    </div>
  );
}
