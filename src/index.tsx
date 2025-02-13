import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {FOUNDED_PLACES} from './constants';
import {OFFER_DATA} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App foundedPlaces = {FOUNDED_PLACES} offerData = {OFFER_DATA}/>
  </React.StrictMode>
);
