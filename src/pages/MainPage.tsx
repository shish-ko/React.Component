import React from 'react';
import { Await, defer, LoaderFunctionArgs, useLoaderData, useNavigation } from 'react-router-dom';
import { Photo } from 'src/interfaces';

import CardList from '../components/CardList';
import { Search } from '../components/Search';
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
        <Await resolve={photoData.data}>
          {(data) => (state === 'idle' ? <CardList cards={data} /> : <h1>loading...</h1>)}
        </Await>
      </React.Suspense>
    </>
  );
};
