import { MouseEvent, useState } from 'react';
import { Sorting, SORTING_NAME } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeSorting } from '../../../store/logic-process/logic-process';
import { getSortType } from '../../../store/logic-process/selectors';

export default function Sort() {
  const [isOpened, setIsOpened] = useState(false);
  const sorting = useAppSelector(getSortType);
  const dispatch = useAppDispatch();

  const filterOpenClickHandler = () => setIsOpened(!isOpened);

  const filerOptionClickHandler = (evt: MouseEvent) => {
    const activeElement = evt.target as HTMLLIElement;
    dispatch(changeSorting(activeElement.dataset.target ?? Sorting.Popular));
    setIsOpened(false);
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span
        className='places__sorting-type'
        tabIndex={0}
        onClick={filterOpenClickHandler}
      >
        {SORTING_NAME[sorting]}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
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
              sorting === value && 'places__option--active'
            }`}
            data-target={value}
            tabIndex={0}
            onClick={filerOptionClickHandler}
          >
            {SORTING_NAME[value]}
          </li>
        ))}
      </ul>
    </form>
  );
}
