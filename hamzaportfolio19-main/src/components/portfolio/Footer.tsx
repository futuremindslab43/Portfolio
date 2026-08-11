import { Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-14">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_1fr_auto]">
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold">Hamza Zeeshan</p>
          <p className="mt-1 text-sm text-muted-foreground">
            AI Automation Developer &amp; Data Analyst
          </p>
        </div>
        <nav>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#home"
              aria-label="Social profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-5xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hamza Zeeshan. All rights reserved.
      </p>
    </footer>
  );
}
