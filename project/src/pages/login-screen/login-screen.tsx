import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/atoms/login-form/login-form';
import PageLayout, {
  PageLayoutModifier,
} from '../../components/layouts/page-layout/page-layout';
import { CITIES } from '../../const';
import { changeCity } from '../../store/logic-process/logic-process';
import { randomInteger } from '../../utils';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const city = CITIES[randomInteger(0, CITIES.length)];

  const handlerLickClick = () => dispatch(changeCity(city));

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
              <Link className='locations__item-link' to={`/?city=${city}`} onClick={handlerLickClick}>
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
