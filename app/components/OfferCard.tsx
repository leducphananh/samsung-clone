'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { offers } from '../constants/offer.constant';

const OfferCard = () => {
  const [selectedOffer, setSelectedOffer] = useState(offers[0].id);
  const selectedOfferItems =
    offers.find(o => o.id === selectedOffer)?.items || [];

  return (
    <section className="mx-auto w-full max-w-360 py-15">
      <h2 className="font-samsung-sharp mb-1.5 px-6 text-[24px] font-bold md:mb-5.5 md:text-[40px]">
        Ưu đãi mới nhất
      </h2>
      <div className="flex justify-center px-6 pt-4">
        <ul className="no-scrollbar flex items-center gap-6 overflow-auto font-bold">
          {offers.map(offer => (
            <li key={offer.id}>
              <button
                className="cursor-pointer text-sm whitespace-nowrap md:text-base"
                onClick={() => setSelectedOffer(offer.id)}>
                {offer.title}
              </button>
              <div
                className={clsx(
                  'h-0.5 w-full origin-center scale-x-0 bg-black transition-transform duration-200 ease-in-out',
                  selectedOffer === offer.id && 'scale-x-100',
                )}
              />
            </li>
          ))}
        </ul>
      </div>

      {selectedOfferItems.length > 0 && (
        <div className="mt-5 px-6">
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={10}
            slidesPerView={1.8}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 20 },
            }}>
            {selectedOfferItems.map(item => (
              <SwiperSlide key={item.id} className="h-auto">
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
                  {item.description && (
                    <p className="mt-2 text-[14px] md:text-[16px]">
                      {item.description}
                    </p>
                  )}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default OfferCard;
