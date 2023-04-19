import AboutUs from './pages/AboutUs';
import React from 'react';
import {
  createBrowserRouter,
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Index from './components/index';
import { ErrorPage } from './pages/ErrorPage';
import { MainPage } from './pages/MainPage';
import { FormPage } from './pages/FormPage';

export const appRouteObject = createRoutesFromElements(
  <Route path="/" element={<Index />}>
    <Route index={true} element={<MainPage />} />
    <Route path="aboutus/" element={<AboutUs />} />
    <Route path="form/" element={<FormPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

const appRouter = createMemoryRouter(appRouteObject);

const Router: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default Router;
