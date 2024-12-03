"use client";
import { useState, useEffect } from "react";
import { getStrapiURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MdDesignServices, MdManageAccounts } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BiSolidMegaphone } from "react-icons/bi";

import {
  FaBars,
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaShoppingCart,
  FaHeadset,
  FaPhp,
} from "react-icons/fa";

const Header = ({ data }) => {
  if (!data) {
    return null;
  }

  const { logo, about, services, work, career, blog, ctaButton } = data;
  const strapiURL = getStrapiURL();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setIsDropdownOpen(false), 500);
    setDropdownTimer(timer);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1028) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-3 ">
        {/* Logo */}
        <div className="flex-shrink-0 ml-4 ">
          <Link href="/">
            <Image
              src={`${strapiURL}${logo?.formats?.thumbnail?.url}`}
              alt="DDHAT Technologies Pvt Ltd."
              width={200}
              height={110}
              priority={true}
              className="h-[110px] w-[200px] transition-transform transform "
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8 items-center justify-center flex-1">
          <Link
            href={about.url}
            className="text-xl text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
          >
            {about.text}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services">
              <button className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-200">
                {services.text}
              </button>
            </Link>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-[850px] bg-white border border-gray-200 shadow-lg rounded-lg z-10 p-4">
                <div className="grid grid-cols-3 gap-10">
                  <Link
                    href="/services/website-development"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <FaLaptopCode className="w-8 h-8 text-blue-500 flex-shrink-0" />
                    <span className="whitespace-nowrap">
                      Website Development
                    </span>
                  </Link>

                  <Link
                    href="/services/mobile-application-development"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <FaMobileAlt className="w-8 h-8 text-green-500 flex-shrink-0" />
                    <span className="whitespace-nowrap">
                      Mobile Application Development
                    </span>
                  </Link>

                  <Link
                    href="/services/database-systems"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <FaDatabase className="w-8 h-8 text-red-500 flex-shrink-0" />
                    <span className="whitespace-nowrap">Database Systems</span>
                  </Link>

                  <Link
                    href="/services/ecommerce-development"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <FaShoppingCart className="w-8 h-8 text-orange-500 flex-shrink-0" />
                    <span className="whitespace-nowrap">E-commerce</span>
                  </Link>

                  <Link
                    href="/services/website-designing"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <MdDesignServices className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                    <span className="whitespace-nowrap">Website Designing</span>
                  </Link>

                  <Link
                    href="/services/php-development"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <FaPhp className="w-8 h-8 text-blue-700 flex-shrink-0" />
                    <span className="whitespace-nowrap">PHP Development</span>
                  </Link>

                  <Link
                    href="/services/web-application-development"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <CgWebsite className="w-8 h-8 text-teal-500 flex-shrink-0" />
                    <span className="whitespace-nowrap">
                      Web Application Development
                    </span>
                  </Link>

                  <Link
                    href="/services/content-management-system"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <MdManageAccounts className="w-8 h-8 text-gray-700 flex-shrink-0" />
                    <span className="whitespace-nowrap">CMS</span>
                  </Link>

                  <Link
                    href="/services/digital-marketing"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <BiSolidMegaphone className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <span className="whitespace-nowrap">Digital Marketing</span>
                  </Link>

                  <Link
                    href="/services/ongoing-development-support"
                    className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition duration-200"
                  >
                    <FaHeadset className="w-8 h-8 text-gray-600 flex-shrink-0" />
                    <span className="whitespace-nowrap">
                      Ongoing Development & Support
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href={work.url}
            className="text-xl text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
          >
            {work.text}
          </Link>
          <Link
            href={career.url}
            className="text-xl text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
          >
            {career.text}
          </Link>
          <Link
            href={blog.url}
            className="text-xl text-gray-800 hover:text-blue-600 font-semibold transition duration-200"
          >
            {blog.text}
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link
            href={ctaButton.url}
            className="text-white bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            {ctaButton.text}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {windowWidth <= 1028 && (
          <button
            className="lg:hidden text-gray-800 mr-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FaBars className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white shadow-lg">
          <ul className="p-4 space-y-3">
            <li>
              <Link
                href={about.url}
                className="text-gray-800 hover:text-blue-600 font-semibold transition duration-200 w-full"
              >
                {about.text}
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="w-full text-left  hover:text-blue-600 text-gray-800 font-semibold transition duration-200"
              >
                {services.text}
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 space-y-2 mt-2">
                  <li>
                    <Link
                      href="/services/website-development"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <FaLaptopCode className="w-8 h-8 text-blue-500" />
                      <span>Website Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/mobile-application-development"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <FaMobileAlt className="w-8 h-8 text-green-500" />
                      <span>Mobile Application Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/database-systems"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <FaDatabase className="w-8 h-8 text-red-500" />
                      <span>Database Systems</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/ecommerce-development"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <FaShoppingCart className="w-8 h-8 text-orange-500" />
                      <span> E-commerce</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/website-designing"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <MdDesignServices className="w-8 h-8 text-yellow-600" />
                      <span> Website Designing </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/php-development"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <FaPhp className="w-8 h-8 text-blue-700" />
                      <span> Php Development </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/web-application-development"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <CgWebsite className="w-8 h-8 text-teal-500" />
                      <span> Web Application Development </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/content-management-system"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <MdManageAccounts className="w-8 h-8 text-gray-700" />
                      <span> CMS </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/digital-marketing"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <BiSolidMegaphone className="w-8 h-8 text-red-600" />
                      <span> Digital Marketing </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/ongoing-development-support"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-200"
                    >
                      <FaHeadset className="w-8 h-8 text-gray-600" />
                      <span> Ongoing Development & Support</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href={work.url}
                className="text-gray-800 hover:text-blue-600 font-semibold transition duration-200 w-full"
              >
                {work.text}
              </Link>
            </li>
            <li>
              <Link
                href={career.url}
                className="text-gray-800 hover:text-blue-600 font-semibold transition duration-200 w-full"
              >
                {career.text}
              </Link>
            </li>
            <li>
              <Link
                href={blog.url}
                className="text-gray-800 hover:text-blue-600 font-semibold transition duration-200 w-full"
              >
                {blog.text}
              </Link>
            </li>
            <li>
              <Link
                href={ctaButton.url}
                className="bg-blue-500 text-white px-5 py-2 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-full text-center mt-2"
              >
                {ctaButton.text}
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <span className="block h-[3px] bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600 w-full"></span>
    </header>
  );
};

export { Header };
