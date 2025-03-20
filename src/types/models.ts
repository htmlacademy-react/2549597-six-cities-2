export type AppProps = {
  foundPlace?: number;
  offers: Offers;
};

export type City = {
  name: string;
  location: Coordinates;
}

export type IconProperties = {
  iconAnchor: IconAnchor;
  iconSize: IconSize;
}

export type IconSize = L.PointExpression;

export type IconAnchor = L.PointExpression;

export type Result = string | number | null | JSX.Element;

export type Host = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
}

export type Review = {
  id: number;
  avatar: string;
  name: string;
  date: string;
  text: string;
};

export type Reviews = Review[];

export type Image = {
  id?: number;
  image: string;
}

export type Feauture = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

export type Option = {
  id?: number;
  option: string;
}

export type Coordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Coordinates;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type CurrentOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Coordinates;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
} | null;

export type Offers = Offer[];

export type TownsSlice = {
  currentCity: City;
}

export type OffersSlice = {
  offers: Offers;
}

export type SortingSlice = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

export type CommonSlice = {
  towns: {
    currentCity: City;
  };
  offers: {
    offers: Offers;
    isOffersLoaded: boolean;
    currentOffer: CurrentOffer;
  };
  sorting: {
    sorting: SortingSlice;
  };
  auth: {
    authStatus: AuthStatus;
  };
  error: {
    error: ErrorSlice;
  };
}

export type ErrorSlice = string | null;

export type CurrentOfferId = string | undefined;

export type AuthStatus = 'UNKNOWN' | 'AUTH' | 'NO_AUTH';

export type AuthData = {
  login: string | null;
  password: string | null;
}

export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}
