import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "./components/CookieConsent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="de">
      <body className={`${poppins.variable} font-sans antialiased bg-[#0F1115] text-white`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
