'use client';

export default function Header() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-[#e0e0e0] px-10 py-24">
      <div className="texture-overlay"></div>
      <div className="grain-effect"></div>
      
      {/* Animated background */}
      <div 
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.01) 0%, transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      ></div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="text-center relative z-10">
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black mb-8 tracking-wider text-shadow-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AGUSTÍN SASSON
          </h1>
          <p className="text-[clamp(1.2rem,3vw,1.8rem)] opacity-80 font-light tracking-wider mb-10">
            Músico / Productor / Ingeniero de mezcla / DJ
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-[#ff4757] to-transparent"
        style={{ animation: 'scroll-fade 2s ease-in-out infinite' }}
      ></div>
    </section>
  );
} 