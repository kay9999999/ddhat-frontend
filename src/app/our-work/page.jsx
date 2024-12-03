import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { getWorkPageData } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";

export async function generateMetadata() {
  return {
    title: "Our Work",
  };
}

export default async function ProjectsPage() {
  let data = [];
  let error = null;

  try {
    const response = await getWorkPageData();
    data = response?.data || [];
  } catch (err) {
    console.error("Error fetching work:", err);
    error = "Failed to load projects. Please try again later.";
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="mb-14 relative flex flex-col items-center bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600 text-white py-9 px-6 rounded-lg shadow-lg overflow-hidden">
        <div className="z-10 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Our Work
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-6 drop-shadow-lg">
            We have delivered fully functional and beautiful digital solutions
            throughout our journey
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
        {error ? (
          <div className="col-span-full text-center text-lg text-red-600">
            {error}
          </div>
        ) : data.length === 0 ? (
          // Show Skeletons if no data is available
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <Skeleton className="w-full h-48 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))
        ) : (
          // Show actual projects
          data.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded-lg shadow-lg transition hover:shadow-2xl"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                <Image
                  src={`${getStrapiURL()}${project.image.url}`}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-2.5 bg-blue-600 text-white rounded-md text-base font-bold transition duration-300 ease-in-out hover:bg-blue-700"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
