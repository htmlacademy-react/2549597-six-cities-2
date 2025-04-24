import { useAppSelector } from '../../hooks';
import { changeOffers } from '../../store/reducer';
import MainEmptyScreen from '../../pages/main-screen/main-empty-screen';

type MainScreenRouteProps = {
  children: JSX.Element;
}

export default function MainScreenRoute(props: MainScreenRouteProps) {
  const {children} = props;
  const offers = useAppSelector(changeOffers);

  if (offers.length === 0) {
    return <MainEmptyScreen />;
  }

  return children;
}
