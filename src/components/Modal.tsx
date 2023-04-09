import { Photo, PhotoData } from '../interfaces';
import React, { useEffect, useRef, useState } from 'react';
import { useCloseOnClickOutside, usePhotoDataFetch } from '../utils/customHooks';
import { SyncLoader } from 'react-spinners';

interface IModalProps {
  photoItem: Photo;
  closeHandler: () => void;
}

export const Modal: React.FC<IModalProps> = ({ photoItem, closeHandler }) => {
  const [photoData, setPhotoData] = useState<PhotoData>();
  const [isLoading, getPhotoData] = usePhotoDataFetch();
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPhotoData(photoItem.id).then((data) => setPhotoData(data));
  }, [photoItem.id]);

  useCloseOnClickOutside(modal, closeHandler);

  if (!photoItem) {
    return <h1>No photo!</h1>;
  }
  return (
    <section className="modal" ref={modal}>
      <div className="close-btn" onClick={closeHandler} data-testid="closeBtn">
        <div className="close-btn__line close-btn__upper-line "></div>
        <div className="close-btn__line close-btn__bottom-line"></div>
      </div>
      {isLoading ? (
        <div style={{ width: photoItem.width_m }}>
          <SyncLoader color="#535bf2" />
        </div>
      ) : (
        <>
          <p className="modal__data modal__title">Title: {photoItem.title}</p>
          <img src={photoItem.url_m} className="product__image"></img>
          <p className="modal__data">Flickr photo id: #{photoItem.id}</p>
          <p className="modal__data">Total views: {photoData?.views}</p>
          <p className="modal__data">Owned by: {photoData?.owner.username}</p>
        </>
      )}
    </section>
  );
};
