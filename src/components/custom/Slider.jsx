import React from "react";
import { getStrapiURL } from "@/lib/utils";
import { getHomePageData } from "@/data/loaders";
import SliderClient from "./SliderClient";

const Slider = async () => {
  const data = await getHomePageData();

  let slides = [];

  if (data && data.data && data.data.blocks) {
    const sliderBlocks = data.data.blocks.filter(
      (block) => block.__component === "layout.slider"
    );

    slides = sliderBlocks.map((slide) => ({
      title: slide.title,
      description: slide.description,
      imageUrl: `${getStrapiURL()}${slide.image[0]?.url}`,
      link: slide.link?.url || "",
    }));
  }

  // Pass the data to the client component
  return <SliderClient slides={slides} />;
};

export default Slider;
