import classnames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOffers, changeTown } from '../../store/action';
import { City } from '../../types/types';

type TownProps = {
  town: City;
}

export default function Town({town}: TownProps) {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.town.title);
  const handleClick = () => {
    dispatch(changeTown(town));
    dispatch(changeOffers(town.title));
  };

  return (
    <li className="locations__item" onClick={handleClick}>
      <a className={classnames('locations__item-link', 'tabs__item', {'tabs__item--active': city === town.title})} href="#">
        <span>{town.title}</span>
      </a>
    </li>
  );
}
