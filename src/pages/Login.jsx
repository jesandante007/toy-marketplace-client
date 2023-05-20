import React, { useContext, useState } from "react";
import img from "../assets/images/image.png";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useTitle from "../hooks/useTitle.js";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  useTitle('Login')

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => {
        setError("");
        navigate(from, { replace: true });
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
      <div className="bg-gradient-to-br from-bdeep to-blight backdrop-blur-sm p-12 rounded-xl space-y-5">
        <p className="text-4xl text-tdeep font-medium pt-16">Sign In</p>
        <form onSubmit={handleSignIn} className="pt-10 space-y-5">
          <p className="text-error text-center font-semibold">{error}</p>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="w-full h-14 rounded-xl shadow px-5"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full h-14 rounded-xl shadow px-5"
            required
          />
          <div className="flex items-center gap-3 pb-5">
            <input
              type="checkbox"
              className="checkbox bg-white"
            />
            <span className="text-base">Remember me</span>
          </div>
          <input
            type="submit"
            value="Login"
            className="w-full h-14 text-xl my-btn rounded-xl"
          />
          <p className="text-center">
            Forgot password?<a className="link ml-1">reset</a>
          </p>
          <div className="divider py-7">or</div>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full h-14 rounded-xl my-btn normal-case text-xl flex items-center justify-center gap-3"
        >
          <FaGoogle className="w-10 h-10 p-2 rounded-full text-tdeep bg-gradient-to-br from-bdeep to-blight" />
          <span>Continue With Google</span>
        </button>
        <button className="w-full h-14 rounded-xl my-btn normal-case text-xl flex items-center justify-center gap-3">
          <FaGithub
            onClick={handleGithubSignIn}
            className="w-10 h-10 p-2 rounded-full text-tdeep bg-gradient-to-br from-bdeep to-blight"
          />
          <span>Continue With Github</span>
        </button>
        <p className="link text-center pt-10">
          <Link to="/register">Don't have an account? Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
