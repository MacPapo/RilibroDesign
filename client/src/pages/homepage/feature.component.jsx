import React, { Fragment } from "react";
import HowToBuy from "./sections/howToBuy.component";
import HowToSell from "./sections/howToSell.component";

export default function Feature() {
  return (
    <div className="items-end justify-end py-12 bg-white opacity-90">
      <div className="justify-center mx-auto lg:py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <div className="px-4 mx-auto shadow-inner lg:bg-gray-50 max-w-7xl sm:px-6 lg:px-8 lg:rounded-2xl ">
          <Fragment className="text-gray-600 body-font">
            <HowToBuy />
            <HowToSell />
          </Fragment>
        </div>
      </div>
    </div>
  );
}
