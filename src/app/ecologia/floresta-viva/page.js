"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import FAQ from '../../../components/FAQ';
import FaleConosco from '../../../components/FaleConosco';

export default function FlorestaViva() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Array de mídia específico desta página
  const mediaItems = [
    {
      type: 'image',
      src: '/images/FlorestaViva1.jpg',
      alt: 'Cena do espetáculo 1'
    },
    {
      type: 'video',
      videoSrc: '/videos/FlorestaViva.mp4',
      alt: 'Vídeo do espetáculo 1'
    }
  ];

  const openLightbox = (media) => {
    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-black py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-green-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FLORESTA VIVA
          </motion.h1>
        </div>
      </motion.section>

      {/* Sinopse Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-white">SINOPSE</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Na Mata Atlântica, uma exploradora e seu ajudante atrapalham a reação dos animais ao tentar explorar a floresta. Uma fábula ecológica sobre preservação e respeito à natureza.
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            >
            <h3 className="text-3xl font-bold mb-8 text-center text-white">GALERIA</h3>
            
            {/* Grid responsivo que centraliza automaticamente */}
            <div className={`grid gap-6 justify-items-center ${
                mediaItems.length === 1 
                ? 'grid-cols-1 max-w-sm mx-auto' 
                : mediaItems.length === 2 
                    ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto'
                    : mediaItems.length === 3
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}>
                {mediaItems.map((media, index) => (
                <div 
                    key={index} 
                    className="relative group cursor-pointer w-full max-w-sm"
                    onClick={() => openLightbox(media)}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                    
                    {/* Para imagens */}
                    {media.type === 'image' ? (
                        <img 
                        src={media.src}
                        alt={media.alt}
                        className="w-full h-48 object-cover"
                        />
                    ) : (
                        /* Para vídeos - usa o primeiro frame como thumbnail */
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
            </motion.div>
        </div>
      </section>

      {/* FAQ Component - Mesmo FAQ em todas as páginas */}
      <FAQ />

      {/* Fale Conosco Component */}
      <FaleConosco />

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {selectedMedia.type === 'image' ? (
              <img 
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <video 
                src={selectedMedia.videoSrc}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}