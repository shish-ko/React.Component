import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';
import { API_RESPONSE } from '../data/testApiData';
import { MainPage } from '../pages/MainPage';
import { USER_SEARCH_VALUE } from '../data/constants';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../store/store';

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
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  });

  it('should show loading message while fetching on first open', async () => {
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render as much cards as received from API', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('img')).toHaveLength(21);
    });
  });

  it('should handle search requests', async () => {
    fireEvent.change(screen.getByRole('textbox'), { target: { value: USER_SEARCH_VALUE } });
    fireEvent.submit(screen.getByTestId('search-form'));
    await waitFor(() => {
      expect(screen.getAllByRole('img')).toHaveLength(3);
    });
  });

  it('should open modal on img click', async () => {
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
