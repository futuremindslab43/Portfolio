import { ArrowUpRight, Mail } from "lucide-react";
import portrait from "@/assets/hamza-portrait.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="veil pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-border/60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-24 -z-10 h-72 w-72 rotate-12 rounded-[3rem] border border-border/50"
      />

      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs tracking-wide text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Available for freelance work
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.6rem,7vw,4.5rem)] leading-[0.95] font-semibold">
              Hamza Zeeshan
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl">
              AI Automation Developer &amp; Data Analyst
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Aspiring AI Automation Developer and Data Analyst passionate about building
              intelligent automation workflows, transforming data into actionable insights, and
              helping businesses improve efficiency through AI-powered solutions.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-xs md:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-accent/60 blur-2xl"
            />
            <img
              src={portrait}
              alt="Portrait of Hamza Zeeshan"
              width={1024}
              height={1024}
              className="relative w-full rounded-[2rem] object-cover shadow-lift"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
