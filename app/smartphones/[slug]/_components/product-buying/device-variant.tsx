'use client';
import { deviceVariants } from '@/constants/product-buying.constant';
import clsx from 'clsx';
import { CircleQuestionMark } from 'lucide-react';
import Image from 'next/image';

interface Props {
  activeDevice: string;
  setActiveDevice: (id: string) => void;
}

const DeviceVariant = ({ activeDevice, setActiveDevice }: Props) => {
  return (
    <div>
      <div className="pt-6 pb-4">
        <div className="flex items-center gap-1.75">
          <h2 className="font-samsung-sharp text-[20px] font-bold md:text-[24px]">
            Thiết bị
          </h2>
          <button type="button" className="relative cursor-pointer">
            <CircleQuestionMark strokeWidth={1.2} size={17} />
          </button>
        </div>
        <p className="mt-2 text-[12px] md:text-[14px]">
          Vui lòng chọn thiết bị
        </p>
      </div>

      <div>
        <ul className="flex flex-col gap-3 md:gap-6">
          {deviceVariants.map(variant => (
            <li key={variant.id}>
              <div
                className={clsx(
                  'rounded-md border',
                  activeDevice === variant.id
                    ? 'border-[#2189ff] ring-1 ring-[#2189ff] ring-inset'
                    : 'border-[#ddd] hover:border-[#555]',
                )}>
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-1.5 px-5 py-3.5"
                  onClick={() => setActiveDevice(variant.id)}>
                  <div className="flex flex-col gap-0.5 text-left">
                    <span className="text-[16px] font-bold md:text-[18px]">
                      {variant.name}
                      {variant.subname ? ` - ${variant.subname}` : ''}
                    </span>
                    {variant.screen && (
                      <span className="text-[14px] md:text-[16px]">
                        {variant.screen}
                      </span>
                    )}
                  </div>
                  <div className="min-w-[40%] text-right text-[12px]">
                    {variant.monthlyPrice && <p>{variant.monthlyPrice} hoặc</p>}
                    {variant.fullPrice && <p>{variant.fullPrice}</p>}
                  </div>
                </button>
              </div>
              {(variant.promo || variant.hasGalaxyAI) && (
                <div className="px-4 pt-2 pb-1 md:px-6 md:pt-1.75 md:pb-0">
                  {variant.promo && (
                    <span className="text-[14px] text-[#006bea] md:text-[16px]">
                      {variant.promo}
                    </span>
                  )}
                  {variant.hasGalaxyAI && variant.aiBadgeSrc && (
                    <div className="mt-1">
                      <Image
                        src={variant.aiBadgeSrc}
                        alt="Galaxy AI"
                        width={94}
                        height={18}
                      />
                    </div>
                  )}
                </div>
              )}
              {variant.note && (
                <p className="px-4 pt-2 pb-1 text-[14px] text-[#006bea] md:px-6 md:pt-1.75 md:pb-0 md:text-[16px]">
                  {variant.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeviceVariant;
