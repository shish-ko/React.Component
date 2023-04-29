import { Root } from '../interfaces/interfaces';

export const API_SEARCH_RESPONSE: Root = {
  photos: {
    page: 1,
    pages: 2,
    perpage: 100,
    total: 148,
    photo: [
      {
        id: '51430572009',
        owner: '193850469@N07',
        secret: 'dcf389c67f',
        server: '65535',
        farm: 66,
        title: 'DSC_2384-\u1111\u1167\u11ab\u110c\u1175\u11b8',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
        url_m: 'https://live.staticflickr.com/65535/51430572009_dcf389c67f.jpg',
        height_m: 500,
        width_m: 333,
      },
      {
        id: '30496308220',
        owner: '144676012@N04',
        secret: '981bb273c9',
        server: '5626',
        farm: 6,
        title: 'qwer 195',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
        url_m: 'https://live.staticflickr.com/5626/30496308220_981bb273c9.jpg',
        height_m: 500,
        width_m: 375,
      },
    ],
  },
  stat: 'ok',
};
