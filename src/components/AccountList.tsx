import React, { useState } from 'react';
import { Account } from './Account';
import { useAppSelector } from '../utils/customHooks';

export const AccountList: React.FC = () => {
  const accList = useAppSelector((state) => state.accounts);
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
