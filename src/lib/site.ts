/**
 * Single source of truth for site content. Edit these arrays — components
 * render straight from them, so no JSX changes are needed.
 */

export const site = {
  name: "School of Athens",
  wordmark: "School of Athens",
  parent: "Tachyon", // the engine + parent company; surfaced as "Powered by Tachyon"
  tagline: "One-on-one digital-SAT tutoring in the oldest tradition.",
  blurb:
    "Two Cambridge Rindge & Latin students who both scored 1560, coaching the digital SAT one-on-one. Practice that adapts to exactly what you miss, every question checked by hand.",
  // Swap for your real Calendly link. Search the repo for REPLACE-ME.
  calendlyUrl: "https://calendly.com/cgkuzmick/30min",
  url: "https://schoolofathens.org",
  copyrightYear: 2026,
} as const;

// Personal contacts — you reach one of us directly, not a company inbox.
export const contacts = [
  { first: "Filip", email: "filipknippen@gmail.com" },
  { first: "Conrad", email: "cgkuzmick@gmail.com" },
] as const;

export const nav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Tutors", href: "/tutors" },
  { label: "FAQ", href: "/faq" },
] as const;

// The engine story — lives in the footer colophon. School of Athens is the
// tutoring; Tachyon is the software that powers the practice.
export const tachyonNote =
  "The teaching is human. The practice is powered by Tachyon — our own software. It tracks every question you miss and writes fresh practice aimed at those exact weak spots, and before any of it reaches you, one of us reads it and throws out whatever isn't right. The machine does the drilling so we can spend our time actually teaching.";

// THE SYSTEM (process sequence)
export type SystemStep = { title: string; body: string; tag: string };
export const systemSteps: SystemStep[] = [
  {
    title: "We teach you, one-on-one",
    body: "You sit down with one of us for a real session. We review your mistakes and teach you new concepts.",
    tag: "coach",
  },
  {
    title: "We write down and store what you need help with",
    body: "Every question you miss gets noted by ultra-specific type, so we know what exact kind of question tripped you up and not just “Algebra, needs work.”",
    tag: "track",
  },
  {
    title: "The software builds practice for it",
    body: "It finds custom questions aimed at the exact things you keep losing points on. In your practice, you won’t be wasting any time, because you’ll be exclusively drilling the concepts that you actually need to improve on.",
    tag: "generate",
  },
  {
    title: "Your plan changes as you improve",
    body: "As your weak spots close, the practice shifts to whatever's holding you back next. In lockstep with the actual tutoring sessions, the software will adjust your practice to your new weak points.",
    tag: "adapt",
  },
];

// 03 — WHY US (annotated stats)
export type Stat = { value: string; label: string; note: string };
export const stats: Stat[] = [
  { value: "1560", label: "Two matching scores", note: "Both tutors. Top 1% nationally." },
  { value: "800", label: "Perfect math score", note: "Conrad, on the SAT math section." },
  { value: "100%", label: "Human-verified AI", note: "Every generated question, checked." },
  { value: "2.0", label: "Digital-SAT native", note: "We took the new adaptive test, not the old paper one." },
];

// 04 — TUTORS
export type Tutor = {
  name: string;
  monogram: string;
  score: string;
  breakdown: string;
  school: string;
  bio: string;
  hook: string; // one-line version of bio, for the homepage brief
};
export const tutors: Tutor[] = [
  {
    name: "Conrad Kuzmick",
    monogram: "CK",
    score: "SAT 1560",
    breakdown: "800 Math / 760 R&W",
    school: "Cambridge Rindge & Latin School",
    bio: "Hi, I'm Conrad. I took both the March and June SAT this year, as well as scoring highly on all the Bluebook practice exams. Math is certainly what I enjoy more, but I can tutor both sections well! I lead programming on my school's robotics team when I'm not studying.",
    hook: "Hi, I'm Conrad — 1560, 800 on math. I lead programming on my school's robotics team when I'm not tutoring.",
  },
  {
    name: "Filip Knippen",
    monogram: "FK",
    score: "SAT 1560",
    breakdown: "790 Math / 770 R&W",
    school: "Cambridge Rindge & Latin School",
    bio: "Hi, I'm Filip. I also took the March and June SATs. I love both the math and the reading sections, and I'm able to tutor both. Off the clock, I lead Mock Trial at my school.",
    hook: "Hi, I'm Filip — 1560, split almost evenly between math and reading. Off the clock, I lead Mock Trial at my school.",
  },
];

// 07 — WHAT YOU ACTUALLY GET (the short version, consolidated: used to be a
// separate "digital SAT edge" section plus a separate "how we use AI" section;
// merged into one tight block so the how-it-works page doesn't run long).
export const tachyonFacts = [
  "Modeled on the current digital, adaptive SAT, not the old paper test — same format, same pacing, same kind of questions you'll actually sit.",
  "We've taken the real thing ourselves, recently, so we know things a prep book won't tell you.",
  "Every generated question is read and checked by one of us before it reaches you.",
  "Our question bank is original. We never copy real College Board questions.",
];

// 09 — TESTIMONIALS
export type Testimonial = { quote: string; author: string; detail: string; ref: string };
export const testimonials: Testimonial[] = [
  { quote: "[Testimonial coming soon]", author: "Parent of a rising senior", detail: "Cambridge, MA", ref: "T-01" },
  { quote: "[Testimonial coming soon]", author: "Rising junior", detail: "Math + R&W", ref: "T-02" },
  { quote: "[Testimonial coming soon]", author: "Parent of a rising junior", detail: "Prep Membership", ref: "T-03" },
];

// 10 — FAQ
export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  {
    q: "Online or in person?",
    a: "Both. We can tutor over Zoom with a shared whiteboard, or meet in person around Cambridge. We can be flexible with timing, location, and online vs. in person. You choose what will be the best fit for you.",
  },
  {
    q: "How does the AI part actually work? Is it just ChatGPT?",
    a: "No. We built our own setup that keeps track of the questions you miss and finds new practice aimed at those exact types. We have a bank of specific labeled questions to give you, and our tools allow us to identify which practice will help you improve the most. It's a tool we use to spend our time on the stuff that actually needs a person.",
  },
  {
    q: "Is my student's data private?",
    a: "Yes. We never sell or share data, and we will explicitly ask if we want to use session transcripts to help see what you or your student needed help with.",
  },
  {
    q: "How do payments work?",
    a: "Pay hourly, or join the monthly Prep Membership. If you commit for longer (like 3 months), the rate goes down. We confirm the rate and details after your diagnostic.",
  },
  {
    q: "How do we start?",
    a: "Book a free diagnostic below, or send the quick request form. We'll email within a day to set up your Bluebook practice test and first session.",
  },
];

export const gradeOptions = ["Rising 10th", "Rising 11th", "Rising 12th"] as const;
export const sectionOptions = ["Math", "Reading & Writing", "Full test"] as const;
export const formatOptions = ["Online", "In person"] as const;
