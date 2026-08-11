// EmailJS configuration.
// These are publishable, client-side identifiers (safe in the codebase).
// Get them from https://dashboard.emailjs.com:
//  - Service ID:  Email Services
//  - Template ID: Email Templates
//  - Public Key:  Account > General
export const EMAILJS_SERVICE_ID = "service_bx54jjr";
export const EMAILJS_TEMPLATE_ID = "template_uwi1cra";
export const EMAILJS_PUBLIC_KEY = "omJCxUxYkxymIquXJ";

export const emailjsConfigured = ![
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
].some((v) => !v || v.startsWith("YOUR_"));
