import { Photo } from '../interfaces';
import React, { useRef } from 'react';
import { useAppSelector, useCloseOnClickOutside } from '../utils/customHooks';
import { SyncLoader } from 'react-spinners';

interface IModalProps {
  photoItem: Photo;
  closeHandler: () => void;
}

export const Modal: React.FC<IModalProps> = ({ photoItem, closeHandler }) => {
  const modal = useRef<HTMLDivElement>(null);
  const data = useAppSelector((state) => state.search.photoData);
  // const { isLoading, data } = photoAPI.useGetPhotoDataQuery(photoItem.id);

  useCloseOnClickOutside(modal, closeHandler);

  let render;

  if (false) {
    render = (
      <div style={{ width: photoItem.width_m }}>
        <SyncLoader color="#535bf2" />
      </div>
    );
  } else {
    if (!data) {
      render = <h1>No photoData</h1>;
    } else {
      render = (
        <>
          <p className="modal__data modal__title">Title: {photoItem.title}</p>
          <img src={photoItem.url_m} className="product__image"></img>
          <p className="modal__data">Flickr photo id: #{photoItem.id}</p>
          <p className="modal__data">Total views: {data.views}</p>
          <p className="modal__data">Owned by: {data.owner.username}</p>
        </>
      );
    }
  }

  return (
    <section className="modal" ref={modal}>
      <div className="close-btn" onClick={closeHandler} data-testid="closeBtn">
        <div className="close-btn__line close-btn__upper-line "></div>
        <div className="close-btn__line close-btn__bottom-line"></div>
      </div>
      {render}
    </section>
  );
};
