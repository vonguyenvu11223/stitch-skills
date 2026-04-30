export default function Page() {
  return (
    <>
      
{/*  Category Hero  */}
<section className="relative h-[819px] w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-60" data-alt="A professional studio product photograph of a Vertu Signature V mobile phone made of polished black ceramic and gold accents, resting on a dark reflective surface. The lighting is dramatic and moody, with high-contrast highlights defining the phone's sleek edges. The background is a deep obsidian black with subtle atmospheric smoke. The overall aesthetic is ultra-luxurious, minimalist, and authoritative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_PmzD9votv-W0bn-y9aKBBlrvsUDhHFDitQSjTKT-wA-INunVQ5LdlbuAqlWMidncPlH0Zc0jbdjVrGI0Rbg3q2LI_vcarWz66oj2k37s0Fd0UFVIzQ9-oRCpcHN47GEMbR_OUtRuySAxwKdmC-S2tIbjfAO90E0aYyUu8aaTYu6oGfqBbOuDiHUdJ08OgPa54dRh6xOdPks2jtV_rrpjV620ovJGtccVz1Hz9nAzU4ihFdHwVXUR1YFdOPn8Ytww3oB73Qy4BE"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/40 to-[#0B0C10]"></div>
</div>
<div className="relative z-10 text-center px-4">
<div className="glass-card px-12 py-10 rounded-lg inline-block">
<span className="font-label-sm text-primary-container mb-4 block tracking-[0.3em]">EXCLUSIVITY</span>
<h1 className="font-display-xl text-on-surface uppercase mb-4">Vertu - Đẳng Cấp Thượng Lưu</h1>
<p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-80">
                        Biểu tượng của sự xa xỉ, chế tác thủ công từ những vật liệu quý hiếm bậc nhất hành tinh.
                    </p>
</div>
</div>
</section>
{/*  Filter & Sort Bar  */}
<section className="sticky top-20 z-40 bg-[#0B0C10]/90 backdrop-blur-md border-b border-white/5">
<div className="max-w-[1140px] mx-auto px-6 h-16 flex items-center justify-between font-label-sm uppercase">
<div className="flex items-center gap-12">
<div className="flex items-center gap-4 group cursor-pointer">
<span className="text-white/40">Dòng máy:</span>
<span className="text-on-surface group-hover:text-primary transition-colors">Tất cả</span>
<span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<span className="text-white/40">Chất liệu:</span>
<span className="text-on-surface group-hover:text-primary transition-colors">Tất cả</span>
<span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
</div>
</div>
<div className="flex items-center gap-4 cursor-pointer">
<span className="text-white/40">Sắp xếp:</span>
<span className="text-on-surface">Mới nhất</span>
<span className="material-symbols-outlined text-sm" data-icon="sort">sort</span>
</div>
</div>
</section>
{/*  Product Grid  */}
<section className="max-w-[1140px] mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Product Card 1  */}
<div className="group flex flex-col">
<div className="aspect-[4/5] w-full overflow-hidden mb-6 bg-surface-container-low inner-glow-top-left transition-all duration-700">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Ultra-close studio macro shot of a Vertu phone featuring genuine black crocodile leather and 18k yellow gold frame. The texture of the leather is hyper-detailed, reflecting soft studio lights. The metal parts have a mirror-like finish with precise industrial engravings. The background is a clean, dark gray gradient to emphasize the product's form." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCJwsu3f2Yi6EPjWlpMng5PHIC94c94ki0GnL2cpetE6IJyvom4jnpiD9bBFJMHxjvtqjizCYpl3S_0thNP2AHK5KAB8-KvJnmchInZ4DCgBZsqosgAuGgq72KrBjv-8FZMLy34YABRrPjC-JHMR_7Gtl40hA_DauGK2VL6PUM8AwNv9aiWuk3mq0_noQpk80GKgjPTEYzo6M1VnY7_aDnXPnAin-Z1GoEySjnJKHeBHdFBVeAGfLzgJmbKKLE6AMTPZHGgcAKdbw"/>
</div>
<div className="space-y-3 px-2">
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Vertu Signature V Black Gold</h3>
<span className="text-[10px] border border-primary-container text-primary-container px-2 py-0.5 tracking-tighter">LIMITED</span>
</div>
<p className="text-on-surface-variant font-label-sm opacity-60">Da cá sấu Pháp • Vàng 18k • Sapphire</p>
<div className="font-display-xl text-primary-container text-2xl pt-2">
                            250.000.000 <span className="text-sm font-light">VNĐ</span>
</div>
<div className="grid grid-cols-2 gap-3 pt-6">
<button className="bg-[#D4AF37] text-black font-label-sm py-4 shimmer-effect transition-all uppercase">MUA NGAY</button>
<button className="border border-[#D4AF37] text-[#D4AF37] font-label-sm py-4 hover:bg-primary/10 transition-all uppercase">TƯ VẤN VIP</button>
</div>
</div>
</div>
{/*  Product Card 2  */}
<div className="group flex flex-col">
<div className="aspect-[4/5] w-full overflow-hidden mb-6 bg-surface-container-low inner-glow-top-left transition-all duration-700">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Elegant Vertu Aster P smartphone presented in a luxury gift box. The phone features a titanium frame and a custom red alligator leather back. Soft bokeh lighting creates a warm, premium atmosphere in a dark setting. Every metallic detail is crisp, showing the precision of the manufacturing process. Studio luxury lighting with subtle gold reflections." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDdt_X-SSuoL5YYMOyxYDhYkcgUp4us4hLeVx7hbzUE06RZSsW2vyFwWhafI_XFuXzb6DZjZE7cUKHO2coTwdTIDEvX2_KSBVpuOC1Zxe8orbTdMv2uvF7oTCYM3jgha95oT3V1kLQEWd6Ohmctqs3gx2yzjbBDku6yYFYgay0aXQbaehipA5NLyy06g2FmvpCoTvKWWk_Yc5c6rcZAw_8Ov7VUrmSrtNO5JaaXVEPFGIVzwomWu80R56AcYHrrnF7YG4t5V6qLzc"/>
</div>
<div className="space-y-3 px-2">
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Vertu Aster P Red Alligator</h3>
<span className="text-[10px] border border-white/20 text-white/40 px-2 py-0.5 tracking-tighter">NEW ARRIVAL</span>
</div>
<p className="text-on-surface-variant font-label-sm opacity-60">Da cá sấu • Titanium • Ceramic</p>
<div className="font-display-xl text-primary-container text-2xl pt-2">
                            135.000.000 <span className="text-sm font-light">VNĐ</span>
</div>
<div className="grid grid-cols-2 gap-3 pt-6">
<button className="bg-[#D4AF37] text-black font-label-sm py-4 shimmer-effect transition-all uppercase">MUA NGAY</button>
<button className="border border-[#D4AF37] text-[#D4AF37] font-label-sm py-4 hover:bg-primary/10 transition-all uppercase">TƯ VẤN VIP</button>
</div>
</div>
</div>
{/*  Product Card 3  */}
<div className="group flex flex-col">
<div className="aspect-[4/5] w-full overflow-hidden mb-6 bg-surface-container-low inner-glow-top-left transition-all duration-700">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Modern Metavertu carbon fiber edition mobile phone. High-tech minimalist aesthetic featuring sleek black carbon fiber patterns and high-polish silver accents. The lighting is cold and clinical, highlighting the futuristic design. The product is shot from an isometric angle against a matte black background to emphasize its thin profile and material quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Pwr15hnNr04T3UaT6FMtlMEaJF6gW9Lo5Z9H82gxl-HFiH9tG6ZMT8wwHTveC6EGa59j9_d3S1tVsgcqK61crJKdqLTZ2tP_VXkKLi2M1URfpECXVKYxZ2bfWvjKP9yOqXiHRSOBUD2TciHMOzhyFEYUeSeVhm9LGTDVFlxVJJ_5irEOkR7IMzMdyMVAV75Aj8miXQLbK3yNX4ETBWmHyLv1-JpF3LFEEbsOx648NVjkSUDzO45MBLwWM5RYzWx7-uSvZOEv-Ac"/>
</div>
<div className="space-y-3 px-2">
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Metavertu Carbon Fiber</h3>
<span className="text-[10px] border border-primary-container text-primary-container px-2 py-0.5 tracking-tighter">WEB3 EDITION</span>
</div>
<p className="text-on-surface-variant font-label-sm opacity-60">Sợi Carbon • Thép không gỉ • Sapphire</p>
<div className="font-display-xl text-primary-container text-2xl pt-2">
                            98.000.000 <span className="text-sm font-light">VNĐ</span>
</div>
<div className="grid grid-cols-2 gap-3 pt-6">
<button className="bg-[#D4AF37] text-black font-label-sm py-4 shimmer-effect transition-all uppercase">MUA NGAY</button>
<button className="border border-[#D4AF37] text-[#D4AF37] font-label-sm py-4 hover:bg-primary/10 transition-all uppercase">TƯ VẤN VIP</button>
</div>
</div>
</div>
</div>
{/*  Pagination Indicator  */}
<div className="flex flex-col items-center mt-20 gap-6">
<div className="w-px h-16 bg-white/10 relative">
<div className="absolute top-0 left-0 w-full h-1/2 bg-primary"></div>
</div>
<p className="font-label-sm text-white/40 tracking-[0.2em]">01 / 04</p>
<button className="font-label-sm text-primary underline underline-offset-8 decoration-1">XEM THÊM TUYỆT TÁC</button>
</div>
</section>

    </>
  );
}
