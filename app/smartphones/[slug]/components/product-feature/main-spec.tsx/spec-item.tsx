import clsx from 'clsx';
import Image from 'next/image';

const SpecItem = ({
  imgSrc,
  label,
  value,
  highlight,
  className,
  valueClassName,
}: {
  imgSrc?: string;
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
  valueClassName?: string;
}) => {
  return (
    <div className={clsx('flex flex-col items-center', className)}>
      {imgSrc && (
        <div className="mb-2.5 md:mb-5">
          <Image
            width={64}
            height={64}
            alt=""
            src={imgSrc}
            className="size-14.5 md:size-16"
          />
        </div>
      )}
      <p className="text-[14px] text-[#757575] md:text-[18px]">{label}</p>
      <p
        className={clsx(
          'font-samsung-sharp mt-2.25 text-[19px] font-bold md:mt-3 md:text-[24px]',
          highlight && 'text-[#006bea]',
          valueClassName,
        )}>
        {value}
      </p>
    </div>
  );
};

export default SpecItem;
