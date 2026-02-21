import React, { useState } from "react";

const allProjects = [
  {
    tag: "Web Design",
    title: "E-Commerce Platform",
    description: "A modern, responsive online store with seamless checkout experience.",
    gradient: "bg-gradient-to-tr from-mint to-teal",
  },
  {
    tag: "App Development",
    title: "Task Management App",
    description: "An intuitive productivity tool for team collaboration and efficiency.",
    gradient: "bg-gradient-to-tr from-sage to-mint",
  },
  {
    tag: "Brand Identity",
    title: "Creative Agency Website",
    description: "A bold, interactive portfolio showcasing creative work with animations.",
    gradient: "bg-gradient-to-tr from-teal to-navy",
  },
  // Adding a few more to fill the "Page" feel
  {
    tag: "Web Design",
    title: "Luxury Real Estate",
    description: "High-end property listings with immersive 3D walkthroughs.",
    gradient: "bg-gradient-to-tr from-navy to-teal",
  },
  {
    tag: "App Development",
    title: "Fitness Tracker",
    description: "Mobile application for monitoring health metrics and workout plans.",
    gradient: "bg-gradient-to-tr from-mint to-sage",
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Design", "App Development", "Brand Identity"];

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.tag === filter);

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <header className="pt-32 pb-20 px-10 bg-white border-b border-mint/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-6xl md:text-7xl font-black text-navy mb-6 animate-fadeInUp">
            Selected <span className="text-teal italic text-5xl md:text-6xl">&</span> <br /> Works
          </h1>
          <p className="max-w-xl text-sage text-lg animate-fadeInUp delay-100">
            A comprehensive archive of digital experiences, brand identities, and 
            full-stack solutions built with precision and aesthetic focus.
          </p>
        </div>
      </header>

      {/* Filter Bar */}
      <nav className="sticky top-0 z-20 bg-cream/80 backdrop-blur-md border-b border-mint/20 px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                filter === cat ? "text-teal" : "text-navy/50 hover:text-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Projects Grid */}
      <main className="py-20 px-10 max-w-7xl mx-auto">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((proj, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-mint/20"
            >
              {/* Image/Gradient Area */}
              <div className={`${proj.gradient} h-80 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center text-white font-bold">
                  <span className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Project Details ↗
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-teal bg-teal/5 px-2 py-1 rounded">
                    {proj.tag}
                  </span>
                  <span className="text-sage text-xs font-mono">0{i + 1}</span>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-navy mb-4 group-hover:text-teal transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sage text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
                <div className="w-10 h-[1px] bg-mint group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Call to Action */}
      <footer className="py-32 px-10 text-center bg-navy">
        <h2 className="font-playfair text-4xl text-white mb-8">Have a vision in mind?</h2>
        <button className="px-10 py-4 border border-teal text-teal font-bold rounded-full hover:bg-teal hover:text-white transition-all duration-300">
          Start a Conversation
        </button>
      </footer>
    </div>
  );
};

export default ProjectsPage;