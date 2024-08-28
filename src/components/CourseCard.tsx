import Image from "next/image";
import Button from "@/components/Button";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  rating: number;
  instructor: string;
  imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  tags,
  price,
  rating,
  instructor,
  imageUrl,
}) => {
  return (
    <div className="bg-darkSecondary p-6 rounded-lg shadow-lg flex flex-col justify-between">
      <div>
        {/* Course Image */}
        <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={300}
            className="rounded-lg mb-4"
          />
        </div>

        {/* Course Title and Description */}
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Course Tags */}
        <div className="flex space-x-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-700 text-white text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Course Details */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-yellow-400 flex">
            {Array.from({ length: Math.round(rating) }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
            {Array.from({ length: 5 - Math.round(rating) }).map((_, i) => (
              <span key={i} className="text-gray-600">
                ⭐
              </span>
            ))}
          </div>
          <span className="text-white">({rating.toFixed(1)})</span>
        </div>
        <p className="text-gray-400 mb-2">By {instructor}</p>
        <p className="text-white font-bold text-xl mb-4">
          PKR {price.toLocaleString()}
        </p>

        {/* Learn More Button */}
        <Button href={`/courses/${id}`} size="small" variant="primary">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
