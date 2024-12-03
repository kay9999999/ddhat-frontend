import React from "react";
import Image from "next/image";
import { getHomePageData } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";

const FeaturesSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="p-6 shadow-lg rounded-lg bg-white">
        <div className="animate-pulse">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full"></div>
          <div className="h-6 mb-2 bg-gray-300 rounded"></div>
          <div className="h-4 mb-4 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 mx-auto bg-gray-300 rounded"></div>
        </div>
      </div>
    ))}
  </div>
);

const FeaturesComponent = async () => {
  let features = [];
  let heading = "";
  let information = "";

  try {
    const data = await getHomePageData();
    const featureBlock = data.data.blocks.find(
      (block) => block.__component === "layout.features"
    );

    if (featureBlock) {
      features = featureBlock.feature || [];
      heading = featureBlock.heading || "";
      information = featureBlock.information || "";
    }
  } catch (error) {
    console.error("Error fetching features:", error);
  }

  if (features.length === 0) {
    return <FeaturesSkeleton />;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 relative">
          {heading}
        </h2>

        {/* Description */}
        <p className="text-center mb-12 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          {information}
          <span className="block mt-2 h-[3px] bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600 w-full"></span>
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 shadow-lg rounded-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 hover:text-white duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <Image
                  src={`${getStrapiURL()}${feature.icon.url}`}
                  alt={feature.title}
                  width={70}
                  height={70}
                  priority={true}
                  className="object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-center">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-center mb-4">
                {feature.description}
              </p>
              {/* Optional Link */}
              {feature.url && (
                <a
                  href={feature.url}
                  target="_self"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-500 font-medium hover:text-blue-700"
                >
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
