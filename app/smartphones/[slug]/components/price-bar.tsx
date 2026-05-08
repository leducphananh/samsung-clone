import { ShoppingBag, Truck } from 'lucide-react';
import Link from 'next/link';

const PriceBar = () => {
  return (
    <section className="mx-auto hidden w-full max-w-360 items-center justify-between px-6 py-4 md:flex">
      <div>
        <p className="mb-1 text-[12px] text-[#006bea]">Mới ra mắt</p>
        <Link href="#" className="font-samsung-sharp text-[24px] font-bold">
          Galaxy S26 Ultra
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-0.5">
            <p className="text-[14px] font-bold">
              3.082.500 ₫/tháng với lãi suất 0% hoặc 36.990.000 ₫
            </p>
            <div className="flex size-3.25 items-center justify-center rounded-full border border-[#9b9b9b]">
              *
            </div>
          </div>
          <div className="mt-3 flex items-center justify-end gap-4">
            <div className="flex items-center gap-1">
              <Truck strokeWidth={1.5} size={16} />
              <span className="text-[12px]">Giao hàng miễn phí</span>
            </div>
            <span className="h-3 w-px bg-[#ddd]" />
            <div className="flex items-center gap-1">
              <ShoppingBag strokeWidth={1.5} size={16} />
              <span className="text-[12px]">Nhận tại cửa hàng</span>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="rounded-[20px] border border-[#2189ff] bg-[#2189ff] px-4.75 py-1.5 text-[12px] font-bold text-white transition-colors duration-200 hover:bg-white hover:text-[#006bea]">
          Mua ngay
        </Link>
      </div>
    </section>
  );
};

export default PriceBar;
