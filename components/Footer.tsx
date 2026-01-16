
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const closeModal = () => setActiveModal(null);

  const privacyContent = (
    <div className="space-y-6 text-neutral-600 font-light text-sm leading-relaxed">
      <h3 className="text-2xl font-serif text-neutral-900 mb-4">Política de Privacidade</h3>
      <p>No <strong>Céu das Araucárias</strong>, a sua privacidade é uma prioridade. Esta política descreve como tratamos as suas informações.</p>
      
      <section>
        <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-widest mb-2">1. Coleta de Dados</h4>
        <p>Coletamos informações básicas quando você interage com nosso assistente de IA ou entra em contato via WhatsApp. Isso inclui seu nome (se fornecido) e o conteúdo da conversa para fins de melhoria do atendimento.</p>
      </section>

      <section>
        <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-widest mb-2">2. Uso de Cookies</h4>
        <p>Utilizamos cookies essenciais para garantir que o site funcione corretamente e para analisar o tráfego de forma anônima.</p>
      </section>

      <section>
        <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-widest mb-2">3. Proteção de Dados</h4>
        <p>Seguimos as diretrizes da LGPD (Lei Geral de Proteção de Dados). Não compartilhamos suas informações com terceiros para fins de marketing sem o seu consentimento explícito.</p>
      </section>

      <section>
        <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-widest mb-2">4. Contato</h4>
        <p>Para dúvidas sobre seus dados, entre em contato conosco através do nosso canal oficial no WhatsApp.</p>
      </section>
    </div>
  );

  const termsContent = (
    <div className="space-y-6 text-neutral-600 font-light text-sm leading-relaxed">
      <h3 className="text-2xl font-serif text-neutral-900 mb-4">Termos de Uso</h3>
      <p>Ao acessar o site do <strong>Céu das Araucárias</strong>, você concorda em cumprir estes termos de serviço.</p>

      <section>
        <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-widest mb-2">1. Uso do Site</h4>
        <p>Este site é destinado a fornecer informações sobre nosso espaço e facilitar o planejamento de eventos. O uso do assistente de IA é consultivo e as informações fornecidas devem ser confirmadas com nossa equipe comercial.</p>
      </section>

      <section>
        <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-widest mb-2">2. Agendamentos</h4>
        <p>As visitas ao local ocorrem exclusivamente mediante agendamento prévio. A consulta de disponibilidade via site não garante a reserva da data.</p>
      </section>

      <section>
        <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-widest mb-2">3. Propriedade Intelectual</h4>
        <p>Todo o conteúdo visual, design e textos deste site são de propriedade do Céu das Araucárias. A reprodução não autorizada é proibida.</p>
      </section>

      <section>
        <h4 className="font-bold text-neutral-800 uppercase text-[10px] tracking-widest mb-2">4. Alterações</h4>
        <p>Reservamo-nos o direito de atualizar estes termos a qualquer momento para refletir mudanças em nossos serviços ou na legislação vigente.</p>
      </section>
    </div>
  );

  return (
    <>
      <footer id="contato" className="bg-[#EEEEEE] py-24 px-8 border-t border-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h2 className="text-2xl font-serif mb-6">Céu das Araucárias</h2>
            <p className="text-neutral-500 text-[10px] font-light leading-relaxed tracking-wider uppercase">
              Rua Joana Percegona Zen, 2433<br/>
              Borda do Campo, São José dos Pinhais - PR<br/>
              CEP 83075-310
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
               <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Social</span>
               <a href="https://www.instagram.com/ceudasaraucarias/" target="_blank" rel="noopener noreferrer" className="text-xs hover:opacity-50 transition-opacity">Instagram</a>
               <a href="https://wa.me/5511915005557?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20local" target="_blank" rel="noopener noreferrer" className="text-xs hover:opacity-50 transition-opacity">WhatsApp</a>
            </div>
            <div className="flex flex-col gap-4">
               <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Legal</span>
               <button onClick={() => setActiveModal('privacy')} className="text-xs hover:opacity-50 transition-opacity text-left outline-none">Privacidade</button>
               <button onClick={() => setActiveModal('terms')} className="text-xs hover:opacity-50 transition-opacity text-left outline-none">Termos de Uso</button>
            </div>
          </div>

          <div className="md:text-right flex flex-col items-center md:items-end w-full md:w-auto">
             <div className="mb-8 opacity-90 hover:opacity-100 transition-opacity duration-500 flex justify-center md:justify-end">
               <img 
                 src="https://images.unsplash.com/photo-1542362567-b058c02b9ac8?auto=format&fit=crop&q=80&w=200" 
                 alt="Logo Céu das Araucárias" 
                 className="max-h-16 w-auto object-contain grayscale opacity-40"
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                 }}
               />
             </div>
             <p className="text-[10px] text-neutral-500 tracking-[0.1em] font-medium uppercase">© 2026 CÉU DAS ARAUCÁRIAS. TODOS OS DIREITOS RESERVADOS.</p>
             <p className="text-[10px] text-neutral-400 mt-2 font-light uppercase tracking-widest">Feito com serenidade</p>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 transition-all duration-500 animate-fadeIn"
          style={{ backgroundColor: 'rgba(238, 238, 238, 0.9)', backdropFilter: 'blur(8px)' }}
          onClick={closeModal}
        >
          <div 
            className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 relative animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="Fechar"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            {activeModal === 'privacy' ? privacyContent : termsContent}
            
            <div className="mt-12 pt-8 border-t border-neutral-100 text-center">
              <button 
                onClick={closeModal}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                Voltar ao site
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default Footer;
