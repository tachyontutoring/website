/**
 * Single source of truth for site content. Edit these arrays — components
 * render straight from them, so no JSX changes are needed.
 */

export const site = {
  name: "Tachyon",
  wordmark: "TACHYON",
  tagline: "SAT tutoring from two students who actually aced it.",
  blurb:
    "Two Cambridge students who both scored 1560, coaching the digital SAT one-on-one. It's backed by software that drills exactly what you keep getting wrong.",
  email: "hello@tachyonprep.com",
  instagram: "tachyonprep",
  instagramUrl: "https://instagram.com/tachyonprep",
  // Swap for your real Calendly link. Search the repo for REPLACE-ME.
  calendlyUrl: "https://calendly.com/REPLACE-ME",
  url: "https://tachyonprep.com",
  copyrightYear: 2026,
} as const;

export const nav = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Tutors", href: "/tutors" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
] as const;

export const trustLine = "Both 1560 · top 1% nationally · took the digital SAT ourselves · now at Harvard";

// THE SYSTEM (process sequence)
export type SystemStep = { title: string; body: string; tag: string };
export const systemSteps: SystemStep[] = [
  {
    title: "We teach you, one-on-one",
    body: "You sit down with one of us for a real session. Actual instruction and strategy, not a video to watch alone.",
    tag: "coach",
  },
  {
    title: "We write down what tripped you up",
    body: "Every question you miss gets noted by type, so we know it was “systems of equations” and not just “math, needs work.”",
    tag: "track",
  },
  {
    title: "The software builds practice for it",
    body: "It writes fresh questions aimed at the exact things you keep losing points on. You practice your weak spots, not random problems.",
    tag: "generate",
  },
  {
    title: "We check every question",
    body: "Nothing goes out until we've read it ourselves and confirmed it's correct and actually looks like the real SAT.",
    tag: "verify",
  },
  {
    title: "Your plan changes as you improve",
    body: "As your weak spots close, the practice shifts to whatever's holding you back next. It keeps up with you.",
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
  role: string;
  score: string;
  breakdown: string;
  school: string;
  bio: string;
  specialty: string;
};
export const tutors: Tutor[] = [
  {
    name: "Conrad Kuzmick",
    monogram: "CK",
    role: "Head of Math",
    score: "SAT 1560",
    breakdown: "800 Math, perfect",
    school: "Cambridge Rindge & Latin School",
    bio: "Math is where Conrad is sharpest. He makes it feel like a system instead of a wall, the same handful of patterns dressed up in new problems. That said, he's strong across the whole test, reading and writing included, and he took the digital SAT himself without missing a math question. When he's not tutoring, he's the programming lead on the school's robotics team.",
    specialty: "SAT Math, especially students pushing for 1500+",
  },
  {
    name: "Filip Knippen",
    monogram: "FK",
    role: "Head of Reading & Writing",
    score: "SAT 1560",
    breakdown: "770 R&W · 790 Math",
    school: "Cambridge Rindge & Latin School",
    bio: "Reading and writing is Filip's strong suit. He turns a section that feels like guesswork into rules you can actually trust. He's just as comfortable in the math section, and he took the current SAT recently enough to remember every spot where students second-guess themselves. Off the clock, he started the school's mock trial team and talked three real attorneys into coaching it.",
    specialty: "SAT Reading & Writing and grammar, especially students chasing a top verbal score",
  },
];

// SERVICES & PRICING (one consolidated editorial table)
export type Offering = {
  name: string;
  what: string;
  who: string;
  price: string;
  priceNote?: string;
  flag?: string;
  recommended?: boolean;
};
export const offerings: Offering[] = [
  {
    name: "1:1 Tutoring",
    what: "Private sessions plus personalized AI homework aimed at your exact weak spots.",
    who: "Focused gains on a flexible schedule.",
    price: "$55–70 / hr",
    priceNote: "$55 founding rate, $70 standard",
  },
  {
    name: "Prep Membership",
    what: "Weekly 1:1, unlimited personalized homework, full question-bank access, and a monthly progress report.",
    who: "Students who want the whole system, continuously.",
    price: "$350 / mo",
    flag: "Flagship",
    recommended: true,
  },
  {
    name: "Summer Score Bootcamp",
    what: "A small group of 3–5: diagnostic, targeted instruction, weekly timed practice, and a final mock.",
    who: "Students who like momentum and a cohort.",
    price: "$45 / student / hr",
    flag: "Recommended",
    recommended: true,
  },
  {
    name: "Diagnostic + Game Plan",
    what: "A full official Bluebook practice test plus a written, question-type-level study plan.",
    who: "Finding out exactly where your points are hiding.",
    price: "Free",
    priceNote: "with any package",
  },
];

export const pricingNotes = [
  "10-session 1:1 package, $630 (about 10% off hourly)",
  "Free “Digital SAT 101” info session",
];

// 07 — DIGITAL-SAT EDGE
export const edgePoints = [
  {
    label: "SECTION-ADAPTIVE",
    text: "Your Module 1 performance sets the difficulty ceiling for Module 2. We drill Module 1 accuracy first, since it's what unlocks the higher-scoring questions.",
  },
  {
    label: "BUILT FOR BLUEBOOK",
    text: "The test lives in the College Board's Bluebook app with a built-in Desmos calculator. We teach you when Desmos saves time and when it costs you.",
  },
  {
    label: "SHORTER READING",
    text: "Reading & Writing is now short, single-paragraph questions. We train the exact question types so you recognize patterns instead of re-reading.",
  },
];

// 08 — HOW WE USE AI
export const aiParagraph =
  "We use AI to write practice questions and study plans tuned to each student. Before any of it reaches you, we read through it ourselves and throw out anything that isn't right. We don't copy real College Board questions; our bank is original. And we'll always ask before we use anything from a session. The software does the heavy lifting so we can spend our time actually teaching.";

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
    a: "Both. We tutor over video with a shared whiteboard, and meet in person around Cambridge when it's a fit. You pick whatever keeps sessions consistent.",
  },
  {
    q: "How is the new digital SAT different?",
    a: "It's shorter, section-adaptive, and taken in the College Board's Bluebook app with a built-in Desmos calculator. Your Module 1 performance sets the difficulty of Module 2, so early accuracy matters more than ever. We sat for this exact test, so we coach to it, not the retired paper version.",
  },
  {
    q: "How does the AI part actually work? Is it just ChatGPT?",
    a: "Not really. We built our own setup that keeps track of the questions you miss and writes new practice aimed at those exact types. The difference is that we read every question it produces before you ever see it. So it's not you alone with a chatbot. It's a tool we use to spend our time on the stuff that actually needs a person.",
  },
  {
    q: "Is my student's data private?",
    a: "Yes. We never sell or share data. We ask for explicit parent consent before using any session transcript, and our question bank is original, so we don't feed real College Board material into anything.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on your starting point and goal, but most students see meaningful movement in 8–12 sessions. The free diagnostic gives us the data to give you an honest estimate before you commit.",
  },
  {
    q: "How do payments work?",
    a: "Pay hourly, buy the 10-session package up front to save ~10%, or join the monthly Prep Membership. We confirm the rate and details after your diagnostic. No surprises.",
  },
  {
    q: "How do we start?",
    a: "Book a free diagnostic below, or send the quick request form. We'll email within a day to set up your Bluebook practice test and first session.",
  },
];

export const gradeOptions = ["Rising 10th", "Rising 11th", "Rising 12th"] as const;
export const sectionOptions = ["Math", "Reading & Writing", "Full test"] as const;
export const formatOptions = ["Online", "In person"] as const;
