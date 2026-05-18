import { screenWeights } from '@/constants/main-spec.constant';
import clsx from 'clsx';
import SpecItem from './spec-item';

const WeightDimension = () => {
  return (
    <>
      <div className="border-b-2 border-[#bbb] pb-1 md:pb-3">
        <h3 className="font-samsung-sharp text-[26px] font-bold md:text-[32px]">
          Trọng lượng & Kích thước
          <sup className="top-2.5 align-top text-[11px]">1</sup>
        </h3>
      </div>
      <ul className="mt-6 flex justify-between gap-7 md:mt-8.25 md:gap-16">
        {screenWeights.map((item, index) => (
          <li
            key={item.id}
            className={clsx(
              'flex flex-col items-center',
              index >= 2 ? 'hidden w-43 md:block md:w-75' : 'w-43 md:w-75',
            )}>
            <SpecItem
              imgSrc={item.screen.imgSrc}
              label={item.screen.label}
              value={item.screen.value}
              highlight={item.screen.highlight}
            />
            <SpecItem
              label={item.weight.label}
              value={item.weight.value}
              highlight={item.weight.highlight}
              className="mt-6 md:mt-8.25"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default WeightDimension;
