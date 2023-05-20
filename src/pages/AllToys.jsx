import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyRow from "../components/ToyRow";
import { FaSearch } from "react-icons/fa";
import useTitle from "../hooks/useTitlejs";

const AllToys = () => {
  const data = useLoaderData();
  const [toys, setToys] = useState(data);
  useTitle('All Toys')

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    const URL = `https://toy-marketplace-server-ten.vercel.app/toySearch?text=${text}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <div className="overflow-x-auto my-bg p-8">
      <form onSubmit={handleSubmit}>
        <div className="lg:w-1/3 mx-auto mb-10 input-group">
          <input
            type="text"
            name="text"
            placeholder="Search by Name"
            className="w-full h-14 rounded-xl shadow px-5"
          />
          <button type="submit" className="btn btn-ghost my-btn h-14 text-2xl">
            <FaSearch />
          </button>
        </div>
      </form>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Seller</th>
            <th>Category</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Details Info</th>
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
