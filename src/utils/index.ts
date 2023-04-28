import { TEN_YEARS } from '../data/constants';

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
