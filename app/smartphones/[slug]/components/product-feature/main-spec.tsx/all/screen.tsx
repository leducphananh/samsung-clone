import { screenSpecs } from '@/app/constants/all-spec.constant';
import clsx from 'clsx';
import Image from 'next/image';
import SpecItem from './spec-item';

const Screen = () => {
  return (
    <>
      <div className="mt-16.25 pb-1 md:pb-3">
        <h3 className="font-samsung-sharp text-[19px] font-bold md:text-[32px]">
          Màn hình
          <sup className="top-2.5 align-top text-[11px]">6</sup>
        </h3>
      </div>
      <ul className="flex justify-between gap-7 md:gap-16">
        {screenSpecs.map((item, index) => (
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
                  src="https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/keyspecs-display-material-general-phone.svg"
                  className="size-14.5 md:size-16"
                />
              </div>
              <p className="text-[14px] text-[#757575] md:text-[18px]">
                {item.resolution.label}
              </p>
              <p className="text-left text-[16px] font-bold md:mt-3 md:text-[22px]">
                {item.resolution.value}
              </p>
              <p className="text-left text-[16px] font-bold md:text-[22px]">
                {item.resolution.desc}
              </p>
              <SpecItem
                label={item.highestBrightness.label}
                value={item.highestBrightness.value}
                className="mt-6 md:mt-8.25"
              />
              <SpecItem
                label={item.refreshRate.label}
                value={item.refreshRate.value}
                className="mt-6 md:mt-8.25"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Screen;
