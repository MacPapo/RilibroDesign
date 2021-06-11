import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="px-4 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="text-xl font-bold tracking-wide text-gray-900">
            Rilibro
          </p>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">Gianni.</p>
            <p className="mt-4 text-sm text-gray-800">Giampiteck.</p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contatti
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Telefono:</p>
            <a
              href="tel:000 0000000"
              aria-label="Our phone"
              title="Our phone"
              className="text-purple-400 transition-colors duration-300 hover:text-purple-800"
            >
              - . - .
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:adm.rilibro@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="text-purple-400 transition-colors duration-300 hover:text-purple-800"
            >
              adm.rilibro@gmail.com
            </a>
          </div>
          <div className="flex">
            <Link
              to="/team"
              aria-label="Team"
              title="Team"
              className="text-black transition-colors duration-300 hover:text-green-700"
            >
              Team
            </Link>
          </div>
        </div>
        <div>
          <span className="flex flex-row items-center text-base font-bold tracking-wide text-gray-900">
            Facebook
            <div className="ml-2 space-x-3 ">
              <a
                href="https://www.facebook.com/147999005468g"
                className="text-gray-500 transition-colors duration-300 hover:text-purple-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </span>
          <p className="mt-4 text-sm text-gray-500">
            Segui le ultime novità sulla nostra pagina Facebook ufficiale.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2021 Rilibro. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="https://www.iubenda.com/privacy-policy/12371003"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
