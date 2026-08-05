"use client";

import { useState, useRef } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PhoneInput } from "./PhoneInput";
import ReCAPTCHA from "react-google-recaptcha";

const industries = [
  "Restaurants & Cafés",
  "Hotels & Hospitality",
  "Healthcare & Wellness",
  "Dental & Medical Clinics",
  "Retail & E-commerce",
  "Education & Training",
  "Real Estate & Property",
  "Construction & Trades",
  "Home Services",
  "Professional Services",
  "Finance & Accounting",
  "Legal Services",
  "Beauty & Personal Care",
  "Fitness & Sports",
  "Automotive",
  "Travel & Tourism",
  "Events & Entertainment",
  "Nonprofits & Community Organisations",
  "Manufacturing & Wholesale",
  "Logistics & Transport",
  "Technology & SaaS",
  "Startups",
  "Agriculture & Food Production",
  "Franchises & Multi-location Businesses"
];

export function SimpleContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    message: "",
    privacyAccepted: false
  });
  
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted || !recaptchaToken) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          industry: "",
          message: "",
          privacyAccepted: false
        });
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        console.error('Failed to submit form');
        alert('Failed to send message. Please try again.');
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    const checked = (e.target as any).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center rounded-[32px] bg-[#FAFAFA] border border-[rgba(0,0,0,0.04)] py-16 px-8 text-center"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--color-brand-cyan)]/5 text-[color:var(--color-brand-cyan)]">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="mb-2 font-display text-3xl font-medium tracking-tight text-foreground">Message Sent</h3>
            <p className="text-foreground/60 max-w-sm mx-auto">
              Thank you for reaching out. A member of our team will get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full" suppressHydrationWarning>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-lg outline-none placeholder:text-foreground/40 focus:border-foreground/40 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Business Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-lg outline-none placeholder:text-foreground/40 focus:border-foreground/40 transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground/80">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-lg outline-none placeholder:text-foreground/40 focus:border-foreground/40 transition-colors"
                    placeholder="Your Company Ltd"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Phone Number</label>
                  <PhoneInput
                    name="phone"
                    value={formData.phone}
                    onChange={(v) => setFormData(prev => ({ ...prev, phone: v }))}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="industry" className="text-sm font-medium text-foreground/80">Industry / Business Type</label>
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-lg outline-none focus:border-foreground/40 transition-colors text-foreground/80"
                  >
                    <option value="" disabled>Select your industry...</option>
                    {industries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Tell us about your project or goals *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-lg outline-none placeholder:text-foreground/40 focus:border-foreground/40 transition-colors"
                  placeholder="How can we help you grow?"
                />
              </div>

              <div className="flex items-start gap-3 mt-2">
                <div className="flex h-6 items-center">
                  <input
                    id="privacy"
                    name="privacyAccepted"
                    type="checkbox"
                    required
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-foreground/15 text-[color:var(--brand-orange)] focus:ring-[color:var(--brand-orange)] cursor-pointer"
                  />
                </div>
                <label htmlFor="privacy" className="text-sm text-foreground/60 leading-relaxed cursor-pointer select-none">
                  I agree to the <Link href="/privacy" className="underline hover:text-foreground transition-colors">Privacy Policy</Link> and consent to being contacted regarding my enquiry. *
                </label>
              </div>

              {/* Google reCAPTCHA v2 */}
              <div className="mt-2 flex justify-center md:justify-start">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LeRM3YtAAAAAKzoFzzuuMldCpbTUAWg9FlDC3e2"
                  onChange={(token) => setRecaptchaToken(token)}
                  theme="light"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.privacyAccepted || !recaptchaToken}
                className="mt-2 inline-flex h-14 w-full items-center justify-center rounded-full bg-foreground px-8 text-lg font-medium text-background transition-all hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-background/20 border-t-background" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
              
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
