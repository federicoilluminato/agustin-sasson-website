'use client';

import Image from 'next/image';
import Button from './Button';

export default function ProyectoMusical() {
  return (
    <section className="min-h-screen flex items-center justify-center text-[#e0e0e0] px-10 py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/fondo-black.jpeg)' }}
      ></div>
      <div className="texture-overlay"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,71,87,0.05)] to-transparent"
      ></div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 items-center">
          {/* Visual Section */}
          <div className="text-center flex flex-col items-center">
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-10 text-[#e0e0e0] opacity-90">
              Su proyecto musical
            </h3>
            
            {/* Logo Dis Connect */}
            <div className="w-[300px] h-[200px] rounded-[20px] relative overflow-hidden border-2 border-white/10">
              <Image 
                src="/assets/logo-disconnect.jpeg" 
                alt="Dis Connect Logo" 
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-[20px]"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                style={{ animation: 'shine 3s ease-in-out infinite' }}
              ></div>
            </div>
            
            <div className="mt-8 w-[300px] py-4 px-8 bg-white/10 rounded-[25px] text-sm font-medium tracking-wider border border-white/20 text-center">
              Featured on TIDAL
            </div>
          </div>
          
          {/* Text Section */}
          <div className="text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-[#e0e0e0] opacity-90">
            <p className="mb-6">
              Dis Connect es un dúo formado por Agustín Sasson y Alfredo Ridolfo (TEIAO), nacido en Buenos Aires en 2022. Inspirados en la idea de &ldquo;desconectar para conectar&rdquo;, viajan a entornos naturales para crear álbumes conceptuales con identidad propia.
            </p>
            <p className="mb-6">
              Su sonido fusiona electrónica, rock, trip hop e instrumentación real (guitarras, cuerdas, percusión, etc.). Su primer disco fue editado por el prestigioso sello de Guy J: <span className="text-[#ff4757] font-semibold">Armadillo Records</span>.
            </p>
            
            <div className="flex gap-5 flex-wrap">
              <Button href="https://open.spotify.com/artist/5ruNWWvksb8XeU7u8r9g8g?si=RmlHCtbgSzmgPGJ0GUyFKg" variant="outline" size="lg" target="_blank" rel="noopener noreferrer">
                🎵 Escuchar en Spotify
              </Button>
              <Button href="https://tidal.com/browse/artist/48101128?u" variant="outline" size="lg" target="_blank" rel="noopener noreferrer">
                🎧 Escuchar en Tidal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 