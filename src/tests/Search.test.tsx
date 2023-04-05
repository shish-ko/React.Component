import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Search } from '../components/Search';
import '@testing-library/jest-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

describe('Search', () => {
  const router = createBrowserRouter([{ path: '/', element: <Search /> }]);
  beforeEach(() => {
    localStorage.clear();
  });
  it('should render input field', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('should render search logo', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should get input value from LC', () => {
    localStorage.setItem('searchValue', 'Test LC');
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('textbox')).toHaveValue('Test LC');
  });
  it('should handle input text after unmount', () => {
    const { unmount } = render(<RouterProvider router={router} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    unmount();
    render(<RouterProvider router={router} />);
    expect(screen.queryByRole('textbox')).toHaveValue('Test');
  });
});
