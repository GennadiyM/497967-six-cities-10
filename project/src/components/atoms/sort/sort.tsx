import { useState } from 'react';
import { Sorting, SORTING_NAME } from '../../../constants';

export default function Sort(): JSX.Element {
  const [sortCurrent, setSortCurrent] = useState(Sorting.POPULAR);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpened(!isOpened)}
      >
        {SORTING_NAME[sortCurrent]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isOpened && 'places__options--opened'
        }`}
      >
        {Object.values(Sorting).map((value) => (
          <li
            key={`sort-${value}`}
            className={`places__option ${
              sortCurrent === value && 'places__option--active'
            }`}
            tabIndex={0}
            onClick={() => {
              setSortCurrent(value);
              setIsOpened(false);
            }}
          >
            {SORTING_NAME[value]}
          </li>
        ))}
      </ul>
    </form>
  );
}
