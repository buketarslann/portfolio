import React from 'react';
import { Music2, Mic, PaintBucket, Laptop } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-gold mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Guitar />,
      title: t('about.features.guitar.title'),
      description: t('about.features.guitar.description')
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: t('about.features.vocal.title'),
      description: t('about.features.vocal.description')
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: t('about.features.painting.title'),
      description: t('about.features.painting.description')
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: t('about.features.technology.title'),
      description: t('about.features.technology.description')
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-sage-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-4">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-burgundy mb-4">
                {t('about.philosophy.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('about.philosophy.description1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('about.philosophy.description2')}
              </p>
              <button className="bg-burgundy text-white px-6 py-3 rounded-md hover:bg-burgundy-dark transition-colors">
                {t('about.learnMore')}
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/7521607/pexels-photo-7521607.jpeg" 
                alt={t('about.imageAlt')} 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Guitar: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m9 9 1.5-1.5" />
    <path d="M11.5 12.5 12 12" />
    <circle cx="12" cy="12" r=".5" />
    <path d="M7.5 7.5a.5.5 0 0 0-.5.5v.5a2.5 2.5 0 0 0 5 0V8a.5.5 0 0 0-.5-.5h-4Z" />
    <path d="m13 21 8.6-8.6a2 2 0 0 0 0-2.8L17.4 5.4a2 2 0 0 0-2.8 0L6 14" />
    <path d="M3 3h.001" />
    <path d="M7.05 11.95a4 4 0 1 0 5.66 5.66" />
    <path d="M7.5 7.5 3 12" />
  </svg>
);

export default About