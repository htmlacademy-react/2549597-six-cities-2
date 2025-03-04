import { useState } from 'react';
import { SORT_TYPES } from '../../constants';
import { useAppSelector } from '../../hooks';
import { getCurrentSort } from '../../store/reduser';
import SortingTypes from './sort-types';

export default function Sorting() {
  const currentSort = useAppSelector((state) => getCurrentSort(state));
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const toggleVisible = () => setIsHidden(!isHidden);

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggleVisible}>
      <span className="places__sorting-capti`on">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened" style={{visibility: isHidden ? 'visible' : 'hidden'}}>
        {SORT_TYPES.map((sorting) => <SortingTypes sort={sorting} key={sorting.id}/>)}
      </ul>
    </form>
  );
}
