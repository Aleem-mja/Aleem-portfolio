import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cvData } from "@/data/cv";

const categoryColors: Record<string, string> = {
  "Programming Languages": "from-violet-600 to-purple-600",
  "Database Systems": "from-blue-600 to-cyan-500",
  "Data Science & ML Tools": "from-purple-600 to-blue-600",
  "Version Control & Other": "from-cyan-500 to-teal-500",
  "Cloud Platforms": "from-blue-500 to-indigo-600",
  "Specialized Areas": "from-violet-500 to-pink-500",
};

const categoryIcons: Record<string, string> = {
  "Programming Languages": "💻",
  "Database Systems": "🗄️",
  "Data Science & ML Tools": "🤖",
  "Version Control & Other": "🔧",
  "Cloud Platforms": "☁️",
  "Specialized Areas": "📊",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,1) 0%, transparent 100%)",
            left: "-5%",
            bottom: "20%",
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
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(cvData.skills).map(([category, skills], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl glass-strong gradient-border group transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${categoryColors[category] ?? "from-violet-600 to-blue-600"}`}
                >
                  {categoryIcons[category] ?? "⚡"}
                </div>
                <h3 className="font-bold text-slate-200 text-sm leading-tight">{category}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.1 + si * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white transition-all duration-200 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(139,92,246,0.2)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
