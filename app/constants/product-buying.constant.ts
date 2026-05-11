export const featureIcons = [
  {
    label: 'Privacy display',
    icon: 'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/top_feature_privacy.png',
  },
  {
    label: 'AP tùy biến Gen 2',
    icon: 'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/top_feature_customizedAP.png',
  },
  {
    label: 'Photo Assist',
    icon: 'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/top_feature_photo.png',
  },
];

export const deviceVariants: Array<{
  id: string;
  name: string;
  subname?: string;
  screen: string | null;
  monthlyPrice: string | null;
  fullPrice: string | null;
  promo?: string;
  note?: string;
  hasGalaxyAI: boolean;
  aiBadgeSrc?: string;
  galleryImages: Array<{
    type: 'image' | 'video';
    src: string;
    alt?: string;
    caption?: string;
  }>;
  storageOptions: Array<{
    id: string;
    label: string;
    note?: string;
    monthlyPrice?: string;
    fullPrice?: string;
  }>;
  colorOptions: Array<{
    id: string;
    label: string;
    hex: string;
    exclusive: boolean;
  }>;
}> = [
  {
    id: 'standard',
    name: 'Galaxy S26 Ultra',
    screen: 'Màn hình 6.9 inch',
    monthlyPrice: '3.582.500 đ/tháng với lãi suất 0%',
    fullPrice: '42.990.000 đ',
    promo: 'Thanh toán online ưu đãi thêm 2 triệu đồng',
    hasGalaxyAI: true,
    aiBadgeSrc:
      'https://images.samsung.com/vn/smartphones/galaxy-s26/buy/galaxy_ai.png',
    galleryImages: [
      {
        type: 'image',
        src: 'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/kv_group_Tablet_noText.jpg?imbypass=true',
        alt: 'Năm chiếc Galaxy S26 Ultra được đặt đứng cạnh nhau. Nhóm ba chiếc với các màu Đen, Trắng và Xanh Da Trời (Sky Blue) hiển thị từ mặt lưng làm nổi bật cụm camera sau. Nhóm hai chiếc còn lại mang màu Tím Cobalt (Cobalt Violet): một chiếc nhìn từ mặt sau với hệ thống camera, chiếc kia nhìn từ mặt trước với màn hình và bút S Pen tựa nghiêng vào cạnh máy.',
      },
      {
        type: 'video',
        src: 'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/kv_exclusive_animated_PC_noText.mp4',
      },
      {
        type: 'image',
        src: 'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/kv_singleKV_Tablet_noText.jpg?imbypass=true',
        alt: 'Bộ đôi Galaxy S26 Ultra sắc màu Vàng Hồng (Pink Gold): một chiếc hiển thị mặt sau với cụm camera tinh xảo, chiếc còn lại hiển thị mặt trước với màn hình sắc nét và bút S Pen tựa nghiêng bên cạnh.',
        caption: 'Galaxy Buds4 Pro được bán riêng',
      },
      {
        type: 'image',
        src: 'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/kv_exclusive_group_Tablet_noText.jpg?imbypass=true',
        alt: 'Ba chiếc điện thoại Galaxy S26 Ultra được đặt đứng. Trong đó có hai chiếc màu Vàng Hồng (Pink Gold): một chiếc hiển thị mặt trước với màn hình và bút S Pen tựa vào cạnh máy, chiếc còn lại hiển thị mặt sau làm lộ rõ cụm camera. Chiếc Galaxy S26 Ultra còn lại mang màu Bạc Shadow (Silver Shadow), được hiển thị từ mặt sau với hệ thống camera sau.',
      },
    ],
    storageOptions: [
      {
        id: '256',
        label: '256 GB｜12 GB',
        note: 'Ưu đãi trực tiếp đến 2 triệu đồng',
        monthlyPrice: '3.082.500 đ/tháng với lãi suất 0%',
        fullPrice: '36.990.000 đ',
      },
      {
        id: '512',
        label: '512 GB｜12 GB',
        note: 'Ưu đãi trực tiếp đến 2 triệu đồng',
        monthlyPrice: '3.582.500 đ/tháng với lãi suất 0%',
        fullPrice: '42.990.000 đ',
      },
      {
        id: '1tb',
        label: '1 TB｜16 GB',
        note: 'Ưu đãi trực tiếp đến 2 triệu đồng',
        monthlyPrice: '4.332.500 đ/tháng với lãi suất 0%',
        fullPrice: '51.990.000 đ',
      },
    ],
    colorOptions: [
      { id: 'vang-hong', label: 'Vàng Hồng', hex: '#e9d2c5', exclusive: true },
      {
        id: 'bac-shadow',
        label: 'Bạc Shadow',
        hex: '#c5caca',
        exclusive: true,
      },
      {
        id: 'tim-cobalt',
        label: 'Tím Cobalt',
        hex: '#686883',
        exclusive: false,
      },
      {
        id: 'den-classic',
        label: 'Đen Classic',
        hex: '#4a4d53',
        exclusive: false,
      },
      {
        id: 'xanh-sky',
        label: 'Xanh Sky Blue',
        hex: '#b2cbd9',
        exclusive: false,
      },
      {
        id: 'trang-classic',
        label: 'Trắng Classic',
        hex: '#f3f5f7',
        exclusive: false,
      },
    ],
  },
  {
    id: 'special-gold',
    name: 'Galaxy S26 Ultra Special Edition',
    subname: 'Vàng Hồng',
    screen: null,
    monthlyPrice: null,
    fullPrice: null,
    hasGalaxyAI: false,
    galleryImages: [
      {
        type: 'image',
        src: 'https://images.samsung.com/is/image/samsung/assets/vn/smartphones/galaxy-s26-ultra/1600x864.png?imbypass=true',
        alt: 'Galaxy S26 Ultra - AI Photophone Pink Gold Edition',
      },
    ],
    storageOptions: [
      {
        id: '512',
        label: '512 GB｜12 GB',
        note: 'Ưu đãi trực tiếp đến 2 triệu đồng',
      },
    ],
    colorOptions: [
      {
        id: 'vang-hong',
        label: 'Vàng Hồng',
        hex: '#e9d2c5',
        exclusive: true,
      },
    ],
  },
  {
    id: 'special-silver',
    name: 'Galaxy S26 Ultra Special Edition',
    subname: 'Bạc Shadow',
    screen: null,
    monthlyPrice: null,
    fullPrice: null,
    note: 'Mở bán 100 bộ giới hạn cho 2 bản màu Vàng Hồng và Bạc Shadow',
    hasGalaxyAI: false,
    galleryImages: [
      {
        type: 'image',
        src: 'https://images.samsung.com/is/image/samsung/assets/vn/smartphones/galaxy-s26-ultra/1600x8641.png?imbypass=true',
        alt: 'Galaxy S26 Ultra - AI Photophone Silver Shadow Edition',
      },
    ],
    storageOptions: [
      {
        id: '512',
        label: '512 GB｜12 GB',
        note: 'Ưu đãi trực tiếp đến 2 triệu đồng',
      },
    ],
    colorOptions: [
      {
        id: 'bac-shadow',
        label: 'Bạc Shadow',
        hex: '#c5caca',
        exclusive: true,
      },
    ],
  },
];
