import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { SocialLink, NavItem } from '@/types';

const socialLinks: SocialLink[] = [
  { icon: '→', label: 'GitHub', href: 'https://github.com' },
  { icon: 'in', label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: '𝕏', label: 'Twitter', href: 'https://twitter.com' },
  { icon: '●', label: 'Dribbble', href: 'https://dribbble.com' },
];

const footerNavItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-playfair text-3xl font-black text-mint tracking-tight"
            >
              Portfolio.
            </Link>
            <p className="mt-4 text-sage text-sm leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-mint mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sage hover:text-teal transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-mint mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-teal/20 text-mint text-sm font-bold hover:bg-teal hover:text-white transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sage text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-sage text-sm">
            Designed & Built with{' '}
            <span className="text-teal">♥</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
