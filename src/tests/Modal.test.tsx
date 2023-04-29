import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '../components/Modal';
import { API_RESPONSE } from '../data/testApiData';
import { PHOTO_DATA_RES } from '../data/testPhotoData';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { fetchPhotoData } from '../features/photoAPI';

const API_PHOTO_ITEM = API_RESPONSE.photos.photo[0];
const API_PHOTO_USERNAME = PHOTO_DATA_RES.photo.owner.username;

const mockedCloseHandler = jest.fn();
const mockedQueryHandler = jest.fn();

describe('Modal', () => {
  beforeEach(() => {
    mockedQueryHandler.mockReturnValue({ isLoading: false, data: PHOTO_DATA_RES });
    render(
      <Provider store={store}>
        <Modal closeHandler={mockedCloseHandler} photoItem={API_PHOTO_ITEM} />;
      </Provider>
    );
  });

  it('should call closeHandler on close click', () => {
    fireEvent.click(screen.getByTestId('closeBtn'));
    expect(mockedCloseHandler).toBeCalledTimes(1);
  });

  it('should render photoData from API', async () => {
    store.dispatch(fetchPhotoData(API_PHOTO_ITEM.id));
    expect(await screen.findByText(new RegExp(API_PHOTO_USERNAME))).toBeInTheDocument();
  });
});
