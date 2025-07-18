'use client';

export default function ProyectoMusical() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-[#e0e0e0] px-10 py-24 relative">
      <div className="texture-overlay"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,71,87,0.05)] to-transparent"
      ></div>
      
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 items-center">
          {/* Visual Section */}
          <div className="text-center">
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-10 text-[#e0e0e0] opacity-90">
              Su proyecto musical
            </h3>
            
            {/* Logo Placeholder */}
            <div className="w-[300px] h-[200px] bg-gradient-to-br from-[#2d2d2d] to-[#0a0a0a] rounded-[20px] mx-auto flex items-center justify-center text-3xl font-bold text-[#e0e0e0] border-2 border-white/10 relative overflow-hidden">
              <div 
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent"
                style={{ animation: 'shine 3s ease-in-out infinite' }}
              ></div>
              DIS CONNECT
            </div>
            
            <div className="mt-8 py-4 px-8 bg-white/10 rounded-[25px] text-sm font-medium tracking-wider border border-white/20">
              Featured on TIDAL
            </div>
          </div>
          
          {/* Text Section */}
          <div className="text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-[#e0e0e0] opacity-90">
            <p className="mb-6">
              Dis Connect es un dúo formado por Agustín Sasson y Alfredo Ridolfo (TEIAO), nacido en Buenos Aires en 2022. Inspirados en la idea de "desconectar para conectar", viajan a entornos naturales para crear álbumes conceptuales con identidad propia.
            </p>
            <p className="mb-10">
              Su sonido fusiona electrónica, rock, trip hop e instrumentación real (guitarras, cuerdas, percusión, etc.). Su primer disco fue editado por el prestigioso sello de Guy J: <span className="text-[#ff4757] font-semibold">Armadillo Records</span>.
            </p>
            
            <div className="flex gap-5 flex-wrap">
              <a 
                href="#" 
                className="py-4 px-8 bg-transparent text-[#e0e0e0] no-underline border-2 border-[#ff4757] rounded-[30px] font-semibold text-sm transition-all duration-300 relative overflow-hidden hover:text-white group"
              >
                <span className="absolute inset-0 bg-[#ff4757] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                <span className="relative z-10">🎵 Escuchar en Spotify</span>
              </a>
              <a 
                href="#" 
                className="py-4 px-8 bg-transparent text-[#e0e0e0] no-underline border-2 border-[#ff4757] rounded-[30px] font-semibold text-sm transition-all duration-300 relative overflow-hidden hover:text-white group"
              >
                <span className="absolute inset-0 bg-[#ff4757] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                <span className="relative z-10">🎧 Escuchar en Tidal</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 