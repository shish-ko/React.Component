import React from 'react';
import { CreateAccForm } from '../components/Form';
import { AccountList } from '../components/AccountList';

export const FormPage: React.FC = () => {
  return (
    <div className="form-page">
      <CreateAccForm />
      <AccountList />
    </div>
  );
};
