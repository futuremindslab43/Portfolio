import { BarChart3, Briefcase, GraduationCap, LineChart } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const bio = [
  "My name is Hamza Zeeshan, and I am an aspiring AI Automation Developer and Data Analyst with a strong passion for using technology to solve real-world business problems.",
  "I specialize in building intelligent automation workflows using n8n, integrating APIs, webhooks, and AI models to streamline repetitive tasks and improve business efficiency.",
  "I also have experience in Power BI and SQL, enabling me to transform raw data into meaningful insights through interactive dashboards and data-driven reporting.",
  "I am particularly interested in combining artificial intelligence, automation, and data analytics to develop practical solutions that save time, enhance productivity, and deliver measurable value.",
  "My long-term goal is to establish myself as a successful freelancer, create and sell high-quality digital products, build innovative AI-powered solutions for businesses, and eventually grow my own AI-focused company.",
  "I am passionate about continuous learning, embracing new technologies, and turning creative ideas into impactful products that make a meaningful difference.",
];

const education = [
  { title: "Government National College", status: "Current Student", icon: GraduationCap },
  { title: "Matric", status: "Completed", icon: GraduationCap },
];

const experience = [
  {
    title: "Freelance Projects",
    icon: Briefcase,
    detail: "Independent client work across analytics and automation.",
  },
  {
    title: "Data Analysis",
    icon: LineChart,
    detail: "Cleaning, modelling and interpreting business datasets.",
  },
  {
    title: "Power BI Dashboard Development",
    icon: BarChart3,
    detail: "Interactive, business-ready reporting dashboards.",
  },
  {
    title: "Personal Analytics Projects",
    icon: LineChart,
    detail: "Self-directed practice on real-world datasets.",
  },
  {
    title: "Personal Projects",
    icon: Briefcase,
    detail: "Experiments with AI workflows and automation tooling.",
  },
];

export function About() {
  return (
    <>
      <Section id="about" eyebrow="About" title="A short introduction">
        <div className="grid gap-10 md:grid-cols-2">
          {[bio.slice(0, 3), bio.slice(3)].map((column, ci) => (
            <div key={ci} className="space-y-5">
              {column.map((p, i) => (
                <Reveal key={p} delay={i * 60}>
                  <p className="leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-lg font-semibold">Education</h3>
          </Reveal>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal as="li" key={e.title} delay={i * 90}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <e.icon size={18} className="text-muted-foreground" />
                  <p className="mt-4 font-display font-semibold">{e.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.status}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="What I've been working on"
        intro="Worked independently on data visualization, dashboard creation, and business analytics solutions while continuously improving technical skills."
      >
        <ol className="relative border-l border-border pl-6 sm:pl-8">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 70} className="relative pb-8 last:pb-0">
              <span className="absolute top-1.5 -left-[calc(1.5rem+5px)] grid h-2.5 w-2.5 place-items-center rounded-full bg-foreground sm:-left-[calc(2rem+5px)]" />
              <div className="flex min-w-0 items-start gap-3">
                <e.icon size={18} className="mt-0.5 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <p className="font-display font-semibold">{e.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
