import NotFound from '../../components/atoms/not-found/not-found';
import PageLayout, { PageLayoutModifier } from '../../components/layouts/page-layout/page-layout';
import './not-found-screen.style.css';

export default function NotFoundScreen() {
  return (
    <PageLayout withFooter modifier={PageLayoutModifier.NotFound}>
      <NotFound />
    </PageLayout>
  );
}
