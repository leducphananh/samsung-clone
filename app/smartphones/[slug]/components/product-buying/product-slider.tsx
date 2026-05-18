'use client';
import { deviceVariants } from '@/constants/product-buying.constant';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  activeDevice: string;
}

const ProductSlider = ({ activeDevice }: Props) => {
  const [activeImage, setActiveImage] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const currentVariant = deviceVariants.find(
    variant => variant.id === activeDevice,
  );
  const galleryImages = currentVariant?.galleryImages || [];

  return (
    <div className="relative flex w-full flex-col items-center lg:sticky lg:top-38 lg:min-w-0 lg:flex-1 lg:self-start">
      {/* Main image */}
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg">
        {/* Prev arrow */}
        <button
          onClick={() => swiper?.slidePrev()}
          aria-label="Previous image"
          className="absolute left-2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0000001a] bg-[#ffffff73] transition-all duration-200 hover:bg-[#f7f7f7]">
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>

        <Swiper
          modules={[Navigation, Scrollbar]}
          onSwiper={setSwiper}
          onSlideChange={instance => setActiveImage(instance.realIndex)}
          loop
          slidesPerView={1}
          className="relative aspect-video w-full">
          {galleryImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    playsInline
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt || ''}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next arrow */}
        <button
          onClick={() => swiper?.slideNext()}
          aria-label="Next image"
          className="absolute right-2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#0000001a] bg-[#ffffff73] transition-all duration-200 hover:bg-[#f7f7f7]">
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center">
        {galleryImages.map((_, i) => (
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

      {/* Caption */}
      <p className="px-5.5 pt-4 text-[14px]">
        {galleryImages[activeImage]?.caption}
      </p>
    </div>
  );
};

export default ProductSlider;
