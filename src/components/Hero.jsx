import React from "react";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-10 pt-24 overflow-hidden"
    >
      {/* Wrapper to control spacing */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="z-10 max-w-2xl animate-fadeInUp">
          <div className="text-teal font-bold uppercase tracking-widest mb-6">
            Creative Developer
          </div>
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-[5.5rem] font-black mb-8 text-navy leading-tight">
            Crafting Digital <span className="block text-teal">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-sage mb-12">
            I transform ideas into elegant, functional, and memorable digital
            solutions that make an impact.
          </p>
          <a
            href="#projects"
            className="inline-block px-12 py-4 bg-teal text-white font-bold rounded-full shadow-lg hover:-translate-y-1 hover:bg-navy transition-all duration-300"
          >
            View My Work
          </a>
        </div>

        {/* Right Image (Closer) */}
        <div className="relative z-10 shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-teal shadow-2xl">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Geometric background */}
      <div className="absolute right-[-10%] top-10 w-3/5 h-4/5 opacity-15 animate-float">
        <div className="absolute w-96 h-96 rounded-full border-4 border-mint top-0 right-0 animate-float"></div>
        <div className="absolute w-64 h-64 rounded-full border-4 border-teal bottom-10 right-1/3 animate-float animate-float-reverse"></div>
        <div className="absolute w-44 h-44 border-4 border-sage top-1/2 right-16 rotate-12 animate-float"></div>
      </div>
    </section>
  );
};

export default Hero;