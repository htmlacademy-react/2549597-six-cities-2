import MainScreen from '../pages/main-screen';
import LoginScreen from '../pages/login-screen.tsx';
import OfferScreen from '../pages/offer-screen.tsx';
import FavoritesScreen from '../pages/favorites-screen.tsx';
import NotFoundScreen from '../pages/not-found-screen.tsx';
import {MainScreenProps} from '../types.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../constants.ts';
import PrivateRoute from '../pages/private-route.tsx';

export default function App({foundedPlaces, hotelsData}: MainScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element= {<MainScreen foundedPlaces={foundedPlaces} hotelsData={hotelsData} />}
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
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen auth={AuthorizationStatus.NoAuth}/>}
        />
        <Route
          path= "*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
