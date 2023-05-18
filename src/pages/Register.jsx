import React from "react";
import img from "../assets/images/image.png";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-center my-16">
      <div>
        <img src={img} />
      </div>
      <div className="bg-gradient-to-br from-bdeep to-blight backdrop-blur-2xl p-12 rounded-xl space-y-5">
        <p className="text-4xl text-tdeep font-medium pt-16">
          Create New Account
        </p>
        <form className="pt-10 space-y-5">
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
            <span className="text-base">I agree with <span className="link">Terms & Conditions</span></span>
          </div>
          <input
            type="submit"
            value="Create Account"
            className="w-full h-14 text-xl my-btn rounded-xl"
          />
          <p className="text-center">
            Forgot password?<a className="link ml-1">reset</a>
          </p>
          <div className="divider py-7">or</div>
        </form>
        <button className="w-full h-14 rounded-xl my-btn normal-case text-xl flex items-center justify-center gap-3">
          <FaGoogle className="w-10 h-10 p-2 rounded-full text-tdeep bg-gradient-to-br from-bdeep to-blight" />
          <span>Continue With Google</span>
        </button>
        <button className="w-full h-14 rounded-xl my-btn normal-case text-xl flex items-center justify-center gap-3">
          <FaGithub className="w-10 h-10 p-2 rounded-full text-tdeep bg-gradient-to-br from-bdeep to-blight" />
          <span>Continue With Github</span>
        </button>
        <p className="link text-center pt-10">
          <Link to="/login">Already have an account? Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
