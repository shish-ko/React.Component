import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import Router from './router';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
