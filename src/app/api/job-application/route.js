import FormData from "form-data";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Extracting form data fields
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const jobPosition = formData.get("job_position");
    const jobTitle = formData.get("job_title");
    const cv = formData.get("cv");

    if (!name || !email || !phone || !jobPosition || !cv) {
      throw new Error("Missing required fields in the request.");
    }

    // File processing
    const fileBuffer = Buffer.from(await cv.arrayBuffer());
    const strapiFormData = new FormData();

    // Add data fields
    strapiFormData.append(
      "data",
      JSON.stringify({
        name,
        email,
        phone,
        job_title: jobTitle,
        job_position: jobPosition, // Relation ID
      })
    );

    // Add the file
    strapiFormData.append("files.cv", fileBuffer, cv.name);

    // POST request to Strapi
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/job-applications`,
      {
        method: "POST",
        headers: {
          ...strapiFormData.getHeaders(),
        },
        body: strapiFormData,
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Strapi response error:", result);
      throw new Error(
        result.error?.message || "Failed to submit the application."
      );
    }

    return new Response(
      JSON.stringify({ message: "Application submitted successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
