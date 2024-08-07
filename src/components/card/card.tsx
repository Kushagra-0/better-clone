"use client"

import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: 'Arian.webp', alt: 'Arian' },
  { src: 'Amanda.webp', alt: 'Amanda' },
  { src: 'Paul.webp', alt: 'Paul' }
];

function Card() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageSelect = (index: number) => {
    setCurrentImageIndex(index);
  };

  const names = ['Arian', 'Amanda', 'Paul'];

  return (
    <div className="w-96 p-4 rounded-lg">
      <Image
        src={images[currentImageIndex].src} 
        alt={images[currentImageIndex].alt} 
        className="w-full h-auto rounded-2xl"
      />
      <div className="flex justify-between mt-8">
        {names.map((name, index) => (
          <button 
            key={index} 
            onClick={() => handleImageSelect(index)} 
            className={`w-24 h-12 rounded-full border ${index === currentImageIndex ? 'bg-white text-[#017848] border-4 border-[#017848]' : 'bg-white text-black'} hover:border-[#017848] hover:border-4`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Card;

