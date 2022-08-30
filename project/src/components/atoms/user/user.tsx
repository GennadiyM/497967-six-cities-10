import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchFavoriteOffersAction, logoutAction } from '../../../store/api-actions';
import { getFavoriteOffers } from '../../../store/favorite-data/selectors';
import { getUserData } from '../../../store/user-process/selectors';

export default function User() {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const user = useAppSelector(getUserData);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && !favoriteOffers) {
      dispatch(fetchFavoriteOffersAction());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, favoriteOffers]);


  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        {user && (
          <li className='header__nav-item user'>
            <Link
              className='header__nav-link header__nav-link--profile'
              to={AppRoute.Favorites}
            >
              <div className='header__avatar-wrapper user__avatar-wrapper'></div>
              <span className='header__user-name user__name'>{user.name}</span>
              <span className='header__favorite-count'>
                {favoriteOffers && favoriteOffers.length}
              </span>
            </Link>
          </li>
        )}
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
