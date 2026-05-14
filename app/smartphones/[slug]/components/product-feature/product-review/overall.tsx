import { ratings } from '@/app/constants/rating.constant';
import clsx from 'clsx';
import { Star } from 'lucide-react';
import { useState } from 'react';

const Overall = () => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const totalRatings = ratings.reduce((sum, rating) => sum + rating.count, 0);
  const averageRating =
    ratings.reduce((sum, rating) => sum + rating.stars * rating.count, 0) /
    totalRatings;

  return (
    <>
      <h2 className="mt-5.5 text-[26px] font-bold">Đánh giá</h2>
      <div className="grid grid-cols-1 border-b border-[#363636] md:grid-cols-3">
        <div className="col-span-1">
          <h3 className="p-2.5 text-[13px] text-[#363636]">
            Kết xuất nhanh xếp loại
          </h3>
          <div className="p-2.5 pt-0">
            <div className="pt-1.25 pb-3.75 text-[13px] text-[#363636]">
              Chọn một dòng dưới đây để lọc đánh giá.
            </div>
            <RatingTable />
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="p-2.5 text-[13px] text-[#363636]">
            Xếp hạng tổng thể
          </h3>
          <div className="p-2.5 pt-0">
            <div className="mt-1.25 flex items-center">
              <div className="h-12.5 min-w-15 p-1.25 pl-0 text-[45px] leading-10 text-[#363636]">
                {averageRating.toFixed(1)}
              </div>
              <div className="px-1.5 py-px">
                <div className="p-1.25">
                  <div className="flex items-center">
                    <Star fill="#ffaa4e" strokeWidth={0} size={15} />
                    <Star fill="#ffaa4e" strokeWidth={0} size={15} />
                    <Star fill="#ffaa4e" strokeWidth={0} size={15} />
                    <Star fill="#ffaa4e" strokeWidth={0} size={15} />
                    <Star fill="#ffaa4e" strokeWidth={0} size={15} />
                  </div>
                  <span className="text-[13px] text-[#0077c8]">
                    {totalRatings} đánh giá
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-1.25 p-1.25 pl-0 text-[13px] text-[#363636]">
              6228 trong số 6484 (96%) người đánh giá giới thiệu sản phẩm này
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="p-2.5 text-[13px] text-[#363636]">
            Đánh giá sản phẩm này
          </h3>
          <div className="p-2.5 pt-0">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map(star => {
                const isHovered = hoveredStars >= star;

                return (
                  <button
                    key={star}
                    className="p-1"
                    onMouseEnter={() => setHoveredStars(star)}
                    onMouseLeave={() => setHoveredStars(0)}
                    onFocus={() => setHoveredStars(star)}
                    onBlur={() => setHoveredStars(0)}>
                    <div
                      className={clsx(
                        'flex max-h-17.75 min-h-12.25 max-w-17.75 min-w-12.25 cursor-pointer items-center justify-center rounded-sm border border-[#ffaa4e] transition-all duration-200',
                        isHovered && 'bg-[#ffaa4e]',
                      )}>
                      <Star
                        strokeWidth={1}
                        color="#ffaa4e"
                        size={20}
                        fill="white"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="m-1.25 mt-1.75 p-1.25 pt-0 text-[13px] text-[#363636]">
            Thêm đánh giá sẽ yêu cầu một email hợp lệ để xác minh
          </div>
        </div>
      </div>
    </>
  );
};

const RatingTable = () => {
  const totalRatings = ratings.reduce((sum, rating) => sum + rating.count, 0);

  return (
    <div>
      {ratings.map(rating => {
        const widthPercent = (rating.count / totalRatings) * 100;

        return (
          <div key={rating.stars} className="flex items-center">
            <div className="text-[13px] text-[#363636]">{rating.stars} sao</div>
            <div className="min-w-px flex-1 px-2.5 py-1.5">
              <div
                style={{
                  boxShadow: 'rgb(204, 204, 204) 0px 0px 0px 1px inset',
                }}
                className="h-3.25 w-full overflow-hidden rounded-full bg-[#bbb]">
                <div
                  className="h-full bg-[#ffaa4e]"
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
            </div>
            <div className="max-w-13.75 min-w-11.25 text-[13px] text-[#363636]">
              {rating.count}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Overall;
