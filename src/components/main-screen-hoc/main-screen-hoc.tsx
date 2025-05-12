import { useAppSelector } from '../../hooks';
import { getSortedOffers } from '../../store/reducer';
import MainEmptyScreen from '../../pages/main-screen/main-empty-screen';
import { MainPage } from '../../pages/main-screen/main-page';


export const MainScreen = () => {
  const offers = useAppSelector(getSortedOffers);

  if (offers.length === 0) {
    return <MainEmptyScreen />;
  }

  return <MainPage/>;
};
