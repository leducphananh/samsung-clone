'use client';
import { outstandingFeatures } from '@/app/constants/product-feature.constant';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { FreeMode, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const OutstandingFeature = () => {
  const [navState, setNavState] = useState({ left: false, right: true });

  const syncNavState = (swiper: SwiperType) => {
    setNavState({ left: !swiper.isBeginning, right: !swiper.isEnd });
  };

  return (
    <div>
      <div className="relative">
        <Swiper
          modules={[FreeMode, Navigation, Scrollbar]}
          navigation={{
            prevEl: '.outstanding-feature-prev',
            nextEl: '.outstanding-feature-next',
          }}
          scrollbar={{
            el: '.outstanding-feature-scrollbar',
            draggable: true,
          }}
          freeMode={{
            minimumVelocity: 5,
          }}
          onSwiper={syncNavState}
          onSlideChange={syncNavState}
          onProgress={syncNavState}
          spaceBetween={16}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="outstanding-feature-swiper">
          {outstandingFeatures.map(feature => (
            <SwiperSlide key={feature.id} className="h-auto!">
              <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-[#f7f7f7]">
                <div className="min-h-px flex-1 p-5 md:p-6">
                  <strong className="text-[21px] font-bold md:text-[22px]">
                    {feature.title}
                  </strong>
                  <div className="mt-2.5 text-[14px] md:mt-2 md:text-[16px]">
                    {feature.desc}
                    <sup>{feature.sup.join(',')}</sup>
                  </div>
                </div>
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  width={404}
                  height={240}
                />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          aria-label="Previous"
          className={clsx(
            'outstanding-feature-prev absolute top-1/2 -left-14 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#ffffff26] bg-[#00000073] transition-all duration-200 hover:bg-[#1c1c1c] md:flex',
            navState.left ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}>
          <ChevronLeft size={30} color="#fff" strokeWidth={1} />
        </button>
        <button
          type="button"
          aria-label="Next"
          className={clsx(
            'outstanding-feature-next absolute top-1/2 -right-14 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#ffffff26] bg-[#00000073] transition-all duration-200 hover:bg-[#1c1c1c] md:flex',
            navState.right ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}>
          <ChevronRight size={30} color="#fff" strokeWidth={1} />
        </button>
      </div>
      <div className="outstanding-feature-scrollbar mt-6" />
      <div className="mt-6 text-[12px] whitespace-pre-wrap">
        1. Khung viền Armor Aluminum không bao gồm các phím âm lượng, phím cạnh,
        khay SIM hoặc viền ống kính camera.{'\n'}2. Kính cường lực Corning®
        Gorilla® Armor được trang bị ở mặt trước và Corning® Gorilla® Glass
        Victus® 2 được trang bị ở mặt sau của thiết bị.{'\n'}3. Dựa trên điều
        kiện thử nghiệm trong phòng thí nghiệm: ngâm trong nước ngọt ở độ sâu
        lên đến 1,5 mét trong tối đa 30 phút. Không xâm nhập bụi; bảo vệ hoàn
        toàn khỏi sự tiếp xúc (chống bụi tuyệt đối). Khả năng kháng nước và
        kháng bụi của thiết bị không phải là vĩnh viễn và có thể giảm dần theo
        thời gian do hao mòn trong quá trình sử dụng thông thường.{'\n'}4. Các
        cải tiến về hiệu suất vi xử lý (AP) được thể hiện khi so sánh với Galaxy
        S25 Ultra. Hiệu suất thực tế sẽ phụ thuộc vào môi trường người dùng, các
        điều kiện sử dụng cũng như phần mềm và ứng dụng được cài đặt sẵn.{'\n'}
        5. Tính năng Màn hình Bảo mật (Privacy Display) kiểm soát góc nhìn của
        màn hình để hạn chế tầm nhìn từ các góc hẹp và có thể được kích hoạt
        trong phần Cài đặt. Việc kích hoạt cho các ứng dụng cụ thể cũng khả dụng
        trong phần Cài đặt. Chất lượng hình ảnh có thể thay đổi nhẹ khi nhìn từ
        bên ngoài góc xem chính diện. Một số thông tin vẫn có thể bị người khác
        nhìn thấy tùy thuộc vào môi trường sử dụng, chẳng hạn như góc độ hoặc độ
        sáng. Cần thận trọng khi hiển thị các thông tin nhạy cảm.{'\n'}6. Cải
        tiến hiệu suất của buồng hơi tản nhiệt (Vapor Chamber) được thể hiện khi
        so sánh với Galaxy S25 Ultra. Hiệu suất thực tế sẽ phụ thuộc vào môi
        trường người dùng, các điều kiện sử dụng cũng như phần mềm và ứng dụng
        được cài đặt sẵn.{'\n'}7. Thời lượng pin thực tế thay đổi tùy thuộc vào
        môi trường mạng, các tính năng và ứng dụng được sử dụng, tần suất cuộc
        gọi và tin nhắn, số lần sạc và nhiều yếu tố khác. Giá trị ước tính dựa
        trên hồ sơ sử dụng trung bình được tổng hợp bởi UX Connect Research.
        Được đánh giá độc lập bởi UX Connect Research từ ngày 08/01/2026 đến
        ngày 30/01/2026 tại Hoa Kỳ và Vương quốc Anh với các phiên bản thử
        nghiệm của SM-S942, SM-S947 và SM-S948 ở cài đặt mặc định, sử dụng mạng
        LTE và 5G Sub6. KHÔNG được thử nghiệm trên mạng 5G mmWave.{'\n'}8. So
        với các mẫu máy tiền nhiệm.{'\n'}9. Các cải tiến về độ sáng được thể
        hiện khi so sánh với Galaxy S25 Ultra.{'\n'}10. Kết quả có thể thay đổi
        tùy thuộc vào điều kiện ánh sáng và/hoặc điều kiện chụp, bao gồm việc
        chụp nhiều đối tượng, đối tượng không lấy nét hoặc đối tượng đang chuyển
        động.{'\n'}11. Photo Assist yêu cầu kết nối mạng và đăng nhập Tài khoản
        Samsung. Khả năng cung cấp dịch vụ có thể thay đổi tùy theo quốc gia,
        ngôn ngữ hoặc kiểu thiết bị. Photo Assist có thể thay đổi kích thước ảnh
        sau khi chỉnh sửa. Một hình mờ (watermark) sẽ được chèn lên hình ảnh sau
        khi lưu để cho biết hình ảnh được tạo ra bởi AI. Độ chính xác và độ tin
        cậy của kết quả tạo ra không được đảm bảo.
      </div>
    </div>
  );
};

export default OutstandingFeature;
