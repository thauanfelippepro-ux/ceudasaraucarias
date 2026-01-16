
import React from 'react';

const Storytelling: React.FC = () => {
  return (
    <section id="sobre" className="pt-16 pb-8 md:pt-32 md:pb-4 px-6 bg-[#EEEEEE] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start relative">
        
        {/* Imagem da Esquerda - Oculta no Mobile */}
        <div className="hidden lg:block lg:col-span-3 pt-48">
          <div className="relative group">
            <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&w=800" 
                alt="Natureza preservada na chácara Céu das Araucárias" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 hidden xl:flex items-center justify-center p-4 rounded-2xl">
               <span className="text-[10px] text-white tracking-widest uppercase font-bold text-center leading-tight">Sentir o Tempo</span>
            </div>
          </div>
        </div>

        {/* Coluna de Texto Centralizada */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="text-center mb-4 md:mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-sage mb-2 md:mb-6 block font-bold">Chácara Céu das Araucárias</span>
            <h2 className="text-3xl md:text-6xl font-serif leading-[1.1] mb-6 md:mb-12 text-forest px-4">
              Natureza, Aconchego <br/>
              <span className="italic font-normal text-forest">e Versatilidade</span>
            </h2>
          </div>

          <div className="max-w-xl space-y-6 md:space-y-10 text-forest/70 font-light leading-relaxed text-[14px] md:text-base text-justify md:text-center mb-8 md:mb-0">
            <p>
              A poucos minutos de <strong>Curitiba</strong>, o Céu das Araucárias é um refúgio onde o charme rústico encontra a infraestrutura completa que o seu evento merece. Oferecemos mais do que um cenário para festas; entregamos uma atmosfera de contentamento e exclusividade.
            </p>
            <p>
              Especializada em <strong>casamentos ao ar livre</strong> e <strong>confraternizações corporativas</strong>, nossa chácara em São José dos Pinhais celebra a integração perfeita com a Mata Atlântica. Com um design minimalista que valoriza a luz e o céu, somos o palco ideal para quem busca intimidade e conexão.
            </p>
            <p className="font-serif italic text-lg md:text-2xl text-forest pt-1 md:pt-4 leading-tight">
              Sinta o bem-estar. Escreva seu próximo capítulo em um local cercado pela beleza que só a natureza pode narrar.
            </p>
          </div>
        </div>

        {/* Imagem da Direita */}
        <div className="lg:col-span-3 relative">
          <div className="max-w-[280px] md:max-w-none mx-auto aspect-[3/4] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl group mb-8">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800" 
              alt="Bosque de Araucárias para festas e recepções" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
            />
          </div>
          
          <div className="absolute -bottom-16 -right-4 md:-right-8 w-44 h-56 bg-white p-3 shadow-2xl transform rotate-3 hidden md:block rounded-xl">
            <div className="w-full h-4/5 overflow-hidden bg-neutral-100 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400" 
                alt="Detalhes da natureza no Céu das Araucárias" 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="h-1/5 flex items-center justify-center">
              <span className="font-handwritten text-xl text-sage">Atmosfera única</span>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-xs mx-auto h-[1px] bg-forest/20 mt-8 md:mt-12 opacity-50"></div>
    </section>
  );
};

export default Storytelling;
