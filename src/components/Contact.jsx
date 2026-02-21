import React from "react";

const socialLinks = [
  { icon: "→", label: "GitHub", href: "#" },
  { icon: "in", label: "LinkedIn", href: "#" },
  { icon: "𝕏", label: "Twitter", href: "#" },
  { icon: "●", label: "Dribbble", href: "#" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-10 bg-cream text-center">
      <div className="max-w-2xl mx-auto animate-fadeInUp">
        {/* Section Title */}
        <h2 className="font-playfair text-5xl font-black text-navy mb-4">
          Let's Work Together
        </h2>
        {/* Section Description */}
        <p className="text-sage text-lg mb-8">
          Have a project in mind? I'd love to hear about it. Let's create
          something amazing together.
        </p>
        {/* CTA Button */}
        <a
          href="mailto:hello@portfolio.com"
          className="inline-block px-12 py-4 bg-teal text-white font-bold rounded-full shadow-lg hover:-translate-y-1 hover:bg-navy transition-all duration-300 mb-12"
        >
          Get In Touch
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              aria-label={link.label}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-teal text-white text-xl font-bold shadow-md hover:-translate-y-1 hover:bg-navy transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;