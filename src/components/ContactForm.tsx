"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Check, Search } from "lucide-react";
import Link from "next/link";
import { PhoneInput } from "./PhoneInput";

type FieldConfig = {
  id: string;
  question: string;
  subtitle?: string;
  placeholder?: string;
  type: "text" | "textarea" | "searchable-dropdown" | "multi-select" | "multi-field" | "location-autocomplete";
  options?: string[] | ((props?: any) => string[]);
  fields?: { id: string; label: string; type: string; required?: boolean }[];
  optional?: boolean;
};

const steps: FieldConfig[] = [
  {
    id: "location",
    question: "Where is your business located?",
    placeholder: "City, State, Country",
    type: "location-autocomplete",
  },
  {
    id: "industry",
    question: "What industry are you in?",
    type: "searchable-dropdown",
    options: [
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
    ]
  },
  {
    id: "goals",
    question: "What are you looking to improve?",
    type: "multi-select",
    options: [
      "Website",
      "Marketing",
      "Social Media",
      "Leads",
      "Branding",
      "AI",
      "CRM",
      "Automation",
      "Sales",
      "Outdoor Marketing"
    ]
  },
  {
    id: "challenge",
    question: "What's your biggest challenge?",
    placeholder: "Tell us about your biggest challenge...",
    type: "textarea",
    optional: true,
  },
  {
    id: "website",
    question: "What's your business website?",
    placeholder: "https://yourwebsite.com",
    type: "text",
    optional: true,
  },
  {
    id: "contact",
    question: "How can we reach you?",
    type: "multi-field",
    fields: [
      { id: "name", label: "Name *", type: "text", required: true },
      { id: "email", label: "Email *", type: "email", required: true },
      { id: "phone", label: "Phone *", type: "tel", required: true }
    ]
  }
];

const LocationAutocomplete = ({ value, onChange, placeholder, showError }: { value: string, onChange: (v: string) => void, placeholder?: string, showError?: boolean }) => {
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const skipFetch = useRef(false);

  useEffect(() => {
    if (value === "" && query !== "") {
      setQuery("");
    }
  }, [value]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    if (skipFetch.current) {
      skipFetch.current = false;
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`);
        const data = await res.json();
        if (data.features) {
          setResults(data.features);
          setIsOpen(true);
        }
      } catch (err) {
        console.error("Location search failed", err);
      } finally {
        setIsLoading(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSelect = (feature: any) => {
    const p = feature.properties;
    // Format: City, State, Country
    const parts = [p.name, p.state, p.country].filter(Boolean);
    const formatted = parts.join(", ");
    skipFetch.current = true;
    setQuery(formatted);
    onChange(formatted);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        autoFocus
        className={`w-full rounded-2xl border bg-background px-5 py-4 text-lg outline-none transition-colors ${showError ? "border-[color:var(--color-brand-pink)]/50 focus:border-[color:var(--color-brand-pink)]" : "border-foreground/15 placeholder:text-foreground/40 focus:border-foreground/40"}`}
        placeholder={placeholder || "City, State, Country"}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value); // still allow manual entry
        }}
        onFocus={() => { if (results.length > 0) setIsOpen(true); }}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault(); // Prevent form submission if they press enter in search
        }}
      />
      {isLoading && (
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground"></div>
        </div>
      )}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full mt-2 z-50 overflow-hidden rounded-2xl border border-foreground/15 bg-background shadow-2xl"
          >
            {results.map((f, i) => {
              const p = f.properties;
              return (
                <button
                  key={i}
                  type="button"
                  className="w-full text-left px-5 py-3 hover:bg-foreground/5 transition-colors border-b border-foreground/5 last:border-b-0"
                  onClick={() => handleSelect(f)}
                >
                  <div className="text-foreground font-medium">{p.name}</div>
                  <div className="text-foreground/60 text-sm">{[p.state, p.country].filter(Boolean).join(", ")}</div>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SearchableDropdown = ({ options, value, onChange }: { options: string[], value: string, onChange: (v: string) => void }) => {
  const [query, setQuery] = useState("");
  const filtered = options.filter(o => o.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
        <input 
          type="text" 
          className="w-full rounded-2xl border border-foreground/15 bg-background pl-12 pr-5 py-4 text-lg outline-none placeholder:text-foreground/40 focus:border-foreground/40 mb-2" 
          placeholder="Search industry..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
      </div>
      <div className="max-h-[210px] overflow-y-auto rounded-2xl border border-foreground/10 bg-background/50 p-2 flex flex-col gap-1">
        {filtered.map(opt => (
          <button 
            key={opt} 
            type="button"
            onClick={() => onChange(opt)}
            className={`text-left px-4 py-3 rounded-xl transition-colors ${value === opt ? "bg-foreground text-background" : "hover:bg-foreground/5"}`}
          >
            {opt}
          </button>
        ))}
        {filtered.length === 0 && <div className="px-4 py-3 text-foreground/50">No results found.</div>}
      </div>
    </div>
  )
}

const MultiSelect = ({ options, value = [], onChange }: { options: string[], value: string[], onChange: (v: string[]) => void }) => {
  const toggle = (opt: string) => {
    if (value.includes(opt)) onChange(value.filter(v => v !== opt));
    else onChange([...value, opt]);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2">
      {options.map(opt => (
        <button 
          key={opt} 
          type="button"
          onClick={() => toggle(opt)}
          className={`text-left px-5 py-4 rounded-2xl border transition-all ${value.includes(opt) ? "border-foreground bg-foreground text-background" : "border-foreground/15 hover:border-foreground/40"}`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${value.includes(opt) ? "border-background bg-background text-foreground" : "border-foreground/30"}`}>
               {value.includes(opt) && <Check className="w-3.5 h-3.5" />}
            </div>
            {opt}
          </div>
        </button>
      ))}
    </div>
  )
}

const MultiField = ({ fields, formData, setFormData }: { fields: any[], formData: any, setFormData: any }) => {
  return (
    <div className="flex flex-col gap-4">
      {fields.map(f => (
        <div key={f.id}>
          {f.id === "phone" && f.type === "tel" ? (
            <PhoneInput
              name={f.id}
              value={formData[f.id] || ""}
              onChange={(v) => setFormData((prev: any) => ({ ...prev, [f.id]: v }))}
            />
          ) : (
            <input
              type={f.type}
              placeholder={f.label}
              className="w-full rounded-2xl border border-foreground/15 bg-background px-5 py-4 text-lg outline-none placeholder:text-foreground/40 focus:border-foreground/40"
              value={formData[f.id] || ""}
              onChange={(e) => setFormData({ ...formData, [f.id]: e.target.value })}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export function ContactForm({ title = "New enquiry", isBookACall = false }: { title?: string, isBookACall?: boolean }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const currentField = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  
  let isValid = false;
  if (currentField) {
    const currentValue = formData[currentField.id];
    if (currentField.type === "text" || currentField.type === "textarea" || currentField.type === "location-autocomplete") {
      isValid = currentField.optional ? true : (typeof currentValue === "string" && currentValue.trim().length > 0);
    } else if (currentField.type === "searchable-dropdown") {
      isValid = typeof currentValue === "string" && currentValue.length > 0;
    } else if (currentField.type === "multi-select") {
      isValid = Array.isArray(currentValue) && currentValue.length > 0;
    } else if (currentField.type === "multi-field") {
      isValid = currentField.fields?.every(f => !f.required || (typeof formData[f.id] === "string" && formData[f.id].trim().length > 0)) ?? false;
    }
  }

  // Hide error message when user makes changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isValid) setShowError(false);
  }, [formData, currentStep, isValid]);

  const handleNext = () => {
    if (!isValid) {
      setShowError(true);
      return;
    }
    
    setShowError(false);
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else if (isLastStep) {
      submitForm();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setShowError(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentField?.type !== "textarea") {
      e.preventDefault();
      handleNext();
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Failed to submit form');
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2rem] border border-foreground/10 bg-card p-10 text-center shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)] md:p-16"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[color:var(--brand-cyan)]/10 text-[color:var(--brand-cyan)]">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="mt-8 font-display text-4xl tracking-tight">
          Thanks!
        </h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-lg mx-auto">
          We&apos;ll review your answers before the consultation so we can make the best use of our time together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90">
            Back to Home
          </Link>
          <button 
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setCurrentStep(0);
              setFormData({});
            }}
            className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-8 py-4 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Book Another Consultation
          </button>
        </div>
      </motion.div>
    );
  }

  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-[2rem] border border-foreground/10 bg-card p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)] md:p-10"
    >
      <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-foreground/50">
        <span>{title}</span>
        <span>
          0{currentStep + 1} / 0{steps.length}
        </span>
      </div>

      <div className="mb-10 h-1 w-full overflow-hidden rounded-full bg-foreground/10">
        <motion.div
          className="h-full bg-[color:var(--brand-blue)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="min-h-[350px]">
        <AnimatePresence mode="wait">
          {currentField && (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                  {currentField.question}
                </div>
                {currentField.subtitle && (
                  <div className="mt-2 text-sm text-foreground/50">
                    {currentField.subtitle}
                  </div>
                )}
                <div className="mt-6">
                  {currentField.type === "textarea" ? (
                    <textarea
                      autoFocus
                      className={`w-full resize-none rounded-2xl border bg-background px-5 py-4 text-lg outline-none transition-colors min-h-[120px] ${showError ? "border-[color:var(--color-brand-pink)]/50 focus:border-[color:var(--color-brand-pink)]" : "border-foreground/15 placeholder:text-foreground/40 focus:border-foreground/40"}`}
                      placeholder={currentField.placeholder}
                      value={formData[currentField.id] || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, [currentField.id]: e.target.value })
                      }
                    />
                  ) : currentField.type === "location-autocomplete" ? (
                    <LocationAutocomplete
                      value={formData[currentField.id] || ""}
                      onChange={(v) => setFormData({ ...formData, [currentField.id]: v })}
                      placeholder={currentField.placeholder}
                      showError={showError}
                    />
                  ) : currentField.type === "searchable-dropdown" ? (
                      <SearchableDropdown 
                        options={(currentField.options as string[])?.concat(isBookACall && currentField.id === 'industry' ? ["Other"] : []) || []} 
                        value={formData[currentField.id] || ""} 
                        onChange={(v) => setFormData({ ...formData, [currentField.id]: v })} 
                      />
                  ) : currentField.type === "multi-select" ? (
                    <MultiSelect 
                      options={(currentField.options as string[]) || []} 
                      value={formData[currentField.id] || []} 
                      onChange={(v) => setFormData({ ...formData, [currentField.id]: v })} 
                    />
                  ) : currentField.type === "multi-field" ? (
                    <MultiField 
                      fields={currentField.fields || []} 
                      formData={formData} 
                      setFormData={setFormData} 
                    />
                  ) : (
                    <input
                      type={currentField.type}
                      autoFocus
                      className={`w-full rounded-2xl border bg-background px-5 py-4 text-lg outline-none transition-colors ${showError ? "border-[color:var(--color-brand-pink)]/50 focus:border-[color:var(--color-brand-pink)]" : "border-foreground/15 placeholder:text-foreground/40 focus:border-foreground/40"}`}
                      placeholder={currentField.placeholder}
                      value={formData[currentField.id] || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, [currentField.id]: e.target.value })
                      }
                      onKeyDown={handleKeyDown}
                    />
                  )}
                  
                  {showError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="mt-3 text-sm text-[color:var(--color-brand-pink)] font-medium"
                    >
                      Please complete this step before continuing.
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0 || isSubmitting}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm disabled:opacity-30 transition-opacity"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background disabled:opacity-40 transition-opacity"
        >
          {isSubmitting ? "Submitting..." : isLastStep ? "Submit Your Request" : "Continue"}
          {!isSubmitting && !isLastStep && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>
    </motion.div>
  );
}
