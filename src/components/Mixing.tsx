'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Mixing() {
  const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <section className="min-h-screen flex items-center justify-center text-[#0a0a0a] px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/fondo-white.jpeg)' }}
      ></div>
      <div ref={elementRef} className={`max-w-[1000px] mx-auto text-center relative z-10 px-4 transition-all duration-800 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-extrabold mb-8 sm:mb-12 text-[#0a0a0a] tracking-wider">
          MIXING
        </h2>
        
        <p className="text-[clamp(1rem,2vw,1.3rem)] leading-relaxed text-[#666] mb-8 sm:mb-10">
          Como ingeniero de mezcla, Agustín trabaja con artistas de todo el mundo, aportando claridad, balance y emoción a cada producción. Su enfoque técnico cuida tanto la dinámica como la profundidad, respetando siempre el carácter único de cada proyecto.
        </p>
        
        <p className="text-[clamp(0.9rem,2vw,1.2rem)] text-[#ff4757] font-medium mt-6 sm:mt-8 italic">
          No dudes en contactarme para conocer más sobre tu proyecto musical y explorar juntos nuevas posibilidades sonoras.
        </p>
      </div>
    </section>
  );
} 