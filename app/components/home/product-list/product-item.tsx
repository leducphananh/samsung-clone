'use client';
import { formatVnd } from '@/app/utils/format.util';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Rating from './rating';
import StorageSelector from './storage-selector';
import VariantSelector from './variant-selector';

const ProductItem = ({
  product,
}: {
  product: {
    id: number;
    name: string;
    rating: number;
    ratingCount: number;
    variants: {
      id: number;
      name: string;
      hex: string;
      img: string;
      default?: boolean;
    }[];
    storage: string[];
    ram: string[];
    price: number;
    new?: boolean;
  };
}) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find(v => v.default) || product.variants[0],
  );

  return (
    <div
      key={product.id}
      className="relative col-span-1 h-auto rounded-[18px] bg-[#f7f7f7] p-3.5 md:p-5">
      {product.new && (
        <div className="absolute top-3.5 left-3.5 text-[12px] font-bold text-[#006bea] md:top-5 md:left-5 md:text-[14px]">
          Mới
        </div>
      )}
      <div className="mt-4 md:mt-6.75 md:mb-9.25">
        <div className="md:px-7">
          <Link
            href={'/smartphones/galaxy-s26-ultra'}
            className="flex items-center justify-center">
            <Image
              src={selectedVariant.img}
              alt={selectedVariant.name}
              width={216}
              height={216}
              className="h-37 w-37 md:h-54 md:w-54"
            />
          </Link>
        </div>
      </div>
      <div className="min-h-18.75 md:min-h-12">
        <Link
          href={'/smartphones/galaxy-s26-ultra'}
          className="font-samsung-sharp inline-block pt-4.5 text-[14px] font-bold md:pt-0 md:text-[18px]">
          {product.name}
        </Link>
      </div>
      <div className="mt-4 min-h-4.75">
        <Rating rating={product.rating} ratingCount={product.ratingCount} />
      </div>
      <div className="mt-4">
        <p className="mb-1 text-[12px]">{selectedVariant.name}</p>
        <VariantSelector
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
          variants={product.variants}
        />
        <div className="mt-4">
          <StorageSelector storage={product.storage} />
        </div>
        <div className="mt-2">
          <StorageSelector storage={product.ram} />
        </div>
        <div className="mt-4">
          <p className="text-[16px] font-bold md:text-[18px]">
            {formatVnd(product.price)}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <Link
          href={'/smartphones/galaxy-s26-ultra'}
          className="inline-flex w-full items-center justify-center rounded-[20px] border border-black bg-black px-6 pt-2.25 pb-2.5 text-[14px] font-bold text-white transition-all duration-200 hover:bg-white hover:text-black">
          Mua
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
