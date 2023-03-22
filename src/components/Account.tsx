import { IAccountCard } from '../interfaces';
import React from 'react';

interface IAccountProps {
  acc: IAccountCard;
}
export const Account: React.FC<IAccountProps> = ({ acc }) => {
  return (
    <div className="accounts__item acc">
      <img src={acc.img} className="acc__img" />
      <p className="acc__title">{acc.name}</p>
      <p className="acc__subtitle" title={acc.address}>
        {acc.address}
      </p>
      <p className="acc__subtitle">{acc.gender}</p>
      <p className="acc__subtitle">{acc.shippingMethod}</p>
    </div>
  );
};
