import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkSecondary text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Skillwave</h3>
            <p className="text-gray-400">
              Skillwave offers high-quality courses to help you develop the skills needed to advance your career. Join us and start your learning journey today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-green-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-green-400"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-green-400"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-green-400"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-green-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Skillwave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
