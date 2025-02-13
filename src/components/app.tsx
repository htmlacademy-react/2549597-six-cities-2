import MainScreen from '../pages/main-screen/main-screen.tsx';
import LoginScreen from '../pages/login-screen.tsx';
import OfferScreen from '../pages/offers/offer-screen.tsx';
import FavoritesScreenList from '../pages/favorites/favorites-screen-list.tsx';
import NotFoundScreen from '../pages/not-found-screen.tsx';
import {MainScreenProps} from '../types.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../constants.ts';
import PrivateRoute from '../pages/private-route.tsx';

export default function App({foundedPlaces, offerData}: MainScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element= {<MainScreen foundedPlaces={foundedPlaces} offerData={offerData}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreenList offerData={offerData}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen auth={AuthorizationStatus.Auth}/>}
        />
        <Route
          path= "*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
