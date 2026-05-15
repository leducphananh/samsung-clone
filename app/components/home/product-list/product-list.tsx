'use client';
import { phoneVariants } from '@/app/constants/phone-variant.constant';
import { productList } from '@/app/constants/product-list.constant';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import ProductItem from './product-item';

const ProductList = () => {
  const [selectedVariant, setSelectedVariant] = useState(phoneVariants[0]);

  return (
    <div className="mx-auto w-full max-w-360">
      <ul className="no-scrollbar mt-2 flex items-center justify-start gap-6 overflow-auto px-5 md:justify-center">
        {phoneVariants.map(variant => (
          <li key={variant.id}>
            <Link
              href="#"
              onClick={() => setSelectedVariant(variant)}
              className="inline-flex items-center justify-center py-4">
              <span
                className={clsx(
                  "relative text-[16px] font-bold whitespace-nowrap after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-black after:transition-all after:content-['']",
                  selectedVariant.id === variant.id
                    ? 'after:scale-x-100'
                    : 'after:scale-x-0 hover:text-[#000000b3]',
                )}>
                {variant.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-5 p-5 md:grid-cols-4">
        {productList.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
