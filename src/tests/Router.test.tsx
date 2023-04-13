import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import Router, { appRouteObject } from '../router';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

describe('Router', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  });
  it('renders main page', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('should handle page title', async () => {
    expect(screen.getByTestId('current_page').textContent).toBe('Main Page');
    await userEvent.click(screen.getByTestId('link_about'));
    expect(screen.getByTestId('current_page').textContent).toBe('About us');
    await userEvent.click(screen.getByTestId('link_main'));
  });
  it('handles page changing', async () => {
    expect(screen.queryByText('Page is under maintain...')).toBeNull();
    await userEvent.click(screen.getByTestId('link_about'));
    expect(screen.queryByText('Page is under maintain...')).toBeInTheDocument();
  });
});

describe('Router', () => {
  it('shows error page', () => {
    const router = createMemoryRouter(appRouteObject, {
      initialEntries: ['/', '/events/123'],
      initialIndex: 1,
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    expect(screen.queryByText(/oops/i)).toBeInTheDocument();
  });
});
