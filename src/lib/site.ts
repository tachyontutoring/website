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
    "Two Cambridge students who both scored 1560, coaching the digital SAT one-on-one. The practice is built by Tachyon — our own software — and every question is checked by hand.",
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

export const trustLine = "Your neighborhood tutors · both 99th percentile nationally · took the digital SAT ourselves · now taking classes at Harvard";

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
};
export const tutors: Tutor[] = [
  {
    name: "Conrad Kuzmick",
    monogram: "CK",
    score: "SAT 1560",
    breakdown: "800 Math / 760 R&W",
    school: "Cambridge Rindge & Latin School",
    bio: "Hi, I'm Conrad. I took both the March and June SAT this year, as well as scoring highly on all the Bluebook practice exams. Math is certainly what I enjoy more, but I can tutor both sections well! I lead programming on my school's robotics team when I'm not studying.",
  },
  {
    name: "Filip Knippen",
    monogram: "FK",
    score: "SAT 1560",
    breakdown: "790 Math / 770 R&W",
    school: "Cambridge Rindge & Latin School",
    bio: "Hi, I'm Filip. I also took the March and June SATs. I love both the math and the reading sections, and I'm able to tutor both. Off the clock, I lead Mock Trial at my school.",
  },
];

// 07 — DIGITAL-SAT EDGE
export const edgePoints = [
  {
    label: "BUILT ON THE NEW TEST",
    text: "Every question we drill and every practice test we give you is modeled on the digital, adaptive SAT. The questions are generated based on careful inspection of the current Digital SAT, and they imitate it seamlessly. The format, the pacing, and the questions are the version you'll actually sit.",
  },
  {
    label: "WE'VE ACTUALLY TAKEN IT",
    text: "It's vital that your tutors have sat the real exam, and we have, recently. We know the things a prep book won't tell you. A quick example that not everyone knows about is how the adaptive second math module quietly drops in brutally hard questions to separate the top scorers.",
  },
  {
    label: "REAL FULL-LENGTH PRACTICE",
    text: "You get complete, timed practice tests from us, not loose worksheets. We review each one with you in person, then turn the questions you missed into targeted drilling built for the test as it exists today. On our end, we know exactly what kind of question tripped you up on the practice test, so we can assign that kind of practice.",
  },
];

// 08 — HOW WE USE AI
export const aiParagraph =
  "We use AI to write practice questions and study plans tuned to each student. We don't copy real College Board questions; our bank is original. We have verified that it matches the difficulty of the real SAT, leaning hard, which is something most other custom question banks can't say. And we'll always ask before we use anything from a session. The software does the heavy lifting in assigning practice, so we can spend our time actually teaching.";

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
