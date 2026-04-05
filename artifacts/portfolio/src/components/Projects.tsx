import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 100%)",
            right: "-5%",
            top: "30%",
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cvData.projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl glass-strong gradient-border overflow-hidden group cursor-pointer h-full"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {/* Card header gradient */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${project.color}`}
                />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{project.icon}</span>
                      <h3 className="text-xl font-bold text-white leading-tight">{project.name}</h3>
                    </div>
                    <span className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                      {project.period}
                    </span>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full text-xs font-semibold text-violet-300 border border-violet-500/30"
                        style={{ background: "rgba(139,92,246,0.1)" }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* First highlight always visible */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.highlights[0]}
                  </p>

                  {/* Expandable highlights */}
                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 mt-2">
                          {project.highlights.slice(1).map((h, hi) => (
                            <li key={hi} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                              <span className="text-violet-400 mt-0.5 shrink-0">▶</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="mt-4 text-sm font-medium text-violet-400 hover:text-violet-300 flex items-center gap-2 transition-colors"
                  >
                    {expanded === i ? "Show less" : "Read more"}
                    <motion.svg
                      animate={{ rotate: expanded === i ? 90 : 0 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
