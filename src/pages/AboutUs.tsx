import React from 'react';
import PageElement from '../components/PageElement';

class AboutUs extends PageElement {
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
