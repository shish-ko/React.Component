import { TEN_YEARS } from '../data/constants';
import { IAccountCard } from 'interfaces';

export function saveAccToLS(accCard: IAccountCard) {
  const accSlice: IAccountCard = Object.assign(accCard);
  const fr = new FileReader();
  fr.addEventListener('load', () => {
    const lsAccounts = localStorage.getItem('accounts');
    if (typeof fr.result === 'string') accSlice.img = fr.result;
    if (lsAccounts) {
      const accountsArr: IAccountCard[] = JSON.parse(lsAccounts);
      accountsArr.push(accSlice);
      localStorage.setItem('accounts', JSON.stringify(accountsArr));
    } else {
      localStorage.setItem('accounts', JSON.stringify([accSlice]));
    }
  });
  fr.readAsDataURL(accCard.img[0] as File);
}

export function delAccFromLS(key: string) {
  const lsAccounts = localStorage.getItem('accounts');
  if (lsAccounts) {
    let accountsArr: IAccountCard[] = JSON.parse(lsAccounts);
    accountsArr = accountsArr.filter((item) => item.key !== key);
    localStorage.setItem('accounts', JSON.stringify(accountsArr));
  }
}

export const isAddressValid = (data: string) => {
  const arr = data.trim().split(' ');
  return (
    (arr.some((item) => item.length >= 3) && arr.length >= 3) ||
    'address should be at least 3 words long with one longer than 3 char'
  );
};

export const isBirthDateValid = (data: string) => {
  return (
    Date.now() - new Date(data).getTime() > TEN_YEARS ||
    'you should be older than 10 years to make an order'
  );
};

export const isImageValid = (image: File[]) => {
  return image[0].type === 'image/png' || 'provide image in .png format';
};

export const getAge = (birthDate: string) => {
  return Math.floor((Date.now() - new Date(birthDate).getTime()) / 31556952000);
};
