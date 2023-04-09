import { IAccountCard } from '../interfaces';
import React, { useState } from 'react';
import { Account } from './Account';

type IAccountListProps = React.HTMLAttributes<HTMLDivElement> & {
  accList: IAccountCard[];
  deleteHandler(id: string): void;
};

export const AccountList: React.FC<IAccountListProps> = ({ accList, deleteHandler }) => {
  const [pickedAcc, setPickedAcc] = useState(accList[0]?.key);

  const pickedHandler = (id: string) => {
    setPickedAcc(id);
  };
  return (
    <section className="acc-container">
      <h2 className="acc-container__title">
        {accList.length > 0 ? 'User shipping accounts' : 'Create at least one account'}
      </h2>
      <div className="acc-container__body">
        {accList.map((item) => (
          <Account
            deleteHandler={deleteHandler}
            acc={item}
            key={item.key}
            pickedHandler={() => pickedHandler(item.key)}
            accStyle={pickedAcc === item.key ? 'acc acc_active' : 'acc'}
          />
        ))}
      </div>
    </section>
  );
};
