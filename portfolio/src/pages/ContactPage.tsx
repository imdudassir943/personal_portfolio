import { motion } from 'framer-motion';
import { ContactForm } from '@/features/contact';

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'hello@portfolio.com',
    href: 'mailto:hello@portfolio.com',
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
  {
    icon: '🌐',
    title: 'Website',
    value: 'www.portfolio.com',
    href: 'https://portfolio.com',
  },
];

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 px-6 lg:px-10 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-teal font-bold uppercase tracking-[0.2em] mb-4 text-sm"
          >
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl font-black text-navy mb-6"
          >
            Let's <span className="text-teal">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sage text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities, creative ideas, or partnerships.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="font-playfair text-2xl font-bold text-navy mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-2xl shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sage text-sm">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-navy font-medium hover:text-teal transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-navy font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Availability */}
              <div className="p-6 bg-cream rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-navy font-bold">Available for work</span>
                </div>
                <p className="text-sage text-sm">
                  Currently open to freelance projects and full-time opportunities.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
