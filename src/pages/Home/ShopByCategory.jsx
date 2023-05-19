import React, { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";

const ShopByCategory = () => {
  const [category, setCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports Car");

  useEffect(() => {
    fetch(`https://toy-marketplace-server-ten.vercel.app/toys/${activeTab}`)
      .then(res => res.json())
      .then(data => setCategory(data))
  }, [activeTab])
  return (
    <>
      <p className="text-center text-5xl text-tdeep font-semibold mt-20 mb-10">
        Shop By Category
      </p>
      <div className="my-bg p-5 lg:p-10">
        <div className="flex justify-center">
          <div className="btn-group">
            <button
              onClick={() => setActiveTab("Sports Car")}
              className={`btn btn-ghost normal-case text-xl ${
                activeTab == "Sports Car" ? "my-btn" : ""
              }`}
            >
              Sports Car
            </button>
            <button
              onClick={() => setActiveTab("Truck")}
              className={`btn btn-ghost normal-case text-xl ${
                activeTab == "Truck" ? "my-btn" : ""
              }`}
            >
              Truck
            </button>
            <button
              onClick={() => setActiveTab("Fire Truck")}
              className={`btn btn-ghost normal-case text-xl ${
                activeTab == "Fire Truck" ? "my-btn" : ""
              }`}
            >
              Fire Truck
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
              {
                category.map(car => <CategoryCard key={car._id} car={car} />)
              }
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
