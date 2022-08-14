import PageLayout, {
  PageLayoutModifier,
} from '../../components/layouts/page-layout/page-layout';
import CitiesTabs from '../../components/molecules/cities-tabs/cities-tabs';
import MainContent from '../../components/molecules/main-content/main-content';
import MainEmpty from '../../components/molecules/main-empty/main-empty';
import { AuthorizationStatus } from '../../const';
import { BaseOffer } from '../../types/base-offer';

export type MainScreenProps = {
  offers: BaseOffer[];
  authorizationStatus: AuthorizationStatus;
};

export default function MainScreen({
  offers,
  authorizationStatus,
}: MainScreenProps) {
  return (
    <PageLayout
      authorizationStatus={authorizationStatus}
      modifier={PageLayoutModifier.Main}
    >
      <CitiesTabs />
      {offers.length === 0 ? <MainEmpty /> : <MainContent offers={offers} />}
    </PageLayout>
  );
}
