import React from "react";
import moment from "moment";
import "moment/locale/it";

export const Card = (props) => {
  console.log(
    "Sono dentro la variabile Card, La variabile props contiene --> ",
    props
  );

  let date = props.post.created_at;
  moment.locale("it");
  let formDate = moment(date).calendar();
  console.log("date --> ", formDate);

  return (
    <div className="content">
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col">
          <div className="p-4 bg-white shadow-md rounded-3xl">
            <div className="flex-none lg:flex">
              <div className="w-full h-full mb-3 lg:h-56 lg:w-48 lg:mb-0">
                <img
                  src={props.post.libro.immagine}
                  alt="Just a flower"
                  className="object-scale-down w-full shadow-lg lg:object-cover lg:h-56 rounded-xl"
                ></img>
              </div>

              <div className="flex-auto py-2 ml-3 justify-evenly">
                <div className="flex flex-wrap ">
                  <div className="flex-none w-full text-xs font-medium text-green-500 ">
                    {props.post.libro.ISBN}
                  </div>
                  <h2 className="flex-auto text-lg font-bold capitalize">
                    {props.post.libro.titolo}
                  </h2>
                </div>
                <p className="font-normal text-gray-600 capitalize">
                  {props.post.libro.autore}
                </p>
                <div className="flex py-4 text-sm text-gray-600">
                  <div className="inline-flex items-center flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4.5 h-5 mr-2 text-green-500"
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
                      className="w-5 h-5 mr-2 text-green-500"
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

                    <p class="">{formDate}</p>
                  </div>
                </div>
                <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                <div className="flex space-x-3 text-sm font-medium">
                  <div className="flex flex-auto space-x-3">
                    <div className="inline-flex items-center px-5 py-2 mb-2 space-x-2 tracking-wider text-gray-600 border shadow-inner bg-gray-50 rounded-xl md:mb-0 hover:bg-gray-100 ">
                      <span>
                        {props.post.libro.condizione} {props.post.libro.prezzo}{" "}
                        €
                      </span>
                    </div>
                  </div>
                  <button
                    className="px-5 py-2 mb-2 tracking-wider text-white bg-green-400 shadow-lg rounded-xl md:mb-0 hover:bg-green-700"
                    type="button"
                    aria-label="like"
                  >
                    Compra 🤑
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
