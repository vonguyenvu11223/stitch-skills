export default function Page() {
  return (
    <>
      
{/*  Hero Section  */}
<section className="relative h-[819px] flex items-center justify-center overflow-hidden hero-gradient">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-60 mix-blend-lighten" data-alt="A cinematic studio shot of the Samsung Galaxy Z Fold5 unfolded, positioned against a deep obsidian black background. Ethereal wisps of white smoke and soft golden light highlights drift across the frame, creating an atmosphere of mysterious luxury. The smartphone's metallic hinges and glass surfaces reflect a subtle warm glow, emphasizing its technical precision and premium craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJSvMzF3zCbfxE7uN5X5yL9_vlkXtS2-O9RPRKhoKaz2mhTnzEZWEwqt2OqhmR_Qhtloj6poBENN7WxEgcWAYDq7TbZIjk8CMcMOVesFqlVHgxXoT6JOrRZ5OVw3C5uI7A3nO_6PORmLwaiFgPje9gE99SI9nWpS6wto1zToH2LV2UOg8nD-r7CJbT1z7mlDMtADx5gbiHSXavBusQziAE6HkrO4ebCE0jY8Llu8gka0FhNDuFKphbVIh1SiiGy6vXm6ckh2bxguA"/>
</div>
<div className="relative z-10 text-center px-4">
<h1 className="font-display-xl text-white mb-4 tracking-tight">Samsung Galaxy</h1>
<p className="text-[#D4AF37] font-headline-md tracking-[0.2em] uppercase">Tiên Phong Công Nghệ</p>
<div className="mt-12 flex justify-center">
<div className="w-px h-24 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
</div>
</div>
</section>
{/*  Filters Section  */}
<section className="max-w-[1140px] mx-auto px-container-padding -mt-10 relative z-20">
<div className="glass-panel p-6 rounded-xl flex flex-wrap items-center justify-between gap-6 shadow-2xl">
<div className="flex flex-wrap gap-8">
<div className="flex flex-col gap-2">
<span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Series</span>
<div className="flex items-center gap-2 cursor-pointer group">
<span className="font-label-sm text-white group-hover:text-[#D4AF37] transition-colors">All Models</span>
<span className="material-symbols-outlined text-xs text-[#D4AF37]" data-icon="expand_more">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-2 border-l border-white/10 pl-8">
<span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Capacity</span>
<div className="flex items-center gap-2 cursor-pointer group">
<span className="font-label-sm text-white group-hover:text-[#D4AF37] transition-colors">Storage</span>
<span className="material-symbols-outlined text-xs text-[#D4AF37]" data-icon="expand_more">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-2 border-l border-white/10 pl-8">
<span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Color</span>
<div className="flex items-center gap-2 cursor-pointer group">
<span className="font-label-sm text-white group-hover:text-[#D4AF37] transition-colors">Exclusive</span>
<span className="material-symbols-outlined text-xs text-[#D4AF37]" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
<span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Sắp xếp:</span>
<span className="font-label-sm text-[#D4AF37]">Mới nhất</span>
</div>
</div>
</section>
{/*  Product Grid  */}
<section className="max-w-[1140px] mx-auto px-container-padding py-section-gap">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  S24 Ultra  */}
<div className="group relative flex flex-col items-center">
<div className="glass-panel w-full aspect-[4/5] rounded-xl flex items-center justify-center p-12 transition-all duration-500 group-hover:bg-white/5">
<img className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" data-alt="A hyper-realistic 3D render of the Samsung Galaxy S24 Ultra in Titanium Gray. The phone is floating at a slight angle in a dark, minimalist studio space. Dramatic high-key rim lighting accentuates its sharp edges and the sophisticated texture of its titanium frame. The screen remains off, reflecting a dark, mirror-like quality with subtle golden highlights from the surrounding environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfQurH_XX1_B96H9skoQ_dkkBbGZVdn2dbQJAVSrQnNSWb-xpMQy1UB5v9JNRcwHPfMr8HeeEzz3lAso831IYr9y9SeILg9HxE70RU288IxHxRjx304uDg8ZWoGUNCrrlyn-pQmDuI4xt2BX0Nx7OuOgpfqexQGJZmLL67_zMn54Qww2Nirs89qYasjh2SPRSzXscyIxt4vgtiQ3QxqUd-3IGsgudKdXMr4hpdNK7gV7wk7koF6le0bdxOW80sPIZZJGem4VuNc-0"/>
</div>
<div className="mt-8 text-center">
<span className="text-[10px] text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Titanium Edition</span>
<h3 className="font-headline-md text-white mb-2">Galaxy S24 Ultra</h3>
<p className="font-headline-lg text-[#D4AF37] mb-6">33.990.000 <span className="text-sm">VND</span></p>
<div className="flex flex-col gap-4 w-full">
<button className="bg-[#D4AF37] text-stone-950 w-full py-4 font-label-sm uppercase tracking-widest shimmer">Mua Ngay</button>
<a className="text-white/40 font-label-sm uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2" href="#">
<span className="material-symbols-outlined text-sm" data-icon="compare_arrows">compare_arrows</span> So sánh
                            </a>
</div>
</div>
</div>
{/*  Z Fold5  */}
<div className="group relative flex flex-col items-center translate-y-12">
<div className="glass-panel w-full aspect-[4/5] rounded-xl flex items-center justify-center p-12 transition-all duration-500 group-hover:bg-white/5">
<img className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" data-alt="An exquisite 3D product visualization of the Samsung Galaxy Z Fold5 half-folded on a dark, reflective surface. The aesthetic is clean and modern, focusing on the mechanical perfection of the hinge. The color is a deep Phantom Black with soft, diffused golden accent lighting that highlights the luxurious curves and glass surfaces. The mood is high-end, silent, and technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnCUHjbkUCOLzJt5WPdLV5wQIRrS4f32jUw3qhDM_YbUAEtKw2iW5YqTsmOwAsANBDjDGapYOZxETtFC1sMNVg3aXv-fqTC4hgVXAF032sJ0XVpfSzrZmnQBfmykd28PvWAtQ5asfnRyZc7TQOar_vWTf03pqO0-jQyKv98dSCUtyE3TdNJPdR0aQkEJ99Wd5VKEpM6hbxPMqCY-PepBHcW8QgOTkVt0fsDlrQ7pJOhLi4Puw6PBiWakykEaGXnAh8AhbAER1rfUQ"/>
</div>
<div className="mt-8 text-center">
<span className="text-[10px] text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Flagship Foldable</span>
<h3 className="font-headline-md text-white mb-2">Galaxy Z Fold5</h3>
<p className="font-headline-lg text-[#D4AF37] mb-6">40.990.000 <span className="text-sm">VND</span></p>
<div className="flex flex-col gap-4 w-full">
<button className="bg-[#D4AF37] text-stone-950 w-full py-4 font-label-sm uppercase tracking-widest shimmer">Mua Ngay</button>
<a className="text-white/40 font-label-sm uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2" href="#">
<span className="material-symbols-outlined text-sm" data-icon="compare_arrows">compare_arrows</span> So sánh
                            </a>
</div>
</div>
</div>
{/*  Z Flip5  */}
<div className="group relative flex flex-col items-center">
<div className="glass-panel w-full aspect-[4/5] rounded-xl flex items-center justify-center p-12 transition-all duration-500 group-hover:bg-white/5">
<img className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" data-alt="A high-fashion product render of the Samsung Galaxy Z Flip5 in Mint. The device is closed, showcasing its large external cover screen in a studio environment with low-key lighting and deep shadows. Gold reflections bounce off the metal edges, creating a luxurious contrast with the soft pastel color of the glass. The composition is artistic and minimalist, emphasizing its compact, jewelry-like quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeZq-_KutkAamU94CtlEduqlEH1R9MoeWNQhoSc8xpBioIac8dqUlFhTDKPRMIq1ZIDzdHaOuxXsyM5socWGufMbYUtYJ056cjzJ423NZYqJ0bw-eIxYrECghJAj8HrNQj9Etx1vqV6GUNwrpNll7FOL0hy5nHY8XHN8qFBuYXax-CeMfLXOiXd5QsSf2uxxtoaILbJyegLsjWxWgsPWs1kyh6KOY5GnkWGr5NFAAgxolXrAh57LyzWlLiKGaq87FSkdTBil5LEQU"/>
</div>
<div className="mt-8 text-center">
<span className="text-[10px] text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Iconic Design</span>
<h3 className="font-headline-md text-white mb-2">Galaxy Z Flip5</h3>
<p className="font-headline-lg text-[#D4AF37] mb-6">25.990.000 <span className="text-sm">VND</span></p>
<div className="flex flex-col gap-4 w-full">
<button className="bg-[#D4AF37] text-stone-950 w-full py-4 font-label-sm uppercase tracking-widest shimmer">Mua Ngay</button>
<a className="text-white/40 font-label-sm uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2" href="#">
<span className="material-symbols-outlined text-sm" data-icon="compare_arrows">compare_arrows</span> So sánh
                            </a>
</div>
</div>
</div>
</div>
</section>
{/*  Newsletter / Contact  */}
<section className="max-w-[1140px] mx-auto px-container-padding py-section-gap">
<div className="glass-panel p-16 rounded-3xl text-center flex flex-col items-center">
<h2 className="font-display-xl text-white mb-4">Nhận Đặc Quyền</h2>
<p className="text-white/60 font-body-lg max-w-xl mb-12">Đăng ký để nhận thông tin về các phiên bản giới hạn và ưu tiên trải nghiệm những tuyệt tác công nghệ mới nhất từ Samsung.</p>
<div className="flex w-full max-w-md border-b border-[#D4AF37] pb-2 group focus-within:border-white transition-colors">
<input className="bg-transparent border-none focus:ring-0 text-white w-full placeholder:text-white/20 font-label-sm uppercase tracking-widest" placeholder="Địa chỉ Email của bạn" type="email"/>
<button className="text-[#D4AF37] font-label-sm uppercase tracking-widest px-4 hover:text-white transition-colors">Gửi</button>
</div>
</div>
</section>

    </>
  );
}
