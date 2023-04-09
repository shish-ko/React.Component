import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';
import { API_RESPONSE } from '../data/testApiData';
import { MainPage, mainPageLoader } from '../pages/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { USER_SEARCH_VALUE } from '../data/constants';
import userEvent from '@testing-library/user-event';

const photoItem = API_RESPONSE.photos.photo[0];

describe('Card', () => {
  const mockFunc = jest.fn();
  it('should render props', () => {
    render(<Card card={photoItem} modalHandler={mockFunc} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    const image = screen.getByRole('img') as HTMLImageElement;
    expect(photoItem.url_m === image.src).toBeTruthy();
  });
});

describe('Main Page', () => {
  let router = createBrowserRouter([{ path: '/', element: <MainPage />, loader: mainPageLoader }]);
  beforeEach(() => {
    localStorage.clear();
    router = createBrowserRouter([{ path: '/', element: <MainPage />, loader: mainPageLoader }]);
  });

  it('should show loading message while fetching on first open', async () => {
    await act(async () => {
      render(<RouterProvider router={router} />);
    });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render as much cards as received from API', async () => {
    await act(async () => {
      render(<RouterProvider router={router} />);
    });
    await waitFor(() => {
      expect(screen.getAllByRole('img')).toHaveLength(21);
    });
  });

  it('should handle search requests', async () => {
    await act(async () => {
      render(<RouterProvider router={router} />);
    });
    fireEvent.change(screen.getByRole('textbox'), { target: { value: USER_SEARCH_VALUE } });
    fireEvent.submit(screen.getByTestId('search-form'));
    await waitFor(() => {
      expect(screen.getAllByRole('img')).toHaveLength(3);
    });
  });

  it('should open modal on img click', async () => {
    await act(async () => {
      render(<RouterProvider router={router} />);
    });
    await waitFor(async () => {
      expect((await screen.findAllByRole('img')).length).toBeGreaterThan(1);
    });
    const img = screen.getAllByRole('img');
    await userEvent.click(img[1]);
    await waitFor(() => {
      expect(screen.getByTestId('closeBtn')).toBeInTheDocument();
    });
  });
});
