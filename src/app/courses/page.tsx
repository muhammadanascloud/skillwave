import Image from "next/image";
import Button from "@/components/Button";
import coursesData from "@/data/coursesData";

const CoursesPage = () => {
  const imageMap: { [key: string]: string } = {
    "java-dsa-domination": "/images/courses/java-dsa-domination.jpeg",
    "backend-domination": "/images/courses/backend-domination.jpeg",
    "frontend-domination": "/images/courses/frontend-domination.jpeg",
    "ai-machine-learning": "/images/courses/ai-machine-learning.jpeg",
    "cybersecurity-essentials": "/images/courses/cybersecurity-essentials.jpeg",
    "cloud-computing-aws": "/images/courses/cloud-computing-aws.jpeg", // New course image
  };

  return (
    <div className="bg-darkPrimary min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center mb-12 py-32 lg:py-36">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/courses-page-hero-image.jpeg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        {/* Hero Content */}
        <div className="relative z-10 fade-in">
          <h1 className="text-5xl font-bold text-primary mb-6 fade-in">
            Master Your Skills with Our Expert-Led Courses
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 fade-in delay-1">
            Dive into our carefully curated courses, designed to help you gain
            industry-relevant skills and achieve your goals.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-darkSecondary p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="relative">
                <Image
                  src={imageMap[course.id]}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {course.title}
              </h3>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <div className="flex space-x-2 mb-4">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 text-white text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-yellow-400 flex">
                  {Array.from({ length: Math.round(course.rating) }).map(
                    (_, i) => (
                      <span key={i}>⭐</span>
                    )
                  )}
                  {Array.from({ length: 5 - Math.round(course.rating) }).map(
                    (_, i) => (
                      <span key={i} className="text-gray-600">
                        ⭐
                      </span>
                    )
                  )}
                </div>
                <span className="text-white">({course.rating})</span>
              </div>
              <p className="text-gray-400 mb-2">By {course.instructor}</p>
              <p className="text-white font-bold text-xl mb-4">
                PKR {course.price.toLocaleString()}
              </p>
              <Button
                href={`/courses/${course.id}`}
                variant="primary"
                size="medium"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
