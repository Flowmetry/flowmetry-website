import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung – Flowmetry",
};

export default function WiderrufsbelehrungPage() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white flex flex-col">

      {/* ── Header ── */}
      <header className="border-b border-[#2A2F3A]/40 bg-[#0F1115]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-[68px] flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/flowmetry-logo-light.png"
              alt="Flowmetry"
              width={160}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </a>
          <a
            href="/"
            className="text-sm text-[#6B7280] hover:text-[#9CA3AF] transition-colors"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 md:px-8 py-16 md:py-24">

        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
          Widerrufsbelehrung
        </h1>
        <p className="text-[#6B7280] text-sm mb-10">
          Widerrufsbelehrung (Dienstleistungen) &amp; Widerrufsformular
        </p>

        <div className="space-y-10 text-[#D1D5DB] leading-relaxed text-sm md:text-base">

          {/* Intro */}
          <p>
            Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei Verbraucher
            jede natürliche Person ist, die ein Rechtsgeschäft zu Zwecken abschließt, die
            überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
            zugerechnet werden können:
          </p>

          <hr className="border-[#2A2F3A]/60" />

          {/* A: Widerrufsbelehrung */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-6">
              A. Widerrufsbelehrung (Dienstleistungen)
            </h2>

            {/* Widerrufsrecht */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-white mb-3">Widerrufsrecht</h3>
              <p className="mb-4">
                Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag
                zu widerrufen.
              </p>
              <p className="mb-4">
                Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
              </p>
              <p className="mb-4">
                Um dein Widerrufsrecht auszuüben, musst du uns (Erik Neinstel, Flowmetry.ai,
                Edelbergstraße 9a, 76189 Karlsruhe, Deutschland, Tel.:{" "}
                <a href="tel:+4915757760133" className="text-[#9CA3AF] hover:text-white transition-colors">
                  015757760133
                </a>
                , E-Mail:{" "}
                <a href="mailto:kontakt@flowmetry.ai" className="text-[#9CA3AF] hover:text-white transition-colors">
                  kontakt@flowmetry.ai
                </a>
                ) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief
                oder E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren.
              </p>
              <p className="mb-4">
                Du kannst dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch
                nicht vorgeschrieben ist.
              </p>
              <p>
                Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die
                Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
              </p>
            </div>

            {/* Folgen des Widerrufs */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-white mb-3">Folgen des Widerrufs</h3>
              <p className="mb-4">
                Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir
                erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen
                Kosten, die sich daraus ergeben, dass du eine andere Art der Lieferung als die von
                uns angebotene, günstigste Standardlieferung gewählt hast), unverzüglich und
                spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung
                über deinen Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
                Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen
                Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes
                vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.
              </p>
              <p>
                Hast Du verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen
                sollen, so hast Du uns einen angemessenen Betrag zu zahlen, der dem Anteil der
                bis zu dem Zeitpunkt, zu dem Du uns von der Ausübung des Widerrufsrechts
                hinsichtlich dieses Vertrags unterrichtest, bereits erbrachten Dienstleistungen
                im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen
                entspricht.
              </p>
            </div>

            {/* Ausschluss */}
            <div>
              <h3 className="text-base font-semibold text-white mb-3">
                Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts
              </h3>
              <p>
                Das Widerrufsrecht erlischt vorzeitig, wenn wir die Dienstleistung vollständig
                erbracht haben und wir mit der Ausführung der Dienstleistung erst begonnen haben,
                nachdem du dazu deine ausdrückliche Zustimmung gegeben hast und gleichzeitig deine
                Kenntnis davon bestätigt hast, dass du dein Widerrufsrecht bei vollständiger
                Vertragserfüllung durch uns verlierst.
              </p>
            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* B: Widerrufsformular */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4">B. Widerrufsformular</h2>
            <p className="mb-6">
              Wenn du den Vertrag widerrufen möchtest, dann fülle bitte dieses Formular aus und
              sende es zurück.
            </p>

            <div className="bg-[#161A22] border border-[#2A2F3A] rounded-xl p-6 space-y-6">

              {/* Empfänger */}
              <div>
                <p className="text-[12px] text-[#6B7280] uppercase tracking-widest font-medium mb-3">An</p>
                <address className="not-italic text-[#D1D5DB] leading-relaxed">
                  Erik Neinstel<br />
                  Flowmetry.ai<br />
                  Edelbergstraße 9a<br />
                  76189 Karlsruhe<br />
                  Deutschland<br />
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:kontakt@flowmetry.ai" className="text-[#9CA3AF] hover:text-white transition-colors">
                    kontakt@flowmetry.ai
                  </a>
                </address>
              </div>

              <hr className="border-[#2A2F3A]/60" />

              {/* Erklärung */}
              <div className="space-y-4">
                <p>
                  Hiermit widerrufe ich (*) den von mir abgeschlossenen Vertrag über den Kauf der
                  folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*)
                </p>

                {/* Freitext-Zeilen */}
                <div className="space-y-3 pt-1">
                  <div className="border-b border-[#2A2F3A] h-7" />
                  <div className="border-b border-[#2A2F3A] h-7" />
                </div>

                {/* Daten */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-[12px] text-[#6B7280] mb-2">Bestellt am (*)</p>
                    <div className="border-b border-[#2A2F3A] h-7" />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#6B7280] mb-2">Erhalten am (*)</p>
                    <div className="border-b border-[#2A2F3A] h-7" />
                  </div>
                </div>

                {/* Persönliche Angaben */}
                <div className="space-y-4 pt-2">
                  <div>
                    <p className="text-[12px] text-[#6B7280] mb-2">Name des Verbrauchers</p>
                    <div className="border-b border-[#2A2F3A] h-7" />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#6B7280] mb-2">Anschrift des Verbrauchers</p>
                    <div className="border-b border-[#2A2F3A] h-7" />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#6B7280] mb-2">
                      Unterschrift des Verbrauchers (nur bei Mitteilung auf Papier)
                    </p>
                    <div className="border-b border-[#2A2F3A] h-7" />
                  </div>
                  <div className="sm:w-48">
                    <p className="text-[12px] text-[#6B7280] mb-2">Datum</p>
                    <div className="border-b border-[#2A2F3A] h-7" />
                  </div>
                </div>

                <p className="text-[12px] text-[#4B5563] pt-2">(*) Unzutreffendes streichen</p>
              </div>
            </div>
          </section>

          {/* Stand */}
          <p className="text-[11px] text-[#4B5563] pt-4">Stand: 06.03.2026, 16:20:30</p>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#2A2F3A]/40 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">
            © {new Date().getFullYear()} Flowmetry. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            <a href="/impressum" className="text-[#6B7280] hover:text-[#9CA3AF] text-sm transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-[#6B7280] hover:text-[#9CA3AF] text-sm transition-colors">Datenschutz</a>
            <a href="/agb" className="text-[#6B7280] hover:text-[#9CA3AF] text-sm transition-colors">AGB</a>
            <a href="/widerrufsbelehrung" className="text-[#9CA3AF] text-sm">Widerrufsbelehrung</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
