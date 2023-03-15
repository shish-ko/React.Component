import CardList from '../components/CardList';
import { CARDS_DATA } from '../data/cards-data';
import React from 'react';
import PageElement from '../components/PageElement';

export class MainPage extends PageElement {
  componentDidMount(): void {
    this.props.titleHandler('Main Page');
  }
  render() {
    return <CardList cards={CARDS_DATA} />;
  }
}
