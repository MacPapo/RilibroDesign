import React from "react";
import "../../index.css";
import Nav from "../../components/navbar.component";
import Feature from "./feature.component";
import { SearchBox } from "../../components/searchbar.component";
import Footer from "../../components/footer.component";

const HomePage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="bg-top bg-cover md:bg-no-repeat md:bg-fixed md:bg-center bg-homepage-phone md:bg-cover md:bg-homepage-fixed">
          <div className="justify-center h-80 items-top">
            <Nav />
          </div>
          <div className=" h-80">
            <div className="justify-center mx-auto lg:py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
              <div className=" p-5 lg:p-2.5 shadow-xl lg:rounded-xl relative flex items-center bg-white bg-opacity-60 border-gray-300 border-opacity-90">
                <SearchBox />
              </div>
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
