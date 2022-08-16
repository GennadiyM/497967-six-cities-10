import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import { FullOffer } from '../../types/base-offer';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scrollToTop/scrollToTop';

export const authorizationStatus = AuthorizationStatus.Auth; //todo

export default function App({ offers }: { offers: FullOffer[] }) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen
              offers={offers}
              authorizationStatus={authorizationStatus}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen
                authorizationStatus={authorizationStatus}
                offers={offers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen authorizationStatus={authorizationStatus} />}
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={
            <OfferScreen
              authorizationStatus={authorizationStatus}
              offers={offers}
            />
          }
        />
        <Route
          path='*'
          element={<NotFoundScreen authorizationStatus={authorizationStatus} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
