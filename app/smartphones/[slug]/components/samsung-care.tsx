'use client';
import {
  careInfoCards,
  samsungCareOptions,
} from '@/app/constants/samsung-care.constant';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SamsungCare = () => {
  const [selectedOptionId, setSelectedOptionId] = useState(
    samsungCareOptions[0].id,
  );
  const [selectedCareOption, setSelectedCareOption] = useState<number | null>(
    null,
  );
  const selectedOptions =
    samsungCareOptions.find(option => option.id === selectedOptionId)
      ?.options || [];

  return (
    <section className="mx-auto w-full max-w-360 px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-316 border-t border-[#eee] pt-6 md:pt-12">
        <div className="flex items-center justify-between">
          <h2 className="font-samsung-sharp text-[20px] font-bold md:text-[24px]">
            Samsung Care+
          </h2>
          <Link
            href="#"
            className="text-[12px] font-bold underline md:text-[14px]">
            Tìm hiểu thêm
          </Link>
        </div>
        <h3 className="text-[12px] whitespace-pre-wrap md:mt-0 md:text-[14px]">
          Bảo vệ toàn diện thiết bị của bạn khỏi sự cố bất ngờ với dịch vụ sữa
          chữa và linh kiện chính hãng{'\n'}*Bảo vệ toàn cầu cùng Samsung Care+:
          Nếu cần hỗ trợ khi đang du lịch, hãy liên hệ với trung tâm dịch vụ
          khách hàng địa phương tại quốc gia/khu vực bạn đến để xác nhận các
          quyền lợi Samsung Care+ được áp dụng.
        </h3>

        <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
          {samsungCareOptions.map(option => {
            const isSimple = !option.details?.length;
            const isSelected = option.id === selectedOptionId;

            return (
              <li key={option.id} className="col-span-1">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedOptionId(option.id);
                    setSelectedCareOption(null);
                  }}
                  className={clsx(
                    'flex h-full w-full cursor-pointer rounded-[5px] border p-4 md:p-6',
                    isSimple ? 'items-center' : 'flex-col',
                    isSelected
                      ? 'border-[#006bea] ring-1 ring-[#2189ff] ring-inset'
                      : 'border-[#ddd] hover:border-[#555]',
                  )}>
                  <div className={clsx(isSimple ? '' : 'space-y-1')}>
                    <p className="text-left text-[16px] font-bold md:text-[18px]">
                      {option.title}
                    </p>
                    {option.price && (
                      <p className="text-left text-[14px] md:text-[16px]">
                        {option.price}
                      </p>
                    )}
                  </div>
                  {option.details?.length && (
                    <>
                      <div className="mt-4 mb-3 h-px w-full bg-[#ddd]" />
                      <ul className="text-left text-[12px]">
                        {option.details.map(detail => (
                          <li
                            key={detail}
                            className="relative mt-1 pl-3.5 before:absolute before:top-1/2 before:left-0 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-black">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {selectedOptions.length > 0 && (
          <div className="mt-2 rounded-md bg-[#f5f7fe] p-4 md:mt-4 md:px-6 md:py-5.5">
            <div className="mb-4 text-[13px] font-bold md:text-[14px]">
              Thanh toán
            </div>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
              {selectedOptions.map(option => (
                <li key={option.id}>
                  <button
                    className={clsx(
                      'flex h-full w-full cursor-pointer items-center justify-between gap-4 rounded-md border bg-white p-4 md:px-5 md:py-4',
                      selectedCareOption === option.id
                        ? 'border-[#006bea] ring-1 ring-[#2189ff] ring-inset'
                        : 'border-[#ddd] hover:border-[#555]',
                    )}
                    onClick={() => setSelectedCareOption(option.id)}>
                    <div className="flex-auto text-left text-[12px] font-bold md:flex-1 md:text-[14px]">
                      {option.label}
                    </div>
                    <div className="flex-auto text-right text-[12px] md:flex-1 md:text-[14px]">
                      {option.price}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-2 text-[12px] md:mt-4">Giá đã bao gồm thuế</p>

        <ul className="mt-2 grid grid-cols-1 gap-2 md:mt-4 md:grid-cols-2 md:gap-4">
          {careInfoCards.map(card => (
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
      </div>
    </section>
  );
};

export default SamsungCare;
