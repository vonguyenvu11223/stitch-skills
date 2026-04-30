export default function Page() {
  return (
    <>
      
{/*  Category Hero  */}
<section className="relative h-[819px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-60" data-alt="A cinematic studio render of a titanium iPhone 15 Pro Max floating gracefully against a deep obsidian and smoky grey background. The lighting is low-key and dramatic, with soft golden rim lighting highlighting the sleek edges of the device. Wisps of ethereal smoke curl around the base of the phone, creating a sense of mystery and ultra-luxury. The overall atmosphere is silent, authoritative, and sophisticated, perfectly aligned with a premium tech brand's aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFxObeYlDZgqRvFharAH0pDRa15Ex-8BOWBrMWjQPj3ZHclTMLiWLC_sGlZkALN2Sp3jV8e_EucMhSL74ZLQ6CBGL86Bdd7uVncx3ekWSUo-GCiMMqyW1g317-ieYEExr2vCVUGnUClP_ZRJ8-5Q2liTeyYKBjPaq0Rh0VEfPaIl2o6IqO6l_G65JdlBpXSSP4GyTwk8dXD-NvNBluoLvFS-egPBLJI7OC-SpV0sgUr6Y6soPEeU4B-xGJDomd9QA7y8ke-GJ-x8A"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
</div>
<div className="relative z-10 text-center px-4">
<div className="glass-card px-12 py-16 inline-block rounded-lg border border-white/5">
<span className="font-label-sm text-primary mb-4 block uppercase tracking-[0.3em]">NGUYENVU Mobile</span>
<h1 className="font-display-xl text-white text-5xl md:text-7xl mb-6">iPhone - Đẳng Cấp Vượt Thời Gian</h1>
<p className="text-on-surface-variant max-w-xl mx-auto font-body-lg">Khám phá tuyệt tác công nghệ hội tụ giữa nghệ thuật chế tác và sức mạnh tương lai.</p>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
<div className="scroll-track">
<div className="scroll-thumb"></div>
</div>
<span className="text-[10px] tracking-widest text-white/30 uppercase font-['Outfit']">Scroll</span>
</div>
</section>
{/*  Filter & Sort Bar  */}
<section className="max-w-[1140px] mx-auto px-6 mb-section-gap">
<div className="glass-card py-6 px-8 flex flex-wrap items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-8">
<div className="group relative">
<label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Dòng máy</label>
<select className="bg-transparent border-none text-on-surface font-headline-md text-sm p-0 focus:ring-0 cursor-pointer appearance-none pr-6">
<option value="15">iPhone 15 Series</option>
<option value="14">iPhone 14 Series</option>
<option value="13">iPhone 13 Series</option>
</select>
<span className="material-symbols-outlined absolute right-0 bottom-1 text-xs text-primary pointer-events-none">expand_more</span>
</div>
<div className="group relative">
<label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Dung lượng</label>
<select className="bg-transparent border-none text-on-surface font-headline-md text-sm p-0 focus:ring-0 cursor-pointer appearance-none pr-6">
<option value="all">All Capacity</option>
<option value="128">128GB</option>
<option value="256">256GB</option>
<option value="512">512GB</option>
<option value="1t">1TB</option>
</select>
<span className="material-symbols-outlined absolute right-0 bottom-1 text-xs text-primary pointer-events-none">expand_more</span>
</div>
<div className="group relative">
<label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Màu sắc</label>
<select className="bg-transparent border-none text-on-surface font-headline-md text-sm p-0 focus:ring-0 cursor-pointer appearance-none pr-6">
<option value="all">Titanium Natural</option>
<option value="blue">Blue Titanium</option>
<option value="white">White Titanium</option>
<option value="black">Black Titanium</option>
</select>
<span className="material-symbols-outlined absolute right-0 bottom-1 text-xs text-primary pointer-events-none">expand_more</span>
</div>
</div>
<div className="group relative min-w-[200px]">
<label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Sắp xếp theo</label>
<select className="bg-transparent border-none text-primary font-headline-md text-sm p-0 focus:ring-0 cursor-pointer appearance-none pr-6 w-full text-right">
<option value="latest">Mới nhất</option>
<option value="price_asc">Giá: Thấp đến Cao</option>
<option value="price_desc">Giá: Cao đến Thấp</option>
</select>
<span className="material-symbols-outlined absolute right-0 bottom-1 text-xs text-primary pointer-events-none">sort</span>
</div>
</div>
</section>
{/*  Product Grid  */}
<section className="max-w-[1140px] mx-auto px-6 mb-section-gap">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Product Card 1  */}
<div className="group glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/5] relative overflow-hidden bg-surface-container-low">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A high-end product shot of the iPhone 15 Pro Max in Natural Titanium on a minimalist black glass surface. The lighting is focused and professional, creating crisp highlights on the brushed metal edges and the sophisticated triple-lens camera system. The background is a dark, clean studio setting with subtle gradients of grey and deep charcoal, emphasizing the premium quality and exclusivity of the device." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV__UHqQxiHhf6Hwa7w3YpGNy0a07yL50Fcqq8ByGG9QmWHmeIBhlHFTvXBGqcHk814rpyLxjZ6kIaPI_YRrEOhn0E6hgL39vsKGSUfh5T03hnYC6wITrDAlpmlOCKSUyb3SRNDHksZURj5DsUlxvNyEJW4Tybdcttiwaf4aJLemyo2LnVM8iLRghoVY6BW02LWJUv0tMA8CMK4aCgn47HH69wmWJ5dtJCdYtocY7XNIPOnCyMagKx-oEshVkPttat1l44t64y0_0"/>
<div className="absolute top-4 left-4">
<span className="font-label-sm border border-primary text-primary px-3 py-1 bg-background/80 backdrop-blur-md">NEW ARRIVAL</span>
</div>
</div>
<div className="p-8 text-center">
<h3 className="font-headline-md text-white mb-4">iPhone 15 Pro Max</h3>
<div className="flex justify-center gap-2 mb-6">
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 font-['Outfit']">256GB</span>
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 font-['Outfit']">512GB</span>
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 font-['Outfit']">1TB</span>
</div>
<div className="mb-8">
<span className="text-[14px] text-primary align-top font-display-xl">VNĐ</span>
<span className="text-3xl font-display-xl text-primary ml-1">34.990.000</span>
</div>
<button className="w-full bg-[#D4AF37] text-black font-['Outfit'] uppercase tracking-widest text-xs py-4 shimmer-effect transition-all mb-4">Mua ngay</button>
<a className="text-[10px] tracking-widest uppercase text-primary border-b border-primary/30 hover:border-primary transition-all" href="#">So sánh sản phẩm</a>
</div>
</div>
{/*  Product Card 2  */}
<div className="group glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/5] relative overflow-hidden bg-surface-container-low">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A luxury display of the iPhone 15 Pro in Blue Titanium, set against a dark architectural backdrop with soft, warm lighting. The image captures the deep blue metallic texture of the phone, with light catching the titanium frame to show off its strength and premium finish. The scene is minimal and high-end, utilizing the brand's dark mode aesthetic with deep obsidian tones and subtle golden accents in the reflections." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWW02IlwUr4txDjgj86ObRg7Hjnxx90D9zZ8-VkH4D0KzOqBo6HnxM5gleobkf93fxF1rpTfb6F9PjOIhNrF6M_5KSy6_MjOF06iXD2CwfsTbksL5eiPO7oRJTglf48oFIgCy0XmsWlKZLqMMfR3W6Z1kKTzJoc4qXAsxUWmj3ugvJTxLKiPVOb5wYl_JOclaIb5vpI_rFMyfUAQoreHlcKLBwIpNQPBEGvhWmijAEeHS5gPpsqTuDir0qfHd4YGrs-Gg29qsTx-Q"/>
</div>
<div className="p-8 text-center">
<h3 className="font-headline-md text-white mb-4">iPhone 15 Pro</h3>
<div className="flex justify-center gap-2 mb-6">
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 font-['Outfit']">128GB</span>
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 font-['Outfit']">256GB</span>
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 font-['Outfit']">512GB</span>
</div>
<div className="mb-8">
<span className="text-[14px] text-primary align-top font-display-xl">VNĐ</span>
<span className="text-3xl font-display-xl text-primary ml-1">28.490.000</span>
</div>
<button className="w-full bg-[#D4AF37] text-black font-['Outfit'] uppercase tracking-widest text-xs py-4 shimmer-effect transition-all mb-4">Mua ngay</button>
<a className="text-[10px] tracking-widest uppercase text-primary border-b border-primary/30 hover:border-primary transition-all" href="#">So sánh sản phẩm</a>
</div>
</div>
{/*  Product Card 3  */}
<div className="group glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/5] relative overflow-hidden bg-surface-container-low">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A professional studio photograph of the iPhone 14 Pro Max in Deep Purple, resting on a matte black surface. The lighting is technical and precise, emphasizing the depth of the purple glass and the bright polished steel edges. The background is a vast, dark space that evokes a sense of modern gallery luxury. Gold accents from nearby light sources create subtle, warm highlights on the camera lenses and frame." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoQFFH0SDeSwUfnjRwxr9XBSRwxmOqNdHUv1iI-wwCo5tWZqC6hJkF4rNJK7W8KcsPmi5Mdud_3iOSsAOlkkggKa3gSHetn28w44V0P0DfOYYd75TFsaSeIcKMA5ofaLab5dpzc0zCa685CcL444LdQJY1zzffg5d6Rwc0oRsgYxNGT40C7E__bifCdJE_Iux-gKIbBxFhZW-yAjlLOLUGtTfNcWbiY9rUsahpjukDXabCuLqCw0T8fwSzRWp_cPZv7B4bHAWV2Q0"/>
<div className="absolute top-4 left-4">
<span className="font-label-sm border border-white/30 text-white/70 px-3 py-1 bg-background/80 backdrop-blur-md">COLLECTION</span>
</div>
</div>
<div className="p-8 text-center">
<h3 className="font-headline-md text-white mb-4">iPhone 14 Pro Max</h3>
<div className="flex justify-center gap-2 mb-6">
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 font-['Outfit']">128GB</span>
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 font-['Outfit']">256GB</span>
</div>
<div className="mb-8">
<span className="text-[14px] text-primary align-top font-display-xl">VNĐ</span>
<span className="text-3xl font-display-xl text-primary ml-1">26.990.000</span>
</div>
<button className="w-full border border-[#D4AF37] text-[#D4AF37] font-['Outfit'] uppercase tracking-widest text-xs py-4 hover:bg-[#D4AF37] hover:text-black transition-all mb-4">Mua ngay</button>
<a className="text-[10px] tracking-widest uppercase text-primary border-b border-primary/30 hover:border-primary transition-all" href="#">So sánh sản phẩm</a>
</div>
</div>
</div>
</section>
{/*  Newsletter / CTA  */}
<section className="max-w-[1140px] mx-auto px-6 mb-section-gap">
<div className="relative glass-card py-20 px-8 text-center overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="font-display-xl text-4xl text-white mb-6">Đăng Ký Nhận Đặc Quyền</h2>
<p className="text-on-surface-variant max-w-lg mx-auto mb-10">Trở thành người đầu tiên sở hữu các phiên bản Limited Edition và nhận tin tức công nghệ xa xỉ hàng tuần.</p>
<form className="max-w-md mx-auto flex gap-4">
<input className="flex-1 bg-white/5 border-b border-white/20 text-white px-4 py-4 focus:border-primary transition-all outline-none" placeholder="Email của quý khách" type="email"/>
<button className="bg-[#D4AF37] text-black px-8 py-4 font-['Outfit'] uppercase tracking-widest text-xs shimmer-effect">Gửi</button>
</form>
</div>
</div>
</section>

    </>
  );
}
