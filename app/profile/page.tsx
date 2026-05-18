import {
  Calendar,
  ChevronRight,
  Clock,
  CreditCard,
  Edit3,
  Mail,
  MapPin,
  Phone,
  User,
} from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const profileData = {
    name: 'LY DIEU BINH',
    email: 'binhld@gmail.com',
    phone: '0988456679',
    gender: 'Nam',
    birthDate: '16/9/1980',
    idNumber: '001080040688',
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] pb-12">
      <div className="mx-auto max-w-360 space-y-6 px-7 pt-10 md:pt-14">
        {/* Profile Card */}
        <div className="flex flex-col items-center rounded-[28px] border border-[#ddd] bg-white px-6 py-8 text-center">
          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#e6e6e6] bg-[#f1f1f1]">
            <User className="h-10 w-10 text-[#6f6f6f] opacity-70" />
          </div>
          <h2 className="font-samsung-sharp text-[22px] font-bold md:text-[26px]">
            {profileData.name}
          </h2>
          <p className="mt-1 text-[12px] font-medium text-[#6f6f6f]">
            {profileData.email}
          </p>
          <p className="text-[12px] font-medium text-[#6f6f6f]">
            {profileData.phone}
          </p>
        </div>

        {/* Personal Information Section */}
        <div className="overflow-hidden rounded-[28px] border border-[#ddd] bg-white">
          <div className="flex items-center justify-between border-b border-[#ddd] px-6 py-5">
            <h3 className="font-samsung-sharp text-[20px] font-bold md:text-[22px]">
              Thông tin cá nhân
            </h3>
            <button className="rounded-full border border-transparent p-2 transition-colors hover:border-[#ddd] hover:bg-[#f7f7f7]">
              <Edit3 className="h-5 w-5 text-[#6f6f6f]" />
            </button>
          </div>

          <div className="divide-y divide-[#e6e6e6]">
            {[
              { icon: User, label: 'Họ và tên', value: profileData.name },
              { icon: User, label: 'Giới tính', value: profileData.gender },
              { icon: Mail, label: 'Email', value: profileData.email },
              { icon: Phone, label: 'Số điện thoại', value: profileData.phone },
              {
                icon: Calendar,
                label: 'Ngày sinh',
                value: profileData.birthDate,
              },
              {
                icon: CreditCard,
                label: 'Số CCCD',
                value: profileData.idNumber,
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 px-6 py-5">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#6f6f6f] opacity-70" />
                <div className="space-y-1">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-[#8b8b8b] uppercase">
                    {item.label}
                  </p>
                  <p className="text-[15px] font-bold text-black">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="space-y-3">
          <Link
            href="/history"
            className="group flex w-full items-center justify-between rounded-[20px] border border-[#ddd] bg-white px-6 py-5 transition-all active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f1f1]">
                <Clock className="h-5 w-5 text-black" />
              </div>
              <div className="text-left">
                <h4 className="text-[16px] font-bold">Lịch sử đơn hàng</h4>
                <p className="text-[12px] font-medium text-[#6f6f6f]">
                  Xem các đơn hàng đã đăng ký
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-[#8b8b8b] transition-transform group-hover:translate-x-1" />
          </Link>

          <button className="group flex w-full items-center justify-between rounded-[20px] border border-[#ddd] bg-white px-6 py-5 transition-all active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f1f1]">
                <MapPin className="h-5 w-5 text-black" />
              </div>
              <div className="text-left">
                <h4 className="text-[16px] font-bold">Địa chỉ của tôi</h4>
                <p className="text-[12px] font-medium text-[#6f6f6f]">
                  Quản lý các địa chỉ hiện tại
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-[#8b8b8b] transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Logout */}
        <div className="flex justify-center pt-4">
          <button className="text-[12px] font-bold text-red-500 hover:underline">
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}
