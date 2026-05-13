type ScreenWeight = {
  id: number;
  screen: {
    label: string;
    value: string;
    highlight?: boolean;
    imgSrc?: string;
  };
  weight: {
    label: string;
    value: string;
    highlight?: boolean;
  };
};

export const screenWeights: ScreenWeight[] = [
  {
    id: 1,
    screen: {
      label: 'Kích thước màn hình chính',
      value: '6.9”',
      highlight: true,
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-product-size-general-phone.svg',
    },
    weight: {
      label: 'Trọng lượng',
      value: '214g',
      highlight: false,
    },
  },
  {
    id: 2,
    screen: {
      label: 'Kích thước màn hình chính',
      value: '6.7”',
      highlight: false,
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-product-size-general-phone.svg',
    },
    weight: {
      label: 'Trọng lượng',
      value: '190g',
      highlight: false,
    },
  },
  {
    id: 3,
    screen: {
      label: 'Kích thước màn hình chính',
      value: '6.3”',
      highlight: false,
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-product-size-general-phone.svg',
    },
    weight: {
      label: 'Trọng lượng',
      value: '167g',
      highlight: true,
    },
  },
];

type CameraSpecItem = {
  label: string;
  value: string;
  highlight?: boolean;
  imgSrc?: string;
};

type CameraSpec = {
  id: number;
  rearWide: CameraSpecItem;
  rearUltraWide: CameraSpecItem;
  rearTele: CameraSpecItem;
  front: CameraSpecItem;
  zoomLines: {
    label: string;
    value: string;
  };
};

export const cameraSpecs: CameraSpec[] = [
  {
    id: 1,
    rearWide: {
      label: 'Góc rộng',
      value: '200.0 MP',
      highlight: true,
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-camera-rear-galaxy-s26ultra.svg',
    },
    rearUltraWide: {
      label: 'Góc siêu rộng',
      value: '50.0 MP',
      highlight: true,
    },
    rearTele: {
      label: 'Ống kính Tele',
      value: '50.0/10.0 MP',
      highlight: true,
    },
    front: {
      label: 'Mặt trước',
      value: '12.0 MP',
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-camera-front-mobile.svg',
    },
    zoomLines: {
      label: 'Thu phóng',
      value:
        'Thu phóng Quang học 3x và 5x,\nThu phóng Chất lượng Quang học 2x và 10x,\nThu phóng Kỹ thuật số lên đến 100x',
    },
  },
  {
    id: 2,
    rearWide: {
      label: 'Góc rộng',
      value: '50.0 MP',
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-camera-rear-galaxy-s26ultra.svg',
    },
    rearUltraWide: {
      label: 'Góc siêu rộng',
      value: '12.0 MP',
    },
    rearTele: {
      label: 'Ống kính Tele',
      value: '10.0 MP',
    },
    front: {
      label: 'Mặt trước',
      value: '12.0 MP',
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-camera-front-mobile.svg',
    },
    zoomLines: {
      label: 'Thu phóng',
      value:
        'Thu phóng Quang học 3x,\nThu phóng Chất lượng Quang học 2x,\nThu phóng Kỹ thuật số lên đến 30x',
    },
  },
  {
    id: 3,
    rearWide: {
      label: 'Góc rộng',
      value: '50.0 MP',
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-camera-rear-galaxy-s26ultra.svg',
    },
    rearUltraWide: {
      label: 'Góc siêu rộng',
      value: '12.0 MP',
    },
    rearTele: {
      label: 'Ống kính Tele',
      value: '10.0 MP',
    },
    front: {
      label: 'Mặt trước',
      value: '12.0 MP',
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-camera-front-mobile.svg',
    },
    zoomLines: {
      label: 'Thu phóng',
      value:
        'Thu phóng Quang học 3x,\nThu phóng Chất lượng Quang học 2x,\nThu phóng Kỹ thuật số lên đến 30x',
    },
  },
];
