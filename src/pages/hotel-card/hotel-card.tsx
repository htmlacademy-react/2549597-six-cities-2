import { Link } from 'react-router-dom';
import {Offer, SetCurrentCard} from '../../types.ts';
import classnames from 'classnames';

export default function HotelCard (offer: Offer, currentCard: boolean, setCurrentCard: SetCurrentCard): JSX.Element {
  const {imageSource, price, isBookmarks, rating, name, placeType, isPremium} = offer;
  const bookmarked = isBookmarks ? 'Is bookmarks' : 'To bookmarks';
  const premiumCard = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '';

  return (
    <article className="cities__card place-card"
      onMouseOver={
        () => {
          setCurrentCard(currentCard);
        }
      }
    >
      {premiumCard}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imageSource} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classnames('place-card__bookmark-button', 'button', {'place-card__bookmark-button--active': isBookmarks})} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{bookmarked}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: `/offer/${offer.id}`}} state={offer}>{name}</Link>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}
