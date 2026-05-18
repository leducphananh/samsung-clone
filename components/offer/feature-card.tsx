'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { features } from '../../constants/feature.constant';

const FeatureCard = () => {
  return (
    <section className="mx-auto w-full max-w-360 pt-9 pb-10 md:py-15">
      <h2 className="font-samsung-sharp mb-1.5 px-6 text-[24px] font-bold md:mb-5.5 md:text-[40px]">
        Ưu đãi đặc biệt
      </h2>

      <div className="mt-7 md:mt-11.5">
        <div className="mx-auto max-w-360 px-6">
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={10}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 20 },
            }}>
            {features.map(item => (
              <SwiperSlide key={item.id} className="h-auto!">
                <Link
                  href="#"
                  className="flex items-center justify-center overflow-hidden rounded-[20px] border border-[#ddd]">
                  <Image
                    width={448}
                    height={320}
                    src={item.imgSrc}
                    alt={item.title}
                    className="h-full w-full object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </Link>
                <p className="font-samsung-sharp mt-3 text-[18px] font-bold md:text-[22px]">
                  {item.title}
                </p>
                <div className="mt-1.5 md:mt-3">
                  <Link
                    href="#"
                    className="relative inline-block py-2 text-[16px] font-bold before:absolute before:bottom-1.5 before:left-0 before:h-px before:w-full before:bg-black before:transition-opacity before:duration-200 before:content-[''] after:absolute after:bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-500 after:ease-in-out after:content-[''] hover:before:hidden hover:after:scale-x-100">
                    Tìm hiểu thêm
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
