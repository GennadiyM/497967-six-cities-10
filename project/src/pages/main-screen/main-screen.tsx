import PageLayout, {
  PageLayoutModifier,
} from '../../components/layouts/page-layout/page-layout';
import CitiesTabs from '../../components/molecules/cities-tabs/cities-tabs';
import MainContent from '../../components/molecules/main-content/main-content';
import MainEmpty from '../../components/molecules/main-empty/main-empty';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/redux';

export type MainScreenProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function MainScreen({
  authorizationStatus,
}: MainScreenProps) {
  const {city, offers} = useAppSelector((state) => state);
  const filteredOffers = offers.filter(
    (offer) => offer.city.name === city
  );
  const cityInformation = filteredOffers[0].city;

  return (
    <PageLayout
      authorizationStatus={authorizationStatus}
      modifier={PageLayoutModifier.Main}
    >
      <CitiesTabs />
      {offers.length === 0 ? (
        <MainEmpty />
      ) : (
        <MainContent offers={filteredOffers} city={cityInformation} />
      )}
    </PageLayout>
  );
}
