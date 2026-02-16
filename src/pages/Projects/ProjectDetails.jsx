import React from "react";
// If using React Router, you would typically use useParams to find the specific project
// For now, I've structured it to receive project data via props or a central data file.

const ProjectDetail = ({ project }) => {
  // Fallback data if none is passed, following your exact style pattern
  const data = project || {
    tag: "Web Design",
    title: "E-Commerce Platform",
    description: "A modern, responsive online store with seamless checkout experience and beautiful product galleries.",
    gradient: "bg-gradient-to-tr from-mint to-teal",
    longDescription: "This project involved creating a full-scale digital marketplace. We focused on high-performance loading states, a mobile-first UI approach, and integrating secure payment gateways to ensure a frictionless user journey.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Stripe API"]
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-teal selection:text-white">
      {/* Header / Hero Section */}
      <header className={`${data.gradient} h-[60vh] relative flex items-end p-10 md:p-20`}>
        <div className="absolute inset-0 bg-navy opacity-20"></div>
        <div className="relative z-10 max-w-5xl">
          <span className="inline-block px-4 py-1.5 bg-teal text-white font-bold text-sm uppercase rounded-full mb-6 animate-fadeInUp">
            {data.tag}
          </span>
          <h1 className="font-playfair text-6xl md:text-8xl font-black text-white drop-shadow-lg animate-fadeInUp">
            {data.title}
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-5xl mx-auto py-20 px-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column: Description */}
        <div className="lg:col-span-2 space-y-8 animate-fadeInUp">
          <h2 className="font-playfair text-4xl font-bold text-navy">Project Overview</h2>
          <p className="text-sage text-lg leading-relaxed">
            {data.description}
          </p>
          <p className="text-navy text-lg leading-relaxed opacity-80">
            {data.longDescription}
          </p>

          {/* Visual Placeholder to match the "relative rounded-2xl" card style */}
          <div className={`w-full h-96 rounded-2xl shadow-2xl ${data.gradient} opacity-50`}></div>
        </div>

        {/* Right Column: Details/Sidebar */}
        <aside className="space-y-10 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div>
            <h3 className="font-playfair text-xl font-bold text-navy mb-4 border-b border-mint pb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-sage text-sage text-xs font-bold rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-bold text-navy mb-4 border-b border-mint pb-2">
              Deliverables
            </h3>
            <ul className="text-sage space-y-2 text-sm">
              <li>• UI/UX Strategy</li>
              <li>• Frontend Development</li>
              <li>• Backend Integration</li>
            </ul>
          </div>

          <button className="w-full py-4 bg-navy text-white font-bold rounded-xl transform transition-transform hover:-translate-y-1 hover:bg-teal duration-300">
            Visit Live Site ↗
          </button>
        </aside>
      </main>
    </div>
  );
};

export default ProjectDetail;