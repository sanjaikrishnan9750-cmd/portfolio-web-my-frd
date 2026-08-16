"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Data Analyst";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-start justify-center z-10">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-col gap-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="inline-flex items-center px-3 py-1 rounded-full glass border border-accent-1/30 text-accent-1 text-sm font-medium w-max mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent-1 mr-2 animate-pulse"></span>
            Available for Internships
          </motion.div>
          
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I&apos;m <br />
            <span className="text-gradient">Prakash A</span>
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="h-8 md:h-10 text-xl md:text-2xl font-semibold text-gray-300"
          >
            <span>{text}</span>
            <span className="animate-ping">|</span>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl text-justify"
          >
            B.E. Computer Science and Engineering (CSE) student with foundational knowledge in Data Analytics, Python, SQL, MySQL, and Microsoft Excel. Skilled in data cleaning, data analysis, database management, and deriving meaningful insights from datasets. Possess strong analytical thinking, problem-solving, communication, and teamwork skills. Seeking an entry-level Data Analyst opportunity to apply my knowledge, gain industry experience, and contribute to organizational growth.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a
               href="#projects"
              className="flex items-center gap-2 bg-accent-1 hover:bg-accent-1/80 text-black px-6 py-3 rounded-custom font-medium transition-all shadow-[0_0_20px_var(--glow-1)] hover:shadow-[0_0_30px_var(--glow-1)]"
            >
              View Data Projects <ArrowRight size={18} />
            </a>
            <a
              href="/prakash_A_resume.docx"
              target="_blank"
              className="flex items-center gap-2 glass hover:bg-white/10 text-white px-6 py-3 rounded-custom font-medium transition-all"
            >
              Download Resume <Download size={18} />
            </a>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
