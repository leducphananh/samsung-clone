'use client';
import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { categories, products } from '../constants/product.constant';
import { formatVnd } from '../utils/format.util';

const ProductCategory = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [swiperProgress, setSwiperProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mt-8">
      <h1 className="font-sharp mx-auto mb-3 max-w-360 px-6 text-2xl font-bold md:mb-11 md:text-[40px]">
        Lựa chọn tối ưu chuẩn sống của bạn
      </h1>
      <div className="mb-2 overflow-hidden md:mb-4">
        <ul className="no-scrollbar flex items-center justify-start overflow-auto px-5 md:justify-center">
          {categories.map(category => (
            <li key={category.id} className={clsx('min-h-21.5 px-1')}>
              <button
                className={clsx(
                  'w-21 cursor-pointer rounded-lg border border-[#ddd] px-0.5 pt-3 pb-1.5 md:h-30 md:w-30',
                  activeCategory === category.id && 'border-black',
                )}
                onClick={() => setActiveCategory(category.id)}>
                <category.icon className="mx-auto size-6 md:size-12" />
                <span className="mt-1 flex h-10 items-center justify-center text-xs leading-snug font-bold">
                  {category.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#f7f7f7] pt-6 pb-10">
        <div className="mx-auto max-w-360 px-6">
          <Swiper
            onSwiper={swiper => {
              swiperRef.current = swiper;
              setSwiperProgress(swiper.progress);
            }}
            onProgress={swiper => setSwiperProgress(swiper.progress)}
            modules={[Navigation, Scrollbar]}
            spaceBetween={10}
            slidesPerView={2.1}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 20 },
              1024: { slidesPerView: 3.1, spaceBetween: 24 },
              1280: { slidesPerView: 4.2, spaceBetween: 24 },
            }}>
            {products.map(product => (
              <SwiperSlide key={product.id} className="h-auto">
                <article className="flex h-full flex-col rounded-[28px] border border-[#e5e5e5] bg-white p-4">
                  <h3 className="mb-2 h-12 text-xs leading-snug font-bold md:text-lg">
                    {product.title}
                  </h3>
                  <div className="px-4">
                    <Image
                      width={88}
                      height={88}
                      src={product.imageSrc}
                      alt={product.title}
                      className="w-full object-contain"
                    />
                  </div>
                  {product.options && (
                    <div className="mt-4 flex items-center justify-center gap-4 text-sm font-semibold text-[#6d6d6d]">
                      {product.options.map(option => (
                        <span key={option}>{option}</span>
                      ))}
                    </div>
                  )}
                  {product.swatches && (
                    <div className="mt-4 flex h-6 items-center justify-center gap-3">
                      {product.swatches.map(color => (
                        <span
                          key={color}
                          className="size-1.5 shrink-0 rounded-full border border-black md:size-4"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                  <div className="mt-2 mb-1 text-xs font-bold md:text-lg">
                    {formatVnd(product.price)}
                  </div>
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
    </section>
  );
};

export default ProductCategory;
