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
      <header className="header" data-testid="header">
        <div className="header__current" data-testid="current_page">
          {this.props.currentPage}
        </div>
        <nav className="header__links">
          <Link to={'/'} className="header__link" data-testid="link_main">
            Main page
          </Link>
          <Link to={'aboutus/'} className="header__link" data-testid="link_about">
            About us
          </Link>
          <Link to={'form/'} className="header__link" data-testid="link_form">
            Form
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
