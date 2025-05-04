import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['all', 'music', 'painting', 'performances'];

  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/7520941/pexels-photo-7520941.jpeg',
      alt: 'Guitar lesson',
      category: 'music'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg',
      alt: 'Painting session',
      category: 'painting'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/7520876/pexels-photo-7520876.jpeg',
      alt: 'Piano practice',
      category: 'music'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/7521018/pexels-photo-7521018.jpeg',
      alt: 'Vocal performance',
      category: 'performances'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg',
      alt: 'Art class',
      category: 'painting'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/7521112/pexels-photo-7521112.jpeg',
      alt: 'Student concert',
      category: 'performances'
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-4">Student Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore moments from our classes, student performances, and creative works. 
            This gallery showcases the artistic journey of our community.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full capitalize ${
                  activeCategory === category
                    ? 'bg-burgundy text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;