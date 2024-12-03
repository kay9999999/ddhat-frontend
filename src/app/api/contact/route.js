// src/app/api/contact/route.js
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse incoming JSON data
    // console.log("Request Body:", body); // Log the request body for debugging

    const strapiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contact-submissions`;
    // console.log("Strapi URL:", strapiUrl); // Log the URL to ensure it's correct

    const response = await axios.post(strapiUrl, {
      data: body,
    });

    // console.log("Strapi Response:", response.data); // Log the response from Strapi

    return new Response(
      JSON.stringify({
        message: "Message sent successfully",
        data: response.data,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(
      "Error sending message:",
      error.response?.data || error.message
    );
    return new Response(
      JSON.stringify({
        message: "Failed to send message",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
