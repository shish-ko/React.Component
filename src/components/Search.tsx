import React, { ChangeEvent } from 'react';

interface SearchState {
  searchValue: string;
}

export class Search extends React.Component<unknown, SearchState> {
  state = {
    searchValue: '',
  };
  handler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    return <input value={this.state.searchValue} onChange={this.handler} />;
  }
}
