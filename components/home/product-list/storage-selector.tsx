'use client';
import clsx from 'clsx';
import { useState } from 'react';

const StorageSelector = ({ storage }: { storage: string[] }) => {
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-2">
      {storage.map(item => (
        <button
          key={item}
          onClick={() => setSelectedStorage(item)}
          className={clsx(
            'h-8 cursor-pointer rounded-sm px-2 text-[12px] whitespace-nowrap hover:text-[#000000b3] md:text-[14px]',
            item === selectedStorage && 'border border-black font-bold',
          )}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default StorageSelector;
