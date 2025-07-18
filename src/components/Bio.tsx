export default function Bio() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] text-[#0a0a0a] px-10 py-24">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-16 text-[#0a0a0a] tracking-wider relative">
            SOBRE MÍ
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#ff4757]"></div>
          </h2>
          <p className="text-[clamp(1.1rem,2.5vw,1.4rem)] leading-relaxed text-[#666] max-w-[800px] mx-auto font-normal">
            Agustín Sasson es músico, productor, ingeniero de mezcla y DJ argentino, actualmente radicado en España. Con más de 10 años en la industria musical, combina sensibilidad artística con un enfoque técnico preciso.
          </p>
        </div>
      </div>
    </section>
  );
} 