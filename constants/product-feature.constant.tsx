import ActualSize from '@/app/smartphones/[slug]/_components/product-feature/actual-size';
import CompareProduct from '@/app/smartphones/[slug]/_components/product-feature/compare-product';
import FAQ from '@/app/smartphones/[slug]/_components/product-feature/faq';
import NewsReview from '@/app/smartphones/[slug]/_components/product-feature/news-review';
import OutstandingFeature from '@/app/smartphones/[slug]/_components/product-feature/outstanding-feature';
import ProductReview from '@/app/smartphones/[slug]/_components/product-feature/product-review/product-review';

export const featureSections: {
  id: number;
  label: string;
  content: React.ReactNode;
  anchorId?: string;
}[] = [
  {
    id: 1,
    label: 'Xem kích thước thực tế',
    content: <ActualSize />,
  },
  {
    id: 2,
    label: 'Tính năng nổi bật',
    content: <OutstandingFeature />,
  },
  {
    id: 3,
    label: 'So sánh các dòng điện thoại',
    anchorId: 'compare-products',
    content: <CompareProduct />,
  },
  {
    id: 4,
    label: 'FAQ',
    content: <FAQ />,
  },
  {
    id: 5,
    label: 'Đánh giá Galaxy S26 Series từ báo chí, trang tin',
    content: <NewsReview />,
  },
  {
    id: 6,
    label: 'Đánh giá sản phẩm',
    content: <ProductReview />,
  },
];

export const outstandingFeatures: {
  id: number;
  title: string;
  desc: string;
  sup: number[];
  imgSrc: string;
}[] = [
  {
    id: 1,
    title: 'Đẳng cấp tinh tế, bền bỉ tối đa',
    desc: 'Sở hữu khung viền Armor Aluminum, trang bị kính cường lực Corning® Gorilla® Glass cao cấp và thiết kế kháng nước vượt trội.',
    sup: [1, 2, 3],
    imgSrc:
      'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/keyfeatures_design_PC.jpg',
  },
  {
    id: 2,
    title: 'Vi xử lý mạnh mẽ nhất, tối ưu riêng cho Galaxy',
    desc: 'Vi xử lý được tinh chỉnh riêng biệt sở hữu NPU, GPU và CPU cải tiến, mang đến hiệu năng AI vượt trội.',
    sup: [4],
    imgSrc:
      'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/keyfeatures_customizedAp_PC.jpg',
  },
  {
    id: 3,
    title: 'Màn hình di động chống nhìn trộm chủ động đầu tiên trên thế giới',
    desc: 'Trải nghiệm lớp màn chắn bảo mật tích hợp, chỉ có trên Galaxy S26 Ultra. Dễ dàng ẩn toàn bộ màn hình hoặc chỉ hiển thị riêng lẻ các thông báo và ứng dụng.',
    sup: [5],
    imgSrc:
      'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/keyfeatures_display_PC.jpg',
  },
  {
    id: 4,
    title: 'Tản nhiệt cải tiến Cân mọi cuộc Game',
    desc: 'Hệ thống buồng hơi tản nhiệt (Vapor Chamber) với thiết kế mới giúp phân tán nhiệt nhanh hơn bao giờ hết, mang lại hiệu suất tản nhiệt vượt trội hơn 21%.',
    sup: [6],
    imgSrc:
      'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/keyfeatures_vaporChamber_PC.jpg',
  },
  {
    id: 5,
    title: 'Sạc nhanh thần tốc, cân trọn suốt ngày dài',
    desc: 'Hỗ trợ Sạc siêu nhanh 3.0 (Super Fast Charging 3.0), giúp nạp đầy năng lượng với tốc độ thần tốc mà không ảnh hưởng đến sức khỏe pin.',
    sup: [7],
    imgSrc:
      'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/keyfeatures_battery_PC.jpg',
  },
  {
    id: 6,
    title: 'Nét mọi khung hình Sáng bừng khoảnh khắc đêm',
    desc: 'Với khẩu độ lớn hơn và khả năng giảm nhiễu vượt trội, camera 200MP mang đến những thước phim sắc nét ngay cả trong điều kiện thiếu sáng.',
    sup: [8, 9, 10],
    imgSrc:
      'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/keyfeatures_camera_PC.jpg',
  },
  {
    id: 7,
    title: 'Chỉnh Sửa Ảnh Thế Hệ Mới Nhập lệnh đơn giản, ảnh đẹp tức thì',
    desc: 'Dễ dàng chỉnh sửa ảnh chỉ bằng các yêu cầu bằng ngôn ngữ tự nhiên, và Galaxy AI sẽ hoàn thiện phần còn lại giúp bạn.',
    sup: [11],
    imgSrc:
      'https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/keyfeatures_photo_PC.jpg',
  },
];

