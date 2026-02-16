import React from "react";

const skillsData = [
  {
    icon: "💻",
    title: "Frontend",
    list: ["React & Next.js", "TypeScript", "HTML5 & CSS3", "Tailwind CSS"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    list: ["Node.js & Express", "Python & Django", "PostgreSQL", "RESTful APIs"],
  },
  {
    icon: "🎨",
    title: "Design",
    list: ["Figma & Adobe XD", "UI/UX Design", "Prototyping", "Design Systems"],
  },
  {
    icon: "🚀",
    title: "Tools",
    list: ["Git & GitHub", "Docker", "CI/CD Pipelines", "Agile Methodologies"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-10 bg-navy text-white overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-playfair font-black text-center mb-4 animate-fadeInUp">
        Skills & Expertise
      </h2>
      <p className="text-center text-mint text-lg mb-16 animate-fadeInUp">
        Technologies and tools I work with
      </p>

      {/* Skills Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((skill, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-transform transform hover:-translate-y-2 hover:bg-white/8 hover:border-mint"
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-teal rounded-lg flex items-center justify-center text-3xl mb-6">
              {skill.icon}
            </div>
            {/* Skill Title */}
            <h3 className="font-playfair text-2xl font-bold text-mint mb-4">
              {skill.title}
            </h3>
            {/* Skill List */}
            <ul className="text-sage text-sm space-y-2">
              {skill.list.map((item, idx) => (
                <li key={idx} className="border-b border-white/10 pb-2 last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;