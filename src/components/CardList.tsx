import { Photo } from '../interfaces';
import React, { useState } from 'react';
import Card from './Card';
import { Modal } from './Modal';
import { useAppSelector } from '../utils/customHooks';

const CardList: React.FC = () => {
  const [modalData, setModalData] = useState<Photo>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cards, cardsIsLoading } = useAppSelector((state) => state.search);

  const openModal = (photoItem: Photo) => {
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
