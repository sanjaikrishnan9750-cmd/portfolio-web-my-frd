"use client";

import { motion } from "framer-motion";
import { ShieldAlert, TrendingUp, ShoppingCart, ArrowRight } from "lucide-react";
import HoverCard from "@/components/HoverCard";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Cyber Defense Suite for DigitalInfrastructure",
      description:
        "Developed an AI-driven cybersecurity platform detecting malware, phishing, ransomware, intrusions, and zero-day attacks in real-time using trained ML models. Implemented network anomaly detection and log classification pipelines. Designed a modular, scalable architecture for deployment.",
      icon: <ShieldAlert size={48} className="text-red-400" />,
      tags: ["Python", "ML", "Network Monitoring", "Threat Intelligence"],
      color: "from-red-500/10",
      glow: "rgba(248, 113, 113, 0.15)",
    },
    {
      title: "Sales Performance Dashboard",
      description:
        "Analyzed 50,000+ rows of retail sales data using Pandas. Built an interactive Power BI dashboard with 10+ KPIs.",
      icon: <TrendingUp size={48} className="text-emerald-400" />,
      tags: ["Python", "Pandas", "Power BI", "SQL", "Excel"],
      color: "from-emerald-500/10",
      glow: "rgba(52, 211, 153, 0.15)",
    },
    {
      title: "E-Commerce Sales Analysis Dashboard",
      description:
        "Analyzed e-commerce sales data to identify trends, profitability, and regional performance. Cleaned and prepared raw data using Python and Pandas. Used SQL queries to analyze data and created an interactive Power BI dashboard to visualize KPIs.",
      icon: <ShoppingCart size={48} className="text-sky-400" />,
      tags: ["Python", "SQL", "Power BI"],
      color: "from-sky-500/10",
      glow: "rgba(56, 189, 248, 0.15)",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <HoverCard glowColor={project.glow} className={`glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center relative bg-gradient-to-r ${project.color} to-transparent`}>
                
                <div className="flex-shrink-0 bg-white/5 p-6 rounded-2xl">
                  {project.icon}
                </div>
                
                <div className="flex-grow relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-6">
                    <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors group/link">
                      View Code <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors group/link">
                      Live Demo <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
