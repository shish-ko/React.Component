import React, { Suspense } from 'react';

import CardList from '../components/CardList';
import { Search } from '../components/Search';

export const MainPage: React.FC = () => {
  return (
    <>
      <Search />
      <Suspense fallback={<h1> qweqwe</h1>}>
        <CardList />
      </Suspense>
    </>
  );
};
