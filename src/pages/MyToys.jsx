import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import MyToyRow from "../components/MyToyRow";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle.js";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(false);
  const [activeTab, setActiveTab] = useState("asc");
  useTitle("My Toys");
  const URL = `https://toy-marketplace-server-ten.vercel.app/myToys?email=${user.email}&sort=${activeTab}`;

  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("toy-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [control, URL]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-ten.vercel.app/toyDelete/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              setControl(!control);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto my-bg p-8">
      <p className="mb-5 text-4xl text-center text-tdeep font-semibold">
        Collection of Your Toys
      </p>
      <div className="btn-group flex justify-center items-center mb-5">
        <button
          onClick={() => setActiveTab("asc")}
          className={`btn btn-ghost normal-case text-base ${
            activeTab == "asc" ? "my-btn" : "my-bg"
          }`}
        >
          Ascending
        </button>
        <button
          onClick={() => setActiveTab("dsc")}
          className={`btn btn-ghost normal-case text-base ${
            activeTab == "dsc" ? "my-btn" : "my-bg"
          }`}
        >
          Descending
        </button>
      </div>
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
            <MyToyRow
              key={toy._id}
              toy={toy}
              index={index}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
