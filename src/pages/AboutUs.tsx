import React from 'react';
import { useLocation } from 'react-router-dom';
import PageElement from '../components/PageElement';

const AboutUs: React.FC = () => {
  // componentDidMount(): void {
  //   this.props.titleHandler('About us');
  // }
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <div>Page is under maintain...</div>
    </div>
  );
};

export default AboutUs;
