'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { reasons } from '../constants/reason.constant';

const ReasonToBuy = () => {
  const [swiperProgress, setSwiperProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mx-auto w-full max-w-360 py-15">
      <div className="flex items-center justify-between px-6">
        <h2 className="font-samsung-sharp text-[24px] font-bold md:text-[40px]">
          Mua trực tiếp Nhận ngay ưu đãi
        </h2>
        <button className="hidden cursor-pointer rounded-[20px] border border-black px-6 py-2.5 font-bold text-black transition-all duration-200 hover:bg-black hover:text-white md:block">
          Tìm hiểu thêm
        </button>
      </div>

      <div className="mt-11.5">
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
            {reasons.map(reason => (
              <SwiperSlide key={reason.id} className="h-auto">
                <article className="rounded-lg border border-[#e5e5e5] bg-white p-8">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[#f5f7fe] md:size-16">
                    <reason.icon className="size-6 md:size-9" />
                  </div>
                  <p className="font-samsung-sharp mt-5 text-[18px] font-bold md:text-[22px]">
                    {reason.title}
                  </p>
                  <p className="mt-3 mb-8 text-[14px] md:text-[16px]">
                    {reason.description}
                  </p>
                  <Link
                    href={reason.href}
                    className="mt-8 text-[16px] font-bold underline">
                    Tìm hiểu thêm
                  </Link>
                </article>
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

      <div className="mt-6 flex justify-center md:hidden">
        <button className="cursor-pointer rounded-[20px] border border-black px-6 py-2.5 font-bold text-black transition-all duration-200 hover:bg-black hover:text-white">
          Tìm hiểu thêm
        </button>
      </div>
    </section>
  );
};

export default ReasonToBuy;
