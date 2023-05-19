import React from "react";

const GalleryImg = ({img, title}) => {
  return (
    <div className="relative transition duration-200 transform hover:-translate-y-2">
      <img
        src={img}
        alt="gallery image 1"
        className="rounded-lg w-full h-full shadow-md"
      />
      <div className="bg-black rounded-lg bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex justify-center items-center">
        <p className="text-4xl">{title}</p>
      </div>
    </div>
  );
};

export default GalleryImg;
