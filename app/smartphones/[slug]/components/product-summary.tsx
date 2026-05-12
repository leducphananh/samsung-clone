import { MessageSquareMore } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductSummary = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center gap-6 px-7 pt-12 pb-7 md:flex-row md:py-16 md:pr-30 md:pl-22">
        <div className="order-2 min-w-px flex-1 md:order-1">
          <h2 className="font-samsung-sharp mt-0.75 mb-4 text-[16px] font-bold">
            Mở hộp siêu phẩm
          </h2>
          <Image
            alt="Galaxy S26 Ultra in-box contents"
            src="https://images.samsung.com/vn/smartphones/galaxy-s26-ultra/buy/in_the_box_cobaltViolet_PC.jpg?imbypass=true"
            width={888}
            height={382}
          />
          <div className="mt-8 text-[12px]">
            <p className="whitespace-pre-wrap">
              1. Điện thoại thông minh{'\n'}2. Cáp truyền dữ liệu{'\n'}3. Que
              lấy sim{'\n'}* Galaxy S26 Ultra không bao gồm củ sạc.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 md:mt-9.25 md:w-80">
          <div className="border-b border-[#ddd] pb-4">
            <strong className="font-samsung-sharp text-[24px] font-bold">
              Galaxy S26 Ultra
            </strong>
            <div className="mt-1.25 text-[12px] md:mt-2 md:text-[14px]">
              SM-S948BZVCXXV
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[14px] font-bold">
                <div>512 GB｜12 GB</div>
                <div className="h-3 w-px bg-black" />
                <div>Tím Cobalt</div>
              </div>
              <div className="text-[14px] font-bold">42.990.000 ₫</div>
            </div>
          </div>
          <div className="border-t border-[#ddd] pt-6">
            <strong className="text-[22px] font-bold">
              3.582.500 ₫/tháng với lãi suất 0% hoặc 42.990.000 ₫
            </strong>
            <p className="mt-2 text-[14px]">
              12 tháng trả góp ở mức lãi suất 0%
            </p>
            <p className="mt-1 text-[14px] font-bold">
              Tích lũy đến 5% điểm Samsung Rewards
            </p>
          </div>
          <div className="mt-5 md:mt-12">
            <Link
              href="#"
              className="inline-block w-full rounded-[20px] border border-[#2189ff] bg-[#2189ff] px-6 py-2.5 text-center text-[16px] font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#006bea] md:text-[14px]">
              Mua ngay
            </Link>
            <p className="mt-4 text-center text-[12px] whitespace-pre-wrap text-[#006bea]">
              Sản phẩm có sẵn.{'\n'}Chọn ngay màu sắc yêu thích của bạn.
            </p>
            <div className="mt-4.5 flex items-center justify-center gap-1">
              <MessageSquareMore strokeWidth={1.25} size={16} />
              <span className="text-[14px] font-bold">
                Trò chuyện với chuyên gia
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
