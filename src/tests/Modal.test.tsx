import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '../components/Modal';
import { API_RESPONSE } from '../data/testApiData';
import { PHOTO_DATA_RES } from '../data/testPhotoData';

const mockedHandler = jest.fn();
const API_PHOTO_ITEM = API_RESPONSE.photos.photo[0];
const API_PHOTO_USERNAME = PHOTO_DATA_RES.photo.owner.username;

describe('Modal', () => {
  beforeEach(() => {
    render(<Modal closeHandler={mockedHandler} photoItem={API_PHOTO_ITEM} />);
  });
  it('should call closeHandler on close click', () => {
    fireEvent.click(screen.getByTestId('closeBtn'));
    expect(mockedHandler).toBeCalledTimes(1);
  });
  it('should render photoData from API', async () => {
    expect(await screen.findByText(new RegExp(API_PHOTO_USERNAME))).toBeInTheDocument();
  });
});
