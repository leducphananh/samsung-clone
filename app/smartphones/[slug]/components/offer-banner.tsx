'use client';
import { offers } from '@/app/constants/offer-banner.constant';
import clsx from 'clsx';
import { ChevronDown, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const OfferBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="border-b border-[#ddd]">
      <div className="mx-auto w-full max-w-360">
        <div className="relative mx-4 md:mx-8">
          <div className="mx-auto flex max-w-248 flex-col items-center py-5 pr-9 md:pr-0">
            <Swiper
              loop
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
              onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
              className="w-full">
              {offers.map((offer, index) => (
                <SwiperSlide key={offer.id} className="h-auto!">
                  <OfferDetails index={index} isExpanded={isExpanded} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-4 flex items-center">
              {offers.map((offer, index) => (
                <button
                  key={offer.id}
                  onClick={() => {
                    setActiveIndex(index);
                    swiperRef.current?.slideToLoop(index);
                  }}
                  className="mx-1 flex h-1.5 w-15 cursor-pointer items-center">
                  <span
                    className={clsx(
                      'inline-block h-0.5 w-full bg-black opacity-40',
                      index === activeIndex && 'opacity-100',
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Mở thông tin ưu đãi"
            className="absolute top-1/2 right-0 z-10 ml-auto flex w-12 -translate-y-1/2 cursor-pointer items-center justify-end"
            onClick={() => setIsExpanded(!isExpanded)}>
            <ChevronDown
              className={clsx(
                'size-6 transition-transform duration-300 ease-in-out',
                isExpanded ? 'rotate-180' : 'rotate-0',
              )}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

const OfferDetails = ({
  index,
  isExpanded,
}: {
  index: number;
  isExpanded: boolean;
}) => {
  const detailContent = (() => {
    if (index === 0) {
      return (
        <>
          <div className="font-samsung-sharp text-[12px] font-bold md:text-[18px]">
            Thanh toán online ưu đãi thêm 1.5 triệu đồng
          </div>
          <div className="mt-3 mb-2 text-[10px] md:mt-4 md:text-[14px]">
            Thanh toán online trả trước nhận ưu đãi thêm đến 1.5 triệu đồng
          </div>
        </>
      );
    }

    if (index === 1) {
      return (
        <div className="flex items-center justify-between gap-8">
          <div>
            <div className="font-samsung-sharp text-[12px] font-bold md:text-[18px]">
              Thu cũ đổi mới, nhận ngay giá hời!
            </div>
            <div className="mt-3 mb-2 text-[10px] md:mt-4 md:text-[14px]">
              Tiết kiệm lên đến{' '}
              <span className="text-[#006bea]">18 triệu đồng</span> khi tham gia
              thu cũ đổi mới, áp dụng cho nhiều thương hiệu khác nhau.
            </div>
          </div>

          <Image
            alt="Thu cũ đổi mới"
            src="https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/banner_tradeIn.png?imbypass=true"
            width={240}
            height={100}
            className="hidden md:block"
          />
        </div>
      );
    }

    if (index === 2) {
      return (
        <>
          <div className="font-samsung-sharp text-[12px] font-bold md:text-[18px]">
            {
              '"….Chiếc điện thoại sở hữu hiệu năng mạnh mẽ nhất trong lịch sử của Samsung" - The Shortcut, 02/2026'
            }
          </div>
          <div className="mt-3 mb-2 text-[10px] md:mt-4 md:text-[14px]">
            {
              '"Samsung đã triển khai hàng loạt nâng cấp cốt lõi, biến S26 Ultra trở thành chiếc điện thoại có hiệu năng mạnh mẽ nhất trong lịch sử của hãng" - The Shortcut, 02/2026'
            }
          </div>
          <div className="mt-3 md:mt-6">
            <Link
              href="#"
              className="flex items-center gap-1 text-[12px] font-bold underline md:text-[14px]">
              Tìm hiểu thêm
              <MoveUpRight strokeWidth={2} size={16} />
            </Link>
          </div>
        </>
      );
    }

    return null;
  })();

  return (
    <div className="w-full">
      <div
        className={clsx(
          'overflow-hidden text-center transition-[max-height,opacity] duration-300 ease-in-out',
          isExpanded ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100',
        )}>
        <h3 className="font-samsung-sharp text-[12px] font-bold md:text-[18px]">
          {offers[index].title}
        </h3>
      </div>
      <div
        className={clsx(
          'overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out',
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}>
        <div className={clsx(isExpanded ? 'mt-2' : 'mt-0')}>
          {detailContent}
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
