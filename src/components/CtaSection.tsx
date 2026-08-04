import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Props = {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  smallHeading?: boolean;
  className?: string;
};

export function CtaSection({ heading, description, primaryBtnText = "Let's grow", secondaryBtnText = "WhatsApp us", smallHeading = false, className }: Props) {
  const defaultHeading = (
    <>
      Your next stage of growth{" "}
      <span className="bg-gradient-to-r from-[color:var(--brand-orange)] via-[color:var(--brand-pink)] to-[color:var(--brand-cyan)] bg-clip-text text-transparent">
        starts here
      </span>
      .
    </>
  );

  return (
    <section className={className || "mx-auto mt-16 max-w-[1400px] px-6 md:mt-32 lg:mt-48 md:px-10"}>
      <div className="grain relative overflow-hidden rounded-[2.5rem] bg-foreground p-8 text-background md:p-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.62 0.24 25 / 0.7), transparent)",
            }}
          ></div>
          <div
            className="absolute -bottom-24 right-0 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.56 0.2 255 / 0.7), transparent)",
            }}
          ></div>
          <div
            className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.72 0.18 55 / 0.8), transparent)",
            }}
          ></div>
        </div>
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.3em] opacity-70">
            The next chapter
          </div>
          <h2 
            className={`mt-4 ${smallHeading ? 'md:w-[85%] text-[clamp(1.5rem,3.5vw,3.5rem)]' : 'max-w-[16ch] text-4xl sm:text-5xl md:text-[clamp(2.5rem,7.5vw,7.5rem)]'} font-display leading-[1.05] tracking-[-0.04em] text-balance pb-4`}
          >
            {heading || defaultHeading}
          </h2>
          {description && (
            <p className="mt-4 max-w-3xl text-lg text-background/80 md:text-xl">
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground transition hover:bg-background/90"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-background/25 px-7 py-4 text-sm font-medium hover:bg-background/10 text-background"
            >
              Connect Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
