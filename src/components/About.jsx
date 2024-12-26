import React from "react";

const About = () => {
  return (
    <div className="relative mb-4" id="about">
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Me
            </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 lg:mx-auto">
              A beginner programmer who is building skills in the world of
              software development. Interested in exploring various technologies
              such as HTML, PHP, JavaScript, React, and others for Frontend, as
              well as technologies like CodeIgniter, Laravel, and others for
              Backend.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Programming Language */}
              <div className="border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Programming Languages
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src="../src/assets/vb.png" alt="" className="w-10" />
                    <span className="font-semibold">VB .Net</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src="../src/assets/Html.png" alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src="../src/assets/CSS.png" alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src="../src/assets/JS.png" alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src="../src/assets/php.png" alt="" className="w-10" />
                    <span className="font-semibold">PHP</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img
                      src="../src/assets/python.png"
                      alt=""
                      className="w-10"
                    />
                    <span className="font-semibold">Python</span>
                  </div>
                </div>
              </div>

              {/* Framework */}
              <div className="border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Framework
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img
                      src="../src/assets/codeigniter.png"
                      alt=""
                      className="w-10"
                    />
                    <span className="font-semibold">Codeigniter</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img
                      src="../src/assets/Laravel.png"
                      alt=""
                      className="w-8"
                    />
                    <span className="font-semibold">Laravel</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img
                      src="../src/assets/tailwind.png"
                      alt=""
                      className="w-10"
                    />
                    <span className="font-semibold">Tailwind</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img
                      src="../src/assets/Bootstrap.png"
                      alt=""
                      className="w-10"
                    />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img
                      src="../src/assets/react.png"
                      alt=""
                      className="w-10"
                    />
                    <span className="font-semibold">React</span>
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="border border-red-200 rounded-lg md:p-7 py-10  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Database
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img
                      src="../src/assets/mysql.png"
                      alt=""
                      className="w-10"
                    />
                    <span className="font-semibold">MySQL</span>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="border border-red-200 rounded-lg md:p-7 py-10  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">Tools</h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img
                      src="../src/assets/visual studio.png"
                      alt=""
                      className="w-10"
                    />
                    <span className="font-semibold">Visual Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
