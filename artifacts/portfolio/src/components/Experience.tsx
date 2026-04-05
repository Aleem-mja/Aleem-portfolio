import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Work History
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb)" }} />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-blue-500/40 to-transparent" />

          {cvData.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative flex md:justify-end mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-violet-500 bg-background z-10 pulse-glow" />

              {/* Card */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-40px)] md:mr-[calc(50%+40px)]">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="p-6 rounded-2xl glass-strong gradient-border group transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-violet-300 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  {/* Tool badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full text-xs font-medium text-blue-300 border border-blue-500/30"
                        style={{ background: "rgba(59,130,246,0.1)" }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((h, hi) => (
                      <motion.li
                        key={hi}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + hi * 0.1 }}
                        className="flex gap-3 text-slate-400 text-sm leading-relaxed"
                      >
                        <span className="text-violet-400 mt-0.5 shrink-0">▶</span>
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
