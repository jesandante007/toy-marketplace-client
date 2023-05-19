import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyRow from "../components/ToyRow";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div className="overflow-x-auto my-bg p-8">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Seller</th>
            <th>Category</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <ToyRow key={toy._id} toy={toy} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
