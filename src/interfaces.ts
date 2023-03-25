export interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IAccountCard {
  name: string;
  address: string;
  birthDate: number;
  img: string;
  shippingMethod: string;
  title: string;
  key: string;
}

export interface PageElProps {
  titleHandler: (pageTitle: string) => void;
}

export interface IFormState {
  address: boolean;
  name: boolean;
  birthDate: boolean;
  shippingMethod: boolean;
  agreement: boolean;
  title: boolean;
  img: boolean;
  isPopUpShown: boolean;
}

export interface IFormRefs {
  nameRef: React.RefObject<HTMLInputElement>;
  addressRef: React.RefObject<HTMLInputElement>;
  birthDateRef: React.RefObject<HTMLInputElement>;
  shippingMethodRef: React.RefObject<HTMLSelectElement>;
  agreementRef: React.RefObject<HTMLInputElement>;
  mrRef: React.RefObject<HTMLInputElement>;
  msRef: React.RefObject<HTMLInputElement>;
  unknownTitleRef: React.RefObject<HTMLInputElement>;
  imgRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
  saveRef: React.RefObject<HTMLInputElement>;
}
