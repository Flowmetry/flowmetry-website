import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "./components/CookieConsent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-poppins",
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
    <html lang="de" className="overflow-x-hidden">
      <body className={`${poppins.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
