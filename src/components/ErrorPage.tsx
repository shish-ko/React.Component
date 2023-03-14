import React from 'react';

interface AboutProps {
  titleHandler: (pageTitle: string) => void;
}

export class ErrorPage extends React.Component<AboutProps> {
  componentDidMount(): void {
    this.props.titleHandler('404');
  }
  render = () => <div>404</div>;
}
