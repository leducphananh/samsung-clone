export const productList: {
  id: number;
  name: string;
  rating: number;
  ratingCount: number;
  variants: {
    id: number;
    name: string;
    hex: string;
    img: string;
    default?: boolean;
  }[];
  storage: string[];
  ram: string[];
  price: number;
  new?: boolean;
}[] = [
  {
    id: 1,
    name: 'Galaxy S26 Ultra',
    rating: 4.8,
    ratingCount: 10000,
    variants: [
      {
        id: 1,
        name: 'Trắng Classic',
        hex: '#f3f4f5',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzwcxxv-thumb-550804953?$Q90_330_330_F_PNG$',
      },
      {
        id: 2,
        name: 'Xanh Sky Blue',
        hex: '#b3cbd9',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948blbcxxv-thumb-550804058?$Q90_330_330_F_PNG$',
      },
      {
        id: 3,
        name: 'Đen Classic',
        hex: '#494d53',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzkcxxv-thumb-550804317?$Q90_330_330_F_PNG$',
      },
      {
        id: 4,
        name: 'Tím Cobalt',
        hex: '#686884',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzvcxxv-thumb-550804756?$Q90_330_330_F_PNG$',
        default: true,
      },
    ],
    storage: ['1 TB', '512 GB', '256 GB'],
    ram: ['16 GB', '12 GB'],
    price: 42990000,
    new: true,
  },
  {
    id: 2,
    name: 'Galaxy S26+',
    rating: 4.8,
    ratingCount: 1594,
    variants: [
      {
        id: 1,
        name: 'Trắng Classic',
        hex: '#f3f4f5',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578558-sm-s947bzwcxxv-thumb-551023857?$Q90_330_330_F_PNG$',
      },
      {
        id: 2,
        name: 'Xanh Sky Blue',
        hex: '#b3cbd9',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578558-sm-s947blbcxxv-thumb-551023800?$Q90_330_330_F_PNG$',
      },
      {
        id: 3,
        name: 'Đen Classic',
        hex: '#494d53',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578558-sm-s947bzkcxxv-thumb-551023819?$Q90_330_330_F_PNG$',
      },
      {
        id: 4,
        name: 'Tím Cobalt',
        hex: '#686884',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578558-sm-s947bzvcxxv-thumb-551023838?$Q90_330_330_F_PNG$',
        default: true,
      },
    ],
    storage: ['512 GB', '256 GB'],
    ram: ['12 GB'],
    price: 35990000,
  },
  {
    id: 3,
    name: 'Galaxy S26',
    rating: 4.8,
    ratingCount: 1258,
    variants: [
      {
        id: 1,
        name: 'Trắng Classic',
        hex: '#f3f4f5',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-sm-s942bzwqxxv-thumb-550887061?$Q90_330_330_F_PNG$',
      },
      {
        id: 2,
        name: 'Xanh Sky Blue',
        hex: '#b3cbd9',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-sm-s942blbqxxv-thumb-550886945?$Q90_330_330_F_PNG$',
      },
      {
        id: 3,
        name: 'Đen Classic',
        hex: '#494d53',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-sm-s942bzkqxxv-thumb-550886984?$Q90_330_330_F_PNG$',
      },
      {
        id: 4,
        name: 'Tím Cobalt',
        hex: '#686884',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-sm-s942bzvqxxv-thumb-550887023?$Q90_330_330_F_PNG$',
        default: true,
      },
    ],
    storage: ['512 GB', '256 GB'],
    ram: ['12 GB'],
    price: 31990000,
    new: true,
  },
  {
    id: 4,
    name: 'Galaxy S26 Ultra (chỉ có tại Samsung.com)',
    rating: 4.8,
    ratingCount: 10000,
    variants: [
      {
        id: 1,
        name: 'Bạc Shadow',
        hex: '#c7c8ca',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzscxxv-thumb-550803787?$Q90_330_330_F_PNG$',
      },
      {
        id: 2,
        name: 'Vàng Hồng',
        hex: '#ead2c6',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzdcxxv-thumb-550803545?$Q90_330_330_F_PNG$',
      },
    ],
    storage: ['1 TB', '512 GB', '256 GB'],
    ram: ['16 GB', '12 GB'],
    price: 42990000,
    new: true,
  },
];
