import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {FOUNDED_PLACES, hotelsData} from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App foundedPlaces = {FOUNDED_PLACES} hotelsData = {hotelsData}/>
  </React.StrictMode>
);
