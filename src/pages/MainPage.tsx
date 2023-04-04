import React, { useEffect, useState } from 'react';
import { LoaderFunctionArgs } from 'react-router-dom';

import CardList from '../components/CardList';
import { Search } from '../components/Search';
import { useFetch } from '../utils/customHooks';
import { Photo } from 'interfaces';
import { getPhotos } from '../utils';

export async function mainPageLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchValue = url.searchParams.get('search');
  const data = await getPhotos(searchValue);
  return data;
}

export const MainPage: React.FC = () => {
  const [photoData, setPhotoData] = useState<Photo[]>([]);
  const [searchValue, setSearchValue] = useState('car');
  const [isLoaded, getImages] = useFetch();
  useEffect(() => {
    async function setFetchData() {
      const res = await getImages(searchValue);
      setPhotoData(res);
    }
    setFetchData();
  }, [searchValue]);
  return (
    <>
      <Search handler={setSearchValue} />
      {isLoaded ? <CardList cards={photoData.slice(0, 20)} /> : <h1>loading ...</h1>}
    </>
  );
};
