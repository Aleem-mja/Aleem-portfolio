import { motion } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-violet-500/15 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500"
        >
          <div>
            Built with passion by{" "}
            <span className="gradient-text font-semibold">{cvData.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Open to opportunities</span>
          </div>
          <div>
            © {new Date().getFullYear()} All rights reserved
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
