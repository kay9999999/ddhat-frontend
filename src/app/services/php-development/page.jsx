import Image from "next/image";
import { getPhpData } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import { MdPlayArrow } from "react-icons/md";

export async function generateMetadata() {
  try {
    const responseData = await getPhpData();
    const data = responseData?.data;

    return {
      title: data.title, // Use the title from your API data
    };
  } catch (err) {
    console.error("Error generating metadata:", err);
    return {
      title: "Php Development", // Fallback title
    };
  }
}

export default async function PhpPage() {
  let data = null;
  let error = null;

  try {
    const responseData = await getPhpData();
    data = responseData?.data;
  } catch (err) {
    error = "Failed to load data. Please try again later.";
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">{error}</p>;
  }

  if (!data) {
    return <p className="text-center text-lg">Loading...</p>;
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

      {/* Section with Image */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="lg:text-4xl md:text-3xl font-semibold text-center mb-8">
          {data.sectionheading}
          <span className="block mt-2 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 bg-gray-50 rounded-lg shadow-lg p-8">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={`${getStrapiURL()}${data.sectionimg.url}`}
              alt="Section Image"
              width={450}
              height={300}
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

      {/* Points Section */}
      <section className="py-8 px-6 text-center mt-18">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          {data.mainheading}
          <span className="block mt-2 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 mb-10">
          {data.mainpoints.map((point) => (
            <div
              key={point.id}
              className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:scale-105"
            >
              <p>{point.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section with Image */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="lg:text-4xl md:text-3xl font-semibold text-center mb-8">
          {data.heading1}
          <span className="block mt-2 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 bg-gray-50 rounded-lg shadow-lg p-8">
          <div className="md:w-1/2 flex flex-col space-y-4">
            {data.points1.map((point) => (
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
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={`${getStrapiURL()}${data.image1.url}`}
              alt="Section Image"
              width={450}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
