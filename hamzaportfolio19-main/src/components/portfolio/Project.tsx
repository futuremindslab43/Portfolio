import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Info } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import dashboard from "@/assets/dashboard-real.jpg";
import preview2 from "@/assets/dashboard-preview-2.jpg";
import preview3 from "@/assets/dashboard-preview-3.jpg";

const slides = [
  {
    url: dashboard,
    alt: "Power BI sales analytics dashboard with KPI cards, revenue trend, profit by state and payment mode breakdown",
    label: "Sales Overview",
  },
  {
    url: preview2,
    alt: "Executive overview dashboard with revenue trend, category performance and top products",
    label: "Executive Overview",
  },
  {
    url: preview3,
    alt: "Dashboard with state-wise sales map, payment mode distribution and customer insights",
    label: "Customer & Region Insights",
  },
];

const features = [
  "KPI Cards",
  "Revenue Analysis",
  "Profit Analysis",
  "Sales Trends",
  "Category Performance",
  "Payment Mode Analysis",
  "Customer Insights",
  "State-wise Sales Performance",
  "Dynamic Filters",
  "Interactive Visualizations",
  "Professional Business Theme",
];

export function Project() {
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <Section id="projects" eyebrow="Featured project" title="Power BI Sales Performance Dashboard">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="min-w-0">
          <div className="glass overflow-hidden rounded-[2rem] p-3 shadow-lift">
            <div className="relative overflow-hidden rounded-[1.4rem] bg-muted">
              {slides.map((s, i) => (
                <img
                  key={s.url}
                  src={s.url}
                  alt={s.alt}
                  loading="lazy"
                  width={1376}
                  height={768}
                  className={
                    i === index
                      ? "w-full transition-opacity duration-500"
                      : "pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500"
                  }
                />
              ))}
              <button
                type="button"
                aria-label="Previous screenshot"
                onClick={() => go(-1)}
                className="glass absolute top-1/2 left-3 -translate-y-1/2 rounded-full p-2 transition-transform hover:-translate-y-[calc(50%+2px)]"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next screenshot"
                onClick={() => go(1)}
                className="glass absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-2 transition-transform hover:-translate-y-[calc(50%+2px)]"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="flex items-center justify-between gap-4 px-3 pt-3">
              <p className="text-xs text-muted-foreground">{slides[index]?.label}</p>
              <div className="flex gap-1.5">
                {slides.map((s, i) => (
                  <button
                    key={s.url}
                    type="button"
                    aria-label={`Show ${s.label}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-foreground" : "w-1.5 bg-border"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>



        <Reveal delay={120} className="min-w-0">
          <p className="leading-relaxed text-muted-foreground">
            Power BI Sales Performance Dashboard is a modern and interactive business intelligence
            dashboard designed to monitor key sales metrics, profit trends, customer performance,
            and business growth.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {features.map((f) => (
              <li
                key={f}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
              >
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <ExternalLink size={15} />
              Live Preview
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Info size={15} />
              View Details
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
