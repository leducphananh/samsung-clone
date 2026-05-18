'use client';
import Modal from '@/app/components/common/modal';
import {
  ColorOption as ColorOptionType,
  deviceVariants,
} from '@/app/constants/product-buying.constant';
import clsx from 'clsx';
import { CircleQuestionMark } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  activeDevice: string;
}

const ColorOption = ({ activeDevice }: Props) => {
  const device = deviceVariants.find(d => d.id === activeDevice);
  const colorOptions = useMemo(() => device?.colorOptions || [], [device]);
  const exclusiveColors = colorOptions.filter(c => c.exclusive);
  const normalColors = colorOptions.filter(c => !c.exclusive);

  const [selectedColor, setSelectedColor] = useState<ColorOptionType | null>(
    device?.colorOptions[0] || null,
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedColor(device?.colorOptions[0] || null);
  }, [device]);

  return (
    <div>
      <div className="pt-6 pb-4">
        <div className="flex items-center gap-1.75">
          <h2 className="font-samsung-sharp text-[20px] font-bold md:text-[24px]">
            Màu sắc
          </h2>
          <button type="button" className="relative cursor-pointer">
            <CircleQuestionMark strokeWidth={1.2} size={17} />
          </button>
        </div>
        <div className="font-samsung-sharp hidden border-l border-[#ddd] pl-2 text-[16px] text-[#999] md:block">
          Samsung.com only
        </div>
        <p className="mt-2 text-[12px] md:text-[14px]">Chọn màu yêu thích</p>
      </div>

      <div className="mt-6">
        <SelectedColorImage selectedColor={selectedColor} />

        <ExclusiveColorOption
          exclusiveColors={exclusiveColors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <ul className="mt-4 grid grid-cols-4 px-2">
          {normalColors.map(color => (
            <li
              key={color.id}
              className="col-span-1 flex flex-col items-center p-1 pb-4">
              <button
                onClick={() => setSelectedColor(color)}
                className={clsx(
                  'h-11 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent p-0.5',
                  selectedColor?.id === color.id && 'border-[#0c71e5]!',
                )}>
                <div
                  className="h-full w-full rounded-full border border-[#00000080]"
                  style={{ backgroundColor: color.hex }}
                />
              </button>
              <div className="mt-1 text-center text-[12px] md:text-[14px]">
                {color.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExclusiveColorOption = ({
  exclusiveColors,
  selectedColor,
  setSelectedColor,
}: {
  exclusiveColors: Array<ColorOptionType>;
  selectedColor: ColorOptionType | null;
  setSelectedColor: (color: ColorOptionType) => void;
}) => {
  if (exclusiveColors.length === 0) return null;

  if (exclusiveColors.length === 1) {
    return (
      <div className="rounded-[20px] bg-[#f7f7f7]">
        <button className="flex w-full cursor-pointer items-center gap-2.5 px-5 py-3.5">
          <div className="h-11 w-11 shrink-0 rounded-full p-0.5">
            <div
              className="h-full w-full rounded-full border border-[#00000080]"
              style={{ backgroundColor: exclusiveColors[0].hex }}
            />
          </div>

          <div className="flex flex-col items-start justify-start">
            <div className="text-[14px] font-bold">Phiên bản Màu độc quyền</div>
            <div className="mt-1 text-left text-[12px] md:text-[14px]">
              Chỉ có tại Samsung.com, Samsung West Lake, Samsung 68
            </div>
            <div className="mt-4 text-[12px] font-bold md:text-[14px]">
              {exclusiveColors[0].label}
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] border border-[#ddd] px-2 py-4">
      <div className="text-center text-[12px] font-bold md:text-[14px]">
        Phiên bản Màu độc quyền
      </div>
      <div className="mt-1 text-center text-[10px] md:text-[12px]">
        Chỉ có tại Samsung.com, Samsung West Lake, Samsung 68
      </div>
      <ul className="mt-4 flex w-full flex-wrap justify-center">
        {exclusiveColors.map(color => (
          <li
            key={color.id}
            className="flex w-1/4 flex-col items-center justify-center p-1 pb-4">
            <button
              onClick={() => setSelectedColor(color)}
              className={clsx(
                'h-11 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent p-0.5',
                selectedColor?.id === color.id && 'border-[#0c71e5]!',
              )}>
              <div
                className="h-full w-full rounded-full border border-[#00000080]"
                style={{ backgroundColor: color.hex }}
              />
            </button>
            <div className="mt-1 text-center text-[12px] md:text-[14px]">
              {color.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SelectedColorImage = ({
  selectedColor,
}: {
  selectedColor: ColorOptionType | null;
}) => {
  const [isShowMoreModalOpen, setIsShowMoreModalOpen] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  if (!selectedColor) return null;

  return (
    <>
      <div className="mb-7 block md:hidden">
        <Image
          src={selectedColor.img.src}
          alt={selectedColor.img.alt}
          width={430}
          height={286}
        />
        {selectedColor.slides.length > 0 && (
          <div className="mt-5 flex items-center justify-center">
            <button
              onClick={() => setIsShowMoreModalOpen(true)}
              className="rounded-3xl border border-black px-6.75 py-3 text-[16px] font-bold text-black transition-all duration-200 hover:bg-black hover:text-white">
              Xem thêm
            </button>
          </div>
        )}
      </div>

      <Modal
        isOpen={isShowMoreModalOpen}
        onClose={() => setIsShowMoreModalOpen(false)}
        className="max-w-245">
        <Swiper
          modules={[Navigation, Scrollbar]}
          onSwiper={setSwiper}
          onSlideChange={instance => setActiveImage(instance.realIndex)}
          loop
          slidesPerView={1}>
          {selectedColor.slides.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.src} alt={item.alt} width={336} height={336} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 flex items-center justify-center">
          {selectedColor.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => swiper?.slideToLoop(i)}
              aria-label={`Go to image ${i + 1}`}
              className="flex h-6 w-6 cursor-pointer items-center justify-center">
              <span
                className={clsx(
                  'h-2 w-2 rounded-full bg-[#757575]',
                  i === activeImage && 'bg-black',
                )}
              />
            </button>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default ColorOption;
