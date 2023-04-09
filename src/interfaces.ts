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

export interface IPhotoDataResp {
  photo: PhotoData;
  stat: string;
}

export interface PhotoData {
  id: string;
  secret: string;
  server: string;
  farm: number;
  dateuploaded: string;
  isfavorite: number;
  license: string;
  safety_level: string;
  rotation: number;
  originalsecret: string;
  originalformat: string;
  owner: Owner;
  title: Title;
  description: Description;
  dates: Dates;
  views: string;
}

interface Owner {
  nsid: string;
  username: string;
  realname: string;
  location: string;
  iconserver: string;
  iconfarm: number;
}

export interface Title {
  _content: string;
}

export interface Description {
  _content: string;
}

export interface Dates {
  posted: string;
  taken: string;
  takengranularity: number;
  takenunknown: string;
  lastupdate: string;
}

export interface Editability {
  cancomment: number;
  canaddmeta: number;
}

export interface Publiceditability {
  cancomment: number;
  canaddmeta: number;
}

export interface Usage {
  candownload: number;
  canblog: number;
  canprint: number;
  canshare: number;
}

export interface Comments {
  _content: string;
}
