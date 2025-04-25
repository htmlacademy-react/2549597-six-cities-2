import { useAppSelector } from '../../hooks';
import { changeOffers } from '../../store/reducer';
import MainEmptyScreen from '../../pages/main-screen/main-empty-screen';
import { ComponentType } from 'react';

export const MainScreenHOC = (Component: ComponentType) => {
  const MainScreenWrapper = () => {
    const offers = useAppSelector(changeOffers);

    if (offers.length === 0) {
      return <MainEmptyScreen />;
    }

    return <Component/>;
  };

  return MainScreenWrapper;
};
