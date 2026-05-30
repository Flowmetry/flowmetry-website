import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "./components/CookieConsent";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowmetry – AI-Automationssysteme für Unternehmen",
  description:
    "Flowmetry entwickelt maßgeschneiderte AI-Automationssysteme, die Anfragen verarbeiten, Prozesse verbinden und manuelle Arbeit systematisch ersetzen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`overflow-x-hidden ${playfair.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
