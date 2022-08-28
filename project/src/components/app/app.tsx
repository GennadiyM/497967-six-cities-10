import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/redux';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scrollToTop/scrollToTop';


export default function App() {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen authorizationStatus={authorizationStatus} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen authorizationStatus={authorizationStatus} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen authorizationStatus={authorizationStatus} />}
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<OfferScreen authorizationStatus={authorizationStatus} />}
        />
        <Route
          path='*'
          element={<NotFoundScreen authorizationStatus={authorizationStatus} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
