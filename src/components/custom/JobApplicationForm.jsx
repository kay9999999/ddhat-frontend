"use client";

import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function JobApplicationForm({ jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [file, setFile] = useState(null);

  // Handle form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Submit form data to Strapi
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      toast("Submitting application...", {
        style: { backgroundColor: "#f0ad4e", color: "white" }, // Optional styling for notification
      });

      // Step 1: Upload the file to Strapi
      const fileUploadData = new FormData();
      fileUploadData.append("files", file);

      const uploadRes = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/upload`, // Strapi upload endpoint
        fileUploadData
      );

      // Step 2: Get uploaded file ID
      const uploadedFileId = uploadRes.data[0].id;

      // Step 3: Send form data to Strapi
      const applicationData = {
        data: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          cv: uploadedFileId,
          job_title: jobTitle,
        },
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/job-applications`,
        applicationData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response:", response.data);

      toast.success("Application submitted successfully!");

      // Reset form
      setFormData({ name: "", phone: "", email: "" });
      setFile(null);
    } catch (error) {
      console.error(
        "Error submitting application:",
        error.response?.data || error
      );

      toast.error("Failed to submit application. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-100 p-6 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Apply for this Job</h2>

      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-1/3 border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-1/3 border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-1/3 border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Upload CV</label>
        <input
          type="file"
          name="cv"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          required
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Application
      </button>
    </form>
  );
}
