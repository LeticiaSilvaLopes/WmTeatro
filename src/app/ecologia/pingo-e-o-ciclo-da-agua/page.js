"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import FAQ from '../../../components/FAQ';
import FaleConosco from '../../../components/FaleConosco';

export default function PingoEOCicloDAgua() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array de mídia específico desta página
  const mediaItems = [
    
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
          className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent leading-relaxed"
          style={{
            backgroundImage: 'linear-gradient(to right, #1e3c72, #2a5298, #00b4db, #0083b0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          PINGO E O CICLO D'ÁGUA
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
              Pingo acredita ser a última gota do mundo e sai em busca de respostas, explorando o caminho da água por rios, esgotos e estações de tratamento
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