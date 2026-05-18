const AverageRating = () => {
  return (
    <div className="border-b border-[#eaeaea] text-[13px] text-[#363636]">
      <h3 className="p-2.5 md:text-center">Xếp loại khách hàng trung bình</h3>
      <div className="m-2.5 mb-5 flex flex-col md:flex-row md:items-center md:justify-center">
        <div className="min-w-px flex-1 md:max-w-51.25">
          <div className="px-1.25">Tính năng</div>
          <div className="flex items-center md:mr-3.75">
            <div className="flex min-w-37.5 flex-1 items-center gap-px px-1.25 py-2.5">
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
            </div>
            <div className="min-w-5 p-1.25">4.9</div>
          </div>
        </div>
        <div className="min-w-px flex-1 md:max-w-51.25">
          <div className="px-1.25">Hiệu năng</div>
          <div className="flex items-center md:mr-3.75">
            <div className="flex min-w-37.5 flex-1 items-center gap-px px-1.25 py-2.5">
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
            </div>
            <div className="min-w-5 p-1.25">4.9</div>
          </div>
        </div>
        <div className="min-w-px flex-1 md:max-w-51.25">
          <div className="px-1.25">Thiết kế</div>
          <div className="flex items-center md:mr-3.75">
            <div className="flex min-w-37.5 flex-1 items-center gap-px px-1.25 py-2.5">
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
              <div className="h-3.25 min-w-px flex-1 bg-[#ffaa4e]"></div>
            </div>
            <div className="min-w-5 p-1.25">4.9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageRating;
