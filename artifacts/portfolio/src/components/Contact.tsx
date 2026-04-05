import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedName = formState.name.trim().replace(/[<>]/g, "");
    const sanitizedEmail = formState.email.trim();
    const sanitizedMessage = formState.message.trim().replace(/[<>]/g, "");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) return;
    if (!sanitizedName || !sanitizedMessage) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${sanitizedName}`);
    const body = encodeURIComponent(
      `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`
    );
    window.location.href = `mailto:${cvData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const contactLinks = [
    {
      label: "Email",
      value: cvData.email,
      href: `mailto:${cvData.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: cvData.phone,
      href: `tel:${cvData.phone}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: `github.com/${cvData.github}`,
      href: `https://github.com/${cvData.github}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: cvData.location,
      href: "https://maps.google.com/?q=Colombo+Sri+Lanka",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,1) 0%, rgba(59,130,246,0.5) 100%)",
            bottom: "0%",
            left: "20%",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Contact</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb)" }} />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            I'm open to internships, collaborations, and data science opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl glass gradient-border group transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-violet-400 group-hover:text-white transition-colors shrink-0"
                  style={{ background: "rgba(139,92,246,0.15)" }}
                >
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{link.label}</div>
                  <div className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{link.value}</div>
                </div>
                <svg className="w-4 h-4 text-slate-600 group-hover:text-violet-400 transition-colors ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="p-8 rounded-2xl glass-strong gradient-border">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-green-400 font-semibold text-lg">Message prepared!</p>
                  <p className="text-slate-400 text-sm mt-2">Your email client should open now.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-violet-500/20 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-400/60 focus:ring-1 focus:ring-violet-400/40 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      maxLength={200}
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-violet-500/20 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-400/60 focus:ring-1 focus:ring-violet-400/40 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Message *</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Tell me about your opportunity or idea..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-violet-500/20 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-400/60 focus:ring-1 focus:ring-violet-400/40 transition-all resize-none text-sm"
                    />
                    <div className="text-right text-xs text-slate-600 mt-1">{formState.message.length}/1000</div>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(139,92,246,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-8 rounded-xl font-semibold text-white transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
