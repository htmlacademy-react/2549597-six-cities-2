import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {FOUND_PLACES_COUNT} from './constants';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App foundPlace={FOUND_PLACES_COUNT}/>
    </Provider>
  </React.StrictMode>
);
