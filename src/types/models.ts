export type AppProps = {
  foundPlace?: number;
  offers: Offers;
};

export type City = {
  name: string;
  lat: number;
  lng: number;
  id: number;
}

export type IconProperties = {
  iconAnchor: IconAnchor;
  iconSize: IconSize;
}

export type IconSize = L.PointExpression;

export type IconAnchor = L.PointExpression;

export type Result = string | number | null | JSX.Element;

export type Host = {
  avatar: string;
  username: string;
  userStatus: string;
  text: string;
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
  id?: number;
  type: string;
  feauture: string;
}

export type Option = {
  id?: number;
  option: string;
}

export type Coordinates = {
  latitude: number;
  longitude: number;
}

export type Offer = {
  images: Image[];
  imageSource: string;
  isPremium: boolean;
  name: string;
  isBookmarks: boolean;
  rating: number;
  ratingValue: number;
  feautures: Feauture[];
  price: number;
  options: Option[];
  id: string;
  placeType: string;
  host: Host;
  reviews: Reviews;
  town: string;
  coordinates: Coordinates;
};

export type Offers = Offer[];

// export type TownsSlice = {
//   currentCity: City;
// }

// export type OffersSlice = {
//   offers: Offers;
// }

export type SortingSlice = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

export type CommonSlice = {
  towns: City;
  offers: Offers;
  sorting: SortingSlice;
  auth: AuthStatus;
}

export type AuthStatus = 'UNKNOWN' | 'AUTH' | 'NO_AUTH';

export type AuthData = {
  email: string;
  password: string;
}

export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}
