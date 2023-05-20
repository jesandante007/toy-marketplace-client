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
import GalleryImg from "../../components/GalleryImg";

const Gallery = () => {
  return (
    <>
      <p className="text-center text-4xl lg:text-5xl text-tdeep font-semibold mt-20 mb-10">
        Gallery
      </p>
      <div className="my-bg grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 lg:p-20">
        <GalleryImg img={img1} title={'Sports Car'} />
        <GalleryImg img={img2} title={'Sports Car'} />
        <GalleryImg img={img3} title={'Sports Car'} />
        <GalleryImg img={img4} title={'Truck'} />
        <GalleryImg img={img5} title={'Heavy Truck'} />
        <GalleryImg img={img6} title={'Heavy Truck'} />
        <GalleryImg img={img7} title={'Fire Truck'} />
        <GalleryImg img={img8} title={'Fire Truck'} />
        <GalleryImg img={img9} title={'Fire Truck'} />
      </div>
    </>
  );
};

export default Gallery;
