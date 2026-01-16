
import React from 'react';

const EventCategories: React.FC = () => {
  const categories = [
    { title: "Corporativos", desc: "Workshops e treinamentos imersos na tranquilidade do verde." },
    { title: "Sociais", desc: "Casamentos íntimos, aniversários e celebrações memoráveis." },
    { title: "Bem-estar", desc: "Retiros, yoga e vivências focadas em saúde e equilíbrio mental." },
    { title: "Audiovisual", desc: "Cenário exclusivo para produções, ensaios e campanhas." },
    { title: "Gastronomia", desc: "Cozinha equipada para workshops e experiências culinárias." },
  ];

  return (
    <section id="eventos" className="py-12 md:py-32 px-6 bg-[#EEEEEE] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header da Seção */}
        <div className="mb-10 md:mb-24 text-center md:text-left">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-2 md:mb-4 block font-medium">Versatilidade</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            A casa de todos <br/>
            <span className="italic font-normal">os seus momentos</span>
          </h2>
        </div>
        
        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-neutral-300">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="relative p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-neutral-300 hover:bg-white transition-all duration-500 group cursor-default"
            >
              {/* Index */}
              <span className="text-[11px] font-bold text-neutral-400 mb-8 md:mb-12 block tracking-widest group-hover:text-neutral-900 transition-colors">
                0{i+1}
              </span>
              
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-serif text-neutral-900 group-hover:translate-x-1 transition-transform duration-500">
                  {cat.title}
                </h3>
                <p className="text-[13px] md:text-sm text-neutral-500 leading-relaxed font-light tracking-wide max-w-[200px] mx-auto md:mx-0">
                  {cat.desc}
                </p>
              </div>

              {/* Detalhe Decorativo no Hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Frase de Apoio Inferior */}
        <div className="mt-12 md:mt-20 flex justify-center md:justify-end">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
            Moldamos o espaço conforme a sua visão
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
