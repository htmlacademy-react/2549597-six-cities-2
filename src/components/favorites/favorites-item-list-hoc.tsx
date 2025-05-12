import { ComponentType, useEffect, useState } from 'react' ;
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllFavoriteOffers } from '../../store/slices/favorite-offers/selectors';
import { Offers } from '../../types/models';
import { getFavoriteOffers } from '../../store/api-actions';
import { sortingFavoriteOffers } from '../../utils';

type FavoriteItemListHOCProps = {
  offers: Offers;
}

export const FavoriteItemListHOC = (Component: ComponentType<FavoriteItemListHOCProps>) => {
  const FavoriteScreenWrapper = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const offers = useAppSelector(getAllFavoriteOffers);

    useEffect(() => {
      dispatch(getFavoriteOffers());
    }, [dispatch]);

    useEffect(() => {
      if (offers) {
        setLoading(false);
      }
    }, [offers]);

    if (loading) {
      return;
    }

    return <Component offers={sortingFavoriteOffers(offers)}/>;
  };

  return FavoriteScreenWrapper;
};

