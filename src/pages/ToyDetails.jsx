import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    name,
    seller,
    category,
    price,
    availableQuantity,
    image,
    features,
    rating,
  } = toy;
  return (
    <div className="hero my-bg">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="w-full max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold text-tdeep">{name}</h1>
          <p className="mt-5 text-2xl">Price: ${price}</p>
          <div className="flex items-center gap-5 mt-1">
            <div className="flex gap-1">
              <span>Rating:</span>{" "}
              <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
            </div>
            <p className="px-2 my-bg">{rating}</p>
          </div>
          <p className="mt-3">Features:</p>
          <ul className="list-disc ml-5">
            {
                features.map((feature, index) => <li key={index}>{feature}</li>) 
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
