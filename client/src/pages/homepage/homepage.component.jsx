import React from "react";
import "../../index.css";
import Nav from "./navbar.component";
import Feature from "./features.component";

const HomePage = () => {
  return (
    <>
      <div className="justify-center h-screen bg-header items-top">
        <Nav />
        <div className="items-center justify-center h-screen bg-header">
          <div className="mx-auto mt-40 lg:py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 ">
            <div className=" p-5 lg:p-2.5 shadow-xl lg:rounded-xl relative flex grid items-center grid-cols-2 grid-flow-row grid-rows-2 lg:grid-cols-3 bg-gray-50 border-gray-300 border-opacity-90">
              Ciao
            </div>
            <Feature />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
