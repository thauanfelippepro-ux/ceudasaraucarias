
import React from 'react';

const Specs: React.FC = () => {
  const data = [
    { label: "Área Total", value: "18.000 m² de natureza" },
    { label: "Salão Principal", value: "100 m² coberto" },
    { label: "Capacidade", value: "Até 100 convidados" },
    { label: "Logística", value: "Cozinha Semi-industrial" },
    { label: "Estacionamento", value: "15 vagas + Valeta" },
    { label: "Lazer", value: "Bosque, Campo e Parquinho" },
  ];

  return (
    <section className="py-4 md:py-24 bg-[#EEEEEE] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 border-y border-forest/10 py-6 md:py-16">
          {data.map((item, i) => (
            <div key={i} className="text-center md:text-left group cursor-default">
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-sage block mb-1 md:mb-2 font-bold group-hover:text-forest transition-colors">{item.label}</span>
              <span className="text-[12px] md:text-sm font-semibold text-forest">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;