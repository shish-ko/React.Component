import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Form } from 'react-router-dom';

interface ISearchProps {
  handler: (value: string) => void;
}

export const Search: React.FC = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);
  // const handler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(e.target.value);
  // };
  useEffect(() => {
    const input = searchInput.current;
    if (localStorage.searchValue) {
      input!.value = localStorage.getItem('searchValue') as string;
    }
    return () => {
      localStorage.setItem('searchValue', input!.value);
    };
  }, []);

  return (
    <Form className="search" method="get" ref={form}>
      <input ref={searchInput} name="search" placeholder="Search" className="search__input" />
      <img src="./assets/search-icon.png" className="search__input-logo"></img>
    </Form>
  );
};
