import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS } from './mocks';
import { MAX_COUNT_OFFER } from './constants';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers={OFFERS} maxCountOffer={MAX_COUNT_OFFER}/>
  </React.StrictMode>,
);
