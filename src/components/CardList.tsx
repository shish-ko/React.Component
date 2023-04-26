import { Photo } from '../interfaces/interfaces';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Modal } from './Modal';
import { useAppSelector } from '../utils/customHooks';
import { useDispatch } from 'react-redux';
import { fetchPhotoData, fetchPhotos } from '../features/photoAPI';
import { AppDispatch } from '../store/store';

const CardList: React.FC = () => {
  const [modalData, setModalData] = useState<Photo>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { cards, cardsIsLoading, value } = useAppSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchPhotos(value || 'random'));
  }, []);

  const openModal = (photoItem: Photo) => {
    dispatch(fetchPhotoData(photoItem.id));
    setIsModalOpen(!isModalOpen);
    setModalData(photoItem);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  let render;

  if (cardsIsLoading) render = <div style={{ margin: '0 auto' }}>Loading...</div>;
  else {
    if (!cards.length) render = <div style={{ margin: '0 auto' }}>No photos found</div>;
    else {
      render = cards.map((item) => <Card modalHandler={openModal} card={item} key={item.id} />);
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
