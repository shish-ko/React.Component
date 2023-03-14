import React from 'react';

interface AboutProps {
  titleHandler: (pageTitle: string) => void;
}

class AboutUs extends React.Component<AboutProps> {
  componentDidMount(): void {
    this.props.titleHandler('About us');
  }
  render = () => {
    return (
      <div className="App">
        <div>Hello world</div>
      </div>
    );
  };
}

export default AboutUs;
