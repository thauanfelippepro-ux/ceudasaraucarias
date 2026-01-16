
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o fundo da navbar ao scrollar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'O Refúgio', href: '#sobre' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Espaços', href: '#espacos' },
    { label: 'Planejador', href: '#planejador' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar - Z-Index 120 para ficar acima do overlay */}
      <nav className={`fixed top-0 left-0 w-full z-[120] transition-all duration-500 px-6 md:px-12 py-6 ${
        scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-neutral-900' : 'mix-blend-difference text-white'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="text-sm font-bold tracking-tighter cursor-pointer hover:opacity-70 transition-opacity"
          >
            CÉU DAS ARAUCÁRIAS
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={(e) => handleLinkClick(e, item.href)}
                className="hover:opacity-50 transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Toggle Button (Hamburger / X) */}
          <button 
            className="md:hidden p-2 -mr-2 relative flex items-center justify-center transition-colors outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="relative w-6 h-6">
              {/* Barra Superior */}
              <span className={`absolute block w-6 h-[1.5px] bg-current transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              {/* Barra Central */}
              <span className={`absolute block w-6 h-[1.5px] bg-current transition-all duration-200 ease-in-out top-3 ${
                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
              }`}></span>
              {/* Barra Inferior */}
              <span className={`absolute block w-6 h-[1.5px] bg-current transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Z-Index 110 */}
      <div className={`fixed inset-0 z-[110] bg-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="h-full flex flex-col items-center justify-center gap-8 px-8 pt-10">
          {menuItems.map((item, idx) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`text-4xl font-serif text-neutral-900 hover:italic transition-all duration-500 transform ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {item.label}
            </a>
          ))}
          
          <div className={`mt-12 pt-12 border-t border-neutral-100 w-full max-w-[240px] text-center transition-all duration-1000 delay-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}>
             <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium mb-6">São José dos Pinhais, PR</p>
             <div className="flex justify-center gap-8">
                <a href="https://instagram.com/ceudasaraucarias" target="_blank" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <FaInstagram size={22} />
                </a>
                <a href="https://wa.me/5511915005557" target="_blank" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <FaWhatsapp size={22} />
                </a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
