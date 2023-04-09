import { IAccountCard } from '../interfaces';
import React from 'react';
import { getAge } from '../utils';

interface IAccountProps {
  acc: IAccountCard;
  deleteHandler(id: string): void;
  pickedHandler(): void;
  accStyle: string;
}
export const Account: React.FC<IAccountProps> = ({
  acc,
  deleteHandler,
  pickedHandler,
  accStyle,
}) => {
  const deleteAcc = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    deleteHandler(acc.key);
  };

  return (
    <div className={accStyle} onClick={pickedHandler}>
      <img src={acc.img as string} className="acc__img" />
      <p className="acc__title">
        {acc.title !== 'unknown' && acc.title + '.'} {acc.name}
      </p>
      <p className="acc__subtitle" title={acc.address}>
        Address: {acc.address}
      </p>
      <p className="acc__subtitle">{getAge(acc.birthDate)} years old</p>
      <p className="acc__subtitle">Shipping: {acc.shippingMethod}</p>
      <button onClick={deleteAcc} className="acc__delete-btn">
        Delete acc
      </button>
    </div>
  );
};
