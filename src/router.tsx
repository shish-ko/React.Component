import AboutUs from './components/AboutUs';
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Index from './components/index';
import { ErrorPage } from './components/ErrorPage';

interface RouterState {
  currentPage: string;
}

class Router extends React.Component<unknown, RouterState> {
  state: RouterState = {
    currentPage: 'No',
  };
  handler = (pageTitle: string) => {
    this.setState({ currentPage: pageTitle });
  };
  render() {
    return (
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<Index currentPage={this.state.currentPage} />}>
              <Route path="aboutus/" element={<AboutUs titleHandler={this.handler} />} />
              <Route path="*" element={<ErrorPage titleHandler={this.handler} />} />
            </Route>
          )
        )}
      />
    );
  }
}

export default Router;
