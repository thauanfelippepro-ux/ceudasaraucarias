
import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: "Qual a capacidade máxima de convidados?",
    answer: "Nossa estrutura comporta confortavelmente até 100 convidados em formato de recepção, garantindo fluidez e conforto tanto no salão principal quanto nas áreas externas."
  },
  {
    question: "Posso levar meu próprio buffet e decorador?",
    answer: "Sim! Somos um espaço de locação livre. Oferecemos uma cozinha semi-industrial completa para sua equipe de gastronomia e total liberdade para o seu decorador criar o cenário perfeito."
  },
  {
    question: "O espaço possui gerador próprio?",
    answer: "Atualmente não possuímos gerador fixo, mas temos infraestrutura elétrica preparada e quadros de energia dimensionados para a conexão rápida de geradores locados externamente, se o seu evento exigir."
  },
  {
    question: "Existem restrições de horário para som e música?",
    answer: "Respeitamos as normas de silêncio locais. Para eventos noturnos, o som deve ser moderado após às 22h nas áreas externas, podendo continuar com volume normal dentro do salão acústico."
  },
  {
    question: "Como funciona o estacionamento?",
    answer: "Possuímos estacionamento interno e privativo com capacidade para até 15 veículos, além de área de fácil manobra e segurança para os seus convidados."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-32 px-6 bg-[#EEEEEE] border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-2 md:mb-4 block font-medium">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-5xl font-serif">Informações essenciais</h2>
        </div>

        <div className="space-y-2 md:space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div 
              key={i} 
              className="group border-b border-neutral-300 transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 md:py-8 flex justify-between items-center text-left focus:outline-none"
              >
                <span className={`text-base md:text-xl font-serif transition-colors duration-300 ${openIndex === i ? 'text-neutral-900' : 'text-neutral-500 group-hover:text-neutral-700'}`}>
                  {item.question}
                </span>
                <span className={`transform transition-transform duration-500 text-neutral-400 ${openIndex === i ? 'rotate-45' : 'rotate-0'}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-60 pb-6 md:pb-8' : 'max-h-0'}`}>
                <p className="text-neutral-500 text-[13px] md:text-base leading-relaxed font-light max-w-2xl">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
