import { screenSpecs } from '@/app/constants/all-spec.constant';
import clsx from 'clsx';
import SpecItem from './spec-item';

const Camera = () => {
  return (
    <>
      <div className="mt-16.25 pb-1 md:pb-3">
        <h3 className="font-samsung-sharp text-[19px] font-bold md:text-[32px]">
          Camera
          <sup className="top-2.5 align-top text-[11px]">2</sup>
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
            <SpecItem
              imgSrc={item.rearWide.imgSrc}
              label={item.rearWide.label}
              value={item.rearWide.value}
              highlight={item.rearWide.highlight}
            />
            <SpecItem
              label={item.rearUltraWide.label}
              value={item.rearUltraWide.value}
              highlight={item.rearUltraWide.highlight}
              className="mt-6 md:mt-8.25"
            />
            <SpecItem
              label={item.rearTele.label}
              value={item.rearTele.value}
              highlight={item.rearTele.highlight}
              className="mt-6 md:mt-8.25"
            />
            <SpecItem
              imgSrc={item.front.imgSrc}
              label={item.front.label}
              value={item.front.value}
            />
            <SpecItem
              label={item.zoomLines.label}
              value={item.zoomLines.value}
              className="mt-6 md:mt-8.25"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Camera;
