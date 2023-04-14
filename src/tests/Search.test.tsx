import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Search } from '../components/Search';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Router from '../router';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  it('should render input field', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render search logo', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

describe('Search', () => {
  it('should save input value after popState events', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <Router />
      </Provider>
    );
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    fireEvent.submit(screen.getByTestId('search-form'));
    await user.click(screen.getByTestId('link_form'));
    await user.click(screen.getByTestId('link_main'));
    expect(screen.queryByRole('textbox')).toHaveValue('Test');
  });
});
