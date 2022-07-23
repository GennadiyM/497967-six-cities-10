import PageLayout from '../../components/layouts/page-layout/page-layout';
import CitiesTabs from '../../components/moleculs/cities-tabs/cities-tabs';

export type MainScreenProps = {
  hotels: any[];
  maxCountOffer: number;
};

export default function MainScreen({hotels, maxCountOffer} : MainScreenProps) : JSX.Element {
  return (
    <PageLayout>
      <CitiesTabs/>
    </PageLayout>
  );
}
