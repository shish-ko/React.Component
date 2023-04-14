import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../store/searchSlice';
import { useAppSelector } from '../utils/customHooks';

export const Search: React.FC = () => {
  const searchValue = useAppSelector((state) => state.search.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(searchValue);

  return (
    <form
      className="search"
      method="get"
      data-testid="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setSearchValue(inputValue));
      }}
    >
      <input
        name="search"
        placeholder="Search"
        className="search__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <img src="./assets/search-icon.png" className="search__input-logo"></img>
    </form>
  );
};
