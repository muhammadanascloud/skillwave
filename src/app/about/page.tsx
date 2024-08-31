import Image from "next/image";
import Button from "@/components/Button";

const About = () => {
  const reviews = [
    {
      name: "Arvind Dravid",
      image: "/images/reviews/1.jpeg",
      text: "Skillwave is the best learning platform I’ve ever used! The instructors are very knowledgeable and helpful. The content is well-organized, and the learning experience is very engaging. I felt supported every step of the way.",
    },
    {
      name: "Shahrukh Ali",
      image: "/images/reviews/2.jpeg",
      text: "The instructors are very knowledgeable and provide great guidance throughout the course. I especially appreciated the real-world examples and hands-on projects that made learning more practical and effective.",
    },
    {
      name: "Salman Ahmed",
      image: "/images/reviews/3.jpeg",
      text: "I improved my skills and landed a great job after completing the course. Highly recommend it! The courses are detailed, and the projects helped me build a strong portfolio. I’m grateful for the valuable insights I gained.",
    },
    {
      name: "Theresa Webb",
      image: "/images/reviews/4.jpeg",
      text: "The course content is very detailed and easy to understand, with real-world examples. The instructors were always available to clarify doubts, making the entire learning process smooth and enjoyable.",
    },
    {
      name: "Scarlett Johnson",
      image: "/images/reviews/5.jpeg",
      text: "I love the hands-on projects and real-world examples provided in each module. The platform is user-friendly, and the community support is fantastic. I’ve gained so much practical knowledge.",
    },
    {
      name: "Alice Johnson",
      image: "/images/reviews/6.jpeg",
      text: "The flexibility of learning at my own pace is amazing! The platform is user-friendly, and the course materials are top-notch. The projects are challenging yet rewarding, helping me solidify my understanding.",
    },
    {
      name: "Michael Smith",
      image: "/images/reviews/7.jpeg",
      text: "The community is so supportive and encouraging. I’ve made meaningful connections here. The instructors are patient and skilled, and the course content is very relevant to current industry demands.",
    },
    {
      name: "Sarah Wilson",
      image: "/images/reviews/8.jpeg",
      text: "The courses are well structured, and the instructors are always ready to help. Highly satisfied with the learning experience. The materials provided are very comprehensive and have helped me a lot in my career.",
    },
    {
      name: "David Lee",
      image: "/images/reviews/9.jpeg",
      text: "I gained a lot of practical knowledge that I could apply to my job immediately. The courses are detailed and cover a wide range of topics that are crucial for professional growth.",
    },
    {
      name: "Emma Watson",
      image: "/images/reviews/10.jpeg",
      text: "The platform is intuitive, and the content is rich with information. I love the hands-on approach and the detailed feedback from instructors. It has really helped me improve my skills.",
    },
  ];

  return (
    <div className="bg-darkPrimary text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center mb-4 py-20 md:py-32 lg:py-36 px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Us
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            We are dedicated to providing quality education to enhance your
            skills.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <div className="container mx-auto py-12 md:py-16 px-4">
        <div className="bg-darkSecondary p-6 md:p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Who We Are
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We are a group of passionate educators and industry
                professionals committed to delivering high-quality educational
                content to learners all over the world. Our focus is on creating
                engaging and immersive learning experiences.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/who-we-are.jpg"
                  alt="Who We Are"
                  width={500}
                  height={350}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto py-12 md:py-16 px-4">
        <div className="bg-darkSecondary p-6 md:p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 order-2 md:order-1">
              <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/our-mission.jpg"
                  alt="Our Mission"
                  width={500}
                  height={350}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Our mission is to empower individuals through accessible,
                high-quality education, enabling them to achieve their full
                potential and contribute positively to society. We strive to
                provide courses that are not only informative but also engaging
                and practical.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Reviews Section */}
      <section className="text-center py-12 md:py-10 mb-12 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          What Our Students Say
        </h2>
        <div className="relative overflow-visible">
          <div className="animate-scroll flex gap-8 relative">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-darkSecondary p-8 md:p-10 rounded-xl shadow-lg w-72 md:w-80 flex-shrink-0 flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:z-50 relative"
                style={{ overflow: "visible" }}
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {review.name}
                </h3>
                <p className="text-gray-300">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-primary to-green-500 py-12 md:py-16 text-center">
        <h2 className="text-black font-bold text-3xl md:text-4xl mb-4">
          Join Us on Our Journey
        </h2>
        <p className="text-black text-base md:text-lg mb-8">
          Start your learning journey with us and be part of a community
          committed to growth and success.
        </p>
        <Button
          href="/contact"
          variant="secondary"
          size="large"
          className="hover:bg-gray-800"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default About;
