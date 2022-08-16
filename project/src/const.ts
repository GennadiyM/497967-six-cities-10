export const MAX_COUNT_IMAGE = 6;

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const Sorting = {
  Popular: 'popular',
  ToHigh: 'price_high',
  ToLOw: 'price_low',
  Rated: 'rated',
};

export const SORTING_NAME = {
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
