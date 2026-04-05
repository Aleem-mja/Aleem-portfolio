import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cvData } from "@/data/cv";

const stats = [
  { label: "Programming Languages", value: "6+" },
  { label: "Projects Completed", value: "2+" },
  { label: "Tools & Technologies", value: "20+" },
  { label: "Years of Study", value: "3+" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Who I Am</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">{cvData.objective}</p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: "📍", text: cvData.location },
                { icon: "📧", text: cvData.email },
                { icon: "📱", text: cvData.phone },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-violet-500/20 text-sm text-slate-300"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-6 rounded-2xl glass-strong gradient-border text-center group"
              >
                <div className="text-4xl font-extrabold gradient-text mb-2 group-hover:glow-text transition-all">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Language skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-slate-200 mb-8">Languages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {cvData.languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="p-6 rounded-2xl glass gradient-border"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-slate-200">{lang.name}</span>
                  <span className="text-sm text-violet-400">{lang.level}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.percent}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #7c3aed, #2563eb)",
                    }}
                  />
                </div>
                <div className="text-right mt-1 text-xs text-slate-500">{lang.percent}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
