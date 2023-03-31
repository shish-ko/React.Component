import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { nameCurrentPage } from '../utils';

const Index: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header className="header" data-testid="header">
        <div className="header__current" data-testid="current_page">
          {nameCurrentPage(pathname)}
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
};

export default Index;
