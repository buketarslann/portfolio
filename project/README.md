# Artnova Art Tuition Community

A beautiful, responsive website for Artnova, a private art tuition community offering specialized education in music technologies, guitar, vocal coaching, and painting lessons for students of various age groups.

## Features

- Responsive design optimized for both mobile and desktop viewing
- Modern, artistic interface with smooth animations and transitions
- Comprehensive course information organized by age groups
- Interactive gallery section with filtering capabilities
- Contact forms and multiple communication channels (Telegram, Instagram, Gmail)
- Professional branding elements for the Artnova identity

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Lucide React for icons

## Project Structure

```
artnova-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Link.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Courses.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
└── README.md
```

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Build for production with `npm run build`

## Customization

The website has been built with customization in mind:

- Colors can be easily modified in the `tailwind.config.js` file
- Images can be replaced with your own by updating the image URLs in the components
- Content can be updated by modifying the text in each component

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## License

This project is licensed under the MIT License - see the LICENSE file for details.