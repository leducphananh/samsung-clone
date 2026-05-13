import { processorSpecs } from '@/app/constants/all-spec.constant';
import clsx from 'clsx';
import Image from 'next/image';

const Processor = () => {
  return (
    <>
      <div className="mt-16.25 pb-1 md:pb-3">
        <h3 className="font-samsung-sharp text-[19px] font-bold md:text-[32px]">
          Bộ xử lý
          <sup className="top-2.5 align-top text-[11px]">5</sup>
        </h3>
      </div>
      <ul className="flex justify-between gap-7 md:gap-16">
        {processorSpecs.map((item, index) => (
          <li
            key={item.id}
            className={clsx(
              'flex flex-col items-center border-t border-[#bbb] pt-8 md:pt-10',
              index >= 2 ? 'hidden w-43 md:block md:w-75' : 'w-43 md:w-75',
            )}>
            <div className="flex flex-col items-start">
              <div className="mb-2.5 md:mb-5">
                <Image
                  width={64}
                  height={64}
                  alt=""
                  src="https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-common-ap.svg"
                  className="size-14.5 md:size-16"
                />
              </div>
              <p className="text-left text-[16px] font-bold md:mt-3 md:text-[22px]">
                {item.value}
              </p>
              <p className="mt-6 text-[16px] font-bold md:mt-8.25 md:text-[22px]">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Processor;
