import React, { useState } from 'react';
import { IAccountCard } from 'interfaces';
import { CreateAccForm } from '../components/Form';
import { AccountList } from '../components/AccountList';
import { delAccFromLS } from '../utils';

export const FormPage: React.FC = () => {
  const [formItems, setFormItems] = useState<IAccountCard[]>(
    localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')!) : []
  );
  const formHandler = (item: IAccountCard) => {
    setFormItems([...formItems, item]);
  };
  const deleteHandler = (id: string) => {
    setFormItems([...formItems.filter((el) => el.key !== id)]);
    delAccFromLS(id);
  };

  return (
    <div className="form-page">
      <CreateAccForm formHandler={formHandler} />
      <AccountList deleteHandler={deleteHandler} accList={formItems} />
    </div>
  );
};
