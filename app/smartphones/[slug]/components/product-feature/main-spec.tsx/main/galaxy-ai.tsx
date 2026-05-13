import clsx from 'clsx';
import Image from 'next/image';

const GalaxyAI = () => {
  return (
    <>
      <div className="mt-16.25 border-b-2 border-[#bbb] pb-1 md:pb-3">
        <h3 className="font-samsung-sharp text-[26px] font-bold md:text-[32px]">
          <div className="inline-flex items-center">
            Galaxy AI
            <div className="mx-0.75 flex h-10 w-10 shrink-0 items-center justify-center">
              <Image
                width={40}
                height={40}
                alt=""
                src="https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/common-ai-intelligence.jpg"
              />
            </div>
          </div>
          <sup className="top-2.5 align-top text-[11px]">3</sup>
        </h3>
      </div>

      <ul className="mt-8.25 flex justify-between gap-7 md:gap-16">
        {[1, 2, 3].map((item, index) => (
          <li
            key={item}
            className={clsx(
              'flex flex-col items-center',
              index >= 2 ? 'hidden w-43 md:block md:w-75' : 'w-43 md:w-75',
            )}>
            <div className="flex items-center justify-center">
              <p className="font-samsung-sharp text-[26px] whitespace-nowrap md:text-[32px]">
                Galaxy AI
              </p>
              <div className="mx-1.5 flex h-10 w-10 shrink-0 items-center justify-center">
                <Image
                  className="h-7.5 w-7.5 md:h-10 md:w-10"
                  width={40}
                  height={40}
                  alt=""
                  src="https://images.samsung.com/common/smartphones/compare/galaxy-s26/images/common-ai-intelligence.jpg"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GalaxyAI;
