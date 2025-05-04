import React, { useState, useEffect } from 'react';
import { Music, Palette, Menu, X, Globe } from 'lucide-react';
import { Link } from './common/Link';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center text-burgundy">
              <Music className="h-6 w-6 mr-1" />
              <Palette className="h-6 w-6" />
            </div>
            <span className="ml-2 text-2xl font-serif font-bold text-burgundy">Artnova</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about">{t('header.about')}</Link>
            <Link href="#courses">{t('header.courses')}</Link>
            <Link href="#gallery">{t('header.gallery')}</Link>
            <Link href="#contact">{t('header.contact')}</Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center text-burgundy hover:text-burgundy-dark"
              >
                <Globe className="h-5 w-5 mr-1" />
                <span>{i18n.language === 'tr' ? 'TR|EN' : 'EN|TR'}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-2">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('tr')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Türkçe
                  </button>
                </div>
              )}
            </div>

            <button className="bg-burgundy text-white px-5 py-2 rounded-md hover:bg-burgundy-dark transition-colors">
              {t('header.enrollNow')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-burgundy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-md shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                {t('header.about')}
              </Link>
              <Link 
                href="#courses" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                {t('header.courses')}
              </Link>
              <Link 
                href="#gallery" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                {t('header.gallery')}
              </Link>
              <Link 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                {t('header.contact')}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="px-4 py-2">
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left py-2 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('tr')}
                  className="block w-full text-left py-2 hover:bg-gray-100"
                >
                  Türkçe
                </button>
              </div>

              <div className="px-4 pt-2">
                <button className="w-full bg-burgundy text-white px-5 py-2 rounded-md hover:bg-burgundy-dark transition-colors">
                  {t('header.enrollNow')}
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header