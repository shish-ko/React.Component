import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import Router from '../router';

describe('Router', () => {
  it('renders main page', () => {
    render(<Router />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('should handle page title', async () => {
    render(<Router />);
    expect(screen.getByTestId('current_page').textContent).toBe('Main Page');
    await userEvent.click(screen.getByTestId('link_about'));
    expect(screen.getByTestId('current_page').textContent).toBe('About us');
    await userEvent.click(screen.getByTestId('link_main'));
  });
  it('handles page changing', async () => {
    render(<Router />);
    expect(screen.queryByText('Page is under maintain...')).toBeNull();
    await userEvent.click(screen.getByTestId('link_about'));
    expect(screen.queryByText('Page is under maintain...')).toBeInTheDocument();
  });
});
