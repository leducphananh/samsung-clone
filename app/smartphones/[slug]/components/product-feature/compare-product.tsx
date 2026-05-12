'use client';
import { compareProducts } from '@/app/constants/product-feature.constant';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

const CompareProduct = () => {
  return (
    <div className="md:mx-13.5">
      <div className="py-10 md:px-5 md:py-20">
        <h2 className="text-center text-[26px] font-bold md:text-[48px]">
          So sánh các dòng điện thoại
        </h2>

        <div className="mt-10 flex justify-between md:mt-20">
          {compareProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              className={
                index >= 2 ? 'hidden w-43 md:block md:w-75' : 'w-43 md:w-75'
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({
  product,
  className,
}: {
  product: {
    id: number;
    name: string;
    variants: {
      id: number;
      color: string;
      hex: string;
      exclusive: boolean;
      default?: boolean;
      imgSrc: string;
    }[];
    desc: string;
    highlights: string[];
  };
  className?: string;
}) => {
  const [selectedVariant, setSelectedVariant] = useState(() => {
    const defaultVariant = product.variants.find(variant => variant.default);
    return defaultVariant || product.variants[0];
  });
  const exclusiveVariants = product.variants.filter(
    variant => variant.exclusive,
  );
  const normalVariants = product.variants.filter(variant => !variant.exclusive);

  return (
    <div key={product.id} className={className}>
      <div className="font-samsung-sharp flex min-h-9 items-center border-b-[2.5px] border-black text-[16px] font-bold md:min-h-14 md:border-b-4 md:text-[22px]">
        {product.name}
      </div>
      <div className="mt-6 md:mt-14">
        <Image
          width={340}
          height={340}
          alt={product.name}
          src={selectedVariant.imgSrc}
        />
      </div>
      <div className="mt-8.5">
        <p className="mt-2.25 text-center text-[14px] font-bold">Màu sắc</p>
        <div className="mt-2.75 space-y-2.5">
          <div className="flex items-center justify-center gap-3.5">
            {normalVariants.map(variant => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={clsx(
                  `relative h-5 w-5 rounded-full border border-[#00000080] bg-[${variant.hex}] cursor-pointer`,
                  selectedVariant === variant &&
                    'after:absolute after:-inset-1 after:rounded-full after:border-2 after:border-[#0c71e5] after:content-[""]',
                )}
              />
            ))}
          </div>
          <div className="h-5.25">
            {!selectedVariant.exclusive && (
              <div className="text-center text-[14px] font-bold">
                {selectedVariant.color}
              </div>
            )}
          </div>
        </div>
        <div className="mt-5.25">
          <p className="text-center text-[14px] font-bold">
            Chỉ có tại samsung.com
          </p>
          <div className="mt-2.75 space-y-2.5">
            <div className="flex items-center justify-center gap-3.5">
              {exclusiveVariants.map(variant => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={clsx(
                    `relative h-5 w-5 rounded-full border border-[#00000080] bg-[${variant.hex}] cursor-pointer`,
                    selectedVariant === variant &&
                      'after:absolute after:-inset-1 after:rounded-full after:border-2 after:border-[#0c71e5] after:content-[""]',
                  )}
                />
              ))}
            </div>
            <div className="h-5.25">
              {selectedVariant.exclusive && (
                <div className="text-center text-[14px] font-bold">
                  {selectedVariant.color}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between gap-1 rounded-[20px] bg-[#f5f7fe] p-3 md:mt-10 md:px-5 md:py-6">
        <div className="shrink-0">
          <Image
            width={24}
            height={24}
            alt=""
            src="https://images.samsung.com/is/image/samsung/assets/vn/s2602/buy/compare_overview.png"
          />
        </div>
        <div className="w-51 text-[12px] font-bold md:text-[18px]">
          {product.desc}
          {product.highlights.map((highlight, index) => (
            <em key={highlight} className="text-[#006bea] not-italic">
              {highlight} {index < product.highlights.length - 1 && ' và '}
            </em>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareProduct;
