import React, { ChangeEvent } from 'react';

interface SearchState {
  searchValue: string;
}

export class Search extends React.Component<unknown, SearchState> {
  componentDidMount(): void {
    localStorage.searchValue &&
      this.setState({ searchValue: localStorage.getItem('searchValue') as string });
  }
  componentWillUnmount(): void {
    this.state.searchValue && localStorage.setItem('searchValue', this.state.searchValue);
  }
  state = {
    searchValue: '',
  };
  handler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    return (
      <div className="search">
        <input
          value={this.state.searchValue}
          onChange={this.handler}
          placeholder="Search"
          className="search__input"
        />
        <img src="./assets/search-icon.png" className="search__input-logo"></img>
      </div>
    );
  }
}
