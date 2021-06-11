import React from "react";
import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";

export default function Team() {
  return (
    <>
      <div className="h-screen">
        <div className="bg-fixed bg-center bg-cover bg-team-fixed">
          <div className="justify-center items-top">
            <Nav />
          </div>
          <div className="container pt-40 mx-auto ">
            <div className="flex flex-col w-full mb-20 text-center">
              <h1 className="mb-4 text-3xl font-extrabold text-white title-font">
                IL NOSTRO TEAM
              </h1>
              <p className="mx-auto text-base leading-relaxed text-white lg:w-2/3">
                Incontra il team che gestice Rilibro.it, per più informazioni{" "}
                <a
                  href="mailto:adm.rilibro@gmail.com"
                  className="text-gray-100 transition-colors duration-300 hover:text-green-400"
                >
                  adm.rilibro@gmail.com
                </a>
              </p>
            </div>
            <div className="grid row-gap-5 mb-8 xl:grid-cols-4 sm:row-gap-4 sm:grid-cols-2">
              <div className="p-4 m-4">
                <div className="max-w-lg border border-gray-200 shadow-xl bg-gray-50 rounded-xl">
                  <div className="flex flex-col items-center py-8">
                    <div className="w-32 h-32 rounded-full shadow-xl">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1575978108872-9b1429a19a0f.jfif"
                        alt="Matteo Ciriaci"
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <p className="pt-4 pb-1 text-xl font-normal text-gray-800">
                      Matteo Ciriaci
                    </p>
                    <p className="text-base text-gray-600">
                      Software Developer
                    </p>
                  </div>
                  <div className="w-full py-4 border-t border-gray-200">
                    <p className="text-base font-normal text-center text-gray-600">
                      Matteo.Ciriaci@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 m-4 ">
                <div className="max-w-lg border border-gray-200 shadow-xl bg-gray-50 rounded-xl">
                  <div className="flex flex-col items-center py-8">
                    <div className="w-32 h-32 rounded-full shadow-md">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                        alt="Jacopo Costantini"
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <p className="pt-4 pb-1 text-xl font-normal text-gray-800">
                      Jacopo Costantini
                    </p>
                    <p className="text-base text-gray-600">
                      Software Developer
                    </p>
                  </div>
                  <div className="w-full py-4 border-t border-gray-200">
                    <p className="text-base font-normal text-center text-gray-600">
                      Jacopo.Costantini@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 m-4 ">
                <div className="max-w-lg border border-gray-200 shadow-xl bg-gray-50 rounded-xl">
                  <div className="flex flex-col items-center py-8">
                    <div className="w-32 h-32 rounded-full shadow-md">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif"
                        alt="Luca Manfrin"
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <p className="pt-4 pb-1 text-xl font-normal text-gray-800">
                      Luca Manfrin
                    </p>
                    <p className="text-base text-gray-600">
                      Software Developer
                    </p>
                  </div>
                  <div className="w-full py-4 border-t border-gray-200">
                    <p className="text-base font-normal text-center text-gray-600">
                      Luca.Manfrin@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 m-4 ">
                <div className="max-w-lg border border-gray-200 shadow-xl bg-gray-50 rounded-xl">
                  <div className="flex flex-col items-center py-8">
                    <div className="w-32 h-32 rounded-full shadow-md">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1594369428909-cf575675ca9a.jfif"
                        alt="Matteo Zambon"
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <p className="pt-4 pb-1 text-xl font-normal text-gray-800">
                      Matteo Zambon
                    </p>
                    <p className="text-base text-gray-600">
                      Software Developer
                    </p>
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
        </div>
        <Footer />
      </div>
    </>
  );
}
