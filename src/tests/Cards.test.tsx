import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';
import CardList from '../components/CardList';
import { CARDS_DATA } from '../data/cards-data';

describe('Card', () => {
  it('should render props', () => {
    render(<Card card={CARDS_DATA[0]} />);
    expect(screen.getByText(CARDS_DATA[0].title)).toBeInTheDocument();
    const image = screen.getByRole('img') as HTMLImageElement;
    expect(CARDS_DATA[0].images.some((item) => item === image.src)).toBeTruthy;
  });
});
describe('CardList', () => {
  it('should render as much cards as passed', () => {
    const { container } = render(<CardList cards={CARDS_DATA} />);
    expect(container.children[0].children.length).toBe(CARDS_DATA.length);
  });
});
