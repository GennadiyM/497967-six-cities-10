import PageLayout from '../../components/layouts/page-layout/page-layout';
import CitiesTabs from '../../components/molecules/cities-tabs/cities-tabs';
import MainContent from '../../components/molecules/main-content/main-content';
import MainEmpty from '../../components/molecules/main-empty/main-empty';
import { BaseOffer } from '../../types/base-offer';

export type MainScreenProps = {
  offers: BaseOffer[];
  maxCountOffer: number;
};

export default function MainScreen({offers, maxCountOffer} : MainScreenProps) : JSX.Element {
  return (
    <PageLayout>
      <CitiesTabs/>
      {offers.length === 0 ? <MainEmpty/> : <MainContent offers={offers} maxCountOffer={maxCountOffer}/>}
    </PageLayout>
  );
}
