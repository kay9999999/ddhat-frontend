import { getContactData } from "@/data/loaders";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/custom/ContactForm"), {
  ssr: false,
}); // Dynamically import as a Client Component

export async function generateMetadata() {
  return {
    title: "Contact Us",
  };
}

export default async function ContactUs() {
  let data = null;
  let error = null;

  try {
    const response = await getContactData();
    data = response?.data || {};
  } catch (err) {
    console.error("Error fetching contact data:", err);
    error = "Failed to load contact details. Please try again later.";
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      <div className="w-3/4 mx-auto bg-blue-400 text-white rounded-lg shadow-lg overflow-hidden mb-10">
        <div className="relative w-full h-64 md:h-96">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 md:px-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {data.bannertitle}
            </h1>
            <p className="text-base md:text-lg text-gray-200">
              {data.bannerdescription}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mt-10 mb-16">
        {/* Contact Form */}
        <ContactForm formHeadings={data} />

        {/* Contact Info */}
        <div className="w-full md:w-1/3 p-6 md:p-8 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-10">{data.infoheading}</h2>
          <p className="mb-8">
            <span className="font-bold">
              {data.location.split(" ").slice(0, 2).join(" ")}
            </span>
            {" " + data.location.split(" ").slice(2).join(" ")}
          </p>
          <div className="mb-8">
            <span className="font-bold">
              {data.info.split(" ").slice(0, 2).join(" ")}
            </span>
            {" " + data.info.split(" ").slice(2).join(" ")}
          </div>
          <p className="mb-8">
            <span className="font-bold">
              {data.phone.split(" ").slice(0, 2).join(" ")}
            </span>
            {" " + data.phone.split(" ").slice(2).join(" ")}
          </p>
          <div className="mt-20">
            <iframe
              src={data.mapEmbedLink}
              className="w-full h-56 md:h-64 border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
