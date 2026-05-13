'use client';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { default as AllBattery } from './all/battery';
import { default as AllCamera } from './all/camera';
import { default as AllGalaxyAI } from './all/galaxy-ai';
import { default as AllWeightDimension } from './all/weight-dimension';
import Battery from './main/batery';
import Camera from './main/camera';
import GalaxyAI from './main/galaxy-ai';
import Processor from './main/processor';
import Screen from './main/screen';
import WeightDimension from './main/weight-dimension';

const MainSpec = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-30">
      <h2 className="font-samsung-sharp text-center text-[32px] font-bold md:text-[48px]">
        Thông số kỹ thuật chính
      </h2>
      <div className="mt-9.5 md:mt-15.5">
        <WeightDimension />
        <Camera />
        <GalaxyAI />
        <Battery />
        <Processor />
        <Screen />
      </div>
      <div className="mt-20 flex items-center justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="flex cursor-pointer items-center gap-1 rounded-[100px] border border-black px-5 py-2 text-[14px] font-bold hover:border-[#555] hover:text-[#555]">
          Xem thêm
          <ChevronDown
            size={20}
            className={clsx(
              'transition-transform duration-300',
              isExpanded ? 'rotate-180' : 'rotate-0',
            )}
          />
        </button>
      </div>
      <div
        className={clsx(
          'grid overflow-hidden transition-[grid-template-rows,opacity,margin-top] duration-300 ease-out',
          isExpanded
            ? 'mt-31 grid-rows-[1fr] opacity-100'
            : 'mt-0 grid-rows-[0fr] opacity-0',
        )}>
        <div className="overflow-hidden">
          <h2 className="font-samsung-sharp mb-4.5 text-[32px] font-bold md:mb-16 md:text-[48px]">
            Tất cả thông số kỹ thuật
          </h2>
          <AllWeightDimension />
          <AllCamera />
          <AllGalaxyAI />
          <AllBattery />
        </div>
      </div>
    </div>
  );
};

export default MainSpec;
