import { useNavigate } from 'react-router-dom';
import {
  AppRoute,
  AuthorizationStatus,
  BookmarksBtnClass,
  BookmarksIconSize,
} from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { postFavoriteAction } from '../../../store/api-actions';
import { getFavoriteData } from '../../../store/favorite-data/selectors';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';

export default function BookmarksBtn({
  id,
  modifier = BookmarksBtnClass.Card,
}: {
  id: number;
  modifier?: BookmarksBtnClass;
}) {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoriteData);
  const isFavorite = favoriteOffers.some((item) => item.id === id);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const iconSize =
    BookmarksIconSize[modifier === BookmarksBtnClass.Card ? 'Small' : 'Big'];
  const navigate = useNavigate();

  const onFavoriteClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
    }

    dispatch(
      postFavoriteAction({ id: id, favoriteStatus: Number(!isFavorite) })
    );
  };

  return (
    <button
      className={`${modifier} button ${
        isFavorite && isAuthorized && 'place-card__bookmark-button--active'
      }`}
      type='button'
      onClick={onFavoriteClick}
    >
      <svg
        className='place-card__bookmark-icon'
        width={iconSize.width}
        height={iconSize.height}
      >
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
