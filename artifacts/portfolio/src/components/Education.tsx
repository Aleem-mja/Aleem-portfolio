import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Education</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cvData.education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl glass-strong gradient-border p-8 group transition-all duration-300 overflow-hidden"
            >
              {/* Accent glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,1) 0%, transparent 100%)" }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(37,99,235,0.3))", border: "1px solid rgba(139,92,246,0.3)" }}
                  >
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-violet-300 font-medium text-sm">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
