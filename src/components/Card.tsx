import { ICard } from 'interfaces';
import React from 'react';

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="product">
      <img src={card.images[0]} className="product__image"></img>
      <p className="product__stock">In stock #{card.stock}</p>
      <p className="product__brand">{card.brand}</p>
      <p className="product__title">{card.title}</p>
      <p className="product__price">Price: {card.price}$</p>
    </div>
  );
};

export default Card;
