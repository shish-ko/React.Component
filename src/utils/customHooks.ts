import { Photo, Root } from 'interfaces';
import { useState } from 'react';
type useFetchReturn = [(tag: string) => Promise<Photo[]>, boolean];
export function useFetch(): [boolean, (tag: string) => Promise<Photo[]>] {
  const [isLoaded, setIsLoaded] = useState(false);

  const fetcher = async (tag: string) => {
    setIsLoaded(false);
    const response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7f186c5d957a329557c371dc86a52bd1&tags=${tag}&extras=url_m&format=json&nojsoncallback=1`
    );
    const data: Root = await response.json();
    setIsLoaded(true);
    return data.photos.photo;
  };

  return [isLoaded, fetcher];
}
