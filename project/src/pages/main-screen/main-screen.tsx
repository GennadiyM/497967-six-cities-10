import PageLayout, {
  PageLayoutModifier,
} from '../../components/layouts/page-layout/page-layout';
import CitiesTabs from '../../components/molecules/cities-tabs/cities-tabs';
import MainContent from '../../components/molecules/main-content/main-content';
import MainEmpty from '../../components/molecules/main-empty/main-empty';
import { useAppSelector } from '../../hooks/redux';

export default function MainScreen() {
  const { city, offers } = useAppSelector((state) => state);
  const filteredOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <PageLayout modifier={PageLayoutModifier.Main}>
      <main className={`page__main page__main--index ${offers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className='visually-hidden'>Cities</h1>
        <CitiesTabs />
        {offers.length === 0 ? (
          <MainEmpty />
        ) : (
          <MainContent offers={filteredOffers} />
        )}
      </main>
    </PageLayout>
  );
}
