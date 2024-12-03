import React from "react";
import Link from "next/link";

const CTAComponent = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Ready to Take Your Business to the Next Level ?
        </h2>
        {/* Description */}
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Our team of professionals is here to help you with cutting-edge modern
          development services. Let’s build something amazing together !
        </p>
        {/* CTA Button */}
        <Link
          href="/contact-us"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTAComponent;
