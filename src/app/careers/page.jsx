import React from "react";
import { getJobPositionsData, getCareerData } from "@/data/loaders";
import { getStrapiURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Career Opportunities",
  };
}

export default async function CareersPage() {
  let careerData = {};
  let jobPositions = [];
  let bannerImage = null;
  let description1 = "";
  let description2 = "";
  let noJobMessage = "Currently, no job openings are available.";

  try {
    // Fetch Career Data
    const careerResponse = await getCareerData();
    const jobPositionsResponse = await getJobPositionsData();

    // Extract Career Data
    careerData = careerResponse.data || {};
    bannerImage = `${getStrapiURL()}${careerData.bannerimg?.url}` || null;
    description1 = careerData.description1 || "";
    description2 = careerData.description2 || "";
    noJobMessage = careerData.information || noJobMessage;

    // Extract Job Positions and filter active jobs
    jobPositions = jobPositionsResponse.data || [];

    jobPositions = jobPositions.filter((job) => {
      return job.visible === true || job.visible === "true";
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      {/* Banner Section */}
      {bannerImage && (
        <div className="w-11/12 md:w-3/4 mx-auto rounded-lg shadow-md overflow-hidden mb-6 md:mb-8">
          <div className="relative w-full h-48 sm:h-60 md:h-72">
            <Image
              src={bannerImage}
              alt="Banner Image"
              priority={true}
              fill={true}
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
      {/* Descriptions Section */}
      <div className="text-center mx-auto mb-16 px-4 max-w-4xl">
        {description1 && (
          <p className="text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
            {description1}
          </p>
        )}
        {description2 && (
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            {description2}
          </p>
        )}
      </div>

      {/* Job Listings Section */}
      <div>
        {jobPositions.length > 0 ? (
          <div className="space-y-8">
            {jobPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform mb-10"
              >
                {/* Job Title */}
                <p className="text-2xl font-semibold text-blue-800 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {job.heading1}
                  </span>{" "}
                  {job.jobtitle}
                </p>

                {/* No. of Positions */}
                <p className="text-lg font-bold text-gray-900 mb-4">
                  <span className="text-gray-800">{job.heading2}</span>{" "}
                  {job.noofpositions}
                </p>

                {/* Job Description */}
                <div className="border-t border-gray-300 pt-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {job.heading3}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {job.jobdescription}
                  </p>
                </div>

                {/* Apply Button */}
                <div className="mt-6 text-right">
                  <Link
                    href={{
                      pathname: `/careers/${job.id}`,
                      query: { jobTitle: job.jobtitle }, // Pass job title dynamically
                    }}
                  >
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-xl">{noJobMessage}</p>
        )}
      </div>
    </div>
  );
}
