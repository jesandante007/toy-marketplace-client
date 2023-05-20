import React from "react";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div className="font-poppins text-tlight">
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Main;
