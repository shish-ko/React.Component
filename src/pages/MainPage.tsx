import React from 'react';

import CardList from '../components/CardList';
import { Search } from '../components/Search';

export const MainPage: React.FC = () => {
  return (
    <>
      <Search />
      <CardList />
    </>
  );
};
