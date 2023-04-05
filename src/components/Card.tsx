import { Photo } from 'interfaces';
import React from 'react';

interface CardProps {
  card: Photo;
  modalHandler: (photoItem: Photo) => void;
}

const Card: React.FC<CardProps> = ({ card, modalHandler }) => {
  return (
    <div className="photo__item">
      <img src={card.url_m} onClick={() => modalHandler(card)} className="photo__image"></img>
    </div>
  );
};

export default Card;
