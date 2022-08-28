import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch } from '../../../hooks/redux';
import { logoutAction } from '../../../store/api-action';

export default function User() {
  const dispatch = useAppDispatch();

  const onClickLogout = () => dispatch(logoutAction());

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
            <span className='header__favorite-count'>3</span>
          </Link>
        </li>
        <li className='header__nav-item'>
          <a className='header__nav-link' href='#sign' onClick={onClickLogout}>
            <span className='header__signout'>Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
