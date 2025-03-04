import classnames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSorting } from '../../store/action';
import { Sort } from '../../types/models';
import { getCurrentSort } from '../../store/reduser';

type SortingTypesProps = {
  sort: Sort;
}

export default function SortingTypes({sort}: SortingTypesProps) {
  const currentSort = useAppSelector((state) => getCurrentSort(state));
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(setSorting(sort));

  return (
    <li className={classnames('places__option', {'places__option--active' : currentSort === sort})} onClick={handleClick} tabIndex={0}>{sort.name}</li>
  );
}
