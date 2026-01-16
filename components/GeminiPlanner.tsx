
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

const KNOWLEDGE_BASE = [
  {
    keys: ['cozinha', 'fogão', 'geladeira', 'comida', 'buffet', 'forno'],
    response: 'Nossa **cozinha é semi-industrial completa**! Contamos com 01 fogão de 4 bocas, 01 industrial de 2 bocas, forno elétrico, geladeira técnica e caixas térmicas. Você tem total liberdade para trazer seu buffet preferido.'
  },
  {
    keys: ['capacidade', 'pessoas', 'convidados', 'tamanho', 'espaço'],
    response: 'O Céu das Araucárias comporta confortavelmente até **100 convidados**. Nosso salão principal tem 100m² e a área total da chácara possui 18.000m² para circulação.'
  },
  {
    keys: ['estacionamento', 'carro', 'vagas', 'veículos'],
    response: 'Temos **estacionamento interno privativo** com capacidade para até 15 veículos, garantindo segurança e comodidade para seus convidados próximos.'
  },
  {
    keys: ['localização', 'onde', 'endereço', 'chegar', 'distância', 'curitiba', 'são josé'],
    response: 'Estamos localizados na **Borda do Campo, em São José dos Pinhais (PR)**, a cerca de 30 minutos de Curitiba. O acesso é fácil pela BR-277 com via pavimentada até a entrada.'
  },
  {
    keys: ['preço', 'valor', 'orçamento', 'locação', 'aluguel', 'reserva'],
    response: 'Os valores variam conforme o tipo de evento e a data desejada. Para um **orçamento personalizado**, [Clique aqui para falar com nossa equipe no WhatsApp](https://wa.me/5511915005557?text=Olá, gostaria de um orçamento para meu evento no Céu das Araucárias!)'
  },
  {
    keys: ['visita', 'conhecer', 'olhar', 'agendar'],
    response: 'Adoraríamos receber você! As visitas são feitas exclusivamente sob **agendamento prévio**. [Agende sua visita agora pelo WhatsApp](https://wa.me/5511915005557?text=Olá, gostaria de agendar uma visita para conhecer o espaço.)'
  }
];

const SUGGESTIONS = [
  "Qual a capacidade?",
  "Sobre a cozinha",
  "Como chegar?",
  "Agendar visita"
];

const GeminiPlanner: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getLocalResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const match = KNOWLEDGE_BASE.find(item => 
      item.keys.some(key => lowerQuery.includes(key))
    );
    if (match) return match.response;
    return "Não encontrei detalhes específicos sobre isso por aqui, mas nossa equipe pode te responder agora mesmo! [Falar com um atendente no WhatsApp](https://wa.me/5511915005557?text=Olá! Estava navegando no site e tenho uma dúvida sobre o Céu das Araucárias.)";
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isTyping) return;
    const userMsg: ChatMessage = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const responseText = getLocalResponse(text);
      const modelMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, modelMsg]);
      setIsTyping(false);
    }, 600);
  };

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
      return (
        <p key={i} className="mb-2 last:mb-0">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="font-bold text-forest">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('[') && part.includes('](')) {
              const textMatch = part.match(/\[(.*?)\]/);
              const urlMatch = part.match(/\((.*?)\)/);
              if (textMatch && urlMatch) {
                return (
                  <a 
                    key={j} 
                    href={urlMatch[1]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sage font-bold underline decoration-forest hover:text-forest transition-all"
                  >
                    {textMatch[1]}
                  </a>
                );
              }
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="bg-white border border-forest/10 shadow-xl rounded-2xl overflow-hidden flex flex-col h-[520px]">
      <div className="bg-forest px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-sage rounded-full animate-pulse"></div>
          <span className="text-white text-[10px] uppercase tracking-widest font-bold">Assistente Natural</span>
        </div>
        <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Resposta Instantânea</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-linen/50">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
            <p className="text-sage text-sm font-medium italic">Olá! Como posso ajudar você hoje?</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-sm">
              {SUGGESTIONS.map((s, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(s)}
                  className="px-4 py-2 bg-white border border-forest/10 rounded-full text-[11px] text-forest hover:bg-forest hover:text-white transition-all shadow-sm font-semibold"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[85%] px-5 py-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
              m.role === 'user' ? 'bg-forest text-white rounded-tr-none' : 'bg-white border border-forest/5 text-forest/80 rounded-tl-none'
            }`}>
              {renderFormattedText(m.text)}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-forest/5 px-5 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
              <div className="w-1.5 h-1.5 bg-sage rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-sage rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-sage rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-forest/10 bg-white flex gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ex: Como é a cozinha?"
          className="flex-1 bg-linen/30 border border-forest/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-forest"
        />
        <button 
          onClick={() => handleSend()}
          disabled={!input.trim() || isTyping}
          className="bg-forest text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-black transition-all disabled:opacity-20 shadow-md"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>
    </div>
  );
};

export default GeminiPlanner;