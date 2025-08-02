"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import FAQ from '../../components/FAQ';
import FaleConosco from '../../components/FaleConosco';

export default function PerguntasFrequentes() {
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