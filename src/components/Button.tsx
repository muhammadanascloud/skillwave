import Link from "next/link";
import { ReactNode } from "react";

// Define prop types
interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary"; 
  size?: "small" | "medium" | "large";
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className = "",
  variant = "primary",
  size = "medium",
  ...props
}) => {

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-black hover:bg-green-400"
      : variant === "secondary"
      ? "bg-black text-white hover:bg-gray-800"
      : "";


  const sizeStyles =
    size === "small"
      ? "py-2 px-4 text-sm"
      : size === "large"
      ? "py-4 px-10 text-lg"
      : "py-3 px-8 text-base";


  const hoverAnimation =
    "transition-transform duration-300 ease-in-out transform hover:scale-105";

  return (
    <Link
      href={href}
      className={`inline-block rounded-full font-bold ${variantStyles} ${sizeStyles} ${hoverAnimation} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
