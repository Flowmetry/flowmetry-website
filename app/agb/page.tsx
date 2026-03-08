import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AGB – Flowmetry",
};

export default function AGBPage() {
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

        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">AGB</h1>
        <p className="text-[#6B7280] text-sm mb-10">Allgemeine Geschäftsbedingungen mit Kundeninformationen</p>

        {/* Inhaltsverzeichnis */}
        <nav className="bg-[#161A22] border border-[#2A2F3A] rounded-xl p-5 mb-12">
          <p className="text-[11px] text-[#6B7280] uppercase tracking-widest font-medium mb-3">Inhaltsverzeichnis</p>
          <ol className="space-y-1.5 text-[#D1D5DB] text-sm list-decimal list-inside">
            <li><a href="#s1" className="hover:text-white transition-colors">Geltungsbereich</a></li>
            <li><a href="#s2" className="hover:text-white transition-colors">Vertragsschluss</a></li>
            <li><a href="#s3" className="hover:text-white transition-colors">Widerrufsrecht</a></li>
            <li><a href="#s4" className="hover:text-white transition-colors">Stornierung von Terminvereinbarungen</a></li>
            <li><a href="#s5" className="hover:text-white transition-colors">Preise und Zahlungsbedingungen</a></li>
            <li><a href="#s6" className="hover:text-white transition-colors">Haftung</a></li>
            <li><a href="#s7" className="hover:text-white transition-colors">Anwendbares Recht</a></li>
            <li><a href="#s8" className="hover:text-white transition-colors">Alternative Streitbeilegung</a></li>
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-10 text-[#D1D5DB] leading-relaxed text-sm md:text-base">

          {/* 1 */}
          <section id="s1">
            <h2 className="text-lg font-semibold text-white mb-4">1) Geltungsbereich</h2>
            <p className="mb-4">
              1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") des Erik Neinstel,
              handelnd unter „Flowmetry.ai" (nachfolgend „wir/uns"), gelten für alle Verträge zur
              Erbringung von Dienstleistungen, die du als Verbraucher oder Unternehmer (nachfolgend
              „du/dich") mit uns hinsichtlich der von uns auf unserer Website dargestellten Leistungen
              abschließt. Hiermit widersprechen wir der Einbeziehung deiner eigenen Bedingungen, es
              sei denn, wir haben hierzu etwas anderes mit dir vereinbart.
            </p>
            <p>
              1.2 Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft
              zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen
              beruflichen Tätigkeit zugerechnet werden können. Unternehmer im Sinne dieser AGB ist
              eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die
              bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen
              beruflichen Tätigkeit handelt.
            </p>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 2 */}
          <section id="s2">
            <h2 className="text-lg font-semibold text-white mb-4">2) Vertragsschluss</h2>
            <p>
              Du kannst per Telefon, Fax, E-Mail, Brief oder über das auf unserer Website
              vorgehaltene Online-Kontaktformular eine unverbindliche Anfrage auf Abgabe eines
              Angebots an uns richten. Wir lassen dir auf deine Anfrage hin per E-Mail, Fax oder
              Brief ein verbindliches Angebot zur Erbringung der von dir zuvor ausgewählten
              Dienstleistung zukommen. Dieses Angebot kannst du durch eine gegenüber uns abzugebende
              Annahmeerklärung per Fax, E-Mail oder Brief oder durch Zahlung der von uns angebotenen
              Vergütung innerhalb von 7 (sieben) Tagen ab Zugang des Angebots annehmen, wobei für die
              Berechnung der Frist der Tag des Angebotszugangs nicht mitgerechnet wird. Für die
              Annahme durch Zahlung ist der Tag des Zahlungseingangs bei uns maßgeblich. Fällt der
              letzte Tag der Frist zur Annahme des Angebots auf einen Samstag, Sonntag oder einen an
              deinem Sitz staatlich anerkannten allgemeinen Feiertag, so tritt an die Stelle eines
              solchen Tages der nächste Werktag. Wenn du unser Angebot innerhalb der vorgenannten
              Frist nicht annimmst, sind wir nicht mehr an unser Angebot gebunden. Hierauf werden wir
              dich in unserem Angebot nochmals besonders hinweisen.
            </p>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 3 */}
          <section id="s3">
            <h2 className="text-lg font-semibold text-white mb-4">3) Widerrufsrecht</h2>
            <p>
              Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Nähere Informationen zum
              Widerrufsrecht ergeben sich aus unserer{" "}
              <a href="/widerrufsbelehrung" className="text-[#9CA3AF] hover:text-white transition-colors underline underline-offset-2">
                Widerrufsbelehrung
              </a>
              .
            </p>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 4 */}
          <section id="s4">
            <h2 className="text-lg font-semibold text-white mb-4">4) Stornierung von Terminvereinbarungen</h2>
            <p className="mb-4">
              4.1 Unabhängig von einem ggf. bestehenden gesetzlichen Widerrufsrecht räumen wir dir
              das Recht ein, deine Terminvereinbarung für unsere Leistung nach folgender Maßgabe
              kostenfrei zu stornieren (vertragliches Rücktrittsrecht):
            </p>
            <p className="mb-4">
              4.2 Du kannst deine Terminvereinbarung bis zu 1 Tag (24 Stunden) vor Beginn der
              gebuchten Leistung ohne Angabe von Gründen durch eine uns gegenüber in Textform
              (z. B. E-Mail) abzugebende Erklärung stornieren. Für die Einhaltung der
              Stornierungsfrist ist der Zugang der Erklärung bei uns maßgeblich. Wenn du deine
              Terminvereinbarung fristgerecht stornierst, werden wir dir ein ggf. bereits von dir
              gezahltes Entgelt innerhalb einer Frist von zwei Wochen ab Zugang deiner Erklärung
              vollständig zurückerstatten. Hierfür können wir das gleiche Zahlungsmittel verwenden,
              welches du für deine Zahlung an uns verwendet hast.
            </p>
            <p>
              4.3 Ein ggf. bestehendes gesetzliches Widerrufsrecht wird durch das vorstehend
              geregelte Rücktrittsrecht nicht eingeschränkt.
            </p>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 5 */}
          <section id="s5">
            <h2 className="text-lg font-semibold text-white mb-4">5) Preise und Zahlungsbedingungen</h2>
            <p>
              Sofern sich aus unserer Leistungsbeschreibung nichts anderes ergibt, handelt es sich
              bei den angegebenen Preisen um Gesamtpreise. Umsatzsteuer fällt nicht an, da wir als
              Kleinunternehmer umsatzsteuerbefreit sind.
            </p>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 6 */}
          <section id="s6">
            <h2 className="text-lg font-semibold text-white mb-4">6) Haftung</h2>
            <p className="mb-4">
              Wir haften dir aus allen vertraglichen, vertragsähnlichen und gesetzlichen, auch
              deliktischen Ansprüchen auf Schadens- und Aufwendungsersatz wie folgt:
            </p>
            <p className="mb-3">
              6.1 Wir haften aus jedem Rechtsgrund uneingeschränkt
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 mb-4 text-[#C9D0DC]">
              <li>bei Vorsatz oder grober Fahrlässigkeit,</li>
              <li>bei vorsätzlicher oder fahrlässiger Verletzung des Lebens, des Körpers oder der Gesundheit,</li>
              <li>aufgrund eines Garantieversprechens, soweit diesbezüglich nichts anderes geregelt ist,</li>
              <li>aufgrund zwingender Haftung wie etwa nach dem Produkthaftungsgesetz.</li>
            </ul>
            <p className="mb-4">
              6.2 Wenn wir fahrlässig eine wesentliche Vertragspflicht verletzen, ist unsere Haftung
              auf den vertragstypischen, vorhersehbaren Schaden begrenzt, sofern wir nicht gemäß
              vorstehender Ziffer unbeschränkt haften. Wesentliche Vertragspflichten sind Pflichten,
              die der Vertrag uns nach seinem Inhalt zur Erreichung des Vertragszwecks auferlegt,
              deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht
              und auf deren Einhaltung du regelmäßig vertrauen darfst.
            </p>
            <p className="mb-4">
              6.3 Im Übrigen ist eine Haftung unsererseits ausgeschlossen.
            </p>
            <p>
              6.4 Vorstehende Haftungsregelungen gelten auch im Hinblick auf unsere Haftung für
              unsere Erfüllungsgehilfen und gesetzlichen Vertreter.
            </p>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 7 */}
          <section id="s7">
            <h2 className="text-lg font-semibold text-white mb-4">7) Anwendbares Recht</h2>
            <p className="mb-4">
              7.1 Für sämtliche Rechtsbeziehungen zwischen dir und uns gilt das Recht der
              Bundesrepublik Deutschland unter Ausschluss der Gesetze über den internationalen Kauf
              beweglicher Waren. Wenn du als Verbraucher handelst, gilt diese Rechtswahl nur insoweit,
              als nicht der dir gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates,
              in dem du deinen gewöhnlichen Aufenthalt hast, entzogen wird.
            </p>
            <p>
              7.2 Ferner gilt diese Rechtswahl im Hinblick auf das gesetzliche Widerrufsrecht nicht
              bei Verbrauchern, die zum Zeitpunkt des Vertragsschlusses keinem Mitgliedstaat der
              Europäischen Union angehören und deren alleiniger Wohnsitz und Lieferadresse zum
              Zeitpunkt des Vertragsschlusses außerhalb der Europäischen Union liegen.
            </p>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 8 */}
          <section id="s8">
            <h2 className="text-lg font-semibold text-white mb-4">8) Alternative Streitbeilegung</h2>
            <p>
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>
          </section>

          {/* Stand */}
          <p className="text-[11px] text-[#4B5563] pt-4">Stand: 06.03.2026, 16:15:48</p>

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
            <a href="/agb" className="text-[#9CA3AF] text-sm">AGB</a>
            <a href="/widerrufsbelehrung" className="text-[#6B7280] hover:text-[#9CA3AF] text-sm transition-colors">Widerrufsbelehrung</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
