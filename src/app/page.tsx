import Image from "next/image";
import Button from "@/components/Button";

const Home = () => {
  const companies = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
  ];

  const whyChooseUsData = [
    {
      title: "High-Quality Courses",
      description:
        "Our courses are crafted by industry experts with in-depth content, real-world examples, and projects that align with the latest trends.",
      image: "/images/why-choose-us/high-quality-courses.jpeg",
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from professionals who have worked in top companies, providing practical experience and insights that will set you apart.",
      image: "/images/why-choose-us/expert-instructors.jpeg",
    },
    {
      title: "Flexible Learning",
      description:
        "Access our content anytime, anywhere. With self-paced learning, you can schedule your studies whenever it’s convenient for you.",
      image: "/images/why-choose-us/flexible-learning.jpeg",
    },
    {
      title: "Industry-Recognized Certifications",
      description:
        "Earn certificates recognized by top companies globally. Our certification programs are designed to enhance your credibility and open doors to new opportunities.",
      image: "/images/why-choose-us/certification.jpeg",
    },
    {
      title: "Interactive Learning Experience",
      description:
        "Engage with hands-on projects, quizzes, and peer discussions that make learning fun and effective. Our courses provide an immersive learning experience.",
      image: "/images/why-choose-us/interactive-learning.jpeg",
    },
    {
      title: "Supportive Community",
      description:
        "Join a community of learners, share knowledge, and grow together. Our platform encourages networking and collaboration to support your learning journey.",
      image: "/images/why-choose-us/supportive-community.jpeg",
    },
  ];

  return (
    <div className="bg-darkPrimary text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative text-center mb-8 py-32 md:py-48 px-4">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Welcome to Skillwave
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4 fade-in delay-1">
            Find top-quality courses to boost your skills and advance your
            career.
          </p>
          <Button href="/courses" variant="primary">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 gap-16 max-w-7xl mx-auto px-4">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="bg-darkSecondary p-8 md:p-12 rounded-lg shadow-lg max-w-[1200px] h-auto md:h-[550px] mx-auto relative flex items-center justify-center text-center"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-75 md:opacity-60 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Companies Section */}
      <section className="mb-16 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          Top Companies Where Our Students Work
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={`/images/company-logos/${company}`}
                alt={`Company ${index + 1}`}
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-green-500 text-black">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg mb-8">
          Explore our wide range of courses and start your learning journey
          today.
        </p>
        <Button
          href="/courses"
          className="bg-black text-white hover:bg-gray-800"
          variant="secondary"
          size="medium"
        >
          Explore Courses
        </Button>
      </section>
    </div>
  );
};

export default Home;
