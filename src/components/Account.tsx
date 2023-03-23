import { IAccountCard } from '../interfaces';
import React from 'react';

interface IAccountProps {
  acc: IAccountCard;
}
export const Account: React.FC<IAccountProps> = ({ acc }) => {
  const getAge = (birthDate: number) => {
    return Math.floor((Date.now() - birthDate) / 31556952000);
  };
  return (
    <div className="accounts__item acc">
      <img src={acc.img} className="acc__img" />
      <p className="acc__title">
        {acc.title !== 'unknown' && acc.title + '.'} {acc.name}
      </p>
      <p className="acc__subtitle" title={acc.address}>
        Address: {acc.address}
      </p>
      <p className="acc__subtitle">{getAge(acc.birthDate)} years old</p>
      <p className="acc__subtitle">Shipping: {acc.shippingMethod}</p>
      <button className="acc__delete-btn">Delete acc</button>
    </div>
  );
};
