
import React from 'react';

interface SpaceItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const SPACES: SpaceItem[] = [
  {
    id: '01',
    name: 'Cozinha Semi-industrial',
    description: 'Infraestrutura completa: pia, 01 fogão 4 bocas, 01 fogão industrial de 2 bocas, caixas térmicas, 01 forno elétrico, 01 geladeira técnica e 01 geladeira exclusiva para a churrasqueira.',
    tag: 'Equipada',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10" />
        <path d="M3 13h18l-1.5 7.5a1 1 0 0 1-1 .5h-13a1 1 0 0 1-1-.5L3 13Z" />
        <circle cx="12" cy="17" r="1" /><circle cx="8" cy="17" r="1" /><circle cx="16" cy="17" r="1" />
      </svg>
    )
  },
  {
    id: '02',
    name: 'O Bosque & Lazer',
    description: 'Imersão em 18.000 m² com bosques de araucárias, bancos para contemplação, campo de futebol, parquinho infantil, trilhas ecológicas e lagos naturais.',
    tag: '18.000 m²',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 11l7-7 7 7M5 19l7-7 7 7" />
        <path d="M12 22v-3" />
      </svg>
    )
  },
  {
    id: '03',
    name: 'Salão de Eventos',
    description: 'Espaço principal com 100 m² de área construída, projetado para oferecer versatilidade e uma moldura natural para qualquer tipo de celebração.',
    tag: '100 m²',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    )
  },
  {
    id: '04',
    name: 'Varanda Coberta',
    description: 'Ambiente de transição charmoso e abrigado, ideal para recepções, lounges de descanso ou como plano B estratégico para cerimônias íntimas.',
    tag: 'Abrigada',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 7l9-4 9 4v14" />
        <path d="M9 21V10h6v11" />
      </svg>
    )
  },
  {
    id: '05',
    name: 'Sanitários Estruturados',
    description: 'Conforto logístico para os convidados com 02 banheiros internos privativos e 02 banheiros externos integrados à área social e externa.',
    tag: '04 Unidades',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: '06',
    name: 'Estacionamento',
    description: 'Área interna e privativa com capacidade para 15 veículos, oferecendo segurança e facilidade de acesso imediato ao local do evento.',
    tag: '15 Carros',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M9 17V7h4a3 3 0 1 1 0 6H9" />
      </svg>
    )
  },
  {
    id: '07',
    name: 'Área de Fogo',
    description: 'Espaço calçado e nivelado, especialmente projetado para a preparação de costela de chão e experiências gastronômicas rústicas.',
    tag: 'Costela de Chão',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 2 2 3.5 2 5.5 0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5c0-2 1-3.5 2-5.5" />
        <path d="M18 10c1 2 2 3.5 2 5.5 0 2.5-2 4.5-4.5 4.5S11 18 11 15.5c0-2 1-3.5 2-5.5" />
        <path d="M7 22h10" />
      </svg>
    )
  }
];

const SpacesGrid: React.FC = () => {
  return (
    <section id="espacos" className="py-32 px-6 bg-[#EEEEEE] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 border-b border-neutral-300 pb-12 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-4 block font-medium">Infraestrutura</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Ambientes pensados <br/><span className="italic">para fluir</span>.
            </h2>
          </div>
          <div className="hidden md:block">
             <p className="text-neutral-500 text-[10px] uppercase tracking-widest max-w-[400px] leading-relaxed text-right">
               Cada detalhe técnico foi planejado para suportar a grandeza do seu evento.
             </p>
          </div>
        </div>

        {/* Grid de Infraestrutura */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {SPACES.map((space) => (
            <div key={space.id} className="group flex flex-col items-center md:items-start text-center md:text-left">
              
              {/* Ícone e Index */}
              <div className="mb-10 relative">
                <div className="w-20 h-20 rounded-full border border-neutral-300 bg-white/30 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-900 group-hover:bg-white transition-all duration-700 shadow-sm">
                  {space.icon}
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-[10px] font-bold text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all shadow-sm">
                  {space.id}
                </div>
              </div>
              
              <div className="space-y-5 max-w-sm flex flex-col items-center md:items-start">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <h3 className="text-2xl font-serif text-neutral-900 leading-none">
                    {space.name}
                  </h3>
                  <span className="px-3 py-1 bg-white border border-neutral-200 rounded-full text-[9px] uppercase tracking-widest text-neutral-500 font-bold shadow-sm">
                    {space.tag}
                  </span>
                </div>
                
                <p className="text-neutral-600 text-sm leading-relaxed font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesGrid;
