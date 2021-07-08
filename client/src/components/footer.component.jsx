import React from "react";
import { Link } from "react-router-dom";
import LogoRilibroSVGFooter from "../assets/svg/logoFooter.svg";
import { TiSocialInstagram } from "react-icons/ti";
import "../icons.css";

export const Footer = () => {
  return (
    <div className="px-4 mx-auto mt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2">
          <Link
            to="/"
            aria-label="Home Rilibro"
            title="Home Rilibro"
            className="text-xl font-bold tracking-wide text-green-400 transition-colors duration-300 hover:text-green-700"
          >
            <LogoRilibroSVGFooter />
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Rilibro è la piattaforma di compravendita di libri usati creata
              dagli studenti per gli studenti.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Team
          </p>{" "}
          <p className="text-sm text-gray-800">
            Il{" "}
            <Link
              to="/team"
              aria-label="Team"
              title="Team"
              className="text-green-400 transition-colors duration-300 hover:text-green-700"
            >
              Team
            </Link>{" "}
            che gestisce rilibro.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contatti
          </p>

          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:adm.rilibro@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="text-green-400 transition-colors duration-300 hover:text-green-700"
            >
              adm.rilibro@gmail.com
            </a>
          </div>
        </div>
        <div>
          <span className="flex flex-row items-center text-base font-bold tracking-wide text-gray-900">
            Instagram
            <div className="ml-2 space-x-3 ">
              <a
                href="https://www.instagram.com/rilibro.it/?utm_medium=copy_link"
                className="text-green-400 transition-colors duration-300 hover:text-green-700"
              >
                <TiSocialInstagram className="INSTAICON" />
              </a>
            </div>
          </span>
          <p className="mt-4 text-sm text-gray-500">
            Segui le ultime novità sulla nostra pagina Instagram ufficiale.
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
