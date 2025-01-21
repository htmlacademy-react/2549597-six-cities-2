import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {headerFavoriteCount, foundedPlaces, hotelsData} from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App headerFavoriteCount = {headerFavoriteCount} foundedPlaces = {foundedPlaces} hotelsData = {hotelsData}/>
  </React.StrictMode>
);
