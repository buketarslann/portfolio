import React from 'react';
import { useTranslation } from 'react-i18next';

interface Course {
  title: string;
  description: string;
  image: string;
  ageGroups: string[];
}

const CourseCard: React.FC<Course> = ({ title, description, image, ageGroups }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Age groups available:</h4>
          <div className="flex flex-wrap gap-2">
            {ageGroups.map((age, index) => (
              <span 
                key={index} 
                className="bg-sage-light text-sage-dark text-xs px-3 py-1 rounded-full"
              >
                {age}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const { t } = useTranslation();

  const courses: Course[] = [
    {
      title: t('courses.guitar.title'),
      description: t('courses.guitar.description'),
      image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg",
      ageGroups: ["Primary", "Secondary", "High School"]
    },
    {
      title: t('courses.vocal.title'),
      description: t('courses.vocal.description'),
      image: "https://images.pexels.com/photos/7520935/pexels-photo-7520935.jpeg",
      ageGroups: ["Secondary", "High School"]
    },
    {
      title: t('courses.painting.title'),
      description: t('courses.painting.description'),
      image: "https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg",
      ageGroups: ["Primary", "Secondary", "High School"]
    },
    {
      title: t('courses.technology.title'),
      description: t('courses.technology.description'),
      image: "https://images.pexels.com/photos/7150986/pexels-photo-7150986.jpeg",
      ageGroups: ["High School"]
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-4">{t('courses.title')}</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('courses.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              ageGroups={course.ageGroups}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses