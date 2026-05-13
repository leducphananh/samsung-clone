export const screenWeights: {
  id: number;
  screen: {
    label: string;
    value: string;
    highlight?: boolean;
    imgSrc: string;
  };
  weight: {
    label: string;
    value: string;
    highlight?: boolean;
  };
  dimension: {
    label: string;
    value: string;
  };
}[] = [
  {
    id: 1,
    screen: {
      label: 'Kích thước màn hình chính',
      value: '6.9”',
      highlight: true,
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/product-size-general-phone.svg',
    },
    weight: {
      label: 'Trọng lượng',
      value: '214g',
    },
    dimension: {
      label: 'Khi mở ra (HxWxD)',
      value: '163,6 x 78,1 x 7,9',
    },
  },
  {
    id: 2,
    screen: {
      label: 'Kích thước màn hình chính',
      value: '6.7”',
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/product-size-general-phone.svg',
    },
    weight: {
      label: 'Trọng lượng',
      value: '190g',
    },
    dimension: {
      label: 'Khi mở ra (HxWxD)',
      value: '158,4 x 75,8 x 7,3',
    },
  },
  {
    id: 3,
    screen: {
      label: 'Kích thước màn hình chính',
      value: '6.3”',
      imgSrc:
        'https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/product-size-general-phone.svg',
    },
    weight: {
      label: 'Trọng lượng',
      value: '167g',
      highlight: true,
    },
    dimension: {
      label: 'Khi mở ra (HxWxD)',
      value: '149,6 x 71,7 x 7,2',
    },
  },
];

export const screenSpecs: {
  id: number;
  rearWide: {
    label: string;
    value: string;
    imgSrc: string;
    highlight?: boolean;
  };
  rearUltraWide: {
    label: string;
    value: string;
    highlight?: boolean;
  };
  rearTele: {
    label: string;
    value: string;
    highlight?: boolean;
  };
  front: {
    label: string;
    value: string;
    imgSrc: string;
  };
  zoomLines: {
    label: string;
    value: string;
  };
}[] = [
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

export const batterySpecs: {
  id: number;
  value: string;
  desc: string;
  highlightValue: boolean;
  highlightDesc: boolean;
}[] = [
  {
    id: 1,
    value: '5000 mAh',
    desc: 'Phát lại video lên đến 31 giờ',
    highlightValue: true,
    highlightDesc: true,
  },
  {
    id: 2,
    value: '4900 mAh',
    desc: 'Phát lại video lên đến 31 giờ',
    highlightValue: false,
    highlightDesc: true,
  },
  {
    id: 3,
    value: '4300 mAh',
    desc: 'Phát lại video lên đến 30 giờ',
    highlightValue: false,
    highlightDesc: false,
  },
];
