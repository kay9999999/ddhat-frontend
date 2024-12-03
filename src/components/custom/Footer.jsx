import Image from "next/image";
import Link from "next/link";
import { getStrapiURL } from "@/lib/utils";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinkIcons = {
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  gmail: <SiGmail />,
};

const Footer = ({ data }) => {
  if (!data) {
    return null; // Prevent rendering if no data is available
  }
  const { logo, text, socialLink, image } = data;
  const strapiURL = getStrapiURL();

  return (
    <footer className="text-white">
      {/* Top Blue Section with Background Image */}
      <div
        className="py-7"
        style={{
          backgroundImage: `url(${strapiURL}${image.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto flex flex-wrap justify-around items-center text-center space-y-4 md:space-y-0 md:space-x-8 text-black relative z-10">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl mb-1">&#10084;</span>
            <p className="text-lg md:text-xl font-semibold">
              Satisfactory Development
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl mb-1">&#x1F4CD;</span>
            <p className="text-lg md:text-xl font-semibold">
              Dehradun, Uttarakhand, India
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl mb-1">&#x1F4E7;</span>
            <p className="text-lg md:text-xl font-semibold">info@ddhat.com</p>
          </div>
        </div>
      </div>

      {/* Dark Footer Content Area */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto flex flex-col items-center space-y-6 text-center">
          {/* Logo and Description Text */}
          <div className="flex flex-col items-center space-y-4">
            <Link href="/">
              <Image
                src={`${strapiURL}${logo.url}`}
                alt="DDHAT Technologies Logo"
                width={140}
                height={50}
                className="h-10 w-auto transform transition-transform duration-200 hover:scale-105 hover:opacity-90"
              />
            </Link>
            <p className="text-gray-400 max-w-sm text-xs md:text-sm font-light leading-relaxed">
              {text}
            </p>
          </div>

          {/* Horizontal Divider */}
          <div className="w-1/2 h-0.5 bg-gray-600 rounded-full"></div>

          {/* Social Links */}
          <div className="flex space-x-8 mt-1 pb-2">
            {socialLink.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xl hover:text-white transition-colors duration-200"
              >
                {socialLinkIcons[link.text.toLowerCase()]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
