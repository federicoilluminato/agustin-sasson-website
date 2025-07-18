'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Bio() {
  const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <section className="min-h-screen flex items-center justify-center text-[#0a0a0a] px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/fondo-white.jpeg)' }}
      ></div>
      <div className="max-w-[1400px] w-full mx-auto relative z-10 px-4">
        <div ref={elementRef} className={`text-center max-w-[900px] mx-auto transition-all duration-800 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-extrabold mb-12 sm:mb-16 text-[#0a0a0a] tracking-wider">
            SOBRE MÍ
          </h2>
          <p className="text-[clamp(1rem,2vw,1.4rem)] leading-relaxed text-[#666] max-w-[800px] mx-auto font-normal px-4">
            Agustín Sasson es músico, productor, ingeniero de mezcla y DJ argentino, actualmente radicado en España. Con más de 10 años en la industria musical, combina sensibilidad artística con un enfoque técnico preciso.
          </p>
        </div>
      </div>
    </section>
  );
} 