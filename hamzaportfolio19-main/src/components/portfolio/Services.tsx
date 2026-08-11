import { BarChart3, Brain, Eye, FileSpreadsheet, LayoutDashboard, Target } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: LayoutDashboard,
    title: "Power BI Dashboard Development",
    body: "Create professional, interactive, and business-ready Power BI dashboards.",
  },
  {
    icon: FileSpreadsheet,
    title: "Data Analysis & Reporting",
    body: "Analyze business data, generate insights, build reports, and help organizations make data-driven decisions.",
  },
];

const reasons = [
  { icon: Target, title: "Business-Focused Solutions" },
  { icon: BarChart3, title: "Interactive Dashboards" },
  { icon: Eye, title: "Clean Data Visualization" },
  { icon: Brain, title: "Continuous Learning & Improvement" },
];

export function Services() {
  return (
    <>
      <Section id="services" eyebrow="Services" title="How I can help">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="group h-full rounded-[2rem] border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon size={18} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="why" eyebrow="Why choose me" title="Built around business outcomes">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <r.icon size={18} className="text-muted-foreground" />
                <p className="mt-5 font-display font-semibold">{r.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
