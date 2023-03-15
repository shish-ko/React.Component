import { ICard } from 'interfaces';
import React from 'react';
import Card from './Card';

interface CardListProps {
  cards: ICard[];
}
const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="products">
      {cards.map((item) => (
        <Card card={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardList;
