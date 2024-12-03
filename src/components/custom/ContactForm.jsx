"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function ContactForm({ formHeadings }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", number: "", email: "", message: "" });
      } else {
        toast.error("Failed to send your message. Please try again later.");
      }
    } catch (err) {
      console.error("Error in form submission:", err.message);
      toast.error("Failed to send your message. Please try again later.");
    }
  };

  return (
    <div className="w-full md:w-2/3 p-8">
      <h4 className="text-xl text-center font-semibold mb-6 pb-4">
        {formHeadings.mainheading}
        <span className="block mt-2 h-[3px] w-1/2 mx-auto bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600"></span>
      </h4>

      <h2 className="text-2xl font-semibold mb-8">
        {formHeadings.formheading}
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">{formHeadings.name}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "200px" }}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            {formHeadings.number}
          </label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            style={{ width: "200px" }}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">{formHeadings.email}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "400px" }}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            {formHeadings.message}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: "600px" }}
            className="w-full border p-2 rounded h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
