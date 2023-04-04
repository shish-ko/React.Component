import { ICard, Photo } from 'interfaces';
import React from 'react';

interface CardProps {
  card: Photo;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="product">
      <img src={card.url_m} className="product__image"></img>
      <p className="product__stock">Title {card.title}</p>
      <p className="product__brand">{card.owner}</p>
      <p className="product__title">{card.secret}</p>
      <p className="product__price">{card.ispublic}</p>
    </div>
  );
};

export default Card;
