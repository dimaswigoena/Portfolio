import React from "react";

function Project() {
  return (
    <section class="bg-gray-700 text-white body-font -mt-3" id="project">
      <div class="container px-5 py-10 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
            My Projects
          </h2>
        </div>
        <div class="flex flex-wrap -m-4">
          {/* Card 1 */}
          <div class="p-4 md:w-1/3">
            <div class="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50 h-full border-opacity-60 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="../src/assets/minipos.png"
                alt=""
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-3">
                  VB. Net
                </h2>
                <h1 class="title-font text-2xl font-bold text-gray-900 mb-3">
                  MiniPOS
                </h1>
                <p class="leading-relaxed text-gray-900 mb-3">
                  The Desktop-based Mini POS (Point of Sale) Sales Application
                  is a software solution designed to simplify the management of
                  sales transactions in stores or retail businesses.
                </p>
                <div class="flex items-center flex-wrap ">
                  <button className="bg-black text-white px-3 py-2 rounded-md">
                    <a
                      href="https://github.com/dimaswigoena/MiniPOS"
                      target="_blank"
                      className="flex gap-1"
                    >
                      <img
                        src="../src/assets/Github.png"
                        alt=""
                        className="w-6"
                      />
                      Github Link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end card 1 */}

          {/* Card 2 */}
          <div class="p-4 md:w-1/3">
            <div class="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50 h-full border-opacity-60 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="../src/assets/laundry.png"
                alt=""
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-3">
                  VB. Net
                </h2>
                <h1 class="title-font text-2xl font-bold text-gray-900 mb-3">
                  SAKU Laundry
                </h1>
                <p class="leading-relaxed text-gray-900 mb-3">
                  The Desktop-based Laundry Business Financial Application
                  System is a software solution designed to help laundry
                  business owners manage their operations efficiently.
                </p>
                <div class="flex items-center flex-wrap ">
                  <button className="bg-black text-white px-3 py-2 rounded-md">
                    <a
                      href="https://github.com/dimaswigoena/SAKULaundry"
                      target="_blank"
                      className="flex gap-1"
                    >
                      <img
                        src="../src/assets/Github.png"
                        alt=""
                        className="w-6"
                      />
                      Github Link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end card 2 */}

          {/* Card 3 */}
          <div class="p-4 md:w-1/3">
            <div class="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50 h-full border-opacity-60 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="../src/assets/sipas.png"
                alt=""
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-3">
                  VB. Net
                </h2>
                <h1 class="title-font text-2xl font-bold text-gray-900 mb-3">
                  SIPAS
                </h1>
                <p class="leading-relaxed text-gray-900 mb-3">
                  SIPAS (Sistem Informasi Pengelolaan Arsip Surat) is a software
                  designed to facilitate the management, storage, and retrieval
                  of important documents digitally.
                </p>
                <div class="flex items-center flex-wrap ">
                  <button className="bg-black text-white px-3 py-2 rounded-md">
                    <a
                      href="https://github.com/dimaswigoena/SIPAS"
                      target="_blank"
                      className="flex gap-1"
                    >
                      <img
                        src="../src/assets/Github.png"
                        alt=""
                        className="w-6"
                      />
                      Github Link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end card 3 */}
        </div>
      </div>
    </section>
  );
}

export default Project;
