'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatVnd } from '../../../utils/format.util';
import { recommendProducts } from '../../constants/recommend.constant';

const RecommendProduct = () => {
  const [swiperProgress, setSwiperProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mx-auto w-full max-w-360 pt-9 pb-10 md:py-15">
      <h2 className="font-samsung-sharp mb-1.5 px-6 text-[24px] font-bold md:mb-5.5 md:text-[40px]">
        Được đề xuất cho bạn
      </h2>

      <div className="mt-7 md:mt-11.5">
        <div className="mx-auto max-w-360 px-6">
          <Swiper
            onSwiper={swiper => {
              swiperRef.current = swiper;
              setSwiperProgress(swiper.progress);
            }}
            onProgress={swiper => setSwiperProgress(swiper.progress)}
            modules={[Navigation, Scrollbar]}
            spaceBetween={10}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 20 },
              1024: { slidesPerView: 3.1, spaceBetween: 24 },
              1280: { slidesPerView: 4.2, spaceBetween: 24 },
            }}>
            {recommendProducts.map(item => (
              <SwiperSlide key={item.id} className="h-auto!">
                <div className="group flex h-45 items-center justify-center overflow-hidden rounded-lg bg-[#f7f7f7] md:h-85.5">
                  <Link
                    href="#"
                    className="flex h-full w-full items-center justify-center">
                    <Image
                      width={216}
                      height={216}
                      src={item.imgSrc}
                      alt={item.title}
                      className="h-29 w-29 transition-transform duration-500 ease-[cubic-bezier(0.35,0,0.36,1)] group-hover:scale-110 md:h-54 md:w-54"
                    />
                  </Link>
                </div>
                <Link href="#">
                  <p className="mt-6 text-[18px] font-bold md:text-[22px]">
                    {item.title}
                  </p>
                </Link>
                <div className="mt-6 md:mt-8">
                  <strong className="text-[16px] font-bold md:text-[20px]">
                    {formatVnd(item.price)}
                  </strong>
                  <p className="text-[14px] font-bold text-[#006bea] md:text-[16px]">
                    chiết khấu {formatVnd(item.originalPrice - item.price)} (giá
                    gốc{' '}
                    <del className="font-normal text-[#717171] no-underline">
                      {formatVnd(item.originalPrice)}
                    </del>
                    )
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-10 hidden md:block">
            <div className="flex items-center justify-center gap-15">
              <div className="relative h-0.5 w-140.5 overflow-hidden rounded-full bg-[#0000001a]">
                <div
                  style={{
                    transform: `translate3d(0px, 0px, 0px) scaleX(${swiperProgress}) scaleY(1)`,
                  }}
                  className="absolute top-0 left-0 h-full w-full origin-top-left overflow-hidden bg-black transition-all duration-300"></div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  disabled={swiperProgress === 0}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#0003] bg-white disabled:pointer-events-none disabled:opacity-40"
                  onClick={() => swiperRef.current?.slidePrev()}>
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  disabled={swiperProgress === 1}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[#0003] bg-white disabled:pointer-events-none disabled:opacity-40"
                  onClick={() => swiperRef.current?.slideNext()}>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendProduct;
