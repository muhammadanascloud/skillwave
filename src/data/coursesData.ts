// src/coursesData.ts

interface Course {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    rating: number;
    instructor: string;
  }
  
  const coursesData: Course[] = [
    {
      id: 'java-dsa-domination',
      title: 'Java & DSA Domination',
      description:
        'Ace your coding interviews! Master Java and DSA with our expert-led course, packed with interactive lessons and practice.',
      tags: ['Programming', 'Logic Building'],
      price: 4500, // Price in PKR
      rating: 4.5,
      instructor: 'Ahmed Raza', // Updated Pakistani instructor
    },
    {
      id: 'backend-domination',
      title: 'Back-End Domination: Create Efficient Back-End',
      description:
        'Learn to build powerful back-ends that drive websites and apps smoothly. From databases to APIs.',
      tags: ['Web Development', 'Logic Building', 'Designing'],
      price: 4999, // Price in PKR
      rating: 5.0,
      instructor: 'Bilal Khan', // Updated Pakistani instructor
    },
    {
      id: 'frontend-domination',
      title: 'Front-End Domination: Create Anything with Code',
      description:
        'Nail HTML, CSS, JS, and solve real-world problems with fun projects and interactive lessons.',
      tags: ['Web Development', 'Animations', 'Designing'],
      price: 4000, // Price in PKR
      rating: 4.7,
      instructor: 'Hassan Ali', // Updated Pakistani instructor
    },

    {
      id: 'ai-machine-learning',
      title: 'AI & Machine Learning Fundamentals',
      description:
        'Dive into the world of AI with this course, covering everything from algorithms to neural networks with hands-on projects.',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Python'],
      price: 6000, // Price in PKR
      rating: 4.8,
      instructor: 'Sara Ahmed',
    },
    {
      id: 'cybersecurity-essentials',
      title: 'Cybersecurity Essentials: Protect Your Data',
      description:
        'Learn the fundamentals of cybersecurity, including risk assessment, network security, and best practices to protect systems.',
      tags: ['Cybersecurity', 'Network Security', 'Ethical Hacking'],
      price: 5500, // Price in PKR
      rating: 4.9,
      instructor: 'Rizwan Khan',
    },
    {
      id: 'cloud-computing-aws',
      title: 'Cloud Computing with AWS: Master the Cloud',
      description:
        'Understand the core concepts of cloud computing and learn how to deploy scalable applications on AWS.',
      tags: ['Cloud Computing', 'AWS', 'DevOps'],
      price: 7000, // Price in PKR
      rating: 5.0,
      instructor: 'Nida Farooq',
    },
  ];
  
  export default coursesData;
  