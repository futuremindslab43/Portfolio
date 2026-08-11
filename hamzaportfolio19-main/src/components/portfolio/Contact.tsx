import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  emailjsConfigured,
} from "@/lib/emailjs";

const EMAIL = "hamzadev608@gmail.com";


const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  subject: z.string().trim().min(3, "Please add a subject").max(150, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(2000, "Message is too long"),
});

type ContactValues = z.infer<typeof contactSchema>;

const fieldClass =
  "peer w-full rounded-2xl border bg-card px-4 pt-6 pb-2 text-sm outline-none transition-colors placeholder-transparent focus:border-foreground";

export function Contact() {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    setSending(true);
    try {
      if (emailjsConfigured) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: values.name,
            from_email: values.email,
            reply_to: values.email,
            subject: values.subject,
            message: values.message,
            to_email: EMAIL,
          },
          { publicKey: EMAILJS_PUBLIC_KEY },
        );
        toast.success("Message sent — I'll get back to you soon.");
        reset();
        return;
      }

      const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
      const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        values.subject,
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      toast.success("Opening your email app with the message ready to send.");
      reset();
    } catch (err) {
      const detail =
        typeof err === "object" && err !== null && "text" in err
          ? String((err as { text: unknown }).text)
          : "";
      toast.error(
        `Couldn't send your message${detail ? `: ${detail}` : ""}. Please email ${EMAIL} directly.`,
      );
    } finally {
      setSending(false);
    }
  };


  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something useful"
      intro="Have a dashboard, automation, or analytics project in mind? Send a message."
    >
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="space-y-4">
          <a
            href={`mailto:${EMAIL}`}
            className="flex min-w-0 items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent">
              <Mail size={16} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Email</span>
              <span className="block truncate text-sm font-medium">{EMAIL}</span>
            </span>
          </a>
          <a
            href="tel:03112236699"
            className="flex min-w-0 items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent">
              <Phone size={16} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Phone</span>
              <span className="block truncate text-sm font-medium">03112236699</span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid gap-4 rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <input
                  id="name"
                  placeholder="Name"
                  aria-invalid={!!errors.name}
                  className={`${fieldClass} ${errors.name ? "border-destructive" : "border-border"}`}
                  {...register("name")}
                />
                <label
                  htmlFor="name"
                  className="pointer-events-none absolute top-2 left-4 text-xs text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Name
                </label>
                {errors.name && (
                  <p className="mt-1 px-1 text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  aria-invalid={!!errors.email}
                  className={`${fieldClass} ${errors.email ? "border-destructive" : "border-border"}`}
                  {...register("email")}
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-2 left-4 text-xs text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Email
                </label>
                {errors.email && (
                  <p className="mt-1 px-1 text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="relative">
              <input
                id="subject"
                placeholder="Subject"
                aria-invalid={!!errors.subject}
                className={`${fieldClass} ${errors.subject ? "border-destructive" : "border-border"}`}
                {...register("subject")}
              />
              <label
                htmlFor="subject"
                className="pointer-events-none absolute top-2 left-4 text-xs text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
              >
                Subject
              </label>
              {errors.subject && (
                <p className="mt-1 px-1 text-xs text-destructive">{errors.subject.message}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows={5}
                placeholder="Message"
                aria-invalid={!!errors.message}
                className={`${fieldClass} ${errors.message ? "border-destructive" : "border-border"}`}
                {...register("message")}
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute top-2 left-4 text-xs text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
              >
                Message
              </label>
              {errors.message && (
                <p className="mt-1 px-1 text-xs text-destructive">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send size={15} />
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
