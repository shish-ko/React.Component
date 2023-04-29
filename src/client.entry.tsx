import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SsrRouter } from './App';
import './index.css';

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <BrowserRouter>
    <SsrRouter />
  </BrowserRouter>
);
