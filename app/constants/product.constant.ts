import {
  Laptop,
  ListTodo,
  Refrigerator,
  Smartphone,
  Star,
  Tv,
  Watch,
} from 'lucide-react';

export const categories = [
  { id: 'new-featured', name: 'Mới & Nổi bật', icon: Star },
  { id: 'mobile', name: 'Di động', icon: Smartphone },
  { id: 'tv-av', name: 'TV & AV', icon: Tv },
  { id: 'home-appliances', name: 'Gia dụng', icon: Refrigerator },
  { id: 'it', name: 'IT', icon: Laptop },
  { id: 'wearables', name: 'Thiết bị đeo', icon: Watch },
  { id: 'accessories', name: 'Phụ kiện', icon: ListTodo },
];

export const products = [
  {
    id: 's26-ultra',
    title: 'Galaxy S26 Ultra',
    price: 42990000,
    swatches: ['#ffffff', '#b9cadb', '#252628', '#5b5e7d'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzvcxxv-thumb-550804756?$200_200_PNG$',
  },
  {
    id: 'oled-s90f',
    title: '77 Inch OLED S90F 4K Samsung Vision A...',
    price: 71790000,
    options: ['83', '77', '65', '55'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/qa77s90faexxv/gallery/vn-oled-s90f-qa77s90faexxv-thumb-545253487?$200_200_PNG$',
  },
  {
    id: 'washer-ecobubble',
    title: 'Máy Giặt Cửa Trên Ecobubble 9.5kg',
    price: 6590000,
    swatches: ['#1a1a1a'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/wa40f95e1csv/gallery/vn-wa40f21-wa40f95e1csv-thumb-551430860?$200_200_PNG$',
  },
  {
    id: 'watch8',
    title: 'Galaxy Watch8 (Bluetooth, 44 mm)',
    price: 9189000,
    swatches: ['#5e6166', '#b7b7b7'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f2507/gallery/vn-galaxy-watch8-l330-sm-l330nzsaxxv-thumb-547653084?$200_200_PNG$',
  },
  {
    id: 'buds',
    title: 'Galaxy Buds Core',
    price: 6790000,
    swatches: ['#1f1f1f', '#d9d9d9'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-buds4-r640-sm-r640nzwaxxv-thumb-550975810?$200_200_PNG$',
  },
];
