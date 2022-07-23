import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { HOTELS } from './mocks';
import { MAX_COUNT_OFFER } from './const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App hotels={HOTELS} maxCountOffer={MAX_COUNT_OFFER}/>
  </React.StrictMode>,
);
