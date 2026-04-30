"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0B0C10] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/">
              <div className="text-xl font-bold text-[#D4AF37] mb-6">
                NGUYENVU Mobile
              </div>
            </Link>
            <p className="font-sans text-xs tracking-wider text-gray-500 mb-8 leading-loose">
              The Art of Mobile Craftsmanship. Đơn vị tiên phong trong lĩnh vực
              bán lẻ smartphone và các thiết bị di động xa xỉ tại Việt Nam.
            </p>
            <div className="flex gap-4">
              <span
                className="material-symbols-outlined text-white/50 hover:text-[#D4AF37] cursor-pointer transition-colors"
              >
                public
              </span>
              <span
                className="material-symbols-outlined text-white/50 hover:text-[#D4AF37] cursor-pointer transition-colors"
              >
                share
              </span>
              <span
                className="material-symbols-outlined text-white/50 hover:text-[#D4AF37] cursor-pointer transition-colors"
              >
                thumb_up
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-label-sm uppercase tracking-widest text-[#D4AF37] mb-6">
              Hệ thống Showroom
            </h4>
            <ul className="space-y-4">
              <li className="font-sans text-xs tracking-wider text-gray-500 hover:translate-x-1 transition-transform cursor-pointer">
                456 Lê Lợi, Quận 1, TP. HCM
              </li>
              <li className="font-sans text-xs tracking-wider text-gray-500 hover:translate-x-1 transition-transform cursor-pointer">
                789 Trần Hưng Đạo, Quận 5, TP. HCM
              </li>
              <li className="font-sans text-xs tracking-wider text-gray-500 hover:translate-x-1 transition-transform cursor-pointer">
                123 Kim Mã, Ba Đình, Hà Nội
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-sm uppercase tracking-widest text-[#D4AF37] mb-6">
              Dịch vụ khách hàng
            </h4>
            <ul className="space-y-4">
              <li className="font-sans text-xs tracking-wider text-gray-500 hover:text-[#D4AF37] transition-colors cursor-pointer">
                Chính sách bảo hành
              </li>
              <li className="font-sans text-xs tracking-wider text-gray-500 hover:text-[#D4AF37] transition-colors cursor-pointer">
                Mua hàng trả góp
              </li>
              <li className="font-sans text-xs tracking-wider text-gray-500 hover:text-[#D4AF37] transition-colors cursor-pointer">
                Vận chuyển &amp; Giao hàng
              </li>
              <li className="font-sans text-xs tracking-wider text-gray-500 hover:text-[#D4AF37] transition-colors cursor-pointer">
                Bảo mật thông tin
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-sm uppercase tracking-widest text-[#D4AF37] mb-6">
              Kết nối với chúng tôi
            </h4>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="material-symbols-outlined text-[#D4AF37] text-sm"
              >
                call
              </span>
              <span className="font-sans text-xs tracking-wider text-white">
                Hotline: 1900 88xx
              </span>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <span
                className="material-symbols-outlined text-[#D4AF37] text-sm"
              >
                mail
              </span>
              <span className="font-sans text-xs tracking-wider text-white">
                contact@nguyenvumobile.vn
              </span>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="font-sans text-[10px] text-gray-500 mb-2">
                Đăng ký nhận ưu đãi đặc quyền
              </p>
              <div className="flex gap-2">
                <input
                  className="bg-transparent border-b border-white/20 text-xs w-full focus:outline-none focus:border-[#D4AF37] text-white py-1"
                  placeholder="Email của bạn"
                  type="text"
                />
                <button
                  className="material-symbols-outlined text-[#D4AF37]"
                >
                  arrow_forward
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 py-8 border-t border-white/5 flex justify-between items-center">
          <p className="font-sans text-xs tracking-wider text-gray-500">
            © 2024 NGUYENVU Mobile. The Art of Mobile Craftsmanship.
          </p>
          <div className="flex gap-8">
            <Link
              className="font-sans text-xs tracking-wider text-gray-500 hover:text-[#D4AF37]"
              href="#"
            >
              Authenticity Check
            </Link>
            <Link
              className="font-sans text-xs tracking-wider text-gray-500 hover:text-[#D4AF37]"
              href="#"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
      {/* FAB for VIP Assistance */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#D4AF37] text-on-primary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center gold-shimmer group relative">
          <span className="material-symbols-outlined text-3xl">
            support_agent
          </span>
          <span className="absolute right-20 bg-black/80 backdrop-blur-md border border-[#D4AF37] text-white px-4 py-2 rounded-lg text-xs font-label-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Liên hệ chuyên viên VIP
          </span>
        </button>
      </div>
    </>
  );
}
