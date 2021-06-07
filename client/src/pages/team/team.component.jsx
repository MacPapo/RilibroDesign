import React from "react";
import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";

export default function Team() {
  return (
    <>
      <div className="h-screen">
        <div className="justify-center h-80 bg-header items-top">
          <Nav />
        </div>
        <div className="container w-11/12 pt-16 mx-auto xl:w-full">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl title-font mb-4 text-black font-extrabold">
              IL NOSTRO TEAM
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Incontra il team che gestice Rilibro.it, per più informazioni{" "}
              <a
                href="mailto:adm.rilibro@gmail.com"
                className="text-gray-600 transition-colors duration-300 hover:text-green-700"
              >
                adm.rilibro@gmail.com
              </a>
            </p>
          </div>
          <div className="grid grid-cols-4 pt-12 sm:flex sm:pt-20">
            <div className="w-full p-2 sm:w-1/2 md:w-1/3">
              <div className="max-w-lg bg-white border border-gray-200 rounded shadow-md">
                <div className="flex flex-col items-center py-8">
                  <div className="w-32 h-32 rounded-full shadow-md">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1575978108872-9b1429a19a0f.jfif"
                      alt
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <p className="pt-4 pb-1 text-xl font-normal text-gray-800">
                    Matteo Ciriaci
                  </p>
                  <p className="text-base text-gray-600">Software Developer</p>
                </div>
                <div className="w-full py-4 border-t border-gray-200">
                  <p className="text-base font-normal text-center text-gray-600">
                    Matteo.Ciriaci@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 sm:w-1/2 md:w-1/3">
              <div className="max-w-lg bg-white border border-gray-200 rounded shadow-md">
                <div className="flex flex-col items-center py-8">
                  <div className="w-32 h-32 rounded-full shadow-md">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                      alt
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <p className="pt-4 pb-1 text-xl font-normal text-gray-800">
                    Jacopo Costantini
                  </p>
                  <p className="text-base text-gray-600">Software Developer</p>
                </div>
                <div className="w-full py-4 border-t border-gray-200">
                  <p className="text-base font-normal text-center text-gray-600">
                    Jacopo.Costantini@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 sm:w-1/2 md:w-1/3">
              <div className="max-w-lg bg-white border border-gray-200 rounded shadow-md">
                <div className="flex flex-col items-center py-8">
                  <div className="w-32 h-32 rounded-full shadow-md">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif"
                      alt
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <p className="pt-4 pb-1 text-xl font-normal text-gray-800">
                    Luca Manfrin
                  </p>
                  <p className="text-base text-gray-600">Software Developer</p>
                </div>
                <div className="w-full py-4 border-t border-gray-200">
                  <p className="text-base font-normal text-center text-gray-600">
                    Luca.Manfrin@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 sm:w-1/2 md:w-1/3">
              <div className="max-w-lg bg-white border border-gray-200 rounded shadow-md">
                <div className="flex flex-col items-center py-8">
                  <div className="w-32 h-32 rounded-full shadow-md">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1594369428909-cf575675ca9a.jfif"
                      alt
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <p className="pt-4 pb-1 text-xl font-normal text-gray-800">
                    Matteo Zambon
                  </p>
                  <p className="text-base text-gray-600">Software Developer</p>
                </div>
                <div className="w-full py-4 border-t border-gray-200">
                  <p className="text-base font-normal text-center text-gray-600">
                    Matteo.Zambon@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
