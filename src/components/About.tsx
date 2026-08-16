"use client";

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Languages</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 glass rounded-3xl p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -z-10 group-hover:bg-sky-500/20 transition-colors"></div>

            <div className="flex items-start gap-4 mb-10">
              <div className="p-4 bg-sky-500/20 rounded-2xl text-sky-400">
                <GraduationCap size={32} />
              </div>
            </div>

            <div className="space-y-10">
              <div className="border-l-2 border-sky-500/50 pl-6 relative">
                <div className="absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                  B.E. Computer Science and Engineering <span className="text-sky-400 ml-2">- 7.10</span>
                </h4>
                <p className="text-sky-400 font-medium mb-2">2023 - 2027</p>
                <p className="text-gray-400 text-lg">
                  Akshaya College of Engineering and Technology
                </p>
              </div>

              <div className="border-l-2 border-purple-500/50 pl-6 relative">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                  HSC (Class XII) <span className="text-purple-400 ml-2">- 55.43%</span>
                </h4>
                <p className="text-purple-400 font-medium mb-2">2023</p>
                <p className="text-gray-400 text-lg">
                  Nadar Saraswathi Higher Secondary School
                </p>
              </div>
            </div>
          </motion.div>

          {/* Languages Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/20 transition-colors"></div>

            <div className="p-4 bg-emerald-500/20 rounded-2xl text-emerald-400 w-max mb-8">
              <BrainCircuit size={32} />
            </div>

            <h4 className="text-2xl font-bold text-white mb-8">
              Languages
            </h4>
            
            <div className="space-y-6">
              <div className="group/lang cursor-default">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-lg text-gray-200">Tamil</span>
                  <span className="text-sm text-emerald-400 font-medium">Native</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full"></div>
                </div>
              </div>

              <div className="group/lang cursor-default">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-lg text-gray-200">English</span>
                  <span className="text-sm text-sky-400 font-medium">Fluent</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-gradient-to-r from-sky-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
