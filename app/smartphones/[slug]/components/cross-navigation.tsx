import { Star } from 'lucide-react';
import Link from 'next/link';

const CrossNavigation = () => {
  return (
    <>
      <section className="border-b border-[#ddd]">
        <div className="mx-auto flex w-full max-w-360 items-center justify-between">
          <div className="mx-3 md:mx-8">
            <ul className="flex items-center">
              <li className="relative flex min-h-12 items-center after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:bg-black after:content-[''] md:min-h-17.5">
                <Link
                  href="#"
                  className="font-samsung-sharp px-3 text-[14px] font-bold md:text-[16px]">
                  Galaxy S26 Ultra
                </Link>
              </li>
              <li className="flex min-h-12 items-center md:min-h-17.5">
                <Link
                  href="#"
                  className="font-samsung-sharp px-3 text-[14px] font-bold md:text-[16px]">
                  Galaxy S26+ | S26
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden flex-col items-end py-4 pr-10 md:flex">
            <div className="mr-2 flex items-center pr-2">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-px">
                  <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
                  <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
                  <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
                  <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
                  <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
                </div>
                <div className="mr-0.75 text-[14px] text-[#0077C8]">4.8</div>
              </div>
              <span className="mr-0.75 pr-px text-[13px] text-[#ccc]">|</span>
              <div className="text-[14px] text-[#0077C8]">16031 đánh giá</div>
            </div>
            <div className="pt-0.5 text-[14px]">
              6189 trong số 6441 (96%) người đánh giá giới thiệu sản phẩm này
            </div>
          </div>
        </div>
      </section>

      <div className="block px-6 py-2.5 md:hidden">
        <div className="flex items-center">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-px">
              <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
              <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
              <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
              <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
              <Star fill="#ffaa4e" strokeWidth={0} className="size-5" />
            </div>
            <div className="mr-0.75 text-[12px] text-[#0077C8]">4.8</div>
          </div>
          <span className="mr-0.75 pr-px text-[12px] text-[#ccc]">|</span>
          <div className="text-[12px] text-[#0077C8]">16031 đánh giá</div>
        </div>
        <div className="pt-1.5 text-[12px]">
          6189 trong số 6441 (96%) người đánh giá giới thiệu sản phẩm này
        </div>
      </div>
    </>
  );
};

export default CrossNavigation;
