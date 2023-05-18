import React from "react";
import img1 from "../../assets/cars/car-2.jpeg";
import img2 from "../../assets/cars/car-7.jpg";
import img3 from "../../assets/cars/car-8.jpg";
import img4 from "../../assets/cars/truck-2.jpeg";
import img5 from "../../assets/cars/truck-3.jpeg";
import img6 from "../../assets/cars/truck-5.jpeg";
import img7 from "../../assets/cars/fire-truck-1.jpeg";
import img8 from "../../assets/cars/fire-truck-2.jpeg";
import img9 from "../../assets/cars/fire-truck-5.jpg";

const Gallery = () => {
  return (
    <>
      <p className="text-center text-5xl text-tdeep font-semibold mt-20 mb-10">
        Gallery
      </p>
      <div className="my-bg grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 lg:p-20">
        <img
          src={img1}
          alt="gallery image 1"
          className="rounded-lg w-full h-full shadow-md"
        />
        <img
          src={img2}
          alt="gallery image 2"
          className="rounded-lg w-full h-full shadow-md"
        />
        <img
          src={img3}
          alt="gallery image 3"
          className="rounded-lg w-full h-full shadow-md"
        />
        <img
          src={img4}
          alt="gallery image 4"
          className="rounded-lg w-full h-full shadow-md"
        />
        <img
          src={img5}
          alt="gallery image 5"
          className="rounded-lg w-full h-full shadow-md"
        />
        <img
          src={img6}
          alt="gallery image 6"
          className="rounded-lg w-full h-full shadow-md"
        />
        <img
          src={img7}
          alt="gallery image 7"
          className="rounded-lg w-full h-full shadow-md"
        />
        <img
          src={img8}
          alt="gallery image 8"
          className="rounded-lg w-full h-full shadow-md"
        />
        <img
          src={img9}
          alt="gallery image 9"
          className="rounded-lg w-full h-full shadow-md"
        />
      </div>
    </>
  );
};

export default Gallery;
