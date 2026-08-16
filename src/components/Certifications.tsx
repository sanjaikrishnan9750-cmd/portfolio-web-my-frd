"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import HoverCard from "@/components/HoverCard";

export default function Certifications() {
  const certifications = [
    {
      title: "Data Analytics Job Simulation (Forage)",
      issuer: "Deloitte",
      date: "July 2026",
      description: "Completed practical task modules in Data Analytics.",
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation (Forage)",
      issuer: "Tata Group",
      date: "July 2026",
      description: "Completed practical task modules in GenAI Powered Data Analytics.",
    },
    {
      title: "Oracle Cloud Infrastructure Certification",
      issuer: "Oracle University",
      date: "2024",
      description: "Demonstrated fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure.",
    },
    {
      title: "AR & VR Internship",
      issuer: "Praya Labs Pvt. Ltd.",
      date: "2023",
      description: "Completed an internship focused on Augmented Reality and Virtual Reality technologies.",
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Internships</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <HoverCard glowColor="rgba(168, 85, 247, 0.1)" className="glass p-8 rounded-3xl h-full flex flex-col group">
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="text-purple-400 bg-white/5 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <Award size={28} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-purple-300 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 relative z-10">
                  {cert.title}
                </h4>
                
                <div className="flex items-center gap-2 text-sky-400 font-medium text-sm mb-4 relative z-10">
                  <CheckCircle2 size={16} />
                  {cert.issuer}
                </div>
                
                <p className="text-gray-400 leading-relaxed mt-auto relative z-10">
                  {cert.description}
                </p>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
