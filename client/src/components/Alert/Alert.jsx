import React from "react";

const Alert = ({ color, message }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {showAlert ? (
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
            color +
            "-500"
          }
        >
          <span className="inline-block mr-5 text-xl align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block mr-8 align-middle">
            {message}
          </span>
          <button
            className="absolute top-0 right-0 mt-4 mr-6 text-2xl font-semibold leading-none bg-transparent outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default function ClosingAlert(color, message) {
    
  return (
    <>
      <Alert color={color} message={message}/>;
    </>
  );
}