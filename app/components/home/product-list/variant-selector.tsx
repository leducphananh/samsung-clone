'use client';
import clsx from 'clsx';

const VariantSelector = ({
  selectedVariant,
  setSelectedVariant,
  variants,
}: {
  selectedVariant: {
    id: number;
    name: string;
    hex: string;
    img: string;
    default?: boolean;
  };
  setSelectedVariant: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      hex: string;
      img: string;
      default?: boolean;
    }>
  >;
  variants: {
    id: number;
    name: string;
    hex: string;
    img: string;
    default?: boolean;
  }[];
}) => {
  return (
    <div className="flex items-center gap-2">
      {variants.map(variant => (
        <button
          onClick={() => setSelectedVariant(variant)}
          key={variant.id}
          className={clsx(
            'h-6 w-6 rounded-full p-0.5',
            variant.id === selectedVariant.id && 'border border-black bg-white',
          )}>
          <div
            className="h-full w-full cursor-pointer rounded-full border border-[#0003]"
            style={{ backgroundColor: variant.hex }}
          />
        </button>
      ))}
    </div>
  );
};

export default VariantSelector;
