import React, { Fragment } from "react";
import spinner from "./giphy.gif";

const Spinner = () => (
  <Fragment>
    <img
      className="py-5 m-10"
      src={spinner}
      style={{ width: "512px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;
