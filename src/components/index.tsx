import React from 'react';
import { Outlet, Link } from 'react-router-dom';

interface IndexProps {
  currentPage: string;
}

class Index extends React.Component<IndexProps> {
  constructor(props: IndexProps) {
    super(props);
  }

  render = () => (
    <>
      <header className="header">
        <div className="header__current">{this.props.currentPage}</div>
        <nav className="header__links">
          <Link to={'/'} className="header__link">
            Main page
          </Link>
          <Link to={'aboutus/'} className="header__link">
            About us
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Index;
