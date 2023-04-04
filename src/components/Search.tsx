import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Form } from 'react-router-dom';

interface ISearchProps {
  handler: (value: string) => void;
}

export const Search: React.FC<ISearchProps> = ({ handler }) => {
  const [searchValue, setSearchValue] = useState('');
  // const searchInput = useRef<HTMLInputElement>(null);
  // const handler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(e.target.value);
  // };
  // useEffect(() => {
  //   const input = searchInput.current;
  //   localStorage.searchValue && setSearchValue(localStorage.getItem('searchValue') as string);
  //   return () => {
  //     localStorage.setItem('searchValue', input!.value);
  //   };
  // }, []);
  function makeSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handler((e.currentTarget[0] as HTMLInputElement).value);
  }
  return (
    <Form className="search" method="get">
      <input
        // ref={searchInput}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        name="search"
        placeholder="Search"
        className="search__input"
      />
      <img src="./assets/search-icon.png" className="search__input-logo"></img>
    </Form>
  );
};
