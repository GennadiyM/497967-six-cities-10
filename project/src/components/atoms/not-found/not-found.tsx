import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className='page__main'>
      <div className='page__404-container container'>
        <section className='404-message'>
          <h1>404. Page not found</h1>
          <Link to='/'>Вернуться на главную</Link>
        </section>
      </div>
    </main>
  );
}
