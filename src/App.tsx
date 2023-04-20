import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Index from './components';
import AboutUs from './pages/AboutUs';
import { ErrorPage } from './pages/ErrorPage';
import { FormPage } from './pages/FormPage';
import { MainPage } from './pages/MainPage';
import { store } from './store/store';

export const App: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
        <link rel="stylesheet" href="/assets/client.entry.css" />
      </head>
      <body>
        <div id="root">
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Index />}>
                <Route index={true} element={<MainPage />} />
                <Route path="aboutus/" element={<AboutUs />} />
                <Route path="form/" element={<FormPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </Provider>
        </div>
      </body>
    </html>
  );
};
