'use client';

import Button from './Button';

export default function DjSets() {
  return (
    <section className="min-h-screen flex items-center justify-center text-[#e0e0e0] px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/fondo-black.jpeg)' }}
      ></div>
      <div className="texture-overlay"></div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-extrabold mb-8 sm:mb-12 text-[#e0e0e0] tracking-wider">
              DJ SETS
            </h2>
            
            <p className="text-[clamp(1rem,2vw,1.3rem)] leading-relaxed text-[#e0e0e0] opacity-90 mb-8 sm:mb-10">
              Con más de una década dedicada al arte de mover multitudes, Agustín ha perfeccionado su capacidad para crear experiencias musicales únicas. Su evolución constante como DJ le ha permitido desarrollar una versatilidad excepcional, adaptándose a cada audiencia y momento. Sus sets trascienden los géneros convencionales, fusionando sonidos diversos para crear narrativas sonoras que conectan profundamente con el público.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 flex-wrap">
              <Button href="https://on.soundcloud.com/VjpM2Qt0B4YT2Febwe" variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
                🎵 SoundCloud
              </Button>
              <Button href="#" variant="primary" size="lg">
                ▶️ Mix Videos
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative overflow-hidden rounded-[20px] order-1 lg:order-2">
            <div 
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-[20px] transition-transform duration-300 hover:scale-105"
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