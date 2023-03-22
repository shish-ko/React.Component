import CardList from '../components/CardList';
import { CARDS_DATA } from '../data/cards-data';
import React from 'react';
import PageElement from '../components/PageElement';
import { Search } from '../components/Search';

export class MainPage extends PageElement {
  componentDidMount(): void {
    this.props.titleHandler('Main Page');
  }
  render() {
    return (
      <>
        <Search />
        <CardList cards={CARDS_DATA} />
      </>
    );
  }
}
