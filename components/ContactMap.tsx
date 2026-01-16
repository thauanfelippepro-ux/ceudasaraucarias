
import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <section id="contato" className="py-12 md:py-32 px-6 bg-[#EEEEEE] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-8 md:space-y-12 text-center lg:text-left">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-sage mb-2 md:mb-4 block font-bold">Localização</span>
              <h2 className="text-4xl md:text-7xl font-serif leading-tight mb-6 md:mb-8 text-forest">
                Próximo de tudo, <br/>
                <span className="italic font-normal text-forest">longe do comum</span>
              </h2>
              <p className="text-forest/70 text-sm md:text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Situado na Borda do Campo em São José dos Pinhais, nosso refúgio combina a conveniência do acesso urbano com a vibração revigorante da natureza.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6">
              <a 
                href="https://wa.me/5511915005557?text=Olá, vim pelo site e gostaria de agendar uma visita ao Céu das Araucárias." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-forest text-white rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#264B36] transition-all hover:scale-105 active:scale-95 group shadow-xl w-full md:w-auto text-center"
              >
                Agende sua visita
                <svg className="ml-3 transform transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <p className="text-[9px] md:text-[10px] text-sage uppercase tracking-widest font-semibold lg:pl-4">
                Visitas somente com agendamento prévio.
              </p>
            </div>

            <div className="pt-6 md:pt-8 border-t border-forest/10 grid grid-cols-2 gap-4 md:gap-8 text-center lg:text-left">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-sage block mb-1 md:mb-2 font-bold">Distância</span>
                <span className="text-xs md:text-sm text-forest font-semibold">30 min de Curitiba</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-sage block mb-1 md:mb-2 font-bold">Acesso</span>
                <span className="text-xs md:text-sm text-forest font-semibold">Via BR-277 / Calçamento</span>
              </div>
            </div>
          </div>

          <div className="relative group mt-8 lg:mt-0">
            <div className="absolute -inset-2 md:-inset-4 border border-forest/10 rounded-[1.5rem] md:rounded-[2rem] -z-10 transition-all duration-700 group-hover:inset-0 opacity-50"></div>
            <div className="aspect-square lg:aspect-[4/5] bg-white rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.4005!2d-49.076935!3d-25.558334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf73663b6b199%3A0x7d06764510000000!2sR.%20Joana%20Percegona%20Zen%2C%202433%20-%20Borda%20do%20Campo%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20-%20PR%2C%2083075-310!5e0!3m2!1spt-BR!2sbr!4v1715600000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'saturate(1.2)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-linen/90 backdrop-blur-md px-4 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg border border-forest/10 hidden md:block">
                 <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-forest">Fácil Acesso</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;