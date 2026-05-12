import { promotionGifts } from '@/app/constants/promotion-gift.constant';
import Image from 'next/image';
import Link from 'next/link';

const PromotionGift = () => {
  return (
    <section className="mx-auto w-full max-w-360 px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-316 border-t border-[#eee] pt-6 md:pt-12">
        <h2 className="font-samsung-sharp text-[20px] font-bold md:text-[24px]">
          Quà tặng và ưu đãi
        </h2>
        <h3 className="text-[12px] whitespace-pre-wrap md:mt-0 md:text-[14px]">
          Nhận thêm ưu đãi khi mua hàng
        </h3>
        <div className="mt-5 mb-7 md:mt-6 md:mb-12">
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
            {promotionGifts.map(gift => (
              <li
                key={gift.id}
                className="flex h-full w-full items-center justify-between gap-3 rounded-[20px] border border-[#ddd] p-5 md:gap-6 md:p-6">
                <div>
                  {gift.badge && (
                    <div className="mb-2 text-[12px] font-bold text-[#006bea]">
                      {gift.badge}
                    </div>
                  )}
                  <div className="text-[16px] font-bold md:text-[18px]">
                    {gift.title}
                  </div>
                  <div className="mt-1 text-[16px]">{gift.description}</div>
                  {gift.ctaHref && (
                    <div className="mt-2">
                      <Link
                        href={gift.ctaHref}
                        className="text-[14px] font-bold underline">
                        Tìm hiểu thêm
                      </Link>
                    </div>
                  )}
                </div>
                <div className="shrink-0">
                  <Image
                    src={gift.iconSrc}
                    alt={gift.title}
                    width={80}
                    height={80}
                    className="h-16.5 w-16.5 md:h-20 md:w-20"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PromotionGift;
