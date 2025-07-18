'use client';

import Button from './Button';

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center text-[#e0e0e0] px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/fondo-black.jpeg)' }}
      ></div>
      <div className="texture-overlay"></div>
      
      <div className="max-w-[800px] mx-auto text-center relative z-10 px-4">
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-extrabold mb-8 sm:mb-12 text-[#e0e0e0] tracking-wider">
          CONTACTO
        </h2>
        
        <div className="mb-8 sm:mb-12">
          <div className="mb-6 sm:mb-8 text-[clamp(1rem,2vw,1.3rem)] font-normal">
            <span className="text-[#ff4757] font-semibold">Email:</span>{' '}
            <a 
              href="mailto:agussasson@hotmail.com" 
              className="text-[#e0e0e0] no-underline transition-colors duration-300 hover:text-[#ff4757] break-all"
            >
              agussasson@hotmail.com
            </a>
          </div>
          <div className="mb-6 sm:mb-8 text-[clamp(1rem,2vw,1.3rem)] font-normal">
            <span className="text-[#ff4757] font-semibold">WhatsApp:</span>{' '}
            <a 
              href="https://wa.me/34603914177" 
              className="text-[#e0e0e0] no-underline transition-colors duration-300 hover:text-[#ff4757]"
            >
              +34 603 914177
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 sm:mt-16">
          <Button href="https://www.instagram.com/agustinsasson?igsh=MTQ4OGM3YmlkYWc4OA%3D%3D&utm_source=qr" variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
            📷 Instagram Personal
          </Button>
          <Button href="https://www.instagram.com/disconnect.duo?igsh=MWtiNjBrcHgyY2hvag==" variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
            🎵 IG Dis Connect
          </Button>
          <Button href="https://on.soundcloud.com/VjpM2Qt0B4YT2Febwe" variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
            🎧 SoundCloud
          </Button>
          <Button href="https://open.spotify.com/artist/5ruNWWvksb8XeU7u8r9g8g?si=RmlHCtbgSzmgPGJ0GUyFKg" variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
            🎵 Spotify
          </Button>
        </div>
      </div>
    </section>
  );
} 