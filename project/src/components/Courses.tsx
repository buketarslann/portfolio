import React from 'react';

interface Course {
  title: string;
  description: string;
  image: string;
  ageGroups: string[];
}

const CourseCard: React.FC<Course> = ({ title, description, image, ageGroups }) => {
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
          <h4 className="text-sm font-medium text-gray-700 mb-2">Available for:</h4>
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
        <button className="w-full bg-burgundy text-white py-2 rounded-md hover:bg-burgundy-dark transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const courses: Course[] = [
    {
      title: "Guitar Mastery",
      description: "From basic chords to complex fingerpicking, develop your guitar skills with our comprehensive lessons.",
      image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg",
      ageGroups: ["Primary", "Secondary", "High School"]
    },
    {
      title: "Vocal Performance",
      description: "Find your unique voice and build confidence with personalized vocal coaching and performance techniques.",
      image: "https://images.pexels.com/photos/7520935/pexels-photo-7520935.jpeg",
      ageGroups: ["Secondary", "High School"]
    },
    {
      title: "Painting & Drawing",
      description: "Explore various visual art techniques from sketching and watercolor to oil painting and mixed media.",
      image: "https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg",
      ageGroups: ["Primary", "Secondary", "High School"]
    },
    {
      title: "Music Technology",
      description: "Learn digital audio production, electronic music creation, and sound engineering fundamentals.",
      image: "https://images.pexels.com/photos/7150986/pexels-photo-7150986.jpeg",
      ageGroups: ["Secondary", "High School"]
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-4">Our Courses</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our range of specialized artistic programs designed for students of all ages and skill levels. 
            Each course is taught by experienced professionals passionate about nurturing talent.
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

        <div className="mt-16 bg-sage-light p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-serif font-bold text-burgundy mb-2">
                Ready to start your artistic journey?
              </h3>
              <p className="text-gray-700">
                Enrollment is open for all age groups and courses. Limited spots available!
              </p>
            </div>
            <button className="bg-burgundy text-white px-8 py-3 rounded-md hover:bg-burgundy-dark transition-colors">
              Enroll Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;