'use client';
import { useState } from 'react';
import OptionPanel from './option-panel';
import ProductSlider from './product-slider';

const ProductBuying = () => {
  const [activeDevice, setActiveDevice] = useState('standard');

  return (
    <section className="mx-auto w-full max-w-360 px-4 py-6 md:px-8 md:py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <ProductSlider activeDevice={activeDevice} />

        <OptionPanel
          activeDevice={activeDevice}
          setActiveDevice={setActiveDevice}
        />
      </div>
    </section>
  );
};

export default ProductBuying;
