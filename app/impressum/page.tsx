import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Impressum – Flowmetry",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C1614] flex flex-col">

      {/* ── Header ── */}
      <header className="border-b border-[#1C1614]/10 bg-white/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-[68px] flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/flowmetry-logo-kurz.png"
              alt="Flowmetry"
              width={44}
              height={44}
              className="h-9 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(70%) saturate(400%) hue-rotate(355deg) brightness(1.1)' }}
              priority
            />
          </a>
          <a
            href="/"
            className="text-sm text-[#1C1614]/45 hover:text-[#1C1614]/60 transition-colors"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 md:px-8 py-16 md:py-24">

        <h1 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">
          Impressum
        </h1>

        <div className="space-y-8 text-[#1C1614]/75 leading-relaxed">

          {/* Angaben */}
          <section>
            <p className="font-semibold text-[#1C1614] mb-2">Angaben gemäß § 5 TMG</p>
            <p>
              Erik Neinstel<br />
              Flowmetry.ai<br />
              Edelbergstraße 9a<br />
              76189 Karlsruhe<br />
              Deutschland
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <p className="font-semibold text-[#1C1614] mb-2">Kontakt</p>
            <p>
              Tel.: <a href="tel:+4915757760133" className="text-[#8B4A1E] hover:text-[#1C1614] transition-colors">015757760133</a><br />
              E-Mail: <a href="mailto:kontakt@flowmetry.ai" className="text-[#8B4A1E] hover:text-[#1C1614] transition-colors">kontakt@flowmetry.ai</a>
            </p>
          </section>

          {/* Umsatzsteuer */}
          <section>
            <p className="font-semibold text-[#1C1614] mb-2">Umsatzsteuer</p>
            <p>
              Umsatzsteuer-Identifikationsnummer: DE359840120<br />
              Umsatzsteuerbefreit (Kleinunternehmerregelung)
            </p>
          </section>

          {/* Streitschlichtung */}
          <section>
            <p className="font-semibold text-[#1C1614] mb-2">Streitschlichtung</p>
            <p>
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>
          </section>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1C1614]/10 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#1C1614]/45 text-sm">
            © {new Date().getFullYear()} Flowmetry. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            <a href="/impressum" className="text-[#8B4A1E] text-sm">Impressum</a>
            <a href="/datenschutz" className="text-[#1C1614]/45 hover:text-[#1C1614]/60 text-sm transition-colors">Datenschutz</a>
            <a href="/agb" className="text-[#1C1614]/45 hover:text-[#1C1614]/60 text-sm transition-colors">AGB</a>
            <a href="/widerrufsbelehrung" className="text-[#1C1614]/45 hover:text-[#1C1614]/60 text-sm transition-colors">Widerrufsbelehrung</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
