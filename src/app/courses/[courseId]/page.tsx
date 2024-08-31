"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import coursesData from "@/data/coursesData";
import Button from "@/components/Button";

const courseImageMap: { [key: string]: string } = {
  "java-dsa-domination": "/images/courses/java-dsa-domination.jpeg",
  "backend-domination": "/images/courses/backend-domination.jpeg",
  "frontend-domination": "/images/courses/frontend-domination.jpeg",
  "ai-machine-learning": "/images/courses/ai-machine-learning.jpeg",
  "cybersecurity-essentials": "/images/courses/cybersecurity-essentials.jpeg",
  "cloud-computing-aws": "/images/courses/cloud-computing-aws.jpeg",
};

const instructorImageMap: { [key: string]: string } = {
  "Ahmed Raza": "/images/instructors/ahmed-raza.jpg",
  "Bilal Khan": "/images/instructors/bilal-khan.jpeg",
  "Hassan Ali": "/images/instructors/hassan-ali.jpeg",
  "Sara Ahmed": "/images/instructors/sara-ahmed.jpeg",
  "Rizwan Khan": "/images/instructors/rizwan-khan.jpeg",
  "Nida Farooq": "/images/instructors/nida-farooq.jpeg",
};

const CourseDetailsPage = () => {
  const { courseId } = useParams();

  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-darkPrimary text-white pt-12 lg:pt-16">
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col lg:flex-row-reverse lg:items-start gap-12">
          <div className="lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full">
              <Image
                src={courseImageMap[course.id]}
                alt={course.title}
                width={800}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          <div className="lg:w-3/5">
            <h1 className="text-5xl font-bold text-primary mb-6">
              {course.title}
            </h1>
            <p className="text-lg text-gray-300 mb-10">{course.description}</p>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Syllabus
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Introduction to {course.title}</li>
                <li>Core Concepts and Techniques</li>
                <li>Advanced Topics and Practices</li>
                <li>Project-Based Learning</li>
              </ul>
            </div>

            {/* Key Topics Covered */}
            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Key Topics Covered
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {course.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            {/* Course Duration and Prerequisites */}
            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Course Duration & Prerequisites
              </h2>
              <p className="text-gray-300">Duration: 12 weeks (Part-time)</p>
              <p className="text-gray-300">
                Prerequisites: Basic understanding of Programming, Logic
                Building
              </p>
            </div>

            {/* Instructor Section */}
            <div className="mb-12 flex items-center">
              <div className="flex-shrink-0 rounded-full border-4 border-primary overflow-hidden w-24 h-24">
                <Image
                  src={instructorImageMap[course.instructor]}
                  alt={course.instructor}
                  width={96}
                  height={96}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-semibold text-primary">
                  {course.instructor}
                </h2>
                <p className="text-gray-300">
                  Our expert instructor with over 10 years of industry
                  experience.
                </p>
              </div>
            </div>

            <div className="text-2xl font-bold text-white mb-6">
              Price: PKR {course.price.toLocaleString()}
            </div>

            <Button href={`/courses/${course.id}`}>Enroll Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
