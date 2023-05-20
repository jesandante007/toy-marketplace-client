import React from "react";
import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero my-bg">
      <div className="hero-content flex-col lg:flex-row">
        <img src={hero} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-tdeep">
            Unleash the Thrill of Miniature Speed
          </h1>
          <p className="py-6">
            Welcome to TurboToyGarage, where the thrill of miniature speed comes
            to life! Immerse yourself in a world of excitement and adventure as
            you explore our extensive collection of toy cars. From sleek and
            aerodynamic sports cars to rugged monster trucks and heroic fire
            trucks, our selection will ignite your imagination and fuel hours of
            thrilling play.
          </p>
          <a href="#category">
            <button className="btn btn-ghost my-btn text-base">
              Discover Our Collection
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
