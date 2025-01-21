import MainScreen from '../pages/main-screen';

type AppScreenProps = {
  headerFavoriteCount: number;
  foundedPlaces: number;
  hotelsData: HotelsData;
}

type Hotel = {
  imageSource: string;
  priceValue: number;
  bookmarkButtonActiveClass: string;
  bookmarks: string;
  cardRating: string;
  hotelName: string;
  placeCardType: string;
}

type HotelsData = {
  first: Hotel;
  second: Hotel;
  third: Hotel;
  fourth: Hotel;
  fifth: Hotel;
}

export default function App({headerFavoriteCount, foundedPlaces, hotelsData}: AppScreenProps): JSX.Element {
  return (
    <MainScreen headerFavoriteCount={headerFavoriteCount} foundedPlaces={foundedPlaces} hotelsData= {hotelsData} />
  );
}
