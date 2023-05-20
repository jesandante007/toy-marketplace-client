import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import img from "../assets/images/addToy.png";
import { toast } from "react-hot-toast";
import useTitle from "../hooks/useTitlejs";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle('Add Toy')

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller = user.displayName ? user.displayName : form.seller.value;
    const email = user.email;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const image = form.image.value;
    const features = form.features.value.split(".");

    const toyInfo = {
      seller,
      email,
      name,
      category,
      price,
      rating,
      availableQuantity,
      image,
      features,
    };

    fetch("https://toy-marketplace-server-ten.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId) {
          toast.success('Successfully added!')
        }
      });
  };

  return (
    <div className="my-bg grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center">
      <div>
        <img src={img} className="rounded-xl" />
      </div>
      <form
        onSubmit={handleAddToy}
        className="p-10 lg:p-24 rounded-xl space-y-6"
      >
        <p className="text-center mb-10 text-4xl font-semibold text-tdeep">
          Add New Toy
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="text-lg">Seller Name</label>
            <input
              className="px-5 h-14 rounded-xl w-full mt-1"
              type="text"
              name="seller"
              defaultValue={user?.displayName}
              placeholder="Name"
            />
          </div>
          <div className="w-full">
            <label className="text-lg">Seller Email</label>
            <input
              className="px-3 h-14 rounded-xl w-full mt-1"
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="text-lg">Toy Name</label>
            <input
              className="px-5 h-14 rounded-xl w-full mt-1"
              type="text"
              name="name"
              placeholder="Sports Car F1"
            />
          </div>
          <div className="w-full">
            <label className="text-lg">Category</label>
            <select
              className="select w-full px-5 h-14 rounded-xl mt-1"
              name="category"
            >
              <option>Sports Car</option>
              <option>Truck</option>
              <option>Fire Truck</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="text-lg">Price</label>
            <input
              className="px-5 h-14 rounded-xl w-full mt-1"
              type="number"
              name="price"
              placeholder="$20.00"
            />
          </div>
          <div className="w-full">
            <label className="text-lg">Rating</label>
            <input
              className="px-3 h-14 rounded-xl w-full mt-1"
              type="text"
              name="rating"
              placeholder="4.5"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="text-lg">Available Quantity</label>
            <input
              className="px-5 h-14 rounded-xl w-full mt-1"
              type="number"
              name="availableQuantity"
              placeholder="10"
            />
          </div>
          <div className="w-full">
            <label className="text-lg">Photo Url</label>
            <input
              className="px-3 h-14 rounded-xl w-full"
              type="url"
              name="image"
              placeholder="www.example.com/photo.jpg"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-lg">Features</label>
          <textarea
            className="px-5 h-20 rounded-xl w-full mt-1 resize-none shadow"
            type="number"
            name="features"
            placeholder="Features Details"
          />
        </div>
        <input
          className="h-14 w-full my-btn text-xl rounded-xl"
          type="submit"
          value="Add Toy"
        />
      </form>
    </div>
  );
};

export default AddToy;
