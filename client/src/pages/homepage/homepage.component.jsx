import React from "react";
import "../../index.css";
import Nav from "./navbar.component";
import Feature from "./features.component";
import { SearchBox } from "../../components/searchbar.component";
import Footer from "../../components/footer.component";

const HomePage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="justify-center h-80 bg-header items-top">
          <Nav />
        </div>
        <div className=" h-80 bg-header">
          <div className="justify-center mx-auto lg:py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
            <div className=" p-5 lg:p-2.5 shadow-xl lg:rounded-xl relative flex items-center bg-white bg-opacity-60 border-gray-300 border-opacity-90">
              <SearchBox />
            </div>
          </div>
        </div>
        <Feature />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
