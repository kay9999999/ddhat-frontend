import Image from "next/image";
import Link from "next/link";
import { getServicePageData } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import {
  FaShoppingCart,
  FaBuilding,
  FaBook,
  FaCar,
  FaGem,
  FaComments,
  FaMoneyBillWave,
  FaHeartbeat,
} from "react-icons/fa";

export async function generateMetadata() {
  return {
    title: "Services",
  };
}

export default async function ServicesPage() {
  let services = [];
  let error = null;

  const solutions = [
    {
      title: "Ecommerce",
      icon: <FaShoppingCart className="text-4xl text-blue-600" />,
    },
    {
      title: "Real Estate",
      icon: <FaBuilding className="text-4xl text-blue-600" />,
    },
    { title: "Education", icon: <FaBook className="text-4xl text-blue-600" /> },
    {
      title: "Travel & Tourism",
      icon: <FaCar className="text-4xl text-blue-600" />,
    },
    { title: "Jewelry", icon: <FaGem className="text-4xl text-blue-600" /> },
    {
      title: "Service Industry",
      icon: <FaComments className="text-4xl text-blue-600" />,
    },
    {
      title: "Finance",
      icon: <FaMoneyBillWave className="text-4xl text-blue-600" />,
    },
    {
      title: "Healthcare",
      icon: <FaHeartbeat className="text-4xl text-blue-600" />,
    },
  ];

  try {
    const response = await getServicePageData();
    services = response?.data || [];
  } catch (err) {
    console.error("Error fetching services:", err);
    error = "Failed to load services. Please try again later.";
  }

  return (
    <div className="container mx-auto px-4 py-2">
      {/* Header Section */}
      <div className="bg-blue-600 text-white p-6 md:p-12 flex flex-col md:flex-row items-center justify-center rounded-xl shadow-xl max-w-screen-xl mx-auto my-8">
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-extrabold mb-4 leading-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            We specialize in building custom websites with interactive
            applications. Our goal is to provide you with time-efficient,
            high-quality solutions. With our 99% error-free services, your
            website and applications will run smoothly and efficiently.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 w-full max-w-[500px] md:w-[40%]">
          <Image
            src="/images/services-bg.png"
            alt="Banner Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Intro Section */}
      <h1 className="text-gray-600 text-xl font-bold text-center mb-32 mt-20">
        DDHAT Technologies provides tailored IT solutions including custom
        software development, mobile and web applications, ecommerce websites,
        digital marketing solutions, and strategic IT consulting.
        <span className="block mt-2 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"></span>
      </h1>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {error ? (
          <div className="col-span-full text-center text-red-600">{error}</div>
        ) : services.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No services available at the moment.
          </div>
        ) : (
          services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-56 md:h-44 lg:h-56 md:w-44 lg:w-56 sm:w-32 sm:h-32">
                <Image
                  src={`${getStrapiURL()}${service.image.url}`}
                  alt={service.title}
                  fill
                />
              </div>
              <div className="p-6 text-center">
                <Link href={`/services/${service.slug}`}>
                  <h2 className="text-xl font-semibold mb-2 text-orange-500 hover:text-blue-500">
                    {service.title}
                  </h2>
                </Link>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Industry-Specific Solutions Section */}
      <div className="px-4 py-12 bg-white text-center">
        <div className="mb-20 mt-32">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600 transition-transform duration-500 group-hover:scale-105 group-hover:tracking-wide">
              We offer industry-specific, custom web solutions meticulously
              designed to meet your unique needs and drive success
            </span>
            <span className="block mt-2 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"></span>
          </h2>
        </div>
        {/* Solutions Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="mb-4">{solution.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {solution.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
