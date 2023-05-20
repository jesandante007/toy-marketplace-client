import React from "react";

const Subscribe = () => {
  return (
    <div data-aos="zoom-in-up">
      <p className="text-center text-4xl lg:text-5xl text-tdeep font-semibold mt-20 mb-5">
        Subscribe!
      </p>
      <div className="divider lg:px-96">O</div>
      <div className="my-bg p-8 lg:p-16">
        <p className="text-2xl font-semibold text-tdeep text-center">
          Join the TurboClub for Exclusive Offers and Updates
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-5">
          <input
            type="email"
            className="h-12 w-full lg:w-1/3 rounded-full px-5 lg:mr-2"
            placeholder="Email"
          />
          <div>
            <button className="btn my-btn btn-ghost rounded-full text-base mt-3 lg:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
