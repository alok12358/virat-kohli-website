// src/pages/Gallery/Gallery.jsx
import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

// Import local images for the gallery (place these in public/assets)
import img1 from '../../assets/gallery/img1.jpg';
import img2 from '../../assets/gallery/img2.jpg';
import img3 from '../../assets/gallery/img3.jpg';
import img4 from '../../assets/gallery/img4.jpg';
import img5 from '../../assets/gallery/img5.jpg';
import img6 from '../../assets/gallery/img6.jpg';
import img7 from '../../assets/gallery/img7.jpg';
import img8 from '../../assets/gallery/img8.jpg';
import img9 from '../../assets/gallery/img9.jpg';

const images = [
  { src: img1, alt: 'Virat Kohli playing shot' },
  { src: img2, alt: 'Virat Kohli celebrating' },
  { src: img3, alt: 'Virat Kohli with trophy' },
  { src: img4, alt: 'Virat Kohli posing' },
  { src: img5, alt: 'Virat Kohli on field' },
  { src: img6, alt: 'Virat Kohli in practice' },
  { src: img7, alt: 'Virat Kohli with team' },
  { src: img8, alt: 'Virat Kohli with fans' },
  { src: img9, alt: 'Virat Kohli' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className="container mx-auto p-6 pt-24 bg-gray-50 min-h-screen">
      <SectionHeader 
        title="Visual Journey: Virat Kohli" 
        description="A captivating collection of moments from his illustrious career and life." 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer animate-fade-in"
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
          >
            <button 
              onClick={closeLightbox} 
              className="absolute top-4 right-4 text-white text-4xl font-bold p-2 leading-none"
              aria-label="Close image"
            >
              &times;
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;