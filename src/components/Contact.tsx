'use client';

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-[#e0e0e0] px-10 py-24 relative">
      <div className="texture-overlay"></div>
      
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-16 text-[#e0e0e0] tracking-wider relative">
          CONTACTO
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#ff4757]"></div>
        </h2>
        
        <div className="mb-12">
          <div className="mb-8 text-[clamp(1.1rem,2.5vw,1.3rem)] font-normal">
            <span className="text-[#ff4757] font-semibold">Email:</span>{' '}
            <a 
              href="mailto:agussasson@hotmail.com" 
              className="text-[#e0e0e0] no-underline transition-colors duration-300 hover:text-[#ff4757]"
            >
              agussasson@hotmail.com
            </a>
          </div>
          <div className="mb-8 text-[clamp(1.1rem,2.5vw,1.3rem)] font-normal">
            <span className="text-[#ff4757] font-semibold">WhatsApp:</span>{' '}
            <a 
              href="https://wa.me/34603914177" 
              className="text-[#e0e0e0] no-underline transition-colors duration-300 hover:text-[#ff4757]"
            >
              +34 603 914177
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          <a 
            href="#" 
            className="py-4 px-6 bg-transparent text-[#e0e0e0] border-2 border-white/30 no-underline rounded-[30px] font-medium text-sm transition-all duration-300 relative overflow-hidden hover:border-[#ff4757] hover:text-[#ff4757] group"
          >
            <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
            <span className="relative z-10">📷 Instagram Personal</span>
          </a>
          <a 
            href="#" 
            className="py-4 px-6 bg-transparent text-[#e0e0e0] border-2 border-white/30 no-underline rounded-[30px] font-medium text-sm transition-all duration-300 relative overflow-hidden hover:border-[#ff4757] hover:text-[#ff4757] group"
          >
            <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
            <span className="relative z-10">🎵 IG Dis Connect</span>
          </a>
          <a 
            href="#" 
            className="py-4 px-6 bg-transparent text-[#e0e0e0] border-2 border-white/30 no-underline rounded-[30px] font-medium text-sm transition-all duration-300 relative overflow-hidden hover:border-[#ff4757] hover:text-[#ff4757] group"
          >
            <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
            <span className="relative z-10">🎧 SoundCloud</span>
          </a>
          <a 
            href="#" 
            className="py-4 px-6 bg-transparent text-[#e0e0e0] border-2 border-white/30 no-underline rounded-[30px] font-medium text-sm transition-all duration-300 relative overflow-hidden hover:border-[#ff4757] hover:text-[#ff4757] group"
          >
            <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
            <span className="relative z-10">🎵 Spotify</span>
          </a>
        </div>
      </div>
    </section>
  );
} 