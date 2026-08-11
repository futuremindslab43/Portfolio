import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{eyebrow}</p>
          <h2 className="mt-3 text-[clamp(1.9rem,4vw,2.9rem)] leading-tight font-semibold">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
