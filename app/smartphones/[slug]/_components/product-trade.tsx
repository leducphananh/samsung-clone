'use client';
import {
  tradeInfoCards,
  tradeOptions,
} from '@/constants/product-trade.constant';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import TradeInModal from './trade-in-modal/trade-in-modal';

const ProductTrade = () => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isTradeInModalOpen, setIsTradeInModalOpen] = useState(false);

  return (
    <section className="mx-auto w-full max-w-360 px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-316 border-t border-[#eee] pt-6 md:pt-12">
        <div className="flex items-center justify-between">
          <h2 className="font-samsung-sharp text-[20px] font-bold md:text-[24px]">
            Thu cũ đổi mới
          </h2>
          <Link
            href="#"
            className="text-[12px] font-bold underline md:text-[14px]">
            Tìm hiểu thêm
          </Link>
        </div>
        <h3 className="text-[12px] whitespace-pre-wrap md:mt-0 md:text-[14px]">
          Tiết kiệm lên đến <b>18 TRIỆU đồng</b> khi bạn tham gia thu cũ một
          thiết bị đủ điều kiện!{'\n'}Áp dụng thu cũ đổi mới nhiều thiết bị di
          động khác nhau từ nhiều thương hiệu khác nhau
        </h3>

        <ul className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
          {tradeOptions.map(option => {
            const isSelected = option.id === selectedOptionId;

            return (
              <li key={option.id} className="col-span-1">
                <button
                  type="button"
                  className={clsx(
                    'flex h-full w-full cursor-pointer items-center justify-between rounded-[5px] border p-4 md:p-5.5',
                    isSelected
                      ? 'border-[#006bea] ring-1 ring-[#006bea] ring-inset'
                      : 'border-[#ddd] hover:border-[#555]',
                  )}
                  onClick={() => {
                    setSelectedOptionId(option.id);

                    if (option.id === 'trade-in') {
                      setIsTradeInModalOpen(true);
                    }
                  }}>
                  <div className="text-[16px] font-bold md:text-[18px]">
                    {option.label}
                  </div>
                  {option.detailTitle && (
                    <div className="space-y-1">
                      <div className="text-right text-[12px] text-[#757575] md:text-[14px]">
                        {option.detailTitle}
                      </div>
                      <p className="text-[12px] text-[#757575] md:text-[14px]">
                        <em className="text-[14px] text-[#006bea] not-italic md:text-[16px]">
                          {option.detailRange?.start}
                        </em>{' '}
                        đến{' '}
                        <em className="text-[14px] text-[#006bea] not-italic md:text-[16px]">
                          {option.detailRange?.end}
                        </em>
                      </p>
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-2 rounded-md bg-[#f5f7fe] px-4 py-3 md:mt-4 md:p-6">
          <p className="text-[12px] font-bold md:text-[14px]">
            Không thu cũ vẫn nhận ưu đãi mới
          </p>
          <p className="text-[10px] md:text-[14px]">
            Áp dụng thu cũ đổi mới nhiều thiết bị di động khác nhau từ nhiều
            thương hiệu khác nhau
          </p>
        </div>

        <ul className="mt-2 grid grid-cols-1 gap-2 md:mt-4 md:grid-cols-2 md:gap-4">
          {tradeInfoCards.map(card => (
            <li
              key={card.id}
              className="col-span-1 flex items-center rounded-[5px] bg-[#f7f7f7]">
              <Image
                width={110}
                height={96}
                alt={card.image.alt}
                src={card.image.src}
                className="h-21.75 w-25 shrink-0 md:h-24 md:w-27.5"
              />
              <div className="py-4 pr-6 pl-1 md:pr-8">
                <div className="mb-1 text-[12px] font-bold md:mb-0.5 md:text-[14px]">
                  {card.title}
                </div>
                <div className="text-[10px] md:text-[12px]">
                  {card.description}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <TradeInModal
          isOpen={isTradeInModalOpen}
          onClose={() => {
            setIsTradeInModalOpen(false);
            setSelectedOptionId('no-thanks');
          }}
        />
      </div>
    </section>
  );
};

export default ProductTrade;
