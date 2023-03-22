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
  birthDate: string;
  img: string;
  shippingMethod: 'dhl' | 'usps' | 'pick up';
  gender: 'male' | 'female' | 'unknown';
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
  gender: boolean;
  img: boolean;
}

export interface IFormRefs {
  nameRef: React.RefObject<HTMLInputElement>;
  addressRef: React.RefObject<HTMLInputElement>;
  birthDateRef: React.RefObject<HTMLInputElement>;
  shippingMethodRef: React.RefObject<HTMLSelectElement>;
  agreementRef: React.RefObject<HTMLInputElement>;
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  unknownGenderRef: React.RefObject<HTMLInputElement>;
  imgRef: React.RefObject<HTMLInputElement>;
}
