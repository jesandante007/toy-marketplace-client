import React, { useContext, useState } from "react";
import img from "../assets/images/image.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name == "" || email == "" || password == "") {
      setError("name, email, password can't be empty");
      return;
    }

    if (password.length < 6) {
      setError("password must contain minimum 6 character");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
      setError("password must contain at least one upper case & one digit");
      return;
    }

    createUser(email, password)
      .then(() => {
        form.reset();
        // toast.success("Register Successfully");
        setError("");
        navigate("/");
        updateUserData(name, photo);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-center my-16">
      <div>
        <img src={img} />
      </div>
      <div className="bg-gradient-to-br from-bdeep to-blight backdrop-blur-2xl p-12 rounded-xl space-y-5">
        <p className="text-4xl text-tdeep font-medium pt-16">
          Create New Account
        </p>
        <form onSubmit={handleCreateUser} className="pt-10 space-y-5">
          <p className="text-error text-center font-semibold">{error}</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full h-14 rounded-xl bg-inherit backdrop-blur-2xl px-5"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="w-full h-14 rounded-xl bg-inherit backdrop-blur-2xl px-5"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full h-14 rounded-xl bg-inherit backdrop-blur-2xl px-5"
            required
          />
          <input
            type="url"
            name="photo"
            placeholder="www.example.com/image.png"
            className="w-full h-14 rounded-xl bg-inherit backdrop-blur-2xl px-5"
            required
          />
          <div className="flex items-center gap-3 pb-5">
            <input
              type="checkbox"
              className="checkbox bg-inherit backdrop-blur-2xl"
            />
            <span className="text-base">
              I agree with <span className="link">Terms & Conditions</span>
            </span>
          </div>
          <input
            type="submit"
            value="Create Account"
            className="w-full h-14 text-xl my-btn rounded-xl"
          />
        </form>
        <p className="link text-center pt-10">
          <Link to="/login">Already have an account? Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
