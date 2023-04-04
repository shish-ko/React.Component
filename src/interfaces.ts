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

export type IFormNames = IAccountCard & { agreement: boolean; save: boolean };

export interface Root {
  photos: Photos;
  stat: string;
}

export interface Photos {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Photo[];
}

export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  url_m: string;
  height_m: number;
  width_m: number;
}
