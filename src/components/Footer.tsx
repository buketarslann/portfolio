import React from 'react';
import { Music, Palette } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-gold">
                <Music className="h-5 w-5 mr-1" />
                <Palette className="h-5 w-5" />
              </div>
              <span className="ml-2 text-xl font-serif font-bold">Artnova</span>
            </div>
            <p className="text-neutral-400 mb-4">
              Nurturing creativity and artistic excellence through personalized tuition for students of all ages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-gold transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="text-neutral-400 hover:text-gold transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="text-neutral-400 hover:text-gold transition-colors">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-neutral-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#gallery" className="text-neutral-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Guitar Lessons</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Vocal Coaching</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Painting Classes</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Music Technology</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Summer Workshops</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gold">Contact Info</h3>
            <address className="not-italic text-neutral-400">
              <p className="mb-2">123 Art Avenue, Creative District</p>
              <p className="mb-2">City, State 12345</p>
              <p className="mb-2">
                <a href="mailto:info@artnova.edu" className="hover:text-white transition-colors">
                  info@artnova.edu
                </a>
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Artnova Art Education. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const InstagramIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default Footer;