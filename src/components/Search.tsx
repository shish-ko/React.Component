import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    const input = searchInput.current;
    localStorage.searchValue && setSearchValue(localStorage.getItem('searchValue') as string);
    return () => {
      localStorage.setItem('searchValue', input!.value);
    };
  }, []);
  return (
    <div className="search">
      <input
        ref={searchInput}
        value={searchValue}
        onChange={handler}
        placeholder="Search"
        className="search__input"
      />
      <img src="./assets/search-icon.png" className="search__input-logo"></img>
    </div>
  );
};
