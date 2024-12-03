"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function JobApplicationForm({ jobId, jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, cv: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const applicationFormData = new FormData();
      applicationFormData.append("name", formData.name);
      applicationFormData.append("email", formData.email);
      applicationFormData.append("phone", formData.phone);
      applicationFormData.append("job_position", jobId);
      applicationFormData.append("job_title", jobTitle);

      if (formData.cv) {
        applicationFormData.append("cv", formData.cv);
      }

      const response = await fetch("/api/job-application", {
        method: "POST",
        body: applicationFormData,
      });

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setFormData({ name: "", email: "", phone: "", cv: null });
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        toast.error("Failed to submit the application. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("An error occurred while submitting the application.");
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
          className="w-full border p-2 rounded"
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
          className="w-full border p-2 rounded"
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
          className="w-full border p-2 rounded"
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
