'use client';
import { promotionCoupons } from '@/app/constants/promotion-coupon.constant';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { FreeMode, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PromotionCoupon = () => {
  const [navState, setNavState] = useState({ left: false, right: true });

  const syncNavState = (swiper: SwiperType) => {
    setNavState({ left: !swiper.isBeginning, right: !swiper.isEnd });
  };

  return (
    <section className="mx-auto w-full max-w-360 px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-316 border-t border-[#eee] pt-6 md:pt-12">
        <h2 className="font-samsung-sharp text-[20px] font-bold md:text-[24px]">
          Mua ngay tại Samsung.com, nhận thêm nhiều ưu đãi!
        </h2>
        <h3 className="text-[12px] whitespace-pre-wrap md:mt-0 md:text-[14px]">
          Nhận thêm nhiều ưu đãi chính hãng
        </h3>
        <div className="mt-5 mb-7 md:mt-6 md:mb-12">
          <div className="relative">
            <Swiper
              modules={[FreeMode, Navigation, Scrollbar]}
              navigation={{
                prevEl: '.promotion-coupon-prev',
                nextEl: '.promotion-coupon-next',
              }}
              scrollbar={{
                el: '.promotion-coupon-scrollbar',
                draggable: true,
              }}
              freeMode={{
                minimumVelocity: 5,
              }}
              onSwiper={syncNavState}
              onSlideChange={syncNavState}
              onProgress={syncNavState}
              spaceBetween={16}
              slidesPerView={1.15}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
                1280: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="promotion-coupon-swiper">
              {promotionCoupons.map(coupon => (
                <SwiperSlide key={coupon.id} className="h-auto!">
                  <article className="h-full rounded-lg border border-[#e4e4e4] bg-white p-4.75 pb-5.5 md:p-6 md:pb-8">
                    <div className="flex h-14.5 w-14.5 items-center justify-center rounded-lg bg-[#f5f7fe] md:h-16 md:w-16">
                      <Image
                        src={coupon.imgSrc}
                        alt={coupon.title}
                        width={40}
                        height={40}
                        className="size-9.5 md:size-10"
                      />
                    </div>
                    <h4 className="font-samsung-sharp mt-5 text-[21px] font-bold md:mt-6 md:text-[22px]">
                      {coupon.title}
                    </h4>
                    <p className="mt-5 text-[16px] whitespace-pre-wrap md:mt-2">
                      {coupon.desc}
                    </p>
                    <div className="mt-4">
                      <Link
                        href={coupon.href}
                        className="text-[14px] font-bold underline">
                        Tìm hiểu thêm
                      </Link>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              type="button"
              aria-label="Previous"
              className={clsx(
                'promotion-coupon-prev absolute top-1/2 -left-14 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#ffffff26] bg-[#00000073] transition-all duration-200 hover:bg-[#1c1c1c] md:flex',
                navState.left ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}>
              <ChevronLeft size={30} color="#fff" strokeWidth={1} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className={clsx(
                'promotion-coupon-next absolute top-1/2 -right-14 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#ffffff26] bg-[#00000073] transition-all duration-200 hover:bg-[#1c1c1c] md:flex',
                navState.right
                  ? 'opacity-100'
                  : 'pointer-events-none opacity-0',
              )}>
              <ChevronRight size={30} color="#fff" strokeWidth={1} />
            </button>
          </div>
          <div className="promotion-coupon-scrollbar mt-6" />
        </div>
      </div>
    </section>
  );
};

export default PromotionCoupon;
