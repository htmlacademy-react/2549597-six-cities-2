import { useAppSelector } from '../../hooks';
import Town from './town';

export default function TownList () {
  const allCityes = useAppSelector((state) => state.allTowns);

  return (
    <ul className="locations__list tabs__list">
      {allCityes.map((town) => <Town key={town.id} town={town}/>)}
    </ul>
  );
}
