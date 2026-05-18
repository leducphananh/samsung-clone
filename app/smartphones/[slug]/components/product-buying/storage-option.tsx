'use client';
import { deviceVariants } from '@/constants/product-buying.constant';
import clsx from 'clsx';
import { CircleQuestionMark } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

interface Props {
  activeDevice: string;
}

const StorageOption = ({ activeDevice }: Props) => {
  const [activeStorage, setActiveStorage] = useState<string | null>(null);
  const device = deviceVariants.find(d => d.id === activeDevice);
  const storageOptions = useMemo(() => device?.storageOptions || [], [device]);

  useEffect(() => {
    if (storageOptions.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveStorage(storageOptions[0].id);
    }
  }, [storageOptions]);

  return (
    <div>
      <div className="pt-6 pb-4">
        <div className="flex items-center gap-1.75">
          <h2 className="font-samsung-sharp text-[20px] font-bold md:text-[24px]">
            Bộ nhớ
          </h2>
          <button type="button" className="relative cursor-pointer">
            <CircleQuestionMark strokeWidth={1.2} size={17} />
          </button>
        </div>
        <p className="mt-2 text-[12px] md:text-[14px]">
          Chọn dung lượng thiết bị
        </p>
      </div>

      <div>
        <ul className="flex flex-col gap-3">
          {storageOptions.map(variant => (
            <li key={variant.id}>
              <div
                className={clsx(
                  'rounded-md border',
                  activeStorage === variant.id
                    ? 'border-[#2189ff] ring-1 ring-[#2189ff] ring-inset'
                    : 'border-[#ddd] hover:border-[#555]',
                )}>
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-1 px-5 py-3.5"
                  onClick={() => setActiveStorage(variant.id)}>
                  <div className="flex flex-col gap-0.5 text-left">
                    <span className="text-[16px] font-bold whitespace-nowrap md:text-[18px]">
                      {variant.label}
                    </span>
                  </div>
                  <div className="min-w-[40%] text-right text-[12px]">
                    {variant.monthlyPrice && <p>{variant.monthlyPrice} hoặc</p>}
                    {variant.fullPrice && <p>{variant.fullPrice}</p>}
                  </div>
                </button>
              </div>
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

export default StorageOption;
