'use client';
import { faqs } from '@/app/constants/faq.constant';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import { JSX, useState } from 'react';

const FAQ = () => {
  return (
    <div className="mx-auto max-w-360">
      <ul className="md:mx-13.5">
        {faqs.map((faq, index) => (
          <li
            key={faq.id}
            className={clsx(
              'py-4 md:py-5',
              index > 0 ? 'border-t border-[#eee]' : 'pt-0 md:pt-2.5',
            )}>
            <FAQItem faq={faq} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const FAQItem = ({ faq }: { faq: { q: string; a: JSX.Element } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        className="flex w-full cursor-pointer items-center justify-between gap-4 md:px-7.5 md:py-1.5">
        <div className="flex min-w-px flex-1 items-center gap-4 text-[14px] font-bold text-[#313131] md:text-[16px]">
          <span className="hidden md:block">Q.</span>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {faq.q}
          </span>
        </div>
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ddd]">
          <ChevronDown
            size={20}
            strokeWidth={1}
            className={clsx(
              'transition-transform duration-300',
              isExpanded ? 'rotate-180' : 'rotate-0',
            )}
          />
        </span>
      </button>
      <div
        className={clsx(
          'grid overflow-hidden transition-[grid-template-rows,opacity,margin-top] duration-300 ease-out',
          isExpanded
            ? 'mt-4.5 grid-rows-[1fr] opacity-100'
            : 'mt-0 grid-rows-[0fr] opacity-0',
        )}>
        <div className="overflow-hidden">
          <div className="flex items-start gap-4 md:px-7.5">
            <span className="hidden text-[14px] font-bold text-[#313131] md:block">
              A.
            </span>
            <span className="text-[12px] text-[#555] md:text-[14px]">
              {faq.a}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
