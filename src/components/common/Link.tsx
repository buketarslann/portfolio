import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  return (
    <a 
      href={href} 
      className={`text-burgundy hover:text-burgundy-dark transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};