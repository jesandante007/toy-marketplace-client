import React from "react";
import img from "../assets/images/image.png";

const Login = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <img src={img} />
      </div>
      <div className="bg-gradient-to-br from-bdeep to-blight backdrop-blur-2xl p-12 rounded-xl space-y-5">
        <p className="text-4xl text-tdeep font-medium pt-16">Sign In</p>
        <form className="pt-10 space-y-5">
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
          <div className="flex items-center gap-3 pb-5">
            <input
              type="checkbox"
              className="checkbox bg-inherit backdrop-blur-2xl"
            />
            <span className="text-base">Remember me</span>
          </div>
          <input type="submit" value="Login" className="w-full h-14 text-xl my-btn rounded-xl" />
          <div className="divider">or</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
