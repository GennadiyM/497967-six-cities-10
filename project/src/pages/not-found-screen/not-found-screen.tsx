import { Link } from 'react-router-dom';
import PageLayout from '../../components/layouts/page-layout/page-layout';
import { AuthorizationStatus } from '../../const';

export default function NotFoundScreen({
  authorizationStatus,
}: {
  authorizationStatus: AuthorizationStatus;
}) {
  return (
    <PageLayout authorizationStatus={authorizationStatus}>
      <main className="page__main">
        <div className="page__404-container container">
          <section className="404-message">
            <h1>404. Page not found</h1>
            <Link to="/">Вернуться на главную</Link>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
