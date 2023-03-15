import React from 'react';
import PageElement from '../components/PageElement';

export class ErrorPage extends PageElement {
  componentDidMount(): void {
    this.props.titleHandler('404');
  }
  render = () => {
    return (
      <div className="error-page">
        <p className="error-page__subtitle">Ooops...</p>
        <p className="error-page__title">404</p>
        <p className="error-page__subtitle">something went wrong</p>
      </div>
    );
  };
}
