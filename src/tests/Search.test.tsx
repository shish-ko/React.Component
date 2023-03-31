import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Search } from '../components/Search';
import '@testing-library/jest-dom';

describe('Search', () => {
  afterEach(() => {
    localStorage.clear();
  });
  it('should render input field', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('should render search logo', () => {
    render(<Search />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should get input value from LC', () => {
    localStorage.setItem('searchValue', 'Test LC');
    render(<Search />);
    expect(screen.getByRole('textbox')).toHaveValue('Test LC');
  });
  it('should handle input text after unmount', () => {
    const { unmount } = render(<Search />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    unmount();
    render(<Search />);
    expect(screen.queryByRole('textbox')).toHaveValue('Test');
  });
});
