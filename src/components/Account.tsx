import { IAccountCard } from '../interfaces/interfaces';
import React from 'react';
import { getAge } from '../utils';
import { useDispatch } from 'react-redux';
import { deleteAccount } from '../store/formSlice';

interface IAccountProps {
  acc: IAccountCard;
  pickedHandler(): void;
  accStyle: string;
}
export const Account: React.FC<IAccountProps> = ({ acc, pickedHandler, accStyle }) => {
  const dispatch = useDispatch();
  const deleteAcc = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(deleteAccount(acc.key));
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
