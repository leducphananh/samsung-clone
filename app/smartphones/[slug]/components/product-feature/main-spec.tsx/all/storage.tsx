import { storageSpecs } from '@/constants/all-spec.constant';
import clsx from 'clsx';
import Image from 'next/image';

const Storage = () => {
  return (
    <>
      <div className="mt-16.25 pb-1 md:pb-3">
        <h3 className="font-samsung-sharp text-[19px] font-bold md:text-[32px]">
          Lưu trữ
          <sup className="top-2.5 align-top text-[11px]">7</sup>
        </h3>
      </div>
      <ul className="flex justify-between gap-7 md:gap-16">
        {storageSpecs.map((item, index) => (
          <li
            key={item.id}
            className={clsx(
              'flex flex-col items-start border-t border-[#bbb] pt-8 md:pt-10',
              index >= 2 ? 'hidden w-43 md:block md:w-75' : 'w-43 md:w-75',
            )}>
            <div className="flex flex-col items-start">
              <div className="mb-2.5 md:mb-5">
                <Image
                  width={64}
                  height={64}
                  alt=""
                  src="https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/common-storage.svg"
                  className="size-14.5 md:size-16"
                />
              </div>
              <p className="text-[14px] text-[#757575] md:text-[18px]">
                Lưu trữ
              </p>
              <div className="text-left text-[16px] font-bold md:mt-3 md:text-[22px]">
                {item.storage.map((storageOption, idx) => (
                  <div key={idx}>{storageOption}</div>
                ))}
              </div>
              <div className="mt-6 mb-2.5 md:mt-8.25 md:mb-5">
                <Image
                  width={64}
                  height={64}
                  alt=""
                  src="https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/common-memory.svg"
                  className="size-14.5 md:size-16"
                />
              </div>
              <p className="text-[14px] text-[#757575] md:text-[18px]">
                Bộ nhớ
              </p>
              <div className="text-left text-[16px] font-bold md:text-[22px]">
                {item.ram.map((ramOption, idx) => (
                  <div key={idx}>{ramOption}</div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Storage;
