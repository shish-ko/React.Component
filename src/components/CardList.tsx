import { Photo } from '../interfaces';
import React, { useState } from 'react';
import Card from './Card';
import { Modal } from './Modal';
import { photoAPI } from '../features/photoAPI';
import { useAppSelector } from '../utils/customHooks';

const CardList: React.FC = () => {
  const [modalData, setModalData] = useState<Photo>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { value } = useAppSelector((state) => state.search);
  const { data, isLoading } = photoAPI.useGetPhotosQuery(value || 'random');

  const openModal = (photoItem: Photo) => {
    setIsModalOpen(!isModalOpen);
    setModalData(photoItem);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  let render;

  if (isLoading) render = <div style={{ margin: '0 auto' }}>Loading...</div>;
  else {
    if (!data?.photos.photo.length)
      render = <div style={{ margin: '0 auto' }}>No photos found</div>;
    else {
      render = data.photos.photo.map((item) => (
        <Card modalHandler={openModal} card={item} key={item.id} />
      ));
    }
  }

  return (
    <div className="products">
      {render}
      {isModalOpen && modalData && (
        <div className="modal-container">
          <Modal photoItem={modalData} closeHandler={closeModal} />
        </div>
      )}
    </div>
  );
};

export default CardList;
