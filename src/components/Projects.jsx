import React from "react";

const projectsData = [
  {
    tag: "Web Design",
    title: "E-Commerce Platform",
    description:
      "A modern, responsive online store with seamless checkout experience and beautiful product galleries.",
    gradient: "bg-gradient-to-tr from-mint to-teal",
  },
  {
    tag: "App Development",
    title: "Task Management App",
    description:
      "An intuitive productivity tool that helps teams collaborate and manage projects efficiently.",
    gradient: "bg-gradient-to-tr from-sage to-mint",
  },
  {
    tag: "Brand Identity",
    title: "Creative Agency Website",
    description:
      "A bold, interactive portfolio showcasing creative work with stunning animations and transitions.",
    gradient: "bg-gradient-to-tr from-teal to-navy",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-10 bg-white">
      <h2 className="font-playfair text-5xl font-black text-center text-navy mb-2 animate-fadeInUp">
        Featured Projects
      </h2>
      <p className="text-center text-sage mb-20 animate-fadeInUp">
        A selection of my recent work
      </p>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((proj, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden bg-cream shadow-lg transform transition-transform duration-500 hover:-translate-y-3 cursor-pointer"
          >
            <div className={`${proj.gradient} h-72 relative`}>
              <div className="absolute inset-0 bg-navy bg-opacity-90 flex items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity">
                View Project →
              </div>
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-teal text-white font-bold text-xs uppercase rounded-full mb-3">
                {proj.tag}
              </span>
              <h3 className="font-playfair text-2xl font-bold text-navy mb-3">
                {proj.title}
              </h3>
              <p className="text-sage text-sm">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;