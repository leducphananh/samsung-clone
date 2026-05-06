'use client';
import { useState } from 'react';
import { offers } from '../constants/offer.constant';

const OfferCard = () => {
  const [selectedOffer, setSelectedOffer] = useState(offers[0].id);

  return (
    <section className="mx-auto w-full max-w-360 py-15">
      <h2 className="font-samsung-sharp mb-5.5 px-6 text-[24px] font-bold md:text-[40px]">
        Ưu đãi mới nhất
      </h2>
      <div className="flex justify-center">
        <ul className="flex items-center gap-6 font-bold">
          {offers.map(offer => (
            <li key={offer.id}>
              <button className="cursor-pointer">{offer.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OfferCard;
