import { Photo } from 'interfaces';
import React, { useRef } from 'react';
import { useCloseOnClickOutside } from '../utils/customHooks';

interface IModalProps {
  photoItem: Photo | undefined;
  closeHandler: () => void;
}

export const Modal: React.FC<IModalProps> = ({ photoItem, closeHandler }) => {
  const modal = useRef<HTMLDivElement>(null);
  useCloseOnClickOutside(modal, closeHandler);

  if (!photoItem) {
    return <h1>No photo!</h1>;
  }
  return (
    <section className="modal" ref={modal}>
      <div className="close-btn" onClick={closeHandler}>
        <div className="close-btn__line close-btn__upper-line "></div>
        <div className="close-btn__line close-btn__bottom-line"></div>
      </div>
      <p className="modal__data modal__title">Title: {photoItem.title}</p>
      <img src={photoItem.url_m} className="product__image"></img>
      <p className="modal__data">Flickr photo id: #{photoItem.id}</p>
      <p className="modal__data">Height: {photoItem.height_m}px</p>
      <p className="modal__data">Width: {photoItem.width_m}px</p>
    </section>
  );
};
