export type NavItem = {
  id: number;
  name: string;
  categories?: {
    label: string;
    imgSrc: string;
  }[];
  discover?: {
    label: string;
  }[];
};

export const navItems: NavItem[] = [
  {
    id: 1,
    name: 'Cửa hàng',
    categories: [
      {
        label: 'Galaxy S26 Ultra',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/s2602/gnb/GNB-L1_Menu_Galaxy-Smartphone_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Z Fold7',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/f2507/gnb/Galaxy-Z_Fold7_GNB_L1_Shop_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Z Flip7',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/f2507/gnb/GNB_L1_Menu_B7_250611.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Buds4 Pro',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/GNB_Buds4-Pro_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Watch8',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/f2507/gnb/GNB_L1_Mobile_Galaxy-Watches_update_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Tab S11',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/npd-tabs11ultra-gnb.png?$ORIGIN_PNG$',
      },
      {
        label: 'The Frame QLED 4K',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/QA65LS03FAKXXV.png?$ORIGIN_PNG$',
      },
      {
        label: 'Neo QLED 8K TV',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/shop/GNB_Shop_L1_10_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Q-series Soundbar',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/shop/GNB_Shop_L1_12_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Odyssey OLED G8',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/shop/GNB_Shop_L1_13_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Máy giặt - sấy Bespoke AI',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/WD25.png?$ORIGIN_PNG$',
      },
      {
        label: 'Điều hòa WindFree™',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/CYHAA.png?$ORIGIN_PNG$',
      },
      {
        label: 'Tủ lạnh Bespoke AI',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/RS90.png?$ORIGIN_PNG$',
      },
      {
        label: 'Thiết bị bếp Bespoke AI',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/F-DW60.png?$ORIGIN_PNG$',
      },
    ],
    discover: [
      { label: 'Mua Hàng Trực Tiếp Ưu Đãi Vượt Trội' },
      { label: 'Ưu đãi Galaxy S26 Series' },
      { label: 'Combo Tiết Kiệm' },
      { label: 'Samsung Live Shop' },
      { label: 'Samsung Care+' },
      { label: 'SmartThings' },
      { label: 'Ngày của Mẹ' },
      { label: 'AI Living' },
      { label: 'Samsung West Lake' },
      { label: 'Samsung 68' },
    ],
  },
  {
    id: 2,
    name: 'Di động',
    categories: [
      {
        label: 'Điện thoại thông minh Galaxy',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/s2602/gnb/GNB-L1_Menu_Galaxy-Smartphone_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Tab',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/home/09-2025/GNB_TS11_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Watch',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/f2507/gnb/GNB_L1_Mobile_Galaxy-Watches_ultra_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Buds',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/s2602/gnb/GNB_Buds4-Pro_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Ring',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/mobile/GNB_Mobile_L1_06_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện Galaxy',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/s2602/gnb/GNB-L1_Menu_Galaxy-Accessories_88x88.png?$ORIGIN_PNG$',
      },
    ],
    discover: [
      { label: 'Tất cả về Galaxy' },
      { label: 'Galaxy AI' },
      { label: 'Tìm thiết bị Galaxy' },
      { label: 'Chuyển sang Galaxy' },
      { label: 'One UI' },
      { label: 'Samsung Health' },
      { label: 'Apps & Services' },
      { label: 'Samsung Care+' },
    ],
  },
  {
    id: 3,
    name: 'TV & AV',
    categories: [
      {
        label: 'Micro RGB',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_micro_rgb.png?$ORIGIN_PNG$',
      },
      {
        label: 'OLED',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_oled.png?$ORIGIN_PNG$',
      },
      {
        label: 'Neo QLED',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_ned-qled.png?$ORIGIN_PNG$',
      },
      {
        label: 'Mini LED',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_mini_led.png?$ORIGIN_PNG$',
      },
      {
        label: 'Crystal UHD',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_crystal_uhd.png?$ORIGIN_PNG$',
      },
      {
        label: 'The Frame',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_the_frame.png?$ORIGIN_PNG$',
      },
      {
        label: 'The Movingstyle',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_the_movingstyle.png?$ORIGIN_PNG$',
      },
      {
        label: 'The Serif',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/tv-and-av/GNB_TV-AV_L1_07_88x88_0522.png?$ORIGIN_PNG$',
      },
      {
        label: 'Thiết Bị Âm Thanh',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_sound_devices.png?$ORIGIN_PNG$',
      },
      {
        label: 'Loa nghệ thuật',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/tvs/GNB_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Máy Chiếu',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_projectors.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ Kiện TV',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_tv_accessories.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ Kiện Loa',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/gnb_thumbs_audio_accessories.png?$ORIGIN_PNG$',
      },
    ],
    discover: [
      { label: 'Samsung Vision AI' },
      { label: 'Tại Sao Lựa Chọn TV Micro RGB' },
      { label: 'Tại Sao Lựa Chọn TV OLED' },
      { label: 'Tại Sao Lựa Chọn TV The Frame' },
      { label: 'Lựa Chọn TV Chiến Game' },
      { label: 'Lựa Chọn Art TV' },
      { label: 'Tìm TV Phù Hợp Cho Bạn' },
      { label: 'Tìm Loa Thanh Phù Hợp Cho Bạn' },
      { label: 'MICRO LED' },
    ],
  },
  {
    id: 4,
    name: 'Gia dụng',
    categories: [
      {
        label: 'Tủ Lạnh',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-1_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Lò Nướng',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-2_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Bếp Từ',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-3_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Máy Hút Mùi',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-4_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Lò Vi Sóng',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-5_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Máy Rửa Bát',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-6_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Máy giặt & Sấy',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-7_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Máy Hút Bụi Không Dây',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-8_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Robot Hút Bụi',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-9_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Điều Hòa Không Khí',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_product_2-10_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Máy Lọc Không Khí',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_product_2-11_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
      {
        label: 'Tất Cả Phụ Kiện Gia Dụng',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/VN_Appliances_L1_banner_2-12_PC_MO_LTR.png?$ORIGIN_PNG$',
      },
    ],
    discover: [
      { label: 'Khám Phá Bespoke AI' },
      { label: 'Smart Forward' },
      { label: 'Tiết Kiệm Sống Xanh Với AI' },
      { label: 'Lý Do Chọn Sản Phẩm Gia Dụng Samsung' },
      { label: 'Hướng Dẫn Mua Hàng Tủ Lạnh' },
      { label: 'Hướng Dẫn Mua Hàng Máy Giặt' },
      { label: 'Hướng Dẫn Mua Hàng Máy Hút Bụi' },
      { label: 'Hướng Dẫn Mua Hàng Thiết Bị Bếp' },
      { label: 'Hướng Dẫn Mua Máy Lạnh' },
      { label: 'Câu hỏi thường gặp' },
    ],
  },
  {
    id: 5,
    name: 'Màn hình và Thiết bị lưu trữ',
    categories: [
      {
        label: 'Màn Hình',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/computing-and-displays/GNB_Computing_L1_02_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Thiết bị lưu trữ bộ nhớ',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/computing-and-displays/GNB_Computing_L1_2-3_88x88.png?$ORIGIN_PNG$',
      },
    ],
    discover: [
      { label: 'Vì sao chọn Màn Hình Gaming Odyssey OLED?' },
      { label: 'Vì sao chọn màn hình độ phân giải cao?' },
      { label: 'Chọn Màn hình Thông minh' },
      { label: 'Hỗ trợ lựa chọn màn hình Samsung' },
    ],
  },
  {
    id: 6,
    name: 'Thiết bị đeo',
    categories: [
      {
        label: 'Galaxy Watch',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/wearables/GNB_L1_Wearables_Galaxy-Watches_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Buds',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/s2602/gnb/GNB_Buds4-Pro_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Galaxy Ring',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/wearables/GNB_Wearables_L1_03_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện Thiết bị đeo',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/wearables/GNB_L1_Wearables_Watch-Accessories_88x88.png?$ORIGIN_PNG$',
      },
    ],
    discover: [
      { label: 'Tất cả về Galaxy' },
      { label: 'Samsung Health' },
      { label: 'Galaxy AI' },
      { label: 'Tìm thiết bị Galaxy' },
      { label: 'Chuyển sang Galaxy' },
      { label: 'One UI' },
      { label: 'Apps & Services' },
      { label: 'Samsung Care+' },
    ],
  },
  {
    id: 7,
    name: 'Phụ kiện',
    categories: [
      {
        label: 'Phụ kiện Điện thoại thông minh Galaxy',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/s2602/gnb/GNB-L1_Menu_Galaxy-Accessories_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện Galaxy Tab',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/home/09-2025/GNB_TS11_Accessories_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện Galaxy Watch',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/f2507/gnb/GNB_L1_Accessories_Watch-Accessories_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện tai nghe Galaxy',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/gnb/LNB_Galaxy-Buds-Accessories_144x144.png?$ORIGIN_PNG$',
      },
      {
        label: 'SmartTag',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/accessories/GNB_Accessories_L1_06_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện TV',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/accessories/GNB_Accessories_L1_07_88x88_0522.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện Loa Thanh',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/accessories/GNB_Accessories_L1_08_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện Máy chiếu',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/accessories/GNB_Accessories_L1_09_1_88x88_0522.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện thiết bị gia dụng',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/accessories/GNB_Accessories_L1_10_88x88.png?$ORIGIN_PNG$',
      },
      {
        label: 'Phụ kiện Máy giặt & Máy sấy',
        imgSrc:
          'https://images.samsung.com/is/image/samsung/assets/vn/revamp/gnb/accessories/GNB_Accessories_L1_12_88x88.png?$ORIGIN_PNG$',
      },
    ],
  },
  {
    id: 8,
    name: 'Ngày của Mẹ',
  },
];
