'use client';

import Button from './Button';

export default function DjSets() {
  return (
    <section className="min-h-screen flex items-center justify-center text-[#e0e0e0] px-10 py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/fondo-black.jpeg)' }}
      ></div>
      <div className="texture-overlay"></div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-24 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-12 text-[#e0e0e0] tracking-wider">
              DJ SETS
            </h2>
            
            <p className="text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-[#e0e0e0] opacity-90 mb-6">
              Con más de una década dedicada al arte de mover multitudes, Agustín ha perfeccionado su capacidad para crear experiencias musicales únicas. Su evolución constante como DJ le ha permitido desarrollar una versatilidad excepcional, adaptándose a cada audiencia y momento. Sus sets trascienden los géneros convencionales, fusionando sonidos diversos para crear narrativas sonoras que conectan profundamente con el público.
            </p>
            
            <div className="flex gap-5 flex-wrap">
              <Button href="https://on.soundcloud.com/VjpM2Qt0B4YT2Febwe" variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                🎵 SoundCloud
              </Button>
              <Button href="#" variant="primary" size="lg">
                ▶️ Mix Videos
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative overflow-hidden rounded-[20px]">
            <div 
              className="w-full h-[500px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-[20px] transition-transform duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(45deg, #333, #555)',
                filter: 'grayscale(20%) contrast(1.1)'
              }}
            ></div>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(255,71,87,0.1)] rounded-[20px]"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
} 