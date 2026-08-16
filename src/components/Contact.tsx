"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Code, Send } from "lucide-react";
import HoverCard from "@/components/HoverCard";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000); // Clear message after 5 seconds
    }
  };

  const contactLinks = [
    {
      icon: <Mail className="text-accent-1" size={32} />,
      label: "Email",
      value: "prakash638306@gmail.com",
      href: "mailto:prakash638306@gmail.com",
    },
    {
      icon: <Phone className="text-accent-2" size={32} />,
      label: "Phone",
      value: "+91 6383481199",
      href: "tel:+916383481199",
    },
    {
      icon: <Globe className="text-accent-1" size={32} />,
      label: "LinkedIn",
      value: "linkedin.com/in/prakash-a",
      href: "https://linkedin.com/in/prakash-a-7a81772bb",
    },
    {
      icon: <Code className="text-accent-2" size={32} />,
      label: "GitHub",
      value: "github.com/prakash638306-spec",
      href: "https://github.com/prakash638306-spec",
    },
  ];

  return (
    <section id="contact" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-1 to-accent-2 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverCard glowColor="var(--glow-1)" className="glass p-8 flex flex-col items-center text-center gap-6 group rounded-custom h-full transition-transform hover:-translate-y-2">
                  <div className="bg-white/5 p-5 rounded-2xl transition-transform group-hover:scale-110 relative z-10">
                    {link.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <h4 className="font-bold text-gray-300 mb-2">
                      {link.label}
                    </h4>
                    <p className="text-gray-400 text-sm truncate w-full max-w-[200px]">
                      {link.value}
                    </p>
                  </div>
                </HoverCard>
              </motion.a>
            ))}
          </div>

          {/* Right: Message Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HoverCard glowColor="var(--glow-2)" className="glass p-8 md:p-10 rounded-custom h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1 transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    required
                    placeholder="How can I help you?"
                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-accent-1 to-accent-2 text-black font-bold rounded-xl shadow-[0_0_15px_var(--glow-1)] hover:shadow-[0_0_25px_var(--glow-1)] transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
                {result && (
                  <p className={`text-center text-sm font-medium ${result.includes("Success") ? "text-green-400" : "text-gray-300"}`}>
                    {result}
                  </p>
                )}
              </form>
            </HoverCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
