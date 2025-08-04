"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import FAQ from '../../../components/FAQ';
import FaleConosco from '../../../components/FaleConosco';

export default function AlemDaLua() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
          className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent leading-relaxed relative"
          style={{
            backgroundImage: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.5))'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ALÉM DA LUA
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
             Uma menina apaixonada pelo espaço embarca em uma aventura cósmica quando seu avô lhe conta uma história fantástica sobre extraterrestres e robôs. Ente memórias e imaginação, nasce uma jornada que conecta afeto, curiosidade e o universo das estrelas.
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
              <Image 
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-auto rounded-lg"
                width={400}  
                height={300} 
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