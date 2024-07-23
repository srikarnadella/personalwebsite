"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

const imagesList = [
  // Add more image URLs as needed
  "/images/Music/nineball.png",
  "/images/Music/BrockHampton.png",
  "/images/Music/Delilah.png",
  "/images/Music/Direstraits.png",
  "/images/Music/Misses.png",
  "/images/Music/RadioHead.png",
  "/images/Music/Wonderwall.png",
  "/images/Music/RichGirl.png",
  "/images/Music/Keem.png",
  "/images/Music/MacMiller.png",
  "/images/Music/Melophobia.png",
  "/images/Music/KidCudi.png",
  "/images/Music/tearsforfear.png",
  "/images/Music/FluorescentAdolscent.png",
  "/images/Music/Sixpence.png",
  "/images/Music/AbbeyRoad.png",
  "/images/Music/Cartman.png",
  "/images/Music/EricChurch.png",
  "/images/Music/TomPetty.png",
];

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ScrollingImageTiles = () => {
  const scrollContainerRef = useRef(null);

  // Shuffle the images list
  const shuffledImagesList = shuffleArray(imagesList);

  // Repeat the shuffled images list to create a buffer for seamless looping
  const repeatedImagesList = [
    ...shuffledImagesList,
    ...shuffledImagesList,
    ...shuffledImagesList,
    ...shuffledImagesList,
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      if (scrollLeft <= 0) {
        scrollContainerRef.current.scrollLeft = scrollWidth / 2 - clientWidth;
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        scrollContainerRef.current.scrollLeft = scrollWidth / 2 - clientWidth;
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { scrollWidth, clientWidth } = scrollContainer;
      scrollContainer.scrollLeft = scrollWidth / 4; // Start in the middle of the repeated list
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="relative py-8 px-4 font-bold text-4xl md:mb-12 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-4xl font-bold mb-4 text-center text-white">
        Music I&#39;m listening to
      </h2>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={scrollLeft}
          className="bg-gray-500 text-white p-2 rounded-full"
        >
          &lt;
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={scrollRight}
          className="bg-gray-500 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 py-8 px-16"
        style={{
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {repeatedImagesList.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-48">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingImageTiles;
