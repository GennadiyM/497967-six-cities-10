import NotFound from '../../components/atoms/not-found/not-found';
import PageLayout from '../../components/layouts/page-layout/page-layout';
import { AuthorizationStatus } from '../../const';

export default function NotFoundScreen({
  authorizationStatus,
}: {
  authorizationStatus: AuthorizationStatus;
}) {
  return (
    <PageLayout authorizationStatus={authorizationStatus}>
      <NotFound />
    </PageLayout>
  );
}
