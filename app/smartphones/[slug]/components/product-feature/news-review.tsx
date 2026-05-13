import { newsReviews } from '@/app/constants/news-review.constant';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const NewsReview = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="mx-auto max-w-360">
      <div className="md:mx-13.5">
        <div className="md:mt-8.75">
          <Swiper
            loop
            modules={[Navigation, Scrollbar]}
            onSwiper={setSwiper}
            onSlideChange={instance => setActiveImage(instance.realIndex)}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}>
            {newsReviews.map(item => (
              <SwiperSlide key={item.id} className="h-auto!">
                <div className="flex h-full flex-col items-center px-8 md:px-0">
                  <div className="relative h-56 w-full md:h-29.5">
                    <Image
                      fill
                      alt=""
                      src={item.imgSrc}
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-5 min-h-px flex-1 text-center text-[12px] font-bold text-[#363636] md:mt-5.25 md:text-[14px]">
                    {item.desc}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={item.href}
                      className="text-[14px] font-bold text-[#0000ee] md:text-[18px]">
                      Xem thêm↗
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-4 flex items-center justify-center md:hidden">
            {newsReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => swiper?.slideToLoop(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="flex h-6 w-6 cursor-pointer items-center justify-center">
                <span
                  className={clsx(
                    'h-2 w-2 rounded-full bg-black opacity-20',
                    i === activeImage && 'bg-[#007aff]! opacity-100',
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsReview;
