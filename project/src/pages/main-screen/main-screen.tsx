import PageLayout, {
  PageLayoutModifier,
} from '../../components/layouts/page-layout/page-layout';
import CitiesTabs from '../../components/molecules/cities-tabs/cities-tabs';
import MainContent from '../../components/molecules/main-content/main-content';
import MainEmpty from '../../components/molecules/main-empty/main-empty';
import { AuthorizationStatus, CITIES } from '../../const';
import { FullOffer } from '../../types/base-offer';

export type MainScreenProps = {
  offers: FullOffer[];
  authorizationStatus: AuthorizationStatus;
};

export default function MainScreen({
  offers,
  authorizationStatus,
}: MainScreenProps) {
  const checkedCityName = CITIES[3]; //todo
  const filteredOffers = offers.filter(
    ({ city }) => city.name === checkedCityName
  ); //todo
  const city = filteredOffers[0].city; //todo

  return (
    <PageLayout
      authorizationStatus={authorizationStatus}
      modifier={PageLayoutModifier.Main}
    >
      <CitiesTabs />
      {offers.length === 0 ? (
        <MainEmpty />
      ) : (
        <MainContent offers={filteredOffers} city={city} />
      )}
    </PageLayout>
  );
}
