import { CityName } from './types/city-name';

export const MAX_COUNT_IMAGE = 6;

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export const CITIES: ReadonlyArray<CityName> = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum Sorting {
  Popular = 'popular',
  ToHigh = 'price_high',
  ToLOw = 'price_low',
  Rated = 'rated',
}

export const SORTING_NAME: Record<string, string> = {
  [Sorting.Popular]: 'Popular',
  [Sorting.ToHigh]: 'Price: low to high',
  [Sorting.ToLOw]: 'Price: high to low',
  [Sorting.Rated]: 'Top rated first',
};

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  Root = '/',
  NotFoundOffer = '/not-found-offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Comments = '/comments',
}

export enum NameSpace {
  User = 'USER',
  App = 'APP',
  Favorite = 'FAVORITE',
  Property = 'PROPERTY',
  Logic = 'LOGIC',
}

export enum PlaceCardClassType {
  Main = 'cities',
  Near = 'near-places',
  Favorite = 'favorites',
}

export enum RatingClass {
  Card = 'place-card',
  Property = 'property',
  Reviews = 'reviews',
}

export enum BookmarksBtnClass {
  Card = 'place-card__bookmark-button',
  Property = 'property__bookmark-button',
}

export const BookmarksIconSize = {
  Big: {
    height: 31,
    width: 33,
  },
  Small: {
    height: 19,
    width: 18,
  }
};

export enum MapClass {
  City = 'cities__map',
  Property = 'property__map',
}

export const ImageSize = {
  Big: {
    height: 200,
    width: 260,
  },
  Small: {
    height: 110,
    width: 150,
  }
};

export const RatingTitle = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
};

export const ReviewLength = {
  MIN: 50,
  MAX: 300,
};

export const RatingValue = {
  MIN: 1,
  MAX: 5,
};
