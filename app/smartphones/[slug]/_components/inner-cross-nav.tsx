'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const InnerCrossNav = () => {
  const [navState, setNavState] = useState({ left: false, right: true });

  const syncNavState = (swiper: SwiperType) => {
    setNavState({ left: !swiper.isBeginning, right: !swiper.isEnd });
  };

  return (
    <section className="sticky top-0 z-20 border-b border-[#ddd] bg-white md:top-22.5">
      <div className="mx-auto w-full max-w-360">
        <div className="relative mx-3 flex items-center">
          <button
            type="button"
            aria-label="Previous"
            className={`inner-cross-nav-prev absolute -left-3 z-10 flex items-center justify-center bg-[rgba(255,255,255,0.8)] transition-opacity duration-200 ${
              navState.left ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}>
            <ChevronLeft strokeWidth={1} size={24} />
          </button>

          <Swiper
            tag="ul"
            modules={[Navigation]}
            navigation={{
              prevEl: '.inner-cross-nav-prev',
              nextEl: '.inner-cross-nav-next',
            }}
            onSwiper={syncNavState}
            onSlideChange={syncNavState}
            onProgress={syncNavState}
            slidesPerView="auto"
            spaceBetween={4}
            className="mx-8 flex w-full items-center">
            <SwiperSlide tag="li" className="w-auto! pt-0.5">
              <Link
                href="#"
                className="inline-flex h-11 items-center px-3 text-[14px] md:text-[16px]">
                Tính năng nổi bật
              </Link>
            </SwiperSlide>
            <SwiperSlide tag="li" className="w-auto! pt-0.5">
              <Link
                href="#compare-products"
                onClick={event => {
                  event.preventDefault();
                  const anchorId = 'compare-products';
                  const anchorHash = `#${anchorId}`;

                  window.dispatchEvent(
                    new CustomEvent('product-feature:open', {
                      detail: { anchorId },
                    }),
                  );

                  if (window.location.hash !== anchorHash) {
                    window.location.hash = anchorId;
                  }

                  const target = document.getElementById(anchorId);
                  if (target) {
                    target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className="inline-flex h-11 items-center px-3 text-[14px] md:text-[16px]">
                So sánh các dòng sản phẩm
              </Link>
            </SwiperSlide>
            <SwiperSlide tag="li" className="w-auto! pt-0.5">
              <Link
                href="#"
                className="inline-flex h-11 items-center px-3 text-[14px] md:text-[16px]">
                Đánh giá
              </Link>
            </SwiperSlide>
          </Swiper>

          <button
            type="button"
            aria-label="Next"
            className={`inner-cross-nav-next absolute -right-3 z-10 flex items-center justify-center bg-[rgba(255,255,255,0.8)] transition-opacity duration-200 ${
              navState.right ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}>
            <ChevronRight strokeWidth={1} size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InnerCrossNav;
