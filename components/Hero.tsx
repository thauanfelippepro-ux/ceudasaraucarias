
import React from 'react';

const Hero: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400", alt: "Vista aérea da chácara Céu das Araucárias" },
    { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400", alt: "Bosque preservado para eventos ao ar livre" },
    { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400", alt: "Luz natural entre as araucárias" },
    { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400", alt: "Cenário para casamento no campo" },
    { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400", alt: "Paisagem natural em São José dos Pinhais" },
  ];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#EEEEEE]">
      {/* Background Signature */}
      <div className="absolute top-[5%] md:top-[2%] left-0 right-0 flex items-start justify-center pointer-events-none select-none z-0">
        <div className="handwriting-container w-full md:-rotate-[6deg] transition-transform duration-700">
          <h2 className="text-[32vw] md:text-[21vw] font-signature font-normal handwriting-reveal text-[#E3E4E4] leading-[0.8] md:leading-[0.9] whitespace-nowrap px-2 md:px-4">
            Seu evento, naturalmente
          </h2>
        </div>
      </div>

      {/* Floating Image Arc */}
      <div className="relative w-full max-w-5xl h-[160px] md:h-[320px] flex justify-center items-end gap-2 md:gap-4 arc-container -top-4 md:top-0 mb-12 z-10">
        {images.map((img, i) => {
          const index = i - 2; 
          return (
            <div 
              key={i}
              className={`floating-image w-20 h-32 md:w-48 md:h-64 bg-white rounded-lg md:rounded-2xl shadow-2xl overflow-hidden border-[3px] md:border-[10px] border-white group cursor-pointer transition-transform duration-700`}
              style={{
                transform: `rotate(${index * 12}deg) translateY(${Math.abs(index) * 25}px)`,
                zIndex: 10 - Math.abs(index)
              }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 767px) {
                  .floating-image:nth-child(${i+1}) {
                    transform: rotate(${index * 6}deg) translateY(${Math.abs(index) * 8}px) !important;
                  }
                }
              `}} />
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover saturate-[1.2] transition-all duration-1000 group-hover:scale-110" 
              />
            </div>
          );
        })}
      </div>

      {/* Hero Text Content */}
      <div className="text-center z-20 px-6 relative -top-2 md:top-0">
        <div className="mb-2 md:mb-4">
           <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-sage font-bold">São José dos Pinhais — PR</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-serif font-light mb-4 md:mb-8 leading-none text-forest">
          Céu das <br/> <span className="italic font-normal text-forest">Araucárias</span>
        </h1>
        <p className="max-w-[280px] md:max-w-xl mx-auto text-forest/70 font-light text-[13px] md:text-base leading-relaxed">
          Um altar banhado pelo sol em harmonia com a natureza. O refúgio ideal para momentos inesquecíveis.
        </p>
      </div>

      {/* Left Side Tag */}
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 flex flex-col items-center gap-4 md:gap-6 opacity-40 text-forest hidden md:flex">
        <span className="text-[9px] uppercase tracking-[0.4em] vertical-text transform font-bold">Chácara para eventos</span>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-t from-forest to-transparent"></div>
      </div>

      {/* Right Side Tag (Scroll) */}
      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 flex flex-col items-center gap-4 md:gap-6 opacity-40 text-forest">
        <span className="text-[9px] uppercase tracking-[0.4em] vertical-text transform rotate-180 origin-center font-bold">Role para descobrir</span>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-forest to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
