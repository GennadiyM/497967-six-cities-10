export type BaseOffer = {
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
  title: string;
  rating: number;
  type: string;
  price: number;
  id: number;
};

export type FullOffer = BaseOffer & {
  bedrooms: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
};
