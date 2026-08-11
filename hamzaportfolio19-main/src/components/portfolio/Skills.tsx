import { Section } from "./Section";
import { Reveal } from "./Reveal";

const skills = [
  { name: "Power BI", level: 90 },
  { name: "Data Analysis", level: 85 },
  { name: "SQL", level: 80 },
  { name: "Business Intelligence", level: 82 },
  { name: "Dashboard Design", level: 88 },
  { name: "Data Visualization", level: 86 },
  { name: "KPI Reporting", level: 80 },
  { name: "Business Analytics", level: 78 },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Core skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 50}>
            <div className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="flex min-w-0 items-baseline justify-between gap-4">
                <span className="truncate font-display font-medium">{s.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                  {s.level}%
                </span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-foreground transition-[width] duration-1000 ease-out"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
