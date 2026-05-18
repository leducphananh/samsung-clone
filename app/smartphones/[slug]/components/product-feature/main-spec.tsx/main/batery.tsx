import { batterySpecs } from '@/constants/main-spec.constant';
import clsx from 'clsx';
import Image from 'next/image';

const Battery = () => {
  return (
    <>
      <div className="mt-16.25 border-b-2 border-[#bbb] pb-1 md:pb-3">
        <h3 className="font-samsung-sharp text-[26px] font-bold md:text-[32px]">
          Pin
          <sup className="top-2.5 align-top text-[11px]">4</sup>
        </h3>
      </div>
      <ul className="mt-6 flex justify-between gap-7 md:mt-8.25 md:gap-16">
        {batterySpecs.map((item, index) => (
          <li
            key={item.id}
            className={clsx(
              'flex flex-col items-center',
              index >= 2 ? 'hidden w-43 md:block md:w-75' : 'w-43 md:w-75',
            )}>
            <div className="flex flex-col items-center">
              <div className="mb-2.5 md:mb-5">
                <Image
                  width={64}
                  height={64}
                  alt=""
                  src="https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-common-battery.svg"
                  className="size-14.5 md:size-16"
                />
              </div>
              <p
                className={clsx(
                  'font-samsung-sharp mt-1 mb-6 text-[19px] font-bold md:mt-3 md:mb-8.25 md:text-[24px]',
                  item.highlightValue && 'text-[#006bea]',
                )}>
                {item.value}
              </p>
              <p
                className={clsx(
                  'text-center text-[16px] font-bold md:text-[22px]',
                  item.highlightDesc && 'text-[#006bea]',
                )}>
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Battery;
