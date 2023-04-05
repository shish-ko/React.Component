import React, { useEffect, useState } from 'react';
import { Await, defer, LoaderFunctionArgs, useLoaderData, useNavigation } from 'react-router-dom';

import CardList from '../components/CardList';
import { Search } from '../components/Search';
import { Photo } from 'interfaces';
import { getPhotos } from '../utils';

export async function mainPageLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchValue = url.searchParams.get('search');
  const data = getPhotos(searchValue);
  return defer({ data });
}

export const MainPage: React.FC = () => {
  const photoData = useLoaderData() as { data: Photo[] };
  const { state } = useNavigation();

  return (
    <>
      <Search />
      <React.Suspense fallback={<h1>loading ...</h1>}>
        {state === 'idle' ? (
          <Await resolve={photoData.data}>{(data) => <CardList cards={data.slice(0, 20)} />}</Await>
        ) : (
          <h1>loading...</h1>
        )}
      </React.Suspense>
    </>
  );
};
