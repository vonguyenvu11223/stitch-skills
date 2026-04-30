export default function Page() {
  return (
    <>
      
{/*  Hero Section  */}
<section className="relative h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-40 mix-blend-luminosity" data-alt="A cinematic, high-end studio photography shot of abstract smoke wisps and geometric glass shards swirling in a dark obsidian void. The lighting is low-key with golden rim highlights reflecting off polished surfaces. The overall mood is mysterious, luxurious, and technically precise, utilizing a deep palette of charcoal, black, and metallic gold accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaGJpID50WLkUQcynxqeAKcsXk_ZowEAvLJIziabWWGHDxm3-uGxgIWiy501vgEDLDOcwPjP08Na82vMPNIm6iY5vDp9LVW0BihBrcsuzZJht6tKhvh_LruiZzFFuVClOcZYpmsMqyr9TH6SMycwIYZyv468hdFnI5P-6NqRaBQaQBODzBLM2bbNgOOyqdV-zviFs6gKK_jDHUbJQVpnQdpR6PIdIEgB6ohd3le2Bjib90v_1REyahUEN0YEXKgO832f3g4l91Frg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/50 to-stone-950"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<div className="inline-block px-4 py-1 mb-6 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] font-label-sm uppercase tracking-widest text-[10px]">
                    Pre-owned Excellence
                </div>
<h1 className="font-display-xl text-white mb-6">
                    Máy Cũ Tuyển Chọn <br/>
<span className="text-[#D4AF37]">Chất Lượng Như Mới</span>
</h1>
<p className="font-body-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
                    Mọi sản phẩm đều trải qua quy trình kiểm định 30 bước khắt khe bởi đội ngũ kỹ thuật viên chuyên nghiệp nhất.
                </p>
</div>
</section>
{/*  Filter Bar  */}
<section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
<div className="glass-card p-6 flex flex-wrap items-center justify-between gap-6 rounded-xl">
<div className="flex flex-wrap items-center gap-4">
<div className="relative group">
<button className="flex items-center gap-3 px-5 py-3 border border-white/10 hover:border-[#D4AF37]/50 transition-all rounded-lg bg-white/5 font-label-sm text-stone-300">
                            Thương hiệu <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-3 px-5 py-3 border border-white/10 hover:border-[#D4AF37]/50 transition-all rounded-lg bg-white/5 font-label-sm text-stone-300">
                            Tình trạng <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
<div className="relative group">
<button className="flex items-center gap-3 px-5 py-3 border border-white/10 hover:border-[#D4AF37]/50 transition-all rounded-lg bg-white/5 font-label-sm text-stone-300">
                            Dung lượng <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>
</div>
<div className="flex items-center gap-4 ml-auto">
<span className="font-label-sm text-stone-500 uppercase tracking-widest text-[10px]">Sắp xếp theo:</span>
<button className="flex items-center gap-3 px-5 py-3 border border-white/10 rounded-lg bg-white/5 font-label-sm text-stone-300">
                        Mới nhất <span className="material-symbols-outlined text-sm">sort</span>
</button>
</div>
</div>
</section>
{/*  Product Grid  */}
<section className="max-w-7xl mx-auto px-6 py-section-gap">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Product Card 1  */}
<div className="group">
<div className="glass-card p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/5">
<div className="aspect-square relative mb-8 overflow-hidden rounded-lg bg-stone-900/50">
<img className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" data-alt="A hyper-realistic studio product shot of a Titanium iPhone 15 Pro Max floating against a dark, minimalist background. Soft golden light catches the brushed metal edges of the phone. The composition is clean and premium, with high-end photographic lighting techniques used to emphasize the device's build quality and sleek design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgeehC9-Ka6OJU37Jm5utyCmkP7cUXb873by16liRkJ-WnKzNUZcCqwK55T4wmULhm9vC3onu4uh7ZEa-R-TAcX4XrhiY_7fAinz4D4gENIiA2GXKBoWuXx_8b5Dq4Z_RJRK_w_eDwBK0H8cE-dCBWuU7J_xOlKvk4zy1mqiyzE9qnHUblzRvXpVMDZG5VOsWrnyAxU_OYKTtWTs9FhEOcUlq4yqLtmssAekbvxdKF-aQGOsVBLxisU-5SQc8MVezsw3ryES5Zp_0"/>
<div className="absolute top-4 left-4 bg-[#D4AF37] text-stone-950 px-3 py-1 font-label-sm text-[10px] font-bold uppercase tracking-widest rounded-sm">Like New 99%</div>
</div>
<h3 className="font-headline-md text-white mb-2 group-hover:text-[#D4AF37] transition-colors">iPhone 15 Pro Max 256GB - VN/A</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="font-headline-lg font-bold text-[#D4AF37]">25.990.000</span>
<span className="font-label-sm text-stone-500 uppercase text-[10px]">VNĐ</span>
</div>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<a className="text-stone-500 hover:text-[#D4AF37] font-label-sm flex items-center gap-2 transition-colors" href="#">
<span className="material-symbols-outlined text-lg">compare_arrows</span>
                                So sánh
                            </a>
<button className="bg-[#D4AF37] text-stone-950 px-6 py-3 font-label-sm font-bold shimmer-btn active:scale-95 transition-transform cursor-pointer">MUA NGAY</button>
</div>
</div>
</div>
{/*  Product Card 2  */}
<div className="group">
<div className="glass-card p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/5">
<div className="aspect-square relative mb-8 overflow-hidden rounded-lg bg-stone-900/50">
<img className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" data-alt="A professional advertisement style photograph of a Samsung Galaxy S24 Ultra in Titanium Black. The phone is positioned at a slight angle on a reflective dark surface with subtle golden backlighting creating a halo effect. The image is crisp, modern, and conveys luxury through its focus on materials and industrial design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJdY0wiyyG9k3vQl-B2UqjW_Wyzn1QHt6vcbtOH8Q8l1lXi2sL5aSojnxFfnUJgJjKGZiXFV-iHJWsox0_-8VETMbJSoaSi0-ZeBlwjTtT1PwV7XHVEOVL1BdHTUoARWLYkF53TsBAMrb9E8gztqT7JAjPDqd1eB3VV-T76NTeKyWQjtWvEU0nhlYMsMK6LMDcoer9oqbw_5G-G2R5qUqQ0506gSHP0wtryL_hRV-IUWPpWg4pDn1WWJ3TUItWXJqhlWvijP25gVg"/>
<div className="absolute top-4 left-4 bg-[#D4AF37] text-stone-950 px-3 py-1 font-label-sm text-[10px] font-bold uppercase tracking-widest rounded-sm">Like New 99%</div>
</div>
<h3 className="font-headline-md text-white mb-2 group-hover:text-[#D4AF37] transition-colors">Samsung Galaxy S24 Ultra 512GB</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="font-headline-lg font-bold text-[#D4AF37]">22.490.000</span>
<span className="font-label-sm text-stone-500 uppercase text-[10px]">VNĐ</span>
</div>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<a className="text-stone-500 hover:text-[#D4AF37] font-label-sm flex items-center gap-2 transition-colors" href="#">
<span className="material-symbols-outlined text-lg">compare_arrows</span>
                                So sánh
                            </a>
<button className="bg-[#D4AF37] text-stone-950 px-6 py-3 font-label-sm font-bold shimmer-btn active:scale-95 transition-transform cursor-pointer">MUA NGAY</button>
</div>
</div>
</div>
{/*  Product Card 3  */}
<div className="group">
<div className="glass-card p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/5">
<div className="aspect-square relative mb-8 overflow-hidden rounded-lg bg-stone-900/50">
<img className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" data-alt="Close-up product photography of an iPhone 14 Pro in Deep Purple. The lens focuses on the intricate triple-camera system which catches soft studio lights. The dark background is deep and textured, suggesting a premium environment. The lighting is dramatic and accentuates the glass and metal textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNw_k2FOELl2DOnK1yQqpcQQhJNEpTZEV-imWjtoYM1QiiGxzcT11d5IYLNKFhqFYJ3XrvZyFcc81I2OyZJL3CX4HKz2NRm_n7XYeUjay2ufhUWQRPyLLBot5iVkOEcx0NcQtXo0M7ZgmubvjKaG3Kkbe8q82VDc_XEOamvw3nCeIlAFo2TunPqqR5hYA6qw-XXt6hLYgUVN7I1HNWxdHmqMTbfUOyDstEgzcA9NGct8uGPC7iZG9BaHWokW5n6DfLMkapyTRHqzo"/>
<div className="absolute top-4 left-4 bg-stone-500 text-white px-3 py-1 font-label-sm text-[10px] font-bold uppercase tracking-widest rounded-sm">Like New 98%</div>
</div>
<h3 className="font-headline-md text-white mb-2 group-hover:text-[#D4AF37] transition-colors">iPhone 14 Pro 128GB - Quốc tế</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="font-headline-lg font-bold text-[#D4AF37]">17.990.000</span>
<span className="font-label-sm text-stone-500 uppercase text-[10px]">VNĐ</span>
</div>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<a className="text-stone-500 hover:text-[#D4AF37] font-label-sm flex items-center gap-2 transition-colors" href="#">
<span className="material-symbols-outlined text-lg">compare_arrows</span>
                                So sánh
                            </a>
<button className="bg-[#D4AF37] text-stone-950 px-6 py-3 font-label-sm font-bold shimmer-btn active:scale-95 transition-transform cursor-pointer">MUA NGAY</button>
</div>
</div>
</div>
</div>
{/*  View More Button  */}
<div className="flex justify-center mt-12">
<button className="border border-[#D4AF37] text-[#D4AF37] px-12 py-4 font-label-sm font-bold hover:bg-[#D4AF37] hover:text-stone-950 transition-all duration-300">
                    XEM THÊM SẢN PHẨM
                </button>
</div>
</section>
{/*  Trust/Service Section  */}
<section className="bg-stone-950/50 py-section-gap">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 border border-[#D4AF37]/20 flex flex-col items-center text-center gap-4 transition-colors hover:border-[#D4AF37]/60">
<span className="material-symbols-outlined text-5xl text-[#D4AF37]" >verified_user</span>
<h4 className="font-headline-md text-white">Bảo hành 12 tháng</h4>
<p className="font-body-md text-stone-500">Chế độ bảo hành toàn diện như máy mới, an tâm tuyệt đối.</p>
</div>
<div className="p-8 border border-[#D4AF37]/20 flex flex-col items-center text-center gap-4 transition-colors hover:border-[#D4AF37]/60">
<span className="material-symbols-outlined text-5xl text-[#D4AF37]" >published_with_changes</span>
<h4 className="font-headline-md text-white">30 ngày đổi trả</h4>
<p className="font-body-md text-stone-500">Lỗi là đổi ngay trong 30 ngày đầu tiên sử dụng.</p>
</div>
<div className="p-8 border border-[#D4AF37]/20 flex flex-col items-center text-center gap-4 transition-colors hover:border-[#D4AF37]/60">
<span className="material-symbols-outlined text-5xl text-[#D4AF37]" >precision_manufacturing</span>
<h4 className="font-headline-md text-white">Kiểm định 100%</h4>
<p className="font-body-md text-stone-500">Mọi máy đều được kiểm tra kỹ thuật qua 30 bước tiêu chuẩn.</p>
</div>
</div>
</div>
</section>

    </>
  );
}
