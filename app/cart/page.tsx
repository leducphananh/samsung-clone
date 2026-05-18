'use client';
import {
  ChevronRight,
  CreditCard,
  Info,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const items = [
    {
      id: 's24-ultra-default',
      name: 'Galaxy S24 Ultra',
      price: 33990000,
      color: 'Mặc định',
      storage: '256GB',
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzvcxxv-thumb-550804756?$Q90_330_330_F_PNG$',
      quantity: 1,
    },
  ];

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const carePlus = items.length > 0 ? 1299000 : 0;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + carePlus + tax;

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#f7f7f7] p-12 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-[#b6b6b6]" />
        <h2 className="font-samsung-sharp mb-2 text-[20px] font-bold">
          Giỏ hàng của bạn đang trống
        </h2>
        <p className="mb-8 text-[13px] font-medium text-[#6f6f6f]">
          Hãy chọn cho mình một chiếc Galaxy yêu thích nhé!
        </p>
        <Link
          href="/"
          className="rounded-[20px] border border-[#2189ff] bg-[#2189ff] px-8 py-3 text-[14px] font-bold text-white transition-colors duration-200 hover:bg-white hover:text-[#006bea]">
          Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-12">
      <div className="mx-auto max-w-360 px-7 py-8 md:py-12">
        <h2 className="font-samsung-sharp mb-6 text-[20px] font-bold md:text-[22px]">
          Bạn có {items.length} sản phẩm trong giỏ hàng
        </h2>

        <div className="space-y-6">
          {/* Main Item */}
          {items.map(item => (
            <div
              key={item.id}
              className="space-y-6 rounded-3xl border border-[#ddd] bg-white p-5 md:p-6">
              <div className="flex gap-4">
                <div className="h-24 w-24 rounded-xl border border-[#e6e6e6] bg-[#f1f1f1] p-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                    width={96}
                    height={96}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-samsung-sharp text-[18px] font-bold">
                      {item.name}
                    </h3>
                    <button onClick={() => {}}>
                      <Trash2 className="h-5 w-5 text-[#8b8b8b]" />
                    </button>
                  </div>
                  <p className="mt-1 text-[11px] text-[#6f6f6f] uppercase">
                    {item.color}, {item.storage}
                  </p>
                  <p className="mt-2 text-[11px] font-bold text-[#006bea]">
                    Còn hàng
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 rounded-full border border-[#e6e6e6] bg-[#f1f1f1] px-4 py-1">
                      <button onClick={() => {}}>
                        <Minus className="h-4 w-4 text-[#6f6f6f]" />
                      </button>
                      <span className="text-sm font-bold">{item.quantity}</span>
                      <button onClick={() => {}}>
                        <Plus className="h-4 w-4 text-[#6f6f6f]" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-[18px] font-bold text-black">
                        {(item.price * item.quantity).toLocaleString()} VNĐ
                      </p>
                      <p className="text-[10px] text-[#8b8b8b] line-through">
                        {(
                          item.price * item.quantity +
                          2000000
                        ).toLocaleString()}{' '}
                        VNĐ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#d7e6ff] bg-[#f5f8ff] p-3">
                <p className="text-[12px] font-bold text-[#006bea]">
                  Ưu đãi giảm giá được áp dụng.
                </p>
              </div>
            </div>
          ))}

          {/* Add-ons */}
          <div className="space-y-6 rounded-3xl border border-[#ddd] bg-white p-5 md:p-6">
            <div className="flex items-center justify-between border-b border-[#ddd] pb-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-[#e6e6e6] bg-[#f1f1f1] p-2">
                  <Zap className="h-5 w-5 text-black" />
                </div>
                <span className="text-[15px] font-bold">Thu cũ đổi mới</span>
              </div>
              <button className="text-[12px] font-bold text-[#006bea] underline">
                Tham gia
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-[#006bea]" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold">Samsung Care+</span>
                    <span className="text-[12px] text-[#6f6f6f]">
                      (6 Tháng)
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] font-bold text-[#006bea]">
                    Gói Samsung Care+ của bạn đã được thêm thành công
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[14px] font-bold">1.299.000 VNĐ</p>
                <Trash2 className="mt-2 ml-auto h-4 w-4 text-[#8b8b8b]" />
              </div>
            </div>
          </div>

          {/* Offers */}
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-2xl border border-[#ddd] bg-white p-4">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-[#8b8b8b]" />
                <span className="text-[13px] font-bold">Ưu đãi thanh toán</span>
              </div>
              <p className="text-[12px] text-[#6f6f6f]">
                - Thanh toán trước giảm thêm 1.5TR
              </p>
            </div>
          </div>

          {/* Cross-sell */}
          <div className="rounded-3xl border border-[#ddd] bg-white p-5 md:p-6">
            <div className="flex gap-4">
              <div className="h-20 w-20 rounded-xl border border-[#e6e6e6] bg-[#f1f1f1] p-2">
                <Image
                  src="https://images.samsung.com/is/image/samsung/p6pim/vn/s2602/gallery/vn-galaxy-s26-ultra-s948-sm-s948bzvcxxv-thumb-550804756?$Q90_330_330_F_PNG$"
                  alt="Charger"
                  className="h-full w-full object-contain grayscale"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[14px] font-bold">
                      Củ Sạc Không Kèm Cáp 60W (Đen)
                    </h4>
                    <p className="mt-1 text-[10px] text-[#6f6f6f]">
                      ĐEN • EP-T6010NBEGWW
                    </p>
                  </div>
                  <span className="text-[12px] font-bold text-[#006bea]">
                    Miễn phí
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3 rounded-full border border-[#e6e6e6] bg-[#f1f1f1] px-3 py-1">
                    <Minus className="h-3 w-3 text-[#6f6f6f]" />
                    <span className="text-xs font-bold">1</span>
                    <Plus className="h-3 w-3 text-[#6f6f6f]" />
                  </div>
                  <span className="text-xs text-[#8b8b8b] line-through">
                    1.099.000 VNĐ
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-6 rounded-3xl border border-[#ddd] bg-white p-6">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nhập Voucher hoặc Gift Card"
                className="flex-1 rounded-xl border border-[#e6e6e6] bg-[#f1f1f1] px-4 py-3 text-[13px] focus:outline-none"
              />
              <button className="rounded-xl border border-[#2189ff] bg-[#2189ff] px-6 py-3 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-white hover:text-[#006bea]">
                ÁP DỤNG
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="font-samsung-sharp mb-4 text-[18px] font-bold">
                Bản tóm tắt
              </h4>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#6f6f6f]">Tổng giá trước thuế</span>
                <span className="font-bold text-black">
                  {subtotal.toLocaleString()} VNĐ
                </span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#6f6f6f]">Samsung Care+</span>
                <span className="font-bold text-black">
                  {carePlus.toLocaleString()} VNĐ
                </span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#6f6f6f]">Thuế GTGT</span>
                <span className="font-bold text-black">
                  {tax.toLocaleString()} VNĐ
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-[#ddd] pt-4">
                <div className="flex items-center gap-1">
                  <span className="text-[13px] font-bold">
                    Tổng số tiền tiết kiệm
                  </span>
                  <Info className="h-3 w-3 text-[#8b8b8b]" />
                </div>
                <ChevronRight className="h-4 w-4 text-[#8b8b8b]" />
              </div>
            </div>

            <div className="flex items-end justify-between pt-6">
              <div>
                <h3 className="font-samsung-sharp text-[22px] font-bold">
                  Tổng cộng
                </h3>
                <p className="text-[10px] text-[#6f6f6f]">
                  Đã bao gồm thuế GTGT
                </p>
              </div>
              <div className="text-right">
                <p className="text-[22px] font-bold text-[#006bea]">
                  {total.toLocaleString()} VND
                </p>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-[#e6e6e6] bg-[#f7f7f7] p-4">
              <p className="text-[11px] leading-relaxed text-[#6f6f6f] italic">
                Đăng nhập để được cộng điểm Samsung Rewards và nhận các ưu đãi
                đặc quyền
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold">
                  Tích điểm thưởng Samsung Rewards cho đơn hàng này
                </span>
                <Info className="h-3 w-3 text-[#8b8b8b]" />
              </div>
            </div>

            <button className="w-full rounded-[28px] border border-[#2189ff] bg-[#2189ff] py-4 text-[15px] font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#006bea] active:scale-[0.98]">
              Thanh Toán
            </button>

            <p className="px-4 text-center text-[10px] leading-relaxed text-[#6f6f6f]">
              Bằng cách gửi đơn đặt hàng, bạn đồng ý với{' '}
              <Link href="#" className="font-bold underline">
                Điều khoản & điều kiện
              </Link>{' '}
              và chúng tôi sẽ sử dụng dữ liệu cá nhân của bạn theo{' '}
              <Link href="#" className="font-bold underline">
                Chính sách quyền riêng tư
              </Link>{' '}
              của chúng tôi.
            </p>

            <div className="space-y-4 border-t border-[#ddd] pt-6">
              <div className="flex items-center gap-3">
                <div className="rounded-[10px] border border-[#e6e6e6] bg-[#f1f1f1] p-2">
                  <ShoppingBag className="h-4 w-4 text-[#6f6f6f]" />
                </div>
                <span className="text-[12px] text-[#6f6f6f]">
                  Giao hàng miễn phí toàn quốc
                </span>
                <Info className="h-3 w-3 text-[#8b8b8b]" />
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-[10px] border border-[#e6e6e6] bg-[#f1f1f1] p-2">
                  <CreditCard className="h-4 w-4 text-[#6f6f6f]" />
                </div>
                <span className="text-[12px] text-[#6f6f6f]">
                  Đổi sản phẩm theo chính sách quy định trong vòng 15 ngày
                </span>
                <Info className="h-3 w-3 text-[#8b8b8b]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
