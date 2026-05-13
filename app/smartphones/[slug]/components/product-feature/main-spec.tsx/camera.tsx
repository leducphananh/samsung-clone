import { cameraSpecs } from '@/app/constants/main-spec.constant';
import clsx from 'clsx';
import SpecItem from './spec-item';

const Camera = () => {
  return (
    <>
      <div className="mt-16.25 border-b-2 border-[#bbb] pb-1 md:pb-3">
        <h3 className="font-samsung-sharp text-[26px] font-bold md:text-[32px]">
          Camera
          <sup className="top-2.5 align-top text-[11px]">2</sup>
        </h3>
      </div>
      <ul className="mt-8.25 flex justify-between gap-7 md:gap-16">
        {cameraSpecs.map((spec, index) => (
          <li
            key={spec.id}
            className={clsx(
              'flex flex-col items-center',
              index >= 2 ? 'hidden w-43 md:block md:w-75' : 'w-43 md:w-75',
            )}>
            <SpecItem
              key={spec.rearWide.label}
              imgSrc={spec.rearWide.imgSrc}
              label={spec.rearWide.label}
              value={spec.rearWide.value}
              highlight={spec.rearWide.highlight}
            />
            <SpecItem
              key={spec.rearUltraWide.label}
              imgSrc={spec.rearUltraWide.imgSrc}
              label={spec.rearUltraWide.label}
              value={spec.rearUltraWide.value}
              highlight={spec.rearUltraWide.highlight}
              className="mt-6 md:mt-8.25"
            />
            <SpecItem
              key={spec.rearTele.label}
              imgSrc={spec.rearTele.imgSrc}
              label={spec.rearTele.label}
              value={spec.rearTele.value}
              highlight={spec.rearTele.highlight}
              className="mt-6 md:mt-8.25"
            />
            <SpecItem
              imgSrc={spec.front.imgSrc}
              label={spec.front.label}
              value={spec.front.value}
              className="mt-6 md:mt-8.25"
            />
            <SpecItem
              label={spec.zoomLines.label}
              value={spec.zoomLines.value}
              className="mt-6 md:mt-8.25"
              valueClassName="text-[16px]! md:text-[22px]! font-samsung-one! text-center"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Camera;
