import Header from '../../components/header/header';
import { OfferFormReviewMemo } from '../../components/offers/offer-form-review';
import { CurrentOffer, Reviews } from '../../types/models';
import { OfferHostMemo } from '../../components/offers/offer-host';
import { OfferFeauturesMemo } from '../../components/offers/offer-feautures';
import { useAppSelector } from '../../hooks';
import { changeOffers } from '../../store/reducer';
import { OfferReviewListMemo } from '../../components/offers/offer-review-list';
import { OfferScreenHOC } from './offer-screen-hoc';
import LoadingScreen from '../loading-screen/loading-screen';
import { AnotherOffersMemo } from '../../components/offers/another-offers';
import Map from '../../components/map/map';
import { OfferOptionListMemo } from '../../components/offers/offer-option-list';
import { OfferImageListMemo } from '../../components/offers/offer-image-list';

type OfferScreenProps = {
  id?: string;
  currentOffer: CurrentOffer;
  reviews: Reviews;
}

export function OfferScreen ({id, currentOffer, reviews}: OfferScreenProps) {
  const offers = useAppSelector(changeOffers);

  if (currentOffer === null) {
    return <LoadingScreen />;
  }

  const {images, isPremium, title, isFavorite, rating, bedrooms, type, maxAdults, price, goods, host, description} = currentOffer;
  const bookmarked = isFavorite ? 'Is bookmarks' : 'To bookmarks';
  const anotherOffers = offers.filter((offer) => offer.id !== id);
  const ratingValue = rating * 20;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            {<OfferImageListMemo images={images}/>}
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ? <div className="offer__mark"><span>Premium</span></div> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{bookmarked}</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${ratingValue}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              {maxAdults && bedrooms && <OfferFeauturesMemo type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>}
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {<OfferOptionListMemo goods={goods} />}
              </div>
              {host && <OfferHostMemo host={host} description={description}/>}
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews && reviews.length}</span></h2>
                {reviews && <OfferReviewListMemo reviews={reviews}/>}
                {<OfferFormReviewMemo id={id}/>}
              </section>
            </div>
          </div>
          <section className='map' style={{width: '100%'}}>
            <Map />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {<AnotherOffersMemo anotherOffers={anotherOffers}/>}
          </section>
        </div>
      </main>
    </div>
  );
}

export const OfferScreenWithHOC = OfferScreenHOC(OfferScreen);
