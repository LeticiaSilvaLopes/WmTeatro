"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import FAQ from '../../../components/FAQ';
import FaleConosco from '../../../components/FaleConosco';

export default function OSegredoDasAguasMagicas() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array de mídia específico desta página
  const mediaItems = [
    {
      type: 'video',
      videoSrc: '/videos/OSegredoDasAguasMagicas.mp4',
      alt: 'Vídeo do espetáculo 1'
    },
    {
      type: 'image',
      src: '/images/OSegredoDasAguasMagicas1.jpg',
      alt: 'Cena do espetáculo 1'
    },
    {
      type: 'image',
      src: '/images/OSegredoDasAguasMagicas2.jpg',
      alt: 'Cena do espetáculo 1'
    },
    {
      type: 'image',
      src: '/images/OSegredoDasAguasMagicas3.jpg',
      alt: 'Cena do espetáculo 1'
    },
    {
      type: 'image',
      src: '/images/OSegredoDasAguasMagicas4.jpg',
      alt: 'Cena do espetáculo 1'
    },
    {
      type: 'image',
      src: '/images/OSegredoDasAguasMagicas5.jpg',
      alt: 'Cena do espetáculo 1'
    },
    {
      type: 'image',
      src: '/images/OSegredoDasAguasMagicas6.jpg',
      alt: 'Cena do espetáculo 1'
    }
  ];

  const openLightbox = (media) => {
    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const nextSlide = () => {
  setCurrentSlide(prev => 
    prev < mediaItems.length - 3 ? prev + 1 : prev
  );
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : prev);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-black py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            O SEGREDO DAS ÁGUAS MÁGICAS
          </motion.h1>
        </div>
      </motion.section>

      {/* Sinopse Section */}
      <section className="py-4 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-white">SINOPSE</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Tina, uma tartaruga marinha, une-se a Birilouco e Kate para enfrentar o Monstro do Mar em uma aventura que revela os impactos da poluição dos oceanos. Espetáculo educativo com linguagem lúdica.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-2xl mx-auto">
              <div>
                <p className="text-white font-semibold">Duração:</p>
                <p className="text-gray-400">~40 minutos</p>
              </div>
              <div>
                <p className="text-white font-semibold">Classificação:</p>
                <p className="text-gray-400">Livre</p>
              </div>
              <div>
                <p className="text-white font-semibold">Autor:</p>
                <p className="text-gray-400">William Torres</p>
              </div>
            </div>
          </motion.div>

          {/* Galeria de Mídia */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-white">GALERIA</h3>
            
            {/* Container do Carrossel */}
            <div className="relative max-w-6xl mx-auto">
              {/* Área de visualização - mostra até 3 itens */}
              <div className="overflow-hidden">
                <div 
                  className={`flex transition-transform duration-300 ease-in-out gap-6 px-4 ${
                    mediaItems.length <= 3 ? 'justify-center' : ''
                  }`}
                  style={{ 
                    transform: mediaItems.length > 3 ? `translateX(-${currentSlide * 33.333}%)` : 'none'
                  }}
                >
                  {mediaItems.map((media, index) => (
                    <div 
                      key={index} 
                      className="relative group cursor-pointer flex-shrink-0 w-80"
                      onClick={() => openLightbox(media)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                        
                        {/* Para imagens */}
                        {media.type === 'image' ? (
                          <Image 
                            src={media.src}
                            alt={media.alt}
                            className="w-full h-48 object-cover"
                            width={400}  
                            height={300} 
                          />
                        ) : (
                          /* Para vídeos */
                          <div className="relative">
                            <video 
                              src={media.videoSrc}
                              className="w-full h-48 object-cover"
                              preload="metadata"
                              muted
                            />
                            
                            {/* Ícone de Play para vídeos */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black bg-opacity-60 rounded-full p-4 group-hover:bg-opacity-80 transition-all">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões de navegação - só aparecem se tiver mais de 3 itens */}
              {mediaItems.length > 3 && (
                <>
                  {/* Botão Anterior */}
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-4 rounded-full border-2 border-cyan-400 hover:border-cyan-300 hover:shadow-cyan-400/50 hover:shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 group"
                  >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Botão Próximo */}
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide >= mediaItems.length - 3}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-4 rounded-full border-2 border-cyan-400 hover:border-cyan-300 hover:shadow-cyan-400/50 hover:shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 group"
                  >
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Component - Mesmo FAQ em todas as páginas */}
      <FAQ />

      {/* Fale Conosco Component */}
      <FaleConosco />

      {/* Lightbox Modal */}
            {selectedMedia && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                onClick={closeLightbox}
              >
                {/* Container centralizado */}
                <div 
                  className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar na mídia
                >
                  
                  {/* Botão de Fechar - sempre visível */}
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-300 z-10 group"
                  >
                    <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
      
                  {/* Conteúdo da mídia */}
                  <div className="w-full h-full flex items-center justify-center">
                    {selectedMedia.type === 'image' ? (
                      <Image 
                        src={selectedMedia.src}
                        alt={selectedMedia.alt}
                        width={1200}
                        height={800}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        unoptimized
                      />
                    ) : (
                      <video 
                        src={selectedMedia.videoSrc}
                        controls
                        autoPlay
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      />
                    )}
                  </div>
      
                  {/* Indicador de instrução (opcional) */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm">
                    Clique fora da mídia ou no X para fechar
                  </div>
                </div>
              </div>
            )}
    </div>
  );
}