export type MainScreenProps = {
  foundPlace?: number;
  offersData: Offers;
};

export type Result = string | number | null | JSX.Element;

export type Host = {
  avatar: string;
  username: string;
  userStatus: string;
  text: string;
}

export type Review = {
  avatar: string;
  name: string;
  date: Date;
  text: string;
};

export type Reviews = Review[];

export type Image = {
  id?: number;
  image: string;
}

export type Feauture = {
  id?: number;
  feauture: string;
}

export type Inside = {
  id?: number;
  inside: string;
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
  insideList: Inside[];
  id: string;
  placeType: string;
  host: Host;
  review: Reviews;
  town: string;
};

export type Offers = Offer[];

export type SetCurrentCard = (value: boolean) => void;

