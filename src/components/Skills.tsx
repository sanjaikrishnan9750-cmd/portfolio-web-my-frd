"use client";

import { motion } from "framer-motion";
import { Database, FileSpreadsheet, Keyboard, ShieldCheck, Eraser, FileText, UploadCloud, Clock, CheckSquare } from "lucide-react";
import HoverCard from "@/components/HoverCard";

export default function Skills() {
  const tools = [
    { name: "Microsoft Excel", icon: <FileSpreadsheet size={24} />, color: "text-green-500" },
    { name: "Google Sheets", icon: <FileSpreadsheet size={24} />, color: "text-emerald-500" },
    { name: "Microsoft Word", icon: <FileText size={24} />, color: "text-blue-500" },
    { name: "SQL", icon: <Database size={24} />, color: "text-sky-400" },
  ];

  const coreSkills = [
    { name: "Data Entry", icon: <Keyboard size={24} />, color: "text-purple-400" },
    { name: "Data Uploading", icon: <UploadCloud size={24} />, color: "text-blue-400" },
    { name: "Data Validation", icon: <ShieldCheck size={24} />, color: "text-emerald-400" },
    { name: "Data Cleaning", icon: <Eraser size={24} />, color: "text-yellow-400" },
  ];

  const softSkills = [
    { name: "Typing Speed", icon: <Keyboard size={24} />, color: "text-red-400" },
    { name: "Time Management", icon: <Clock size={24} />, color: "text-orange-400" },
    { name: "Attention to Detail", icon: <CheckSquare size={24} />, color: "text-indigo-400" },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical & <span className="text-gradient">Core Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-1 to-accent-2 mx-auto rounded-full"></div>
        </motion.div>

        {/* Marquee for Tools */}
        <div className="mb-16">
          <p className="text-gray-400 font-medium mb-6 text-center uppercase tracking-widest text-sm">Software & Languages</p>
          <div className="marquee-container py-4 glass border-x-0">
            <div className="marquee-content flex gap-12 items-center px-6">
              {[...tools, ...tools, ...tools].map((tool, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-200 font-bold whitespace-nowrap">
                  <span className={tool.color}>{tool.icon}</span>
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Box for Core & Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <HoverCard glowColor="var(--glow-2)" className="glass p-8 rounded-custom h-full flex flex-col justify-center">
            <h4 className="text-accent-2 text-2xl font-display font-bold mb-8 flex items-center justify-between relative z-10">
              Core Skills
              <span className="text-5xl opacity-10 font-black">01</span>
            </h4>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {coreSkills.map((skill, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <div className={`p-3 bg-white/5 w-max rounded-xl ${skill.color} group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </HoverCard>

          <HoverCard glowColor="var(--glow-1)" className="glass p-8 rounded-custom h-full flex flex-col justify-center">
            <h4 className="text-accent-1 text-2xl font-display font-bold mb-8 flex items-center justify-between relative z-10">
              Soft Skills
              <span className="text-5xl opacity-10 font-black">02</span>
            </h4>
            <div className="flex flex-col gap-6 relative z-10">
              {softSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className={`p-3 bg-white/5 rounded-xl ${skill.color} group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                </div>
              ))}
            </div>
          </HoverCard>

        </div>
      </div>
    </section>
  );
}
