import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { logoutAction } from '../../../store/api-action';
import { getFavoriteOffers } from '../../../store/helpers';

export default function User() {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        <li className='header__nav-item user'>
          <Link
            className='header__nav-link header__nav-link--profile'
            to={AppRoute.Favorites}
          >
            <div className='header__avatar-wrapper user__avatar-wrapper'></div>
            <span className='header__user-name user__name'>
              Oliver.conner@gmail.com
            </span>
            <span className='header__favorite-count'>{favoriteOffers.length}</span>
          </Link>
        </li>
        <li className='header__nav-item'>
          <Link
            className='header__nav-link'
            to='/'
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            <span className='header__signout'>Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
