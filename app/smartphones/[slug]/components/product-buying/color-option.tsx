'use client';
import { deviceVariants } from '@/app/constants/product-buying.constant';
import { CircleQuestionMark } from 'lucide-react';
import { useMemo } from 'react';

interface Props {
  activeDevice: string;
}

const ColorOption = ({ activeDevice }: Props) => {
  const device = deviceVariants.find(d => d.id === activeDevice);
  const colorOptions = useMemo(() => device?.colorOptions || [], [device]);
  const exclusiveColors = colorOptions.filter(c => c.exclusive);
  const normalColors = colorOptions.filter(c => !c.exclusive);

  return (
    <div>
      <div className="pt-6 pb-4">
        <div className="flex items-center gap-1.75">
          <h2 className="font-samsung-sharp text-[20px] font-bold md:text-[24px]">
            Màu sắc
          </h2>
          <button type="button" className="relative cursor-pointer">
            <CircleQuestionMark strokeWidth={1.2} size={17} />
          </button>
        </div>
        <div className="font-samsung-sharp hidden border-l border-[#ddd] pl-2 text-[16px] text-[#999] md:block">
          Samsung.com only
        </div>
        <p className="mt-2 text-[12px] md:text-[14px]">Chọn màu yêu thích</p>
      </div>

      <div className="mt-6">
        <ExclusiveColorOption exclusiveColors={exclusiveColors} />
        <ul className="mt-4 grid grid-cols-4 px-2">
          {normalColors.map(color => (
            <li
              key={color.id}
              className="col-span-1 flex flex-col items-center p-1 pb-4">
              <div className="h-11 w-11 shrink-0 rounded-full p-0.5">
                <div
                  className="h-full w-full rounded-full border border-[#00000080]"
                  style={{ backgroundColor: color.hex }}
                />
              </div>
              <div className="mt-1 text-center text-[12px] md:text-[14px]">
                {color.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExclusiveColorOption = ({
  exclusiveColors,
}: {
  exclusiveColors: Array<{
    id: string;
    label: string;
    hex: string;
    exclusive: boolean;
  }>;
}) => {
  if (exclusiveColors.length === 0) return null;

  if (exclusiveColors.length === 1) {
    return (
      <div className="rounded-[20px] bg-[#f7f7f7]">
        <button className="flex w-full cursor-pointer items-center gap-2.5 px-5 py-3.5">
          <div className="h-11 w-11 shrink-0 rounded-full p-0.5">
            <div
              className="h-full w-full rounded-full border border-[#00000080]"
              style={{ backgroundColor: exclusiveColors[0].hex }}
            />
          </div>

          <div className="flex flex-col items-start justify-start">
            <div className="text-[14px] font-bold">Phiên bản Màu độc quyền</div>
            <div className="mt-1 text-left text-[12px] md:text-[14px]">
              Chỉ có tại Samsung.com, Samsung West Lake, Samsung 68
            </div>
            <div className="mt-4 text-[12px] font-bold md:text-[14px]">
              {exclusiveColors[0].label}
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] border border-[#ddd] px-2 py-4">
      <div className="text-center text-[12px] font-bold md:text-[14px]">
        Phiên bản Màu độc quyền
      </div>
      <div className="mt-1 text-center text-[10px] md:text-[12px]">
        Chỉ có tại Samsung.com, Samsung West Lake, Samsung 68
      </div>
      <ul className="mt-4 flex w-full flex-wrap justify-center">
        {exclusiveColors.map(color => (
          <li
            key={color.id}
            className="flex w-1/4 flex-col items-center justify-center p-1 pb-4">
            <div className="h-11 w-11 shrink-0 rounded-full p-0.5">
              <div
                className="h-full w-full rounded-full border border-[#00000080]"
                style={{ backgroundColor: color.hex }}
              />
            </div>
            <div className="mt-1 text-center text-[12px] md:text-[14px]">
              {color.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorOption;
