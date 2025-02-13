export type MainScreenProps = {
  foundedPlaces?: number;
  offerData: Offers;
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

export type Offer = {
  images: string[];
  imageSource: string;
  isPremium: boolean;
  name: string;
  isBookmarks: boolean;
  rating: number;
  ratingValue: number;
  feautures: string[];
  price: number;
  insideList: string[];
  id: string;
  placeType: string;
  host: Host;
  review: Reviews;
  town: string;
};

export type Offers = Offer[];

export type IsCurrentCard = boolean;

export type SetCurrentCard = React.Dispatch<React.SetStateAction<boolean>>;