export const compareProducts: {
  id: number;
  name: string;
  variants: {
    id: number;
    color: string;
    hex: string;
    exclusive: boolean;
    imgSrc: string;
    default?: boolean;
  }[];
  desc: string;
  highlights: string[];
}[] = [
  {
    id: 1,
    name: 'Galaxy S26 Ultra',
    desc: 'Chiếc điện thoại AI đột phá với ',
    highlights: [
      'Màn hình Chống nhìn trộm chủ động, Vi xử lý thế hệ mới',
      'Camera mắt thần bóng đêm',
    ],
    variants: [
      {
        id: 1,
        color: 'Trắng Classic',
        hex: '#f3f5f7',
        exclusive: false,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzwcxxv-thumb-550804953?$310_N_PNG$',
      },
      {
        id: 2,
        color: 'Xanh Sky Blue',
        hex: '#b2cbd9',
        exclusive: false,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948blbcxxv-thumb-550804058?$310_N_PNG$',
      },
      {
        id: 3,
        color: 'Đen Classic',
        hex: '#4a4d53',
        exclusive: false,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzkcxxv-thumb-550804317?$310_N_PNG$',
      },
      {
        id: 4,
        color: 'Tím Cobalt',
        hex: '#686883',
        exclusive: false,
        default: true,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzvcxxv-thumb-550804756?$310_N_PNG$',
      },
      {
        id: 5,
        color: 'Bạc Shadow',
        hex: '#c5caca',
        exclusive: true,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzscxxv-thumb-550803787?$310_N_PNG$',
      },
      {
        id: 6,
        color: 'Vàng Hồng',
        hex: '#e9d2c5',
        exclusive: true,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzdcxxv-thumb-550803545?$310_N_PNG$',
      },
    ],
  },
  {
    id: 2,
    name: 'Galaxy S26+',
    desc: 'Chiếc điện thoại thông minh cao cấp mang đến ',
    highlights: ['Hiệu năng mạnh mẽ', 'các tính năng AI thông minh'],
    variants: [
      {
        id: 1,
        color: 'Trắng Classic',
        hex: '#f3f5f7',
        exclusive: false,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578558-sm-s947bzwcxxv-thumb-551023857?$310_N_PNG$',
      },
      {
        id: 2,
        color: 'Xanh Sky Blue',
        hex: '#b2cbd9',
        exclusive: false,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578558-sm-s947blbcxxv-thumb-551023800?$310_N_PNG$',
      },
      {
        id: 3,
        color: 'Đen Classic',
        hex: '#4a4d53',
        exclusive: false,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578558-sm-s947bzkcxxv-thumb-551023819?$310_N_PNG$',
      },
      {
        id: 4,
        color: 'Tím Cobalt',
        hex: '#686883',
        exclusive: false,
        default: true,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578558-sm-s947bzvcxxv-thumb-551023838?$310_N_PNG$',
      },
      {
        id: 5,
        color: 'Bạc Shadow',
        hex: '#c5caca',
        exclusive: true,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578585-sm-s947bzscxxv-thumb-550882294?$310_N_PNG$',
      },
      {
        id: 6,
        color: 'Vàng Hồng',
        hex: '#e9d2c5',
        exclusive: true,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578585-sm-s947bzdcxxv-thumb-550882256?$310_N_PNG$',
      },
    ],
  },
  {
    id: 3,
    name: 'Galaxy S26',
    desc: 'Chiếc điện thoại thông minh sở hữu thiết kế tinh tế, kích thước nhỏ gọn cùng ',
    highlights: ['hiệu năng bền bỉ', 'các tính năng AI thông minh'],
    variants: [
      {
        id: 1,
        color: 'Trắng Classic',
        hex: '#f3f5f7',
        exclusive: false,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-sm-s942bzwqxxv-thumb-550887061?$310_N_PNG$',
      },
      {
        id: 2,
        color: 'Xanh Sky Blue',
        hex: '#b2cbd9',
        exclusive: false,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-sm-s942blbqxxv-thumb-550886945?$310_N_PNG$',
      },
      {
        id: 3,
        color: 'Đen Classic',
        hex: '#4a4d53',
        exclusive: false,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-sm-s942bzkqxxv-thumb-550886984?$310_N_PNG$',
      },
      {
        id: 4,
        color: 'Tím Cobalt',
        hex: '#686883',
        exclusive: false,
        default: true,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-sm-s942bzvqxxv-thumb-550887023?$310_N_PNG$',
      },
      {
        id: 5,
        color: 'Bạc Shadow',
        hex: '#c5caca',
        exclusive: true,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-578643-sm-s942bzsqxxv-thumb-550889309?$310_N_PNG$',
      },
      {
        id: 6,
        color: 'Vàng Hồng',
        hex: '#e9d2c5',
        exclusive: true,
        imgSrc:
          'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-578643-sm-s942bzdqxxv-thumb-550889271?$310_N_PNG$',
      },
    ],
  },
];
