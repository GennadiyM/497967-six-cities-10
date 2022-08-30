import { City } from './city';
import { Host } from './host';

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

export type Offer = BaseOffer & {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
};
