import React from "react";
import img from "../assets/images/error.gif";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitlejs";

const ErrorPage = () => {
  useTitle('Error')
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img src={img} alt="error image" />
        <div className="text-center mt-5">
          <Link to="/">
            <button className="btn btn-ghost bg-gradient-to-br from-bdeep to-blight backdrop-blur-2xl normal-case text-base">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
