import React from 'react';
import PageElement from '../components/PageElement';

export class ErrorPage extends PageElement {
  componentDidMount(): void {
    this.props.titleHandler('404');
  }
  render = () => <div>404</div>;
}
