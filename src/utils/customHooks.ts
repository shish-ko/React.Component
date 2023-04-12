import { IPhotoDataResp, PhotoData } from '../interfaces';
import React, { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';

export function usePhotoDataFetch(): [boolean, (id: string) => Promise<PhotoData>] {
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = async (id: string) => {
    setIsLoading(true);
    const response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=7f186c5d957a329557c371dc86a52bd1&photo_id=${id}&format=json&nojsoncallback=1`
    );
    const data: IPhotoDataResp = await response.json();
    setIsLoading(false);
    return data.photo;
  };

  return [isLoading, fetcher];
}

export const useCloseOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  actionHandler: () => void
) => {
  useEffect(() => {
    function listener(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        actionHandler();
      }
    }
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  });
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
