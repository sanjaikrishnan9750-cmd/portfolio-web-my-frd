"use client";

import { useState, useEffect } from "react";
import { Menu, X, Monitor, Cpu } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[90] transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-black text-white tracking-tighter">
          Prakash<span className="text-accent-1">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-display font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-4 w-px bg-white/20 mx-2"></div>
          
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "classic" ? "cyber" : "classic")}
              className="p-2 glass rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2 group"
              title="Toggle Theme"
            >
              {theme === "classic" ? (
                <Cpu size={18} className="text-accent-2 group-hover:scale-110 transition-transform" />
              ) : (
                <Monitor size={18} className="text-accent-1 group-hover:scale-110 transition-transform" />
              )}
            </button>
          )}

          <a
            href="/prakash_A_resume.docx"
            target="_blank"
            className="px-5 py-2 bg-gradient-to-r from-accent-1 to-accent-2 text-black rounded-custom font-display font-bold uppercase text-sm shadow-[0_0_15px_var(--glow-1)] hover:shadow-[0_0_25px_var(--glow-1)] transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-main)] border-b border-white/10 py-6 px-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display font-bold uppercase tracking-widest text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "classic" ? "cyber" : "classic")}
              className="flex items-center gap-3 text-lg font-display font-bold uppercase tracking-widest text-gray-300 hover:text-white"
            >
              {theme === "classic" ? (
                <><Cpu size={20} className="text-accent-2" /> Switch to Cyber Theme</>
              ) : (
                <><Monitor size={20} className="text-accent-1" /> Switch to Classic Theme</>
              )}
            </button>
          )}

          <a
            href="/prakash_A_resume.docx"
            target="_blank"
            className="px-5 py-3 bg-gradient-to-r from-accent-1 to-accent-2 text-black text-center rounded-custom font-display font-bold uppercase text-sm w-full"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
