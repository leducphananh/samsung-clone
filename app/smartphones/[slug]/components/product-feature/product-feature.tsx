'use client';
import { featureSections } from '@/app/constants/product-feature.constant';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProductFeature = () => {
  return (
    <section className="mx-auto w-full max-w-360">
      <div className="mt-20 p-6">
        <h2 className="font-samsung-sharp text-center text-[24px] font-bold">
          Galaxy S26 Ultra
        </h2>
        <h3 className="mt-5 text-center text-[16px] md:mt-4 md:px-24 md:text-[18px]">
          Khám phá chiếc điện thoại đột phá với vi xử lý tiên tiến được tối ưu
          riêng, hệ thống camera quyền năng và công nghệ AI trực quan hơn cho
          cuộc sống mỗi ngày.
        </h3>

        <div className="mt-10 md:px-22">
          {featureSections.map(section => (
            <ProductFeatureItem key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductFeatureItem = ({
  section,
}: {
  section: {
    id: number;
    label: string;
    content: React.ReactNode;
    anchorId?: string;
  };
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = `product-feature-content-${section.id}`;
  const anchorId = section.anchorId;

  useEffect(() => {
    if (!anchorId) {
      return;
    }

    const handleHashChange = () => {
      if (window.location.hash === `#${anchorId}`) {
        setIsExpanded(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [anchorId]);

  useEffect(() => {
    if (!anchorId) {
      return;
    }

    const handleOpenEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ anchorId?: string }>;
      if (customEvent.detail?.anchorId === anchorId) {
        setIsExpanded(true);
      }
    };

    window.addEventListener('product-feature:open', handleOpenEvent);
    return () =>
      window.removeEventListener('product-feature:open', handleOpenEvent);
  }, [anchorId]);

  return (
    <div id={anchorId} className={anchorId ? 'scroll-mt-28' : undefined}>
      <button
        className="flex w-full cursor-pointer items-center justify-between border-t-2 border-[#e9e9e9] py-5.5"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={contentId}>
        <h2 className="font-samsung-sharp text-left text-[19px] font-bold md:text-[22px]">
          {section.label}
        </h2>
        <span
          className={clsx(
            'flex h-8 w-8 items-center justify-center transition-transform duration-300 ease-out',
            isExpanded ? 'rotate-180' : 'rotate-0',
          )}>
          <ChevronDown size={30} strokeWidth={2} />
        </span>
      </button>
      <div
        id={contentId}
        aria-hidden={!isExpanded}
        className={clsx(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}>
        <div
          className={clsx(
            'overflow-hidden transition-opacity duration-300 ease-out',
            isExpanded ? 'opacity-100' : 'opacity-0',
          )}>
          <div className="pb-7.5">{section.content}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
