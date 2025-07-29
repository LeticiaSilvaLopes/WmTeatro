"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Controle de Endemia',
      href: '/controle-endemia',
      submenu: [
        { name: 'Um vilão em seu quintal', href: '/controle-endemia/um-vilao-em-seu-quintal' }
      ]
    },
    {
      name: 'Cultura Popular',
      href: '/cultura-popular',
      submenu: [
        { name: 'Reza a Lenda', href: '/cultura-popular/reza-a-lenda' }
      ]
    },
    {
      name: 'Ecologia',
      href: '/ecologia',
      submenu: [
        { name: 'Floresta Viva', href: '/ecologia/floresta-viva' },
        { name: 'O Segredo das Águas Mágicas', href: '/ecologia/o-segredo-das-aguas-magicas' },
        { name: 'Pingo e o ciclo da água', href: '/ecologia/pingo-e-o-ciclo-da-agua' }
      ]
    },
    {
      name: 'Emoções',
      href: '/emocoes',
      submenu: [
        { name: 'A Cigarra e a Formiga', href: '/emocoes/a-cigarra-e-a-formiga' },
        { name: 'Alice no País das Maravilhas', href: '/emocoes/alice-no-pais-das-maravilhas' }
      ]
    },
    {
      name: 'Incentivo a leitura',
      href: '/incentivo-leitura',
      submenu: [
        { name: 'Coração de Tinta', href: '/incentivo-leitura/coracao-de-tinta' }
      ]
    },
    {
      name: 'Natal',
      href: '/natal',
      submenu: [
        { name: 'Grinch', href: '/natal/grinch' }
      ]
    },
    {
      name: 'Sistema Solar',
      href: '/sistema-solar',
      submenu: [
        { name: 'Além da Lua', href: '/sistema-solar/alem-da-lua' }
      ]
    },
    { name: 'Perguntas Frequentes', href: '/perguntas-frequentes' }
  ];

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-black text-white shadow-lg border-b border-gray-800 relative z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Botão Menu (extrema esquerda) */}
            <button
              className="text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo (extrema direita) */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/images/logo.png" 
                alt="WM Teatro" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Menu Lateral (agora à esquerda) */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-black border-r border-gray-700 transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header do Menu */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-purple-400">Menu</h2>
          <button
            onClick={closeMenu}
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Conteúdo do Menu */}
        <nav className="p-4 h-full overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      className="flex justify-between items-center w-full p-3 text-left text-gray-300 hover:text-purple-400 hover:bg-gray-900 rounded-lg transition-all duration-200"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-200 text-purple-400 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pl-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block p-3 text-gray-400 hover:text-purple-300 hover:bg-gray-900 rounded-lg transition-colors"
                            onClick={closeMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block p-3 text-gray-300 hover:text-purple-400 hover:bg-gray-900 rounded-lg transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}