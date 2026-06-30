import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, EB_Garamond, Space_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// School of Athens type system, sampled from the fresco's world:
// Display: Cormorant Garamond (high-contrast Renaissance headlines + quotes).
// Inscription: Cinzel (lapidary Roman caps — wordmark, eyebrows).
// Body: EB Garamond (humanist book face, period-correct to Raphael).
// Mono: Space Mono (the "Tachyon engine" voice — scores, prices, data).
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Cambria", "Georgia", "serif"],
});
const inscription = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inscription",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
const sans = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Cambria", "Georgia", "serif"],
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Two Cambridge students who both scored 1560, tutoring the digital SAT one-on-one. Real coaching backed by software that drills exactly what you keep getting wrong — and we check every practice question ourselves. Online or in person.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "School of Athens — SAT tutoring in Cambridge, MA",
    template: "%s · School of Athens",
  },
  description,
  keywords: [
    "SAT tutoring",
    "digital SAT prep",
    "AI SAT prep",
    "Cambridge MA SAT tutor",
    "Bluebook SAT",
    "personalized SAT practice",
  ],
  openGraph: {
    type: "website",
    title: "School of Athens — SAT tutoring in Cambridge, MA",
    description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "School of Athens — SAT tutoring in Cambridge, MA" }],
  },
  twitter: { card: "summary_large_image", title: "School of Athens — SAT tutoring in Cambridge, MA", description },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#ECE6D6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${inscription.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
