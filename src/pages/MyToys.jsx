import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import MyToyRow from "../components/MyToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const URL = `http://localhost:5000/myToys?email=${user.email}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="overflow-x-auto my-bg p-8">
        <p className="mb-5 text-4xl text-center text-tdeep font-semibold">Collection of Your Toys</p>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Rating</th>
            <th>Features</th>
            <th>Image Link</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <MyToyRow key={toy._id} toy={toy} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
