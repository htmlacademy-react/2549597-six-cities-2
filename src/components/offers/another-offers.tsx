import { memo } from 'react';
import { useAppDispatch } from '../../hooks';
import { setCurrentCardId } from '../../store/slices/offers-slice/offers-slice';
import { Offers } from '../../types/models';
import { Link } from 'react-router-dom';
import { HotelCardMemo } from '../hotel-card/hotel-card';

type AnotherOffersProps = {
  anotherOffers: Offers;
}

function AnotherOffers ({anotherOffers} : AnotherOffersProps) {
  const dispatch = useAppDispatch();

  return(
    <div className="near-places__list places__list">
      {anotherOffers.map((offer) => (
        <article className="near-places__card place-card" key={offer.id}
          onMouseOver={
            () => {
              dispatch(setCurrentCardId(offer.id));
            }
          }
          onMouseLeave={
            () => {
              dispatch(setCurrentCardId(''));
            }
          }
        >
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <Link to={{pathname: `/offer/${offer.id}`}} state={offer}>
              <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
            </Link>
          </div>
          {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
          <HotelCardMemo offer={offer} key={offer.id}/>
        </article>
      ))}
    </div>
  );
}

export const AnotherOffersMemo = memo(AnotherOffers, (prevProps, nextProps) => prevProps.anotherOffers === nextProps.anotherOffers);
