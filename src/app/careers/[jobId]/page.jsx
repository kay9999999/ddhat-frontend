import JobApplicationForm from "@/components/custom/JobApplicationForm";

async function getJobDetails(jobId) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/job-positions?filters[id][$eq]=${jobId}&fields[0]=info`;

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to fetch job details");

    const data = await response.json();
    const info = data?.data?.[0]?.info || [];
    return info;
  } catch (error) {
    console.error("Error fetching job details:", error);
    return [];
  }
}

export default async function JobDetailsPage({ params, searchParams }) {
  const jobTitle = searchParams.jobTitle;
  const jobDetails = await getJobDetails(params.jobId);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Job Details</h1>
      <div className="bg-white p-6 rounded shadow mb-8">
        {jobDetails.length > 0 ? (
          <div className="space-y-4">
            {jobDetails.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="text-gray-700">
                    {item.children.map((child, idx) => (
                      <span key={idx} className={child.bold ? "font-bold" : ""}>
                        {child.text}
                      </span>
                    ))}
                  </p>
                );
              }
              if (item.type === "list") {
                return (
                  <ul
                    key={index}
                    className="list-disc ml-6 text-gray-700 space-y-2"
                  >
                    {item.children.map((listItem, idx) => (
                      <li key={idx}>
                        {listItem.children.map((child, id) => child.text)}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        ) : (
          <p>No details available for this job.</p>
        )}
      </div>

      {/* Include the Job Application Form */}
      <JobApplicationForm jobId={params.jobId} jobTitle={jobTitle} />
    </div>
  );
}
