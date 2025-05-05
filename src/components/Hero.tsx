import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-white to-sage-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-burgundy mb-4 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#courses" 
                className="bg-burgundy text-white px-8 py-3 rounded-md hover:bg-burgundy-dark transition-colors font-medium"
              >
                {t('hero.exploreCourses')}
              </a>
              <a 
                href="#contact" 
                className="border-2 border-burgundy text-burgundy px-8 py-3 rounded-md hover:bg-burgundy hover:text-white transition-colors font-medium"
              >
                {t('hero.contactUs')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage rounded-full opacity-30"></div>
              <img
                src="https://images.pexels.com/photos/7520935/pexels-photo-7520935.jpeg"
                alt="Music student performing"
                className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { number: '10+', text: t('hero.stats.experience') },
            { number: '100+', text: t('hero.stats.students') },
            { number: '4', text: t('hero.stats.programs') },
            { number: '12', text: t('hero.stats.tutors') },
          ].map((badge, index) => (
            <div 
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-2">
                {badge.number}
              </div>
              <div className="text-gray-600">
                {badge.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero