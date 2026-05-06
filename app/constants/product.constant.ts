import {
  Laptop,
  ListTodo,
  LucideProps,
  Refrigerator,
  Smartphone,
  Star,
  Tv,
  Watch,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

const newFeaturedProducts = [
  {
    id: 1,
    title: 'Galaxy S26 Ultra',
    price: 42990000,
    swatches: ['#f3f4f5', '#b3cbd9', '#494d53', '#686884'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzvcxxv-thumb-550804756?$200_200_PNG$',
  },
  {
    id: 2,
    title: '77 Inch OLED S90F 4K Samsung Vision A...',
    price: 71790000,
    options: ['83', '77', '65', '55'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/qa77s90faexxv/gallery/vn-oled-s90f-qa77s90faexxv-thumb-545253487?$200_200_PNG$',
  },
  {
    id: 3,
    title: 'Máy Giặt Cửa Trên Ecobubble 9.5kg',
    price: 6590000,
    swatches: ['#191a1a'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/wa40f95e1csv/gallery/vn-wa40f21-wa40f95e1csv-thumb-551430860?$200_200_PNG$',
  },
  {
    id: 4,
    title: 'Galaxy Watch8 (Bluetooth, 44 mm)',
    price: 9189000,
    swatches: ['#5b6166', '#aaadad'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f2507/gallery/vn-galaxy-watch8-l330-sm-l330nzsaxxv-thumb-547653084?$200_200_PNG$',
  },
  {
    id: 5,
    title: 'Galaxy Buds4 Pro',
    price: 6790000,
    swatches: ['#494d53', '#f3f4f5'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-buds4-r640-sm-r640nzwaxxv-thumb-550975810?$200_200_PNG$',
  },
  {
    id: 6,
    title: 'Galaxy Ring - Với Bộ Thử nhẫn Thông m...',
    price: 9808363,
    swatches: ['#c89403', '#8a8d8f', '#363432'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/sm-q5kaph/gallery/vn-galaxy-ring-q500-528300-sm-q5kaph-thumb-544217079?$200_200_PNG$',
  },
];

const phoneProducts = [
  {
    id: 1,
    title: 'Galaxy S26 Ultra',
    price: 42990000,
    swatches: ['#f3f4f5', '#b3cbd9', '#494d53', '#686884'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzvcxxv-thumb-550804756?$200_200_PNG$',
  },
  {
    id: 2,
    title: 'Galaxy S26+',
    price: 35990000,
    swatches: ['#f3f4f5', '#b3cbd9', '#494d53', '#686884'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578558-sm-s947bzvcxxv-thumb-551023838?$200_200_PNG$',
  },
  {
    id: 3,
    title: 'Galaxy S26',
    price: 31990000,
    swatches: ['#f3f4f5', '#b3cbd9', '#494d53', '#686884'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-sm-s942bzvqxxv-thumb-550887023?$200_200_PNG$',
  },
  {
    id: 4,
    title: 'Galaxy S26 Ultra (chỉ có tại Samsung....',
    price: 42990000,
    swatches: ['#c7c8ca', '#ead2c6'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzdcxxv-thumb-550803545?$200_200_PNG$',
  },
  {
    id: 5,
    title: 'Galaxy S26+ (chỉ có tại Samsung.com)',
    price: 35990000,
    swatches: ['#c7c8ca', '#ead2c6'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s947-578585-sm-s947bzdcxxv-thumb-550882256?$200_200_PNG$',
  },
  {
    id: 6,
    title: 'Galaxy S26 (chỉ có tại Samsung.com)',
    price: 31990000,
    swatches: ['#c7c8ca', '#ead2c6'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-s942-578643-sm-s942bzdqxxv-thumb-550889271?$200_200_PNG$',
  },
  {
    id: 7,
    title: 'Galaxy S25 FE',
    price: 15689000,
    swatches: ['#f5f7f6', '#becae9', '#3c5b8a', '#494a4d'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/sm-s731bzkbxxv/gallery/vn-galaxy-s25-fe-sm-s731-sm-s731bzkbxxv-thumb-548690752?$200_200_PNG$',
  },
  {
    id: 8,
    title: 'Galaxy S25 Edge',
    price: 20939000,
    swatches: ['#c8d3df', '#4a4a4d', '#b0b7b9'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ps_2504/gallery/vn-galaxy-s25-s937-sm-s937bzscxxv-thumb-546085978?$200_200_PNG$',
  },
  {
    id: 9,
    title: 'Galaxy S25 Ultra (chỉ có tại Samsung.com)',
    price: 33372000,
    swatches: ['#ead2c6', '#a3ac9b', '#4a4a4d'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/2501/gallery/vn-galaxy-s25-s938-534623-sm-s938bakbxxv-thumb-544745867?$200_200_PNG$',
  },
  {
    id: 10,
    title: 'Galaxy S25 Ultra',
    price: 39490000,
    swatches: ['#d9d9d6', '#b3ab9e', '#4a4a4d', '#8e9fbc'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/2501/gallery/vn-galaxy-s25-s938-sm-s938bzbcxxv-thumb-544711538?$200_200_PNG$',
  },
  {
    id: 11,
    title: 'Galaxy S25 (chỉ có tại Samsung.com)',
    price: 22572000,
    swatches: ['#ee6779', '#ead2c6', '#4c525c'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/2501/gallery/vn-galaxy-s25-s931-534082-sm-s931bzkcxxv-thumb-544668365?$200_200_PNG$',
  },
];

const tvProducts = [
  {
    id: 1,
    title: '100 Inch Neo QLED QN80H 4K Samsung Vi...',
    price: 119000000,
    options: ['100'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/qa100qn80hkxxv/gallery/vn-qled-100qn80h-qa100qn80hkxxv-thumb-551373084?$200_200_PNG$',
  },
  {
    id: 2,
    title: '85 Inch Neo QLED QN80H 4K Samsung Vis...',
    price: 72900000,
    options: ['85', '75', '65', '55'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/qa85qn80hakxxv/gallery/vn-qled-qn80h-qa85qn80hakxxv-thumb-551072618?$200_200_PNG$',
  },
  {
    id: 3,
    title: '115 Inch Neo QLED QN90F 4K Samsung Vi...',
    price: 299000000,
    options: ['115'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/qa115qn90fkxxv/gallery/vn-qled-115qn90f-qa115qn90fkxxv-thumb-548314049?$200_200_PNG$',
  },
  {
    id: 4,
    title: '55 Inch Neo QLED QN70F 4K Samsung Vis...',
    price: 19790000,
    options: ['85', '75', '65', '55'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/qa55qn70fakxxv/gallery/vn-qled-qn70f-qa55qn70fakxxv-thumb-545475793?$200_200_PNG$',
  },
  {
    id: 5,
    title: '85 Inch Neo QLED QN950F 8K Samsung Vis...',
    price: 195690000,
    options: ['85', '75'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/qa85qn950fkxxv/gallery/vn-qled-tv-qa85qn950fkxxv-m-t-tr--c-m-u--en-thumb-547800170?$200_200_PNG$',
  },
  {
    id: 6,
    title: '65 Inch Neo QLED QN90F 4K Samsung Vis...',
    price: 42190000,
    options: ['75', '65'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/qa65qn90fakxxv/gallery/vn-qled-qn90f-qa65qn90fakxxv-thumb-545248946?$200_200_PNG$',
  },
];

const homeApplianceProducts = [
  {
    id: 1,
    title: 'Bespoke AI Tủ Lạnh 4 Cửa Màn Hình Thô...',
    price: 119673720,
    swatches: [],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f-rf65sm-x520n/gallery/vn-bespoke-ai-4-door-refrigerator-ai-smart-screen-636l-and-galaxy-tab-s10-fe-wi-fi-f-rf65sm-x520n-thumb-551000417?$200_200_PNG$',
  },
  {
    id: 2,
    title: 'Combo Tết Linh Đình',
    price: 171699480,
    swatches: ['#e3e3e3'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f-rf65nz64nv7b/gallery/vn-bespoke-ai-4-door-refrigerator-ai-smart-screen-636l-and-induction-cooktop-4-flexible-dual-flex-zones-7400w-and-cooktop-dual-flex-zone-wifi-connectivity-76l-f-rf65nz64nv7b-thumb-550420759?$200_200_PNG$',
  },
  {
    id: 3,
    title: 'Combo Tết Giải Trí',
    price: 182510280,
    swatches: ['#e3e3e3'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f-rf65dbwd25db/gallery/vn-bespoke-ai-4-door-refrigerator-ai-smart-screen-636l-and-heat-pump-washer-dryer-25-15kg-f-rf65dbwd25db-thumb-550420427?$200_200_PNG$',
  },
  {
    id: 4,
    title: 'Tủ Lạnh Ngăn Đông Dưới Ngăn Đông Mềm ...',
    price: 9290000,
    swatches: ['#c0c0c0', '#000000'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rb27n4020b1-sv/gallery/vn-ref-rb4000-565332-rb27n4020b1-sv-thumb-549159749?$200_200_PNG$',
  },
  {
    id: 5,
    title: 'Tủ Lạnh Ngăn Đông Dưới Ngăn Đông Mềm ...',
    price: 13490000,
    swatches: ['#c0c0c0', '#000000'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rb30n4190b1-sv/gallery/vn-ref-rb4000-rb30n4190b1-sv-thumb-549184683?$200_200_PNG$',
  },
  {
    id: 6,
    title: 'Tủ Lạnh 4 Cửa Ngăn Lấy Nước Ngoài, 48...',
    price: 55860000,
    swatches: ['#000000'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f-svwedding4/gallery/vn-bespoke-ai-front-wahser-and-multi-door-refrigerator-f-svwedding4-thumb-546935021?$200_200_PNG$',
  },
  {
    id: 7,
    title: 'Bespoke AI Tủ Lạnh Side By Side Kết N...',
    price: 27990000,
    swatches: ['#252629'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rs70f65k2fsv/gallery/vn-rs90f-basic-546898-rs70f65k2fsv-thumb-546217157?$200_200_PNG$',
  },
  {
    id: 8,
    title: 'Tủ Lạnh Bespoke AI Side by Side, 583 ...',
    price: 43270000,
    swatches: ['#8b8e8d'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f-svwedding2/gallery/vn-583l-side-by-side-refrigerator-and-12kg-ai-ecobubble-front-load-washing-machine-and-23l-bespoke-microwave-and-430w-bagless-vacuum-cleaner-f-svwedding2-thumb-545300463?$200_200_PNG$',
  },
  {
    id: 9,
    title: 'Tủ Lạnh Ngăn Đông Trên, 345 L và Máy ...',
    price: 26060000,
    swatches: ['#000000'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f-svwedding1/gallery/vn-345-l-top-mount-freezer-and-9-5-kg-top-load-washing-machine-and-23l-microwave-grill-series-and-360w-canister-vacuum-cleaner-f-svwedding1-thumb-545300150?$200_200_PNG$',
  },
  {
    id: 10,
    title: 'Bespoke AI Tủ Lạnh Side By Side Kết N...',
    price: 36990000,
    swatches: ['#17171f'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rs80f65j2bsv/gallery/vn-rs90f-aod-rs80f65j2bsv-thumb-545273188?$200_200_PNG$',
  },
  {
    id: 11,
    title: 'Bespoke AI Tủ Lạnh Side By Side Kết N...',
    price: 18290000,
    swatches: ['#c0c0c0', '#252629'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rs70f65q3fsv/gallery/vn-rs90f-basic-rs70f65q3fsv-thumb-545198492?$200_200_PNG$',
  },
  {
    id: 12,
    title: 'Bespoke AI Tủ Lạnh 4 Cửa Màn Hình AI ...',
    price: 89990000,
    swatches: ['#e3e3e3'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rf65db990012sv/gallery/vn-t-style-french-door-32inch-family-hub-rf65db990012sv-thumb-544292500?$200_200_PNG$',
  },
  {
    id: 13,
    title: 'Bespoke AI Tủ Lạnh Side By Side Màn H...',
    price: 41990000,
    swatches: ['#252629'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rs90f65d2fsv/gallery/vn-rs80f-9-inch-ai-home-rs90f65d2fsv-thumb-545198321?$200_200_PNG$',
  },
  {
    id: 14,
    title: 'Bespoke AI Tủ Lạnh Side By Side Kết N...',
    price: 17990000,
    swatches: ['#000000'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rs57dg410eb4sv/gallery/vn-rs4000dc-side-by-side-with-large-capacity-527730-rs57dg410eb4sv-thumb-544141369?$200_200_PNG$',
  },
  {
    id: 15,
    title: 'Bespoke AI Tủ Lạnh Side By Side Kết N...',
    price: 15990000,
    swatches: ['#c0c0c0'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rs57dg400em9sv/gallery/vn-rs4000dc-side-by-side-with-large-capacity-rs57dg400em9sv-thumb-542837712?$200_200_PNG$',
  },
  {
    id: 16,
    title: 'Bespoke AI Tủ Lạnh Ngăn Đông Trên Thi...',
    price: 12790000,
    swatches: ['#e3e3e3', '#242e3e'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rt31cb56248asv/gallery/vn-top-mount-freezer-bespoke-rt31cb56248asv-thumb-536476428?$200_200_PNG$',
  },
  {
    id: 17,
    title: 'Bespoke AI Tủ Lạnh Ngăn Đông Trên Thi...',
    price: 17690000,
    swatches: ['#e3e3e3', '#3c3c3e', '#242e3e'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rt47cb66868asv/gallery/vn-top-mount-freezer-bespoke-design-453404-rt47cb66868asv-thumb-536331958?$200_200_PNG$',
  },
  {
    id: 18,
    title: 'Tủ Lạnh Ngăn Đông Trên Ngăn Đông Mềm ...',
    price: 12290000,
    swatches: ['#000000'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rt38cg6584b1sv/gallery/vn-top-mount-freezer-smartthings-ai-energy-mode-455269-rt38cg6584b1sv-thumb-536331766?$200_200_PNG$',
  },
  {
    id: 19,
    title: 'Tủ Lạnh Ngăn Đông Trên Ngăn Đông Mềm ...',
    price: 10290000,
    swatches: ['#000000'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rt31cg5424b1sv/gallery/vn-top-mount-freezer-spacemax-rt31cg5424b1sv-thumb-536303518?$200_200_PNG$',
  },
  {
    id: 20,
    title: 'Bespoke AI Tủ Lạnh 4 Cửa Quầy Minibar ...',
    price: 39890000,
    swatches: ['#000000'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/rf59c766fb1-sv/gallery/vn-rf7000cc-french-door-refrigerators-non-bespoke-has-beverage-center-rf59c766fb1-sv-thumb-536797696?$200_200_PNG$',
  },
];

const wearableProducts = [
  {
    id: 1,
    title: 'Galaxy Watch8 (Bluetooth, 44 mm)...',
    price: 9189000,
    swatches: ['#5b6166', '#aaadad'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f2507/gallery/vn-galaxy-watch8-l330-sm-l330nzsaxxv-thumb-547653084?$200_200_PNG$',
  },
  {
    id: 2,
    title: 'Galaxy Watch8 (Bluetooth, 40 mm)...',
    price: 8189000,
    swatches: ['#5b6166', '#aaadad'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f2507/gallery/vn-galaxy-watch8-l320-sm-l320nzsaxxv-thumb-547653044?$200_200_PNG$',
  },
  {
    id: 3,
    title: 'Galaxy Watch8 Classic (Bluetooth, 46 ...',
    price: 11989000,
    swatches: ['#f5f7f6', '#494a4d'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f2507/gallery/vn-galaxy-watch8-classic-l500-sm-l500nzkaxxv-thumb-547652301?$200_200_PNG$',
  },
  {
    id: 4,
    title: 'Galaxy Watch8 (LTE, 40 mm)...',
    price: 9189000,
    swatches: ['#5b6166', '#aaadad'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f2507/gallery/vn-galaxy-watch8-l325-sm-l325fzsaxxv-thumb-547653119?$200_200_PNG$',
  },
  {
    id: 5,
    title: 'Galaxy Watch8 Classic (LTE, 46 mm)...',
    price: 12989000,
    swatches: ['#f5f7f6', '#494a4d'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f2507/gallery/vn-galaxy-watch8-classic-l505-sm-l505fzkaxxv-thumb-547652473?$200_200_PNG$',
  },
  {
    id: 6,
    title: 'Galaxy Watch Ultra (2025) (LTE, 47 m...',
    price: 15989000,
    swatches: ['#c8caca', '#b3ab9e', '#525257', '#304561'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/f2507/gallery/vn-galaxy-watch-ultra-2025-l705-sm-l705fzb1xxv-thumb-547647209?$200_200_PNG$',
  },
  {
    id: 7,
    title: 'Galaxy Fit3...',
    price: 889000,
    swatches: ['#fcd0b8', '#e4e9e9', '#3d3f43'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/sm-r390nzaaxxv/gallery/vn-galaxy-fit3-r390-sm-r390nzaaxxv-thumb-539781173?$200_200_PNG$',
  },
];

const accessoryProducts = [
  {
    id: 1,
    title: 'Ốp Lưng Mỏng Nam Châm Magnet ...',
    price: 1521180,
    swatches: ['#c9d6dd', '#a4a09d', '#494d53', '#bdc4d6'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-ss948cvegww/gallery/vn-galaxy-s26ultra-ss948-ef-ss948cvegww-thumb-551596235?$200_200_PNG$',
  },
  {
    id: 2,
    title: 'Ốp Lưng Silicone Nam Châm Ma...',
    price: 1160568,
    swatches: [
      '#f57a6e',
      '#e9e9e7',
      '#b3cbd9',
      '#96989b',
      '#494d53',
      '#666e91',
    ],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-es948cvegww/gallery/vn-galaxy-s26ultra-es948-ef-es948cvegww-thumb-551596379?$200_200_PNG$',
  },
  {
    id: 3,
    title: 'Ốp Lưng Siêu Bảo Vệ Nam ...',
    price: 1610604,
    swatches: ['#58565b'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-rs948cbegww/gallery/vn-galaxy-s26ultra-rs948-ef-rs948cbegww-thumb-551595950?$200_200_PNG$',
  },
  {
    id: 4,
    title: 'Ốp Lưng Trong Suốt Nam Châ...',
    price: 891324,
    swatches: ['#fffffe'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-cs948ctegww/gallery/vn-galaxy-s26ultra-cs948-ef-cs948ctegww-thumb-551596248?$200_200_PNG$',
  },
  {
    id: 5,
    title: 'Ốp Lưng Trong Suốt Galaxy ...',
    price: 441288,
    swatches: ['#fffffe'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-qs948ctegww/gallery/vn-galaxy-s26ultra-qs948-ef-qs948ctegww-thumb-551602155?$200_200_PNG$',
  },
  {
    id: 6,
    title: 'Ốp Lưng Mỏng Nam Châm Magnet ...',
    price: 1521180,
    swatches: ['#c9d6dd', '#a4a09d', '#494d53', '#bdc4d6'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-ss947cvegww/gallery/vn-galaxy-s26plus-ss947-ef-ss947cvegww-thumb-551596800?$200_200_PNG$',
  },
  {
    id: 7,
    title: 'Ốp Lưng Silicone Nam Châm Ma...',
    price: 1160568,
    swatches: [
      '#f57a6e',
      '#e9e9e7',
      '#b3cbd9',
      '#96989b',
      '#494d53',
      '#666e91',
    ],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-es947cvegww/gallery/vn-galaxy-s26plus-es947-ef-es947cvegww-thumb-551601996?$200_200_PNG$',
  },
  {
    id: 8,
    title: 'Ốp Lưng Siêu Bảo Vệ Nam ...',
    price: 1610604,
    swatches: ['#58565b'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-rs947cbegww/gallery/vn-galaxy-s26plus-rs947-ef-rs947cbegww-thumb-551596623?$200_200_PNG$',
  },
  {
    id: 9,
    title: 'Ốp Lưng Trong Suốt Nam Châ...',
    price: 891324,
    swatches: ['#fffffe'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-cs947ctegww/gallery/vn-galaxy-s26plus-cs947-ef-cs947ctegww-thumb-551602037?$200_200_PNG$',
  },
  {
    id: 10,
    title: 'Ốp Lưng Trong Suốt Galaxy ...',
    price: 441288,
    swatches: ['#fffffe'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-qs947ctegww/gallery/vn-galaxy-s26plus-qs947-ef-qs947ctegww-thumb-551602137?$200_200_PNG$',
  },
  {
    id: 11,
    title: 'Ốp Lưng Mỏng Nam Châm Magnet ...',
    price: 1521180,
    swatches: ['#c9d6dd', '#a4a09d', '#494d53', '#bdc4d6'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-ss942cvegww/gallery/vn-galaxy-s26-ss942-ef-ss942cvegww-thumb-551596744?$200_200_PNG$',
  },
  {
    id: 12,
    title: 'Ốp Lưng Silicone Nam Châm Ma...',
    price: 1160568,
    swatches: [
      '#f57a6e',
      '#e9e9e7',
      '#b3cbd9',
      '#96989b',
      '#494d53',
      '#666e91',
    ],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-es942cvegww/gallery/vn-galaxy-s26-es942-ef-es942cvegww-thumb-551601864?$200_200_PNG$',
  },
  {
    id: 13,
    title: 'Ốp Lưng Siêu Bảo Vệ Nam ...',
    price: 1610604,
    swatches: ['#58565b'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-rs942cbegww/gallery/vn-galaxy-s26-rs942-ef-rs942cbegww-thumb-551596588?$200_200_PNG$',
  },
  {
    id: 14,
    title: 'Ốp Lưng Trong Suốt Nam Châ...',
    price: 891324,
    swatches: ['#fffffe'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-cs942ctegww/gallery/vn-galaxy-s26-cs942-ef-cs942ctegww-thumb-551602024?$200_200_PNG$',
  },
  {
    id: 15,
    title: 'Ốp Lưng Trong Suốt Galaxy ...',
    price: 441288,
    swatches: ['#fffffe'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/ef-qs942ctegww/gallery/vn-galaxy-s26-qs942-ef-qs942ctegww-thumb-551602055?$200_200_PNG$',
  },
  {
    id: 16,
    title: 'Ốp Lưng C11 Nam Châm Magnet ...',
    price: 1250964,
    swatches: ['#000000', '#3e4e5f'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-c11-magnet-case-gp-fps948pgbnw-thumb-550661985?$200_200_PNG$',
  },
  {
    id: 17,
    title: 'Ốp Lưng Capella Nam Châm Mag...',
    price: 1071144,
    swatches: ['#7f7f7e'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-capella-magnet-case-gp-fps948pgajw-thumb-550662009?$200_200_PNG$',
  },
  {
    id: 18,
    title: 'Ốp Lưng C11 Nam Châm Magnet ...',
    price: 1250964,
    swatches: ['#000000', '#3e4e5f'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-plus-c11-magnet-case-gp-fps947pgbnw-thumb-550662060?$200_200_PNG$',
  },
  {
    id: 19,
    title: 'Ốp Lưng Capella Nam Châm Mag...',
    price: 1071144,
    swatches: ['#7f7f7e'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-plus-capella-magnet-case-gp-fps947pgajw-thumb-550662047?$200_200_PNG$',
  },
  {
    id: 20,
    title: 'Ốp Lưng C11 Nam Châm Magnet ...',
    price: 1250964,
    swatches: ['#000000', '#3e4e5f'],
    imageSrc:
      'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-c11-magnet-case-gp-fps942pgbnw-thumb-550661950?$200_200_PNG$',
  },
];

export const categories: {
  id: number;
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  items: {
    id: number;
    title: string;
    price: number;
    swatches?: string[];
    options?: string[];
    imageSrc: string;
  }[];
}[] = [
  {
    id: 1,
    name: 'Mới & Nổi bật',
    icon: Star,
    items: newFeaturedProducts,
  },
  { id: 2, name: 'Di động', icon: Smartphone, items: phoneProducts },
  { id: 3, name: 'TV & AV', icon: Tv, items: tvProducts },
  { id: 4, name: 'Gia dụng', icon: Refrigerator, items: homeApplianceProducts },
  { id: 5, name: 'IT', icon: Laptop, items: [] },
  { id: 6, name: 'Thiết bị đeo', icon: Watch, items: wearableProducts },
  { id: 7, name: 'Phụ kiện', icon: ListTodo, items: accessoryProducts },
];
