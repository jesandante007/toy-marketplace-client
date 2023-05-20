import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle.js";

const ToyDetails = () => {
  const toy = useLoaderData();
  useTitle('Toy Details')
  const {
    name,
    seller,
    category,
    price,
    availableQuantity,
    image,
    features,
    rating,
    email
  } = toy;
  return (
    <div className="hero my-bg">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="w-full max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold text-tdeep mb-1">{name}</h1>
          <p>Category: {category}</p>
          <p className="mt-5 text-2xl">Price: <span className="text-tdeep">${price}</span></p>
          <div className="flex items-center gap-5 mt-1">
            <div className="flex gap-1">
              <span>Rating:</span>{" "}
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
            <p className="px-2 my-bg text-sm text-tdeep">{rating}</p>
          </div>
          <p>Available Quantity: {availableQuantity}</p>
          <p className="mt-4 text-lg">Features:</p>
          <ul className="list-disc ml-5">
            {
                features.map((feature, index) => <li key={index}>{feature}</li>) 
            }
          </ul>
          <p className="mt-4 text-lg">Seller Info: </p>
          <ul className="list-disc ml-5">
            <li>Name: {seller}</li>
            <li>Email: {email ? email : 'Not Available'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
