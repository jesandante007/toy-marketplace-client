import React from "react";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div className="container mx-auto font-poppins text-tlight">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
