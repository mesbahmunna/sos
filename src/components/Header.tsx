"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${
          isMenuOpen
            ? "bg-background border-foreground/10"
            : isScrolled
            ? "bg-background/70 border-foreground/10 shadow-sm"
            : "bg-background/40 border-foreground/5 shadow-none"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-12 relative z-50">
          <Link
            className="group flex items-center gap-2 active transition-transform hover:scale-[1.02] active:scale-[0.98]"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image src="/logo.png" alt="ShareOnSocial Logo" width={225} height={56} className="h-10 md:h-11 w-auto" priority />
          </Link>

          <nav className="hidden items-center gap-4 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 text-base font-bold transition-all duration-200 hover:bg-foreground/5 hover:text-foreground active:scale-95 ${
                  pathname.startsWith(link.href) ? "text-foreground bg-foreground/5" : "text-foreground/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/book"
              className="hidden rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:bg-foreground/85 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 md:inline-flex"
            >
              Start Your Project
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-background/50 backdrop-blur-sm transition-all duration-200 hover:bg-foreground/5 hover:scale-105 active:scale-95 lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto bg-background/95 backdrop-blur-xl px-6 pb-12 pt-24 shadow-2xl border-b border-foreground/10"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-display font-bold tracking-tight hover:text-[color:var(--color-brand-orange)] transition-colors hover:translate-x-1 transform duration-200 ${
                      pathname.startsWith(link.href) ? "text-[color:var(--color-brand-orange)]" : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 border-t border-foreground/10 pt-8">
                  <Link
                    href="/book"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-4 text-base font-medium text-background transition-all hover:bg-foreground/85 active:scale-[0.98]"
                  >
                    Start Your Project
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
