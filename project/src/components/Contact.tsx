import React from 'react';
import { Mail, MessageSquare, Instagram } from 'lucide-react';

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
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-burgundy-light to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions about our courses or want to schedule a trial lesson? 
            Reach out to us through any of these channels and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactMethod 
            icon={<Mail className="w-8 h-8" />}
            title="Email Us"
            value="info@artnova.edu"
            link="mailto:info@artnova.edu"
          />
          <ContactMethod 
            icon={<MessageSquare className="w-8 h-8" />}
            title="Telegram"
            value="@ArtnovaTuition"
            link="https://t.me/ArtnovaTuition"
          />
          <ContactMethod 
            icon={<Instagram className="w-8 h-8" />}
            title="Instagram"
            value="@artnova_official"
            link="https://instagram.com/artnova_official"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-burgundy mb-6 text-center">Send Us a Message</h3>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                placeholder="Inquiry about guitar lessons"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-burgundy"
                placeholder="Tell us what you're looking for..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-burgundy text-white px-8 py-3 rounded-md hover:bg-burgundy-dark transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;