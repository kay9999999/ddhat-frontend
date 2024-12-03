"use client"; // Mark this component as a client component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "@/components/ui/skeleton";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  Keyboard,
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";

// SliderSkeleton: Loading skeleton for the slider
const SliderSkeleton = () => {
  return (
    <div className="w-full h-96">
      <div className="relative w-full h-full flex justify-center items-center">
        <Skeleton className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent text-white">
          <Skeleton className="w-1/2 h-8 mb-2" />
          <Skeleton className="w-3/4 h-5 mb-4" />
          <Skeleton className="w-32 h-10" />
        </div>
      </div>
    </div>
  );
};

// SliderClient: Handles the rendering of the Swiper slider
const SliderClient = ({ slides }) => {
  const isLoading = slides.length === 0;

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <SliderSkeleton />
      ) : (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          keyboard={{ enabled: true }}
          loop={true}
          effect={"fade"}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
          modules={[Keyboard, Autoplay, Navigation, Pagination, EffectFade]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative w-full">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-auto max-h-80 sm:max-h-96 md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[80vh] object-contain"
                />
              </a>

              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-t text-white z-10">
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-4">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default SliderClient;
