'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { helpChoose } from '../constants/help-choose.constant';

const HelpMeChoose = () => {
  return (
    <section className="mx-auto w-full max-w-360 pt-9 pb-10 md:py-15">
      <h2 className="font-samsung-sharp mb-1.5 px-6 text-[24px] font-bold md:mb-5.5 md:text-[40px]">
        Giúp tôi lựa chọn
      </h2>

      <div className="mt-7 md:mt-11.5">
        <div className="mx-auto max-w-360 px-6">
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}>
            {helpChoose.map(item => (
              <SwiperSlide key={item.id} className="h-auto!">
                <div className="help-choose-card flex min-h-110 w-full justify-center overflow-hidden rounded-[20px]">
                  <div className="relative z-1 w-full flex-1">
                    <div className="p-8 pt-7.5">
                      <h3 className="font-samsung-sharp text-center text-[24px] font-bold">
                        {item.title}
                      </h3>
                      <div className="mt-4 flex justify-center">
                        <Link
                          href="#"
                          className="help-choose-link flex w-fit items-center justify-center rounded-[20px] bg-white px-6 py-2.5 text-[14px] font-bold text-black transition-all duration-200 hover:bg-black hover:text-white">
                          Tìm hiểu thêm
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="help-choose-image relative ml-[-100%] w-full flex-1 transition-transform duration-300 ease-in-out">
                    <Image
                      width={440}
                      height={330}
                      src={item.imgSrc}
                      alt={item.title}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HelpMeChoose;
