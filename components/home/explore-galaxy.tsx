import { exploreItems } from '@/constants/explore.constant';
import Image from 'next/image';
import Link from 'next/link';

const ExploreGalaxy = () => {
  return (
    <div className="mx-auto w-full max-w-360">
      <div className="px-6">
        <h1 className="font-samsung-sharp pt-6 pb-2.5 text-left text-[28px] md:pt-11 md:pb-5.5 md:text-[40px]">
          Khám phá Điện thoại Galaxy
        </h1>
      </div>
      <div className="no-scrollbar flex flex-nowrap gap-2 overflow-auto px-6 py-2">
        <div className="flex w-64.5 shrink-0 items-center justify-between rounded-lg border border-black bg-[#f7f7f7] py-3.75 pr-2.25 pl-3.25 md:w-77 md:pt-5 md:pr-4 md:pb-4.5 md:pl-4.75">
          <div className="max-w-35.75 md:max-w-43">
            <p className="font-samsung-sharp text-[16px] font-bold md:text-[18px]">
              Điện thoại Galaxy
            </p>
            <p className="mt-3 hidden text-[12px] whitespace-pre-wrap md:block">
              Cánh tay đắc lực AI{'\n'}Galaxy AI
            </p>
          </div>
          <Image
            className="h-21.5 w-21.5 md:h-23 md:w-23"
            width={92}
            height={92}
            alt=""
            src="https://images.samsung.com/is/image/samsung/assets/vn/s2602/pcd/smartphones/PF_Main-Category_Galaxy-Smartphone_176x176.png?$ORIGIN_PNG$"
          />
        </div>

        {exploreItems.map(item => (
          <div key={item.id} className="h-auto w-41.75 shrink-0 md:w-48">
            <Link
              href="#"
              className="group flex h-full w-full flex-col items-center justify-between rounded-lg bg-[#f7f7f7] p-2.25 md:px-2 md:py-1">
              <div className="font-samsung-sharp mb-1 flex min-h-11 flex-1 items-center justify-center text-[14px] font-bold md:text-[16px]">
                {item.title}
              </div>
              <Image
                src={item.img}
                alt=""
                width={64}
                height={64}
                className="h-14.25 w-14.25 transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGalaxy;
