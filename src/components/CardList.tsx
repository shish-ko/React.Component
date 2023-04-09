import { Photo } from '../interfaces';
import React, { useState } from 'react';
import Card from './Card';
import { Modal } from './Modal';

interface CardListProps {
  cards: Photo[];
}
const CardList: React.FC<CardListProps> = ({ cards }) => {
  const [modalData, setModalData] = useState<Photo>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photoItem: Photo) => {
    setIsModalOpen(!isModalOpen);
    setModalData(photoItem);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="products">
      {!cards.length && <div style={{ margin: '0 auto' }}>No photos found</div>}
      {cards.map((item) => (
        <Card modalHandler={openModal} card={item} key={item.id} />
      ))}
      {isModalOpen && modalData && (
        <div className="modal-container">
          <Modal photoItem={modalData} closeHandler={closeModal} />
        </div>
      )}
    </div>
  );
};

export default CardList;
