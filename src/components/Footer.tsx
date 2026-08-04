import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 md:mt-32 border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 md:pt-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">
          
          {/* Column 1: Logo & CTA */}
          <div className="lg:pr-12">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="ShareOnSocial Logo" width={200} height={50} className="h-10 w-auto" />
            </div>
            <p className="mt-6 max-w-sm font-display text-2xl leading-[1.1] tracking-tight md:text-4xl">
              Your Partner in{" "}
              <em className="bg-gradient-to-r from-[color:var(--color-brand-blue)] via-[color:var(--color-brand-pink)] to-[color:var(--color-brand-orange)] bg-clip-text text-transparent not-italic">Business Growth.</em>
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/85 hover:shadow-lg"
            >
              Start Your Growth Plan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Column 2: Company */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Company
            </div>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/solutions"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Solutions
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Portfolio
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Industries
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  About
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Resources
            </div>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Contact
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Blogs
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  FAQs
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@shareonsocial.agency"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Email
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>



          {/* Column 5: Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Contact
            </div>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="mailto:info@shareonsocial.agency"
                  className="group flex items-center gap-3 text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  info@shareonsocial.agency
                </a>
              </li>
              <li className="flex items-center gap-5 pt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61556167821953&ref=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                  aria-label="Facebook"
                >
                  <svg className="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0014.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.29-1.77 1.8-1.77z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/shareonsocial_in?igsh=MThwYmhhdzAzdTNnMg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/share-on-social-sos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a66c2] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Presence Section */}
        <div className="mt-20 border-t border-foreground/10 pt-16">
          <div className="text-center">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Our Presence
            </h3>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-12 text-center md:gap-16">
            
            {/* INDIA */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-4 py-1.5 text-sm font-medium shadow-sm">
                <span>🇮🇳</span> INDIA
              </div>
              <div className="mt-6 text-[15px]">
                <p className="font-medium text-foreground">
                  Head Office: <span className="font-normal text-foreground/70">Gandhinagar, Gujarat</span>
                </p>
                <p className="mt-3 font-medium text-foreground">
                  Cities: <span className="font-normal text-foreground/70">Ahmedabad • Vadodara • Jaipur • Mount Abu • Delhi • Mumbai</span>
                </p>
              </div>
            </div>

            {/* GLOBAL */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-4 py-1.5 text-sm font-medium shadow-sm">
                <span>🌍</span> GLOBAL
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[15px] font-medium text-foreground/70 md:gap-x-6">
                <span>🇺🇸 California, USA</span>
                <span className="hidden md:inline text-foreground/30">•</span>
                <span>🇬🇧 London, UK</span>
                <span className="hidden md:inline text-foreground/30">•</span>
                <span>🇨🇦 Ontario, Canada</span>
                <span className="hidden md:inline text-foreground/30">•</span>
                <span>🇳🇿 Auckland, New Zealand</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 py-8 text-sm text-foreground/60 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4 text-center md:text-left">
            <span>© 2026 ShareOnSocial. All Rights Reserved.</span>
            <span>Unit of Tethorix Technologies</span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
          <span className="text-center md:text-right">Built in India. Growing Brands Worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
