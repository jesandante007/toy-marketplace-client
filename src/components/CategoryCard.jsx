import React, { useContext } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const CategoryCard = ({ car }) => {
  const { _id, name, image, price, rating } = car;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleNavigate = (_id) => {
    if (!user) {
      alert("login first");
      navigate(`/toyDetails/${_id}`);
    } else {
      navigate(`/toyDetails/${_id}`);
    }
  };

  return (
    <div className="card my-bg shadow-xl justify-between">
      <figure className="p-10">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="p-10 pt-0">
        <h2 className="card-title text-tdeep mb-4">{name}</h2>
        <p>Price: ${price}</p>
        <div className="flex justify-between items-center mt-1">
          <div className="flex gap-1">
            <span>Rating:</span>{" "}
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
          </div>
          <p className="px-2 my-bg">{rating}</p>
        </div>
        <div className="card-actions mt-8">
          <button
            onClick={() => handleNavigate(_id)}
            className="btn btn-ghost my-btn text-base w-full"
          >
            View Details <FaArrowRight className="w-6 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
