import { Link } from 'react-router-dom';
import LoginForm from '../../components/atoms/login-form/login-form';
import PageLayout, {
  PageLayoutModifier,
} from '../../components/layouts/page-layout/page-layout';

export default function LoginScreen() {
  return (
    <PageLayout
      modifier={PageLayoutModifier.Login}
      withoutUserControl
    >
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <LoginForm />
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link className='locations__item-link' to='/?city=Amsterdam'>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
