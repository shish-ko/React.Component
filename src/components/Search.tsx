import React, { useEffect, useRef } from 'react';
import { Form } from 'react-router-dom';

export const Search: React.FC = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const submitHandler = () => {
    localStorage.setItem('searchValue', searchInput.current!.value);
  };
  useEffect(() => {
    const input = searchInput.current;
    if (localStorage.searchValue) {
      input!.value = localStorage.getItem('searchValue') as string;
    }
  }, []);

  return (
    <Form onSubmit={submitHandler} className="search" method="get" data-testid="search-form">
      <input ref={searchInput} name="search" placeholder="Search" className="search__input" />
      <img src="./assets/search-icon.png" className="search__input-logo"></img>
    </Form>
  );
};
