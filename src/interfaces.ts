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
  img: File[] | string;
  shippingMethod: string;
  title: string;
  key: string;
}

export interface PageElProps {
  titleHandler: (pageTitle: string) => void;
}

export type IFormNames = IAccountCard & { agreement: boolean; save: boolean };
