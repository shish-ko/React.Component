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

export interface IFormCard {
  name: string;
  address: string;
  birthDate: string;
  img: Blob;
  shippingMethod: 'dhl' | 'usps' | 'pick up';
  gender: 'male' | 'female' | 'unknown';
}

export interface PageElProps {
  titleHandler: (pageTitle: string) => void;
}
