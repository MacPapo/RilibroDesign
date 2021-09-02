import React, { useEffect } from "react";
import "../../index.css";
import Nav from "../../components/navbar.component";
import Feature from "./feature.component";
import { SearchBox } from "../../components/searchbar.component";
import Footer from "../../components/footer.component";

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="bg-top bg-cover md:bg-no-repeat md:bg-fixed md:bg-center bg-homepage-phone md:bg-cover md:bg-homepage-fixed">
        <div className="justify-center h-80 items-top">
          <Nav />
        </div>

        <div className=" h-80">
          <div className="justify-center w-full h-full bg-white border-gray-300 shadow-xl lg:bg-transparent border-opacity-90 bg-opacity-60">
            <div
              className="relative p-5 py-12 lg:px-8 lg:max-w-screen-xl lg:mx-auto"
              data-aos="fade-up"
            >
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
      <Feature />

      <Footer />
    </>
  );
};

export default HomePage;
