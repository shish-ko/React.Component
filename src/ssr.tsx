import React from 'react';
import { Provider } from 'react-redux';
import Router from './router';
import { store } from './store/store';

export const App: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      <body>
        <div id="root">
          <React.StrictMode>
            <Provider store={store}>
              <Router />
            </Provider>
          </React.StrictMode>
        </div>
      </body>
    </html>
  );
};
