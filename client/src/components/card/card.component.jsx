import React from "react";
import moment from "moment";

export const Card = (props) => {
  console.log(
    "Sono dentro la variabile Card, La variabile props contiene --> ",
    props
  );

  return (
    <div className="content">
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col">
          <div className="p-4 bg-white shadow-md rounded-3xl">
            <div className="flex-none lg:flex">
              <div className="w-full h-full mb-3 lg:h-48 lg:w-48 lg:mb-0">
                <img
                  src={props.post.libro.immagine}
                  alt="Just a flower"
                  className="object-scale-down w-full shadow-lg lg:object-cover lg:h-48 rounded-xl"
                ></img>
              </div>
              <div className="flex-auto py-2 ml-3 justify-evenly">
                <div className="flex flex-wrap ">
                  <div className="flex-none w-full text-xs font-medium text-green-500 ">
                    {props.post.libro.ISBN}
                  </div>
                  <h2 className="flex-auto text-lg font-bold ">
                    {props.post.libro.titolo}
                  </h2>
                </div>
                <p className="font-normal text-gray-600">
                  {props.post.libro.autore}
                </p>
                <div className="flex py-4 text-sm text-gray-600">
                  <div className="inline-flex flex-1 items-top">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4.5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <div>
                      <p className="">{props.post.location.regione}</p>
                      <p>
                        {props.post.location.provincia},{" "}
                        {props.post.location.comune}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p className="">
                      {moment(props.post.created_at).calendar()}
                    </p>
                  </div>
                </div>
                <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                <div className="flex space-x-3 text-sm font-medium">
                  <div className="flex flex-auto space-x-3">
                    <button className="inline-flex items-center px-5 py-2 mb-2 space-x-2 tracking-wider text-gray-600 bg-white border rounded-full shadow-sm md:mb-0 hover:bg-gray-100 ">
                      <span className="text-green-400 rounded-lg hover:text-green-500">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="shopify"
                          className="w-5 h-5 svg-inline--fa fa-shopify "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"
                          ></path>
                        </svg>
                      </span>
                      <span>62 Products</span>
                    </button>
                  </div>
                  <button
                    className="px-5 py-2 mb-2 tracking-wider text-white bg-gray-900 rounded-full shadow-sm md:mb-0 hover:bg-gray-800"
                    type="button"
                    aria-label="like"
                  >
                    Edit Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
