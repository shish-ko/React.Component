import React from 'react';

export const ErrorPage: React.FC = () => {
  return (
    <div className="error-page">
      <p className="error-page__subtitle">Ooops...</p>
      <p className="error-page__title">404</p>
      <p className="error-page__subtitle">something went wrong</p>
    </div>
  );
};
