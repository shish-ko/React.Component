import { API_KEY, TEN_YEARS } from '../data/constants';
import { IAccountCard, Root } from 'src/interfaces';

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

export const nameCurrentPage = (pathname: string) => {
  const trimmedPathname = pathname.replaceAll('/', '');
  switch (trimmedPathname) {
    case '':
      return 'Main Page';
      break;
    case 'aboutus':
      return 'About us';
      break;
    case 'form':
      return 'Form Page';
      break;
    default:
      return 'Error 404';
  }
};

export async function getPhotos(tag: string | null) {
  let requestURL;
  const savedValue = localStorage.getItem('searchValue');
  if (tag) {
    requestURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tag}&safe_search&extras=url_m&format=json&nojsoncallback=1&per_page=20`;
  } else {
    if (savedValue) {
      requestURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${savedValue}&safe_search&extras=url_m&format=json&nojsoncallback=1&per_page=20`;
    } else {
      requestURL = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${API_KEY}&extras=url_m&format=json&nojsoncallback=1&per_page=20`;
    }
  }
  const response = await fetch(requestURL);
  const data: Root = await response.json();
  return data.photos.photo;
}
