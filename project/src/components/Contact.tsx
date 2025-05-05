import React from 'react';
import { Mail, MessageSquare, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, title, value, link }) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-burgundy mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-burgundy mb-1">{title}</h3>
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-burgundy transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-700">{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-burgundy-light to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-4">{t('contact.title')}</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactMethod 
            icon={<Mail className="w-8 h-8" />}
            title={t('contact.methods.email.title')}
            value={t('contact.methods.email.value')}
            link="mailto:info@artnova.edu"
          />
          <ContactMethod 
            icon={<MessageSquare className="w-8 h-8" />}
            title={t('contact.methods.telegram.title')}
            value={t('contact.methods.telegram.value')}
            link="https://t.me/ArtnovaTuition"
          />
          <ContactMethod 
            icon={<Instagram className="w-8 h-8" />}
            title={t('contact.methods.instagram.title')}
            value={t('contact.methods.instagram.value')}
            link="https://instagram.com/artnova_official"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact