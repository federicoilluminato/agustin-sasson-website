'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Bio() {
  const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <section className="min-h-screen flex items-center justify-center text-[#0a0a0a] px-10 py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/fondo-white.jpeg)' }}
      ></div>
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div ref={elementRef} className={`text-center max-w-[900px] mx-auto transition-all duration-800 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-16 text-[#0a0a0a] tracking-wider">
            SOBRE MÍ
          </h2>
          <p className="text-[clamp(1.1rem,2.5vw,1.4rem)] leading-relaxed text-[#666] max-w-[800px] mx-auto font-normal">
            Agustín Sasson es músico, productor, ingeniero de mezcla y DJ argentino, actualmente radicado en España. Con más de 10 años en la industria musical, combina sensibilidad artística con un enfoque técnico preciso.
          </p>
        </div>
      </div>
    </section>
  );
} 