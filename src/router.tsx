import AboutUs from './pages/AboutUs';
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Index from './components/index';
import { ErrorPage } from './pages/ErrorPage';
import { MainPage } from './pages/MainPage';
import { FormPage } from './pages/FormPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index />}>
      <Route index={true} element={<MainPage />} />
      <Route path="aboutus/" element={<AboutUs />} />
      <Route path="form/" element={<FormPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
