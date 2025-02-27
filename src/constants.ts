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

export const CITYES = [
  {
    title: 'Amsterdam',
    lat: 52.374,
    lng: 4.88969,
    id: 0,
  },
  {
    title: 'Paris',
    lat: 48.8566,
    lng:  2.3522,
    id: 1,
  },
  {
    title: 'Cologne',
    lat: 50.9375,
    lng: 6.9603,
    id: 2,
  },
  {
    title: 'Brussels',
    lat: 50.8503,
    lng: 4.3517,
    id: 3,
  },
  {
    title: 'Hamburg',
    lat: 53.5511,
    lng: 9.9937,
    id: 4,
  },
  {
    title: 'Dusseldorf',
    lat: 51.2260,
    lng: 6.7762,
    id: 5,
  }
];

