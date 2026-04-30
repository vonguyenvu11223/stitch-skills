"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "iPhone", href: "/iphone" },
    { name: "Samsung", href: "/samsung" },
    { name: "Vertu", href: "/vertu" },
    { name: "Máy cũ", href: "/used-phones" },
    { name: "Trả góp", href: "/installment" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-8 py-4 shadow-2xl">
      <Link href="/">
        <div className="text-2xl font-light tracking-tighter text-[#D4AF37]">
          NGUYENVU Mobile
        </div>
      </Link>
      <div className="hidden md:flex gap-8 items-center font-sans tracking-widest uppercase text-sm">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive
                  ? "text-[#D4AF37] border-b border-[#D4AF37] pb-1"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-6">
        <span
          className="material-symbols-outlined text-[#D4AF37] cursor-pointer hover:bg-white/5 transition-all duration-500 p-2 rounded-full"
        >
          search
        </span>
        <span className="material-symbols-outlined text-white/70 cursor-pointer p-2">
          person
        </span>
        <button className="bg-[#D4AF37] text-on-primary px-6 py-2 rounded-lg font-label-sm uppercase tracking-widest gold-shimmer">
          Xem ưu đãi hôm nay
        </button>
      </div>
    </nav>
  );
}
