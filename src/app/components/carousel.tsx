// components/Carousel.js
"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/about/undraw_data_points_re_vkpq.svg",
    "/about/undraw_business_plan_re_0v81.svg",
    "/about/undraw_all_the_data_re_hh4w.svg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={src}
              alt={`Carousel Image ${index + 1}`}
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 z-10 p-2 bg-gray-600 text-white rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 z-10 p-2 bg-gray-600 text-white rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
