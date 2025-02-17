import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {FOUND_PLACE} from './constants';
import {OFFERS_DATA} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App foundPlace = {FOUND_PLACE} offersData = {OFFERS_DATA}/>
  </React.StrictMode>
);
