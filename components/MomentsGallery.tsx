
import React, { useLayoutEffect, useRef, useState } from 'react';

const FLOATING_PHRASES = [
  { text: "Arquitetura orgânica", top: "28%", left: "10%", delay: 0.2 },
  { text: "Curadoria de detalhes", top: "22%", right: "8%", delay: 0.6 },
  { text: "Onde o tempo para", top: "48%", left: "5%", delay: 0.4 },
  { text: "Silêncio que acolhe", top: "62%", right: "6%", delay: 1.0 },
  { text: "Momentos eternos", bottom: "30%", left: "18%", delay: 0.8 },
  { text: "Sincronia natural", bottom: "24%", right: "12%", delay: 1.2 },
  { text: "Essência preservada", top: "20%", left: "42%", delay: 1.4 },
  { text: "Design minimalista", bottom: "18%", right: "38%", delay: 1.6 }
];

const ARC_IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1532704101643-29402280629b?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1465146633011-14f8e0781093?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fe6f?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1433086566086-64039329715a?auto=format&fit=crop&q=80&w=400"
];

const MomentsGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterboxTopRef = useRef<HTMLDivElement>(null);
  const letterboxBottomRef = useRef<HTMLDivElement>(null);
  const mainCopyRef = useRef<HTMLDivElement>(null);
  const finalContentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bottomGradientRef = useRef<HTMLDivElement>(null);
  
  // Estado para controlar o hover na galeria (Desktop)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    // @ts-ignore
    const { gsap, ScrollTrigger } = window;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const navbar = document.querySelector('nav');

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      // @ts-ignore
      const { isDesktop, isMobile } = context.conditions;
      const phrases = gsap.utils.toArray('.floating-phrase');
      const arcCards = gsap.utils.toArray('.arc-card');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=600%",
          pin: true,
          scrub: 1.5,
          onUpdate: (self: any) => {
            if (navbar) {
              const shouldHide = self.progress > 0.01 && self.progress < 0.98;
              navbar.style.opacity = shouldHide ? '0' : '1';
              navbar.style.pointerEvents = shouldHide ? 'none' : 'auto';
            }
          }
        }
      });

      gsap.set(bottomGradientRef.current, { opacity: 0 });

      // 1. LETTERBOXES
      tl.to([letterboxTopRef.current, letterboxBottomRef.current], {
        height: "12vh",
        duration: 1.5,
        ease: "power2.inOut"
      }, 0);

      // 2. FRASES
      if (isDesktop) {
        phrases.forEach((phrase: any, i: number) => {
          const pData = FLOATING_PHRASES[i];
          tl.fromTo(phrase, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 
            0.4 + (pData.delay || 0)
          );
          tl.to(phrase, { opacity: 0, y: -30, duration: 1, ease: "power2.in" }, 2.0 + (pData.delay || 0));
        });
      } else {
        const mobilePhrases = phrases.slice(0, 5);
        mobilePhrases.forEach((phrase: any, i: number) => {
          const start = 0.4 + (i * 0.5); 
          tl.fromTo(phrase, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 
            start
          ).to(phrase, { 
            opacity: 0, 
            y: -20, 
            duration: 0.5, 
            ease: "power2.in" 
          }, start + 0.8);
        });
      }

      // 3. REVEAL FINAL (Acontece a partir de 4.0)
      tl.to(mainCopyRef.current, { opacity: 0, scale: 1.1, duration: 1.5 }, 4.0);
      tl.to([letterboxTopRef.current, letterboxBottomRef.current], { height: 0, duration: 1.5 }, 4.2);
      tl.to(overlayRef.current, { opacity: 0.02, duration: 2 }, 4.5);
      tl.to(bottomGradientRef.current, { opacity: 1, duration: 1 }, 4.8);

      tl.fromTo(finalContentRef.current, 
        { opacity: 0, y: isMobile ? 30 : 180 }, 
        { opacity: 1, y: isMobile ? 0 : 140, duration: 2 }, 
        5.2
      );
      
      tl.fromTo(arcCards, 
        { opacity: 0, scale: 0.2 }, 
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }, 
        5.5
      );

      // 4. ÓRBITA
      const orbitTl = gsap.timeline({ repeat: -1 });
      arcCards.forEach((card: any, i: number) => {
        const total = arcCards.length;
        const radiusX = isMobile ? 240 : 660;
        const radiusY = isMobile ? 220 : 620;
        const initialAngle = (i / total) * Math.PI * 2;
        const yOffset = isMobile ? 0 : 480;

        orbitTl.to(card, {
          duration: 140,
          ease: "none",
          repeat: -1,
          onUpdate: function() {
            const time = this.progress() * Math.PI * 2;
            const currentAngle = initialAngle + time;
            const x = Math.cos(currentAngle) * radiusX;
            const y = Math.sin(currentAngle) * radiusY + yOffset; 
            const rot = (currentAngle * 180 / Math.PI) + 90;
            gsap.set(card, { x, y, rotation: rot });
          }
        }, 0);
      });
    });

    return () => {
      mm.revert();
      if (navbar) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      }
    };
  }, []);

  const mobileCoords = [
    { top: "22%", left: "12%" },
    { top: "34%", right: "12%" },
    { top: "68%", left: "15%" },
    { top: "78%", right: "15%" },
    { top: "28%", right: "5%" }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full bg-[#EEEEEE] overflow-hidden flex justify-center"
    >
      <div ref={overlayRef} className="absolute inset-0 bg-forest opacity-0 z-0 pointer-events-none"></div>

      <div ref={letterboxTopRef} className="absolute top-0 left-0 w-full h-0 bg-forest/95 z-[100] shadow-2xl overflow-hidden flex items-center px-6 md:px-12">
        <span className="text-white/20 text-[9px] font-bold uppercase tracking-[0.6em]">CÉU DAS ARAUCÁRIAS</span>
      </div>
      
      <div ref={letterboxBottomRef} className="absolute bottom-0 left-0 w-full h-0 bg-forest/95 z-[100] shadow-2xl overflow-hidden flex items-center justify-end px-6 md:px-12">
        <span className="text-white/20 text-[9px] font-bold uppercase tracking-[0.6em]">SINCRONIA NATURAL</span>
      </div>

      <div ref={mainCopyRef} className="absolute z-[60] text-center pointer-events-none opacity-100 px-6 top-[38%] left-1/2 -translate-x-1/2 w-full max-w-sm md:max-w-4xl">
        <h2 className="text-4xl md:text-8xl font-serif text-forest leading-tight">
          <span className="whitespace-nowrap">Momentos que</span> <br/> 
          <span className="italic font-normal text-forest">respiram</span>.
        </h2>
      </div>

      {FLOATING_PHRASES.map((phrase, i) => (
        <div 
          key={i} 
          className={`floating-phrase absolute z-30 opacity-0 pointer-events-none px-4 flex items-center justify-center text-center w-full md:w-auto ${i >= 5 ? 'hidden md:flex' : ''}`}
          style={{ 
            top: phrase.top, 
            left: phrase.left, 
            right: phrase.right, 
            bottom: phrase.bottom 
          }}
        >
          {i < 5 && (
            <style dangerouslySetInnerHTML={{ __html: `
              @media (max-width: 767px) {
                .floating-phrase:nth-child(${i+4}) {
                  top: ${mobileCoords[i].top} !important; 
                  left: ${mobileCoords[i].left || 'auto'} !important; 
                  right: ${mobileCoords[i].right || 'auto'} !important; 
                  bottom: auto !important;
                }
              }
            `}} />
          )}
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-forest font-bold whitespace-nowrap bg-transparent">
            {phrase.text}
          </span>
        </div>
      ))}

      {/* Grid de Órbita - Agora com pointer-events-none no pai para não travar scroll, e auto nos filhos para o hover */}
      <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {ARC_IMAGES.map((url, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`arc-card absolute w-12 h-12 md:w-28 md:h-28 transform-gpu pointer-events-auto cursor-pointer transition-all duration-700 ease-out z-50
                ${hoveredIndex !== null && hoveredIndex !== i ? 'blur-[4px] grayscale opacity-30 scale-90' : 'blur-0 grayscale-0 opacity-100'}
              `}
            >
              {/* Inner container para scale sem conflitar com GSAP position */}
              <div className={`w-full h-full rounded-lg md:rounded-xl shadow-lg transition-transform duration-500 bg-white/5
                ${hoveredIndex === i ? 'scale-150 md:scale-[1.8] shadow-2xl z-[100]' : 'scale-100'}
              `}>
                <img src={url} alt="" className="w-full h-full object-cover rounded-lg md:rounded-xl shadow-inner" />
              </div>
            </div>
          ))}
        </div>

        <div ref={bottomGradientRef} className="absolute bottom-0 left-0 w-full h-[30%] md:h-[45%] bg-gradient-to-t from-[#EEEEEE] via-[#EEEEEE]/95 to-transparent z-[55] pointer-events-none"></div>

        <div className="absolute inset-0 z-[70] flex items-center justify-center pointer-events-none">
          <div ref={finalContentRef} className="opacity-0 px-6 text-center flex flex-col items-center">
             <span className="text-[8px] md:text-xs uppercase tracking-[0.6em] text-sage font-bold mb-4 md:mb-6 block">A Experiência Completa</span>
             <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-forest leading-[1.1] tracking-tight">
              Tudo em <br/> <span className="italic font-normal">Sintonia</span>
             </h3>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-[110] pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
};

export default MomentsGallery;
