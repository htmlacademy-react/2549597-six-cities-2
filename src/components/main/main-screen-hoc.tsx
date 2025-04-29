import { useAppSelector } from '../../hooks';
import { changeOffers } from '../../store/reducer';
import MainEmptyScreen from '../../pages/main-screen/main-empty-screen';
import { MainScreen } from '../../pages/main-screen/main-screen';


export const MainScreenHOC = () => {
  const offers = useAppSelector(changeOffers);

  if (offers.length === 0) {
    return <MainEmptyScreen />;
  }

  return <MainScreen/>;
};
