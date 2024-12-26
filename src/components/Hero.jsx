import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="relative mb-8">
      <div class="container md:px-28 md:py-16 mx-auto py-20 px-10">
        <div class="text-center">
          <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug mb-4">
            Hello, <br />
            I'm <span className="text-red-500">Dimas</span> Wigoena
          </h1>
          <div className="mb-6">
            <TypeAnimation
              sequence={[
                "Programmer",
                800,
                "Web Developer",
                800,
                "Desktop Developer",
                800,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.7em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          {/* <p className="md:text-2xl text-xl mb-6">- Programmer -</p> */}
          <p className="mb-12">
            "A beginner programmer who is building skills in the world of
            software development. Interested in exploring various technologies
            such as HTML, PHP, JavaScript, React, and others for Frontend, as
            well as technologies like CodeIgniter, Laravel, and others for
            Backend."
          </p>
          <div class="flex mt-6 justify-center">
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a href="#" download target="_blank">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
