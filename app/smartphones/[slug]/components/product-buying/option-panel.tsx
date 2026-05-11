'use client';
import { featureIcons } from '@/app/constants/product-buying.constant';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ColorOption from './color-option';
import DeviceVariant from './device-variant';
import StorageOption from './storage-option';

interface Props {
  activeDevice: string;
  setActiveDevice: (id: string) => void;
}

const OptionPanel = ({ activeDevice, setActiveDevice }: Props) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:w-95 lg:shrink-0">
      {/* Feature icons row */}
      <div className="flex w-fit items-center gap-2 rounded-[20px] bg-[#f7f7f7] p-4 md:gap-4">
        {featureIcons.map(feat => (
          <div
            key={feat.label}
            className="flex min-w-24 flex-col items-center justify-center gap-2">
            <Image src={feat.icon} alt={feat.label} width={36} height={36} />
            <span className="text-[10px] md:text-[12px]">{feat.label}</span>
          </div>
        ))}
      </div>

      {/* ── Thiết bị (Device) ── */}
      <DeviceVariant
        activeDevice={activeDevice}
        setActiveDevice={setActiveDevice}
      />

      {/* ── Bộ nhớ (Storage) ── */}
      <StorageOption activeDevice={activeDevice} />

      {/* ── Màu sắc (Color) ── */}
      <ColorOption activeDevice={activeDevice} />
    </div>
  );
};

export default OptionPanel;
