import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// Display + body are Helvetica Neue (system stack, defined in globals.css).
// Labels / technical annotations stay monospaced.
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
    default: "Tachyon — SAT tutoring in Cambridge, MA",
    template: "%s · Tachyon",
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
    title: "Tachyon — SAT tutoring in Cambridge, MA",
    description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tachyon — SAT tutoring in Cambridge, MA" }],
  },
  twitter: { card: "summary_large_image", title: "Tachyon — SAT tutoring in Cambridge, MA", description },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable} suppressHydrationWarning>
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
