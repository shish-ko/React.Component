import CardList from '../components/CardList';
import { CARDS_DATA } from '../data/cards-data';
import React from 'react';
import { Search } from '../components/Search';

export const MainPage: React.FC = () => {
  return (
    <>
      <Search />
      <CardList cards={CARDS_DATA} />
    </>
  );
};
