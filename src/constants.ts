export const HEADER_FAVORITE_COUNT = 3;
export const FOUND_PLACES_COUNT = 312;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites/',
  Offer = '/offer/:id',
  Error = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITY = {
  title: 'Амстердам',
  lat: 52.374,
  lng: 4.88969,
  zoom: 12,
};

export enum IconUrl {
  defaultUrl = '../../img/pin.svg',
  currentUrl = '../../img/pin-active.svg',
}

export const ICON_PROPERTIES = {
  iconAnchor: <L.PointExpression>[20, 40],
  iconSize: <L.PointExpression>[40, 40],
};

export const MAP_TITLE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

