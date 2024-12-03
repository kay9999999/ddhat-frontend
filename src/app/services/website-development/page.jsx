import Image from "next/image";
import { getWebDevData } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import { MdPlayArrow } from "react-icons/md";

// Function to dynamically generate metadata
export async function generateMetadata() {
  try {
    const responseData = await getWebDevData();
    const data = responseData.data;

    return {
      title: data.title, // Use the title from your API data
    };
  } catch (err) {
    console.error("Error generating metadata:", err);
    return {
      title: "Website Development", // Fallback title
    };
  }
}

export default async function WebDevPage() {
  let data = null;
  let error = null;

  try {
    const responseData = await getWebDevData();
    data = responseData.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    error = "Failed to load data. Please try again later.";
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">{error}</p>;
  }

  return (
    <div className="text-gray-900">
      {/* Banner Section */}
      <div className="w-3/4 mx-auto rounded-lg shadow-lg overflow-hidden mb-10">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={`${getStrapiURL()}${data.bannerimg.url}`}
            alt="Banner Image"
            priority={true}
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 md:px-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {data.title}
            </h1>
            <p className="text-base md:text-lg text-gray-200">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Section Heading, Image, and Description */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-center lg:text-4xl md:text-3xl font-bold text-gray-800 mb-8">
          {data.sectionheading}
          <span className="block mt-2 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 bg-gray-50 rounded-lg shadow-lg p-8">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={`${getStrapiURL()}${data.sectionimg.url}`}
              alt="Section Image"
              width={450}
              height={250}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col space-y-4">
            {data.sectionpoints.map((point) => (
              <div key={point.id} className="flex items-start">
                <MdPlayArrow
                  className="text-orange-500 mr-2 flex-shrink-0"
                  size={25}
                />
                <p className="lg:text-base md:text-sm sm:text-sm">
                  {point.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heading 1 */}
      <section className="py-8 px-6">
        <h2 className="lg:text-4xl md:text-2xl text-center font-semibold mb-4">
          {data.heading1}
          <span className="block mt-2 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"></span>
        </h2>
        <p className="text-base text-gray-600 text-center mb-12">
          {data.subhead1}
        </p>
        <h3 className="text-xl font-semibold mb-8">{data.subsubhead1}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.points.map((point) => (
            <div
              key={point.id}
              className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:scale-105"
            >
              <p>{point.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Card Section */}
      <section className="py-8 px-6 text-center">
        <h2 className="lg:text-4xl md:text-3xl font-semibold mb-14">
          {data.cardheading}
          <span className="block mt-2 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"></span>
        </h2>
        <p className="text-base mb-6 text-gray-600 text-center">
          {data.cardsubheading}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {data.card.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition duration-300"
            >
              <Image
                src={`${getStrapiURL()}${card.icon.url}`}
                alt={card.title}
                width={60}
                height={60}
                className="mb-4"
              />
              <h4 className="text-xl font-semibold text-orange-500 mb-2">
                {card.title}
              </h4>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
