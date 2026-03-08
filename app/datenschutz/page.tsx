import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Datenschutz – Flowmetry",
};

export default function DatenschutzPage() {
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

        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Datenschutz</h1>
        <p className="text-[#6B7280] text-sm mb-10">Datenschutzerklärung</p>

        <div className="space-y-10 text-[#D1D5DB] leading-relaxed text-sm md:text-base">

          {/* 1 */}
          <section id="s1">
            <h2 className="text-lg font-semibold text-white mb-5">
              1) Einleitung und Kontaktdaten des Verantwortlichen
            </h2>

            <div className="space-y-4">
              <p>
                <strong className="text-white">1.1</strong>{" "}
                Wir freuen uns, dass du unsere Website besuchst und bedanken uns für dein Interesse.
                Im Folgenden informieren wir dich über den Umgang mit deinen personenbezogenen Daten
                bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit
                denen du persönlich identifiziert werden kannst.
              </p>
              <p>
                <strong className="text-white">1.2</strong>{" "}
                Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der
                Datenschutz-Grundverordnung (DSGVO) ist Erik Neinstel, Flowmetry.ai,
                Edelbergstraße 9a, 76189 Karlsruhe, Deutschland, Tel.:{" "}
                <a href="tel:+4915757760133" className="text-[#9CA3AF] hover:text-white transition-colors">
                  015757760133
                </a>
                , E-Mail:{" "}
                <a href="mailto:kontakt@flowmetry.ai" className="text-[#9CA3AF] hover:text-white transition-colors">
                  kontakt@flowmetry.ai
                </a>
                . Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist
                diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 2 */}
          <section id="s2">
            <h2 className="text-lg font-semibold text-white mb-5">
              2) Datenerfassung beim Besuch unserer Website
            </h2>

            <div className="space-y-4">
              <p>
                <strong className="text-white">2.1</strong>{" "}
                Bei der bloß informatorischen Nutzung unserer Website, also wenn du dich nicht
                registrierst oder uns anderweitig Informationen übermittelst, erheben wir nur solche
                Daten, die dein Browser an den Seitenserver übermittelt (sog. „Server-Logfiles").
                Wenn du unsere Website aufrufst, erheben wir die folgenden Daten, die für uns
                technisch erforderlich sind, um dir die Website anzuzeigen:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#C9D0DC]">
                <li>Unsere besuchte Website</li>
                <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffs</li>
                <li>Menge der gesendeten Daten in Byte</li>
                <li>Quelle/Verweis, von welchem du auf die Seite gelangtest</li>
                <li>Verwendeter Browser</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
              </ul>
              <p>
                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
                berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität
                unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet
                nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu
                überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
              </p>

              <p>
                <strong className="text-white">2.2</strong>{" "}
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder
                Anfragen an uns) eine SSL- bzw. TLS-Verschlüsselung. Du kannst eine verschlüsselte
                Verbindung an der Zeichenfolge „https://" und dem Schloss-Symbol in deiner
                Browserzeile erkennen.
              </p>
            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 3 */}
          <section id="s3">
            <h2 className="text-lg font-semibold text-white mb-5">
              3) Hosting &amp; Content-Delivery-Network
            </h2>

            <div className="space-y-6">

              <div>
                <p className="font-medium text-white mb-2">3.1 GitHub</p>
                <p className="mb-3">
                  Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir
                  das System des folgenden Anbieters: GitHub Inc., 88 Colin P Kelly Jr Street, San
                  Francisco, CA 94107, USA.
                </p>
                <p className="mb-3">
                  Sämtliche auf unserer Website erhobenen Daten werden auf den Servern des Anbieters
                  verarbeitet, sofern nicht im Nachstehenden für spezifische Datenverarbeitungen
                  abweichende Datenempfänger genannt sind.
                </p>
                <p className="mb-3">
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte
                  Weitergabe an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen
                  (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
                  Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des
                  europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">3.2 HighLevel</p>
                <p className="mb-3">
                  Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir
                  das System des folgenden Anbieters: HighLevel Inc., 400 North Saint Paul St.,
                  Suite 920, Dallas, Texas 75201, USA.
                </p>
                <p className="mb-3">
                  Sämtliche auf unserer Website erhobenen Daten werden auf den Servern des Anbieters
                  verarbeitet, sofern nicht im Nachstehenden für spezifische Datenverarbeitungen
                  abweichende Datenempfänger genannt sind.
                </p>
                <p className="mb-3">
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte
                  Weitergabe an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen
                  (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
                  Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des
                  europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">3.3 Vercel</p>
                <p className="mb-3">
                  Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir
                  das System des folgenden Anbieters: Vercel Inc., 340 S Lemon Ave #4133, Walnut,
                  CA 91789, USA.
                </p>
                <p className="mb-3">
                  Sämtliche auf unserer Website erhobenen Daten werden auf den Servern des Anbieters
                  verarbeitet. Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
                  geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
                  unberechtigte Weitergabe an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen
                  (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
                  Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des
                  europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">3.4 Cloudflare</p>
                <p className="mb-3">
                  Wir nutzen ein Content Delivery Network des folgenden Anbieters: Cloudflare Inc.,
                  101 Townsend St. San Francisco, CA 94107, USA.
                </p>
                <p className="mb-3">
                  Dieser Dienst ermöglicht uns, große Mediendateien wie Grafiken, Seiteninhalte oder
                  Skripte über ein Netz regional verteilter Server schneller auszuliefern. Die
                  Verarbeitung erfolgt zur Wahrung unseres berechtigten Interesses an der
                  Verbesserung der Stabilität und Funktionalität unserer Website gem. Art. 6 Abs. 1
                  lit. f DSGVO. Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
                  geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
                  unberechtigte Weitergabe an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen
                  (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
                  Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des
                  europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">3.5 Google Cloud CDN</p>
                <p className="mb-3">
                  Wir nutzen ein Content Delivery Network des folgenden Anbieters: Google Ireland
                  Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland.
                </p>
                <p className="mb-3">
                  Dieser Dienst ermöglicht uns, große Mediendateien wie Grafiken, Seiteninhalte oder
                  Skripte über ein Netz regional verteilter Server schneller auszuliefern. Die
                  Verarbeitung erfolgt zur Wahrung unseres berechtigten Interesses an der
                  Verbesserung der Stabilität und Funktionalität unserer Website gem. Art. 6 Abs. 1
                  lit. f DSGVO.
                </p>
                <p className="mb-3">Daten können zudem übertragen werden an: Google LLC, USA.</p>
                <p className="mb-3">
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte
                  Weitergabe an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen
                  (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
                  Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des
                  europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">3.6 Vercel (CDN)</p>
                <p className="mb-3">
                  Wir nutzen ein Content Delivery Network des folgenden Anbieters: Vercel Inc.,
                  440 N Barranca Avenue #4133, Covina, CA 91723, USA.
                </p>
                <p className="mb-3">
                  Dieser Dienst ermöglicht uns, große Mediendateien wie Grafiken, Seiteninhalte oder
                  Skripte über ein Netz regional verteilter Server schneller auszuliefern. Die
                  Verarbeitung erfolgt zur Wahrung unseres berechtigten Interesses an der
                  Verbesserung der Stabilität und Funktionalität unserer Website gem. Art. 6 Abs. 1
                  lit. f DSGVO. Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
                  geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
                  unberechtigte Weitergabe an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen
                  (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
                  Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des
                  europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 4 */}
          <section id="s4">
            <h2 className="text-lg font-semibold text-white mb-5">4) Cookies</h2>
            <div className="space-y-4">
              <p>
                Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter
                Funktionen zu ermöglichen, verwenden wir Cookies, also kleine Textdateien, die auf
                deinem Endgerät abgelegt werden. Teilweise werden diese Cookies nach Schließen des
                Browsers automatisch wieder gelöscht (sog. „Session-Cookies"), teilweise verbleiben
                diese Cookies länger auf deinem Endgerät und ermöglichen das Speichern von
                Seiteneinstellungen (sog. „persistente Cookies"). Im letzteren Fall kannst du die
                Speicherdauer der Übersicht zu den Cookie-Einstellungen deines Webbrowsers entnehmen.
              </p>
              <p>
                Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten
                verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO
                entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle
                einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung
                unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie
                einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
              </p>
              <p>
                Du kannst deinen Browser so einstellen, dass du über das Setzen von Cookies
                informiert wirst und einzeln über deren Annahme entscheiden oder die Annahme von
                Cookies für bestimmte Fälle oder generell ausschließen kannst.
              </p>
              <p>
                Bitte beachte, dass bei Nichtannahme von Cookies die Funktionalität unserer Website
                eingeschränkt sein kann.
              </p>
            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 5 */}
          <section id="s5">
            <h2 className="text-lg font-semibold text-white mb-5">5) Kontaktaufnahme</h2>

            <div className="space-y-6">

              <div>
                <p className="font-medium text-white mb-2">5.1 Babelforce</p>
                <p className="mb-3">
                  Die Webseite nutzt die Dienste von „Babelforce", einer
                  Kundendienst-Integrationsplattform der babelforce GmbH, Mindspace, Friedrichstr.
                  68, 10117 Berlin, Deutschland („babelforce") zur Verwaltung angebotener
                  Service-Telefoniedienste.
                </p>
                <p className="mb-3">
                  Ein- und ausgehende Anrufe auf den angebotenen Service-Rufnummern werden von
                  Babelforce erfasst und dokumentiert, wobei Informationen in Form von Datum und
                  Uhrzeit des Anrufs, Dauer des Gesprächs sowie der anonymisierten Rufnummer des
                  Anrufers oder Angerufenen nachträglich nachvollziehbar gespeichert werden. Sofern
                  hierbei auch personenbezogene Daten verarbeitet werden, erfolgt dies gemäß Art. 6
                  Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einem effektiven
                  Kundenmanagement und der Optimierung unserer Dienste. Telefongespräche werden
                  unter dem Einsatz von Babelforce nur aufgezeichnet, sofern du uns hierzu bei
                  Gesprächsbeginn deine ausdrückliche und jederzeit widerrufliche Einwilligung gemäß
                  Art. 6 Abs. 1 lit. a DSGVO erteilt hast.
                </p>
                <p>
                  Wir haben mit babelforce einen Auftragsverarbeitungsvertrag abgeschlossen, in dem
                  wir babelforce verpflichten, die Daten unserer Kunden gemäß den gesetzlichen
                  Anforderungen zu schützen.
                </p>
              </div>

              {/* Sub-providers within 5.1 */}
              <div className="bg-[#161A22] border border-[#2A2F3A] rounded-xl p-5 space-y-6">

                <div>
                  <p className="font-medium text-white mb-3">Anthropic Claude</p>
                  <p className="mb-3">
                    Auf dieser Website haben wir zur Bereitstellung eines autonomen Kundensupports
                    eine Software-Lösung mit künstlicher Intelligenz des folgenden Anbieters
                    eingebunden: Anthropic Ireland Limited, 6th Floor, South Bank House, Barrow
                    Street, Dublin 4, D04 TR29, Irland.
                  </p>
                  <p className="mb-3">
                    Daten können zudem übermittelt werden an: Anthropic PBC, USA.
                  </p>
                  <p className="mb-3">
                    Über eine API-basierte Integration können Besucher per Texteingabe Anfragen zu
                    Angeboten, Funktionalitäten der Website, zu getätigten Bestellungen sowie der
                    Ausübung vertraglicher Rechte stellen, welche sodann durch Sprachmodelle des
                    Anbieters beantwortet und bearbeitet werden.
                  </p>
                  <p className="mb-3">
                    Hierfür erhebt die Anbietersoftware ggf. personenbezogene Daten von dir, um
                    diese mit deiner Bestellhistorie abzugleichen, die Eingabe einer konkreten
                    Bestellung zuzuordnen, dein Anliegen automatisiert zu prüfen und sodann durch
                    autonome Einleitung von Bearbeitungsprozessen einer Lösung zuzuführen.
                  </p>
                  <p className="mb-3">
                    Die Erhebung und weitere Verarbeitung personenbezogener Daten erfolgt
                    ausschließlich zur Bearbeitung des konkreten Anliegens. Die Verarbeitung deiner
                    Eingaben zu Zwecken des Trainings und der Weiterentwicklung der KI-Sprachmodelle
                    des Anbieters wird ausdrücklich unterbunden.
                  </p>
                  <p className="mb-3">
                    Die Datenverarbeitung erfolgt auf Basis unseres berechtigten Interesses an der
                    effektiven Betreuung unserer Seitenbesucher, an der optimalen Vermarktung unseres
                    Angebots und an der Automatisierung des Kundensupports zur Betriebsentlastung
                    gemäß Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                  <p className="mb-3">
                    Erhobene personenbezogene Daten von dir werden vorbehaltlich entgegenstehender
                    gesetzlicher Aufbewahrungsfristen gelöscht, wenn die Anbietersoftware gemäß
                    automatischer mathematisch-statistischer Verfahren eine abschließende Klärung
                    des Sachverhaltes feststellt.
                  </p>
                  <p className="mb-3">
                    Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der
                    den Schutz deiner Daten sicherstellt und eine unberechtigte Weitergabe an Dritte
                    untersagt.
                  </p>
                  <p>
                    Für die Übermittlung von Daten in die USA beruft sich der Anbieter auf
                    Standardvertragsklauseln der Europäischen Kommission, welche die Einhaltung des
                    europäischen Datenschutzniveaus sicherstellen sollen.
                  </p>
                </div>

                <hr className="border-[#2A2F3A]/60" />

                <div>
                  <p className="font-medium text-white mb-3">Google Gemini</p>
                  <p className="mb-3">
                    Auf dieser Website haben wir zur Bereitstellung eines autonomen Kundensupports
                    eine Software-Lösung mit künstlicher Intelligenz des folgenden Anbieters
                    eingebunden: Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04
                    E5W5, Irland.
                  </p>
                  <p className="mb-3">
                    Daten können zudem übermittelt werden an: Google LLC, USA.
                  </p>
                  <p className="mb-3">
                    Über eine API-basierte Integration können Besucher per Texteingabe Anfragen zu
                    Angeboten, Funktionalitäten der Website, zu getätigten Bestellungen sowie der
                    Ausübung vertraglicher Rechte stellen, welche sodann durch Sprachmodelle des
                    Anbieters beantwortet und bearbeitet werden.
                  </p>
                  <p className="mb-3">
                    Hierfür erhebt die Anbietersoftware ggf. personenbezogene Daten von dir, um
                    diese mit deiner Bestellhistorie abzugleichen, die Eingabe einer konkreten
                    Bestellung zuzuordnen, dein Anliegen automatisiert zu prüfen und sodann durch
                    autonome Einleitung von Bearbeitungsprozessen einer Lösung zuzuführen.
                  </p>
                  <p className="mb-3">
                    Die Erhebung und weitere Verarbeitung personenbezogener Daten erfolgt
                    ausschließlich zur Bearbeitung deines konkreten Anliegens. Die Verarbeitung
                    deiner Eingaben zu Zwecken des Trainings und der Weiterentwicklung der
                    KI-Sprachmodelle des Anbieters wird ausdrücklich unterbunden.
                  </p>
                  <p className="mb-3">
                    Die Datenverarbeitung erfolgt auf Basis unseres berechtigten Interesses an der
                    effektiven Betreuung unserer Seitenbesucher, an der optimalen Vermarktung unseres
                    Angebots und an der Automatisierung des Kundensupports zur Betriebsentlastung
                    gemäß Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                  <p className="mb-3">
                    Erhobene personenbezogene Daten werden vorbehaltlich entgegenstehender
                    gesetzlicher Aufbewahrungsfristen gelöscht, wenn die Anbietersoftware gemäß
                    automatischer mathematisch-statistischer Verfahren eine abschließende Klärung
                    des Sachverhaltes feststellt.
                  </p>
                  <p className="mb-3">
                    Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der
                    den Schutz deiner Daten sicherstellt und eine unberechtigte Weitergabe an Dritte
                    untersagt.
                  </p>
                  <p className="mb-3">
                    Für Datenübermittlungen in die USA hat sich der Anbieter dem
                    EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf
                    Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung
                    des europäischen Datenschutzniveaus sicherstellt.
                  </p>
                  <p>
                    Weitere rechtliche Hinweise sowie die Datenschutzbestimmungen von Google findest
                    du unter:{" "}
                    <a
                      href="https://support.google.com/gemini/answer/13594961?hl=de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9CA3AF] hover:text-white transition-colors break-all"
                    >
                      https://support.google.com/gemini/answer/13594961?hl=de
                    </a>
                  </p>
                </div>

                <hr className="border-[#2A2F3A]/60" />

                <div>
                  <p className="font-medium text-white mb-3">OpenAI</p>
                  <p className="mb-3">
                    Auf dieser Website haben wir zur Bereitstellung eines autonomen Kundensupports
                    eine Software-Lösung mit künstlicher Intelligenz des folgenden Anbieters
                    eingebunden: OpenAI Ireland Limited, 1st Floor, The Liffey Trust Centre,
                    117-126 Sheriff Street Upper, Dublin 1, D01 YC43, Irland.
                  </p>
                  <p className="mb-3">
                    Daten können zudem übermittelt werden an: OpenAI OpCo, LLC, USA.
                  </p>
                  <p className="mb-3">
                    Über eine API-basierte Integration können Besucher per Texteingabe Anfragen zu
                    Angeboten, Funktionalitäten der Website, zu getätigten Bestellungen sowie der
                    Ausübung vertraglicher Rechte stellen, welche sodann durch Sprachmodelle des
                    Anbieters beantwortet und bearbeitet werden.
                  </p>
                  <p className="mb-3">
                    Hierfür erhebt die Anbietersoftware ggf. personenbezogene Daten des
                    Anfragenden, um diese mit der Bestellhistorie abzugleichen, die Eingabe einer
                    konkreten Bestellung zuzuordnen, dein Anliegen automatisiert zu prüfen und
                    sodann durch autonome Einleitung von Bearbeitungsprozessen einer Lösung
                    zuzuführen.
                  </p>
                  <p className="mb-3">
                    Die Erhebung und weitere Verarbeitung personenbezogener Daten erfolgt
                    ausschließlich zur Bearbeitung deines konkreten Anliegens. Die Verarbeitung von
                    Eingaben des Seitenbesuchers zu Zwecken des Trainings und der Weiterentwicklung
                    der KI-Sprachmodelle des Anbieters wird ausdrücklich unterbunden.
                  </p>
                  <p className="mb-3">
                    Die Datenverarbeitung erfolgt auf Basis unseres berechtigten Interesses an der
                    effektiven Betreuung unserer Seitenbesucher, an der optimalen Vermarktung unseres
                    Angebots und an der Automatisierung des Kundensupports zur Betriebsentlastung
                    gemäß Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                  <p className="mb-3">
                    Erhobene personenbezogene Daten werden vorbehaltlich entgegenstehender
                    gesetzlicher Aufbewahrungsfristen gelöscht, wenn die Anbietersoftware gemäß
                    automatischer mathematisch-statistischer Verfahren eine abschließende Klärung
                    des Sachverhaltes feststellt.
                  </p>
                  <p className="mb-3">
                    Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der
                    den Schutz deiner Daten sicherstellt und eine unberechtigte Weitergabe an Dritte
                    untersagt.
                  </p>
                  <p>
                    Für die Übermittlung von Daten in die USA beruft sich der Anbieter auf
                    Standardvertragsklauseln der Europäischen Kommission, welche die Einhaltung des
                    europäischen Datenschutzniveaus sicherstellen sollen.
                  </p>
                </div>

              </div>

              <div>
                <p className="font-medium text-white mb-2">5.2 Eigene Bewertungserinnerung</p>
                <p>
                  Ausschließlich auf Basis deiner ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1
                  lit. a DSGVO verwenden wir deine E-Mailadresse zur einmaligen Erinnerung an die
                  Abgabe einer Bewertung deiner Bestellung. Du kannst deine Einwilligung jederzeit
                  durch eine Nachricht an den für die Datenverarbeitung Verantwortlichen widerrufen.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">5.3 Google Calendar</p>
                <p className="mb-3">
                  Für die Bereitstellung einer Online-Terminbuchungsfunktion nutzen wir die Dienste
                  des folgenden Anbieters: Google Ireland Limited, Gordon House, 4 Barrow St,
                  Dublin, D04 E5W5, Irland.
                </p>
                <p className="mb-3">Daten können zudem übertragen werden an: Google LLC, USA.</p>
                <p className="mb-3">
                  Zum Zwecke der Terminvergabe werden gemäß Art. 6 Abs. 1 lit. b DSGVO Vor- und
                  Zuname sowie Mailadresse (und ggf. die Telefonnummer, sofern ein telefonischer
                  Termin gewünscht ist) erhoben und gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
                  unseres berechtigten Interesses an einem effektiven Kundenmanagement und einer
                  effizienten Terminverwaltung an den Anbieter übermittelt und dort für die
                  Terminorganisation gespeichert.
                </p>
                <p className="mb-3">
                  Nach Abhaltung des Termins bzw. nach Ablauf des vereinbarten Terminzeitraums
                  werden deine Daten vom Anbieter gelöscht.
                </p>
                <p className="mb-3">
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte
                  Weitergabe an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem
                  EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf
                  Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung
                  des europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">5.4 HighLevel</p>
                <p className="mb-3">
                  Für die Bereitstellung einer Online-Terminbuchungsfunktion nutzen wir die Dienste
                  des folgenden Anbieters: HighLevel Inc., 400 North Saint Paul St., Suite 920,
                  Dallas, Texas 75201, USA.
                </p>
                <p className="mb-3">
                  Zum Zwecke der Terminvergabe werden gemäß Art. 6 Abs. 1 lit. b DSGVO dein Vor-
                  und Zuname sowie deine Mailadresse (und ggf. deine Telefonnummer, sofern du einen
                  telefonischen Termin wünschst) erhoben und gemäß Art. 6 Abs. 1 lit. f DSGVO auf
                  Basis unseres berechtigten Interesses an einem effektiven Kundenmanagement und
                  einer effizienten Terminverwaltung an den Anbieter übermittelt und dort für die
                  Terminorganisation gespeichert.
                </p>
                <p className="mb-3">
                  Nach Abhaltung des Termins bzw. nach Ablauf des vereinbarten Terminzeitraums
                  werden deine Daten vom Anbieter gelöscht.
                </p>
                <p className="mb-3">
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte
                  Weitergabe an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem
                  EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf
                  Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung
                  des europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

              <div>
                <p>
                  <strong className="text-white">5.5</strong>{" "}
                  Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail)
                  werden – ausschließlich zum Zweck der Bearbeitung und Beantwortung deines
                  Anliegens und nur im dafür erforderlichen Umfang – personenbezogene Daten
                  verarbeitet.
                </p>
                <p className="mt-3">
                  Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse
                  an der Beantwortung deines Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt deine
                  Kontaktierung auf einen Vertrag ab, so ist zusätzliche Rechtsgrundlage für die
                  Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Deine Daten werden gelöscht, wenn sich
                  aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend
                  geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
              </div>

            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 6 */}
          <section id="s6">
            <h2 className="text-lg font-semibold text-white mb-5">
              6) Datenverarbeitung zur Vertragsabwicklung
            </h2>

            <div className="space-y-6">
              <p>
                <strong className="text-white">6.1</strong>{" "}
                Zur Abwicklung des Vertrags arbeiten wir mit dem / den nachstehenden
                Dienstleister(n) zusammen, die uns ganz oder teilweise bei der Durchführung
                geschlossener Verträge unterstützen. An diese Dienstleister werden nach Maßgabe
                der folgenden Informationen gewisse personenbezogene Daten übermittelt.
              </p>

              <div>
                <p className="font-medium text-white mb-2">6.2 Verwendung von Paymentdienstleistern — Stripe</p>
                <p className="mb-3">
                  Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des folgenden
                  Anbieters zur Verfügung: Stripe Payments Europe Ltd., 1 Grand Canal Street Lower,
                  Grand Canal Dock, Dublin, Irland.
                </p>
                <p className="mb-3">
                  Bei Auswahl einer Zahlungsart des Anbieters, bei der du in Vorleistung gehst
                  (etwa Kreditkartenzahlung), werden an diesen deine im Rahmen des Bestellvorgangs
                  mitgeteilten Zahlungsdaten (darunter Name, Anschrift, Bank- und
                  Zahlkarteninformationen, Währung und Transaktionsnummer) sowie Informationen über
                  den Inhalt deiner Bestellung gemäß Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die
                  Weitergabe deiner Daten erfolgt in diesem Falle ausschließlich zum Zweck der
                  Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierfür erforderlich
                  ist.
                </p>
                <p className="mb-3">
                  Bei Auswahl einer Zahlungsart, bei der der Anbieter in Vorleistung geht (etwa
                  Rechnungs- oder Ratenkauf bzw. Lastschrift), wirst du im Bestellablauf auch
                  aufgefordert, bestimmte persönliche Daten (Vor- und Nachname, Straße,
                  Hausnummer, Postleitzahl, Ort, Geburtsdatum, E-Mail-Adresse, Telefonnummer,
                  ggf. Daten zu einem alternativen Zahlungsmittel) anzugeben.
                </p>
                <p className="mb-3">
                  Um unser berechtigtes Interesse an der Feststellung der Zahlungsfähigkeit unserer
                  Kunden zu wahren, werden diese Daten von uns gemäß Art. 6 Abs. 1 lit. f DSGVO
                  zum Zweck einer Bonitätsprüfung an den Anbieter weitergeleitet. Der Anbieter
                  prüft auf Basis der von dir angegebenen persönlichen Daten sowie weiterer Daten
                  (wie etwa Warenkorb, Rechnungsbetrag, Bestellhistorie, Zahlungserfahrungen), ob
                  die von dir ausgewählte Zahlungsmöglichkeit im Hinblick auf Zahlungs- und/oder
                  Forderungsausfallrisiken gewährt werden kann.
                </p>
                <p className="mb-3">
                  Die Bonitätsauskunft kann Wahrscheinlichkeitswerte enthalten (sog. Score-Werte).
                  Soweit Score-Werte in das Ergebnis der Bonitätsauskunft einfließen, haben sie
                  ihre Grundlage in einem wissenschaftlich anerkannten mathematisch-statistischen
                  Verfahren. In die Berechnung der Score-Werte fließen unter anderem, aber nicht
                  ausschließlich, Anschriftendaten ein.
                </p>
                <p>
                  Du kannst dieser Verarbeitung deiner Daten jederzeit durch eine Nachricht an uns
                  oder gegenüber dem Anbieter widersprechen. Jedoch bleibt der Anbieter ggf.
                  weiterhin berechtigt, deine personenbezogenen Daten zu verarbeiten, sofern dies
                  zur vertragsgemäßen Zahlungsabwicklung erforderlich ist.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 7 */}
          <section id="s7">
            <h2 className="text-lg font-semibold text-white mb-5">7) Seitenfunktionalitäten</h2>

            <div className="space-y-6">

              <div>
                <p className="font-medium text-white mb-2">7.1 n8n</p>
                <p className="mb-3">
                  Diese Website verwendet zur Integration und Synchronisation von Datenbanken und
                  Web-Anwendungen die Dienste des folgenden Anbieters: n8n GmbH, Novalisstr. 10,
                  10115, Berlin.
                </p>
                <p className="mb-3">
                  Hierbei werden unsere Verarbeitungsvorgänge automatisiert und unterschiedliche
                  Arbeitsabläufe etabliert, um interne Prozesse in unserem Verarbeitungssystem
                  effizient zu verwalten und auszuführen. Sofern hierbei auch personenbezogene
                  Daten verarbeitet werden, erfolgt dies gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
                  unseres berechtigten Interesses an der Optimierung unserer internen Organisation.
                </p>
                <p>
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte
                  Weitergabe an Dritte untersagt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">7.2 Google Meet</p>
                <p className="mb-3">
                  Für die Durchführung von Online-Meetings, Videokonferenzen und/oder Webinaren
                  nutzen wir diesen Anbieter: Google Ireland Limited, Gordon House, 4 Barrow St,
                  Dublin, D04 E5W5, Irland.
                </p>
                <p className="mb-3">
                  Hierbei kann es auch zu einer Übermittlung an die Server der Google LLC. in den
                  USA kommen.
                </p>
                <p className="mb-3">
                  Der Anbieter verarbeitet unterschiedliche Daten, wobei der Umfang der
                  verarbeiteten Daten davon abhängt, welche Daten du vor oder während der Teilnahme
                  an einem Online-Meeting, einer Videokonferenz oder einem Webinar mitteilst. Es
                  werden deine Daten als Kommunikationsteilnehmer verarbeitet und auf Servern des
                  Anbieters gespeichert. Dies können insbesondere deine Anmeldedaten (Name,
                  E-Mail-Adresse, Telefonnummer (optional) und Passwort) und Sitzungsdaten (Thema,
                  Teilnehmer-IP-Adresse, Geräteinformationen, Beschreibung (optional)) sein.
                </p>
                <p className="mb-3">
                  Darüber hinaus können Bild- und Tonbeiträge der Teilnehmer sowie Spracheingaben
                  in Chats verarbeitet werden. Für die Verarbeitung von personenbezogenen Daten,
                  die für die Erfüllung eines Vertrages mit dir erforderlich sind (dies gilt auch
                  für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich sind), dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Soweit
                  du uns eine Einwilligung zur Verarbeitung deiner Daten erteilt hast, erfolgt die
                  Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Eine erteilte
                  Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Im
                  Übrigen ist Rechtsgrundlage für die Datenverarbeitung bei der Durchführung von
                  Online-Meetings, Videokonferenzen oder Webinaren unser berechtigtes Interesse gem.
                  Art. 6 Abs. 1 lit. f DSGVO an der effektiven Durchführung des Online-Meetings,
                  Webinars oder der Videokonferenz.
                </p>
                <p className="mb-3">
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unbefugte Weitergabe
                  an Dritte untersagt.
                </p>
                <p className="mb-3">
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem
                  EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf
                  Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung
                  des europäischen Datenschutzniveaus sicherstellt.
                </p>
                <p>
                  Weitere Hinweise zu den Datenschutzbestimmungen von Google findest du hier:{" "}
                  <a
                    href="https://business.safety.google/intl/de/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-white transition-colors break-all"
                  >
                    https://business.safety.google/intl/de/privacy/
                  </a>
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">7.3 Zoom</p>
                <p className="mb-3">
                  Für die Durchführung von Online-Meetings, Videokonferenzen und/oder Webinaren
                  nutzen wir diesen Anbieter: Zoom Video Communications Inc., 55 Almaden Blvd,
                  Suite 600, San Jose, CA 95113, USA.
                </p>
                <p className="mb-3">
                  Der Anbieter verarbeitet unterschiedliche Daten, wobei der Umfang der
                  verarbeiteten Daten davon abhängt, welche Daten du vor oder während der Teilnahme
                  an einem Online-Meeting, einer Videokonferenz oder einem Webinar mitteilst. Es
                  werden deine Daten als Kommunikationsteilnehmer verarbeitet und auf Servern des
                  Anbieters gespeichert. Dies können insbesondere deine Anmeldedaten (Name,
                  E-Mail-Adresse, Telefonnummer (optional) und Passwort) und Sitzungsdaten (Thema,
                  Teilnehmer-IP-Adresse, Geräteinformationen, Beschreibung (optional)) sein.
                </p>
                <p className="mb-3">
                  Darüber hinaus können Bild- und Tonbeiträge der Teilnehmer sowie Spracheingaben
                  in Chats verarbeitet werden. Für die Verarbeitung von personenbezogenen Daten,
                  die für die Erfüllung eines Vertrages mit dir erforderlich sind (dies gilt auch
                  für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich sind), dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Soweit
                  du uns eine Einwilligung zur Verarbeitung deiner Daten erteilt hast, erfolgt die
                  Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Eine erteilte
                  Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Im
                  Übrigen ist Rechtsgrundlage für die Datenverarbeitung bei der Durchführung von
                  Online-Meetings, Videokonferenzen oder Webinaren unser berechtigtes Interesse gem.
                  Art. 6 Abs. 1 lit. f DSGVO an der effektiven Durchführung des Online-Meetings,
                  Webinars oder der Videokonferenz.
                </p>
                <p className="mb-3">
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unbefugte Weitergabe
                  an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem
                  EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf
                  Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung
                  des europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">7.4 Google Forms</p>
                <p className="mb-3">
                  Für die Durchführung von Umfragen oder bei Online-Formularen verwenden wir die
                  Dienste des folgenden Anbieters: Google Ireland Ltd., Gordon House, Barrow Street,
                  Dublin 4, Irland.
                </p>
                <p className="mb-3">
                  Neben einer Übermittlung von Daten an den o.g. Anbieterstandort können Daten auch
                  übermittelt werden an: Google LLC, USA.
                </p>
                <p className="mb-3">
                  Der Anbieter ermöglicht es uns, Umfragen und Onlineformulare zu gestalten und
                  auszuwerten. Neben den jeweiligen personenbezogenen Daten, die Du in die Formulare
                  eingibst, werden auch Informationen zu Deinem Betriebssystem, Browser, Datum und
                  Uhrzeit Deines Besuchs, Referrer-URL sowie Deine IP-Adresse erhoben, an den
                  Anbieter übermittelt und auf Servern des Anbieters gespeichert.
                </p>
                <p className="mb-3">
                  Die Speicherung der von Dir in die Formulare eingegebenen Informationen erfolgt
                  passwortgeschützt, damit sichergestellt ist, dass Drittzugriffe ausgeschlossen
                  werden und nur wir die Daten zum im Formular jeweilig benannten Zweck auswerten
                  können.
                </p>
                <p className="mb-3">
                  Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines
                  Vertrages mit Dir erforderlich sind (dies gilt auch für Verarbeitungsvorgänge,
                  die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind), dient Art. 6
                  Abs. 1 lit. b DSGVO als Rechtsgrundlage. Hast Du uns eine Einwilligung für die
                  Verarbeitung Deiner Daten erteilt, erfolgt die Verarbeitung auf Grundlage des
                  Art. 6 Abs. 1 lit. a DSGVO. Eine erteilte Einwilligung kann jederzeit mit Wirkung
                  für die Zukunft widerrufen werden.
                </p>
                <p className="mb-3">
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unbefugte Weitergabe
                  an Dritte untersagt.
                </p>
                <p>
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem
                  EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf
                  Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung
                  des europäischen Datenschutzniveaus sicherstellt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">7.5 HighLevel</p>
                <p className="mb-3">
                  Für die Durchführung von Umfragen oder bei Online-Formularen verwenden wir die
                  Dienste des folgenden Anbieters: HighLevel Inc., 400 North Saint Paul St., Suite
                  920, Dallas, Texas 75201, USA.
                </p>
                <p className="mb-3">
                  Der Anbieter ermöglicht es uns, Umfragen und Onlineformulare zu gestalten und
                  auszuwerten. Neben den jeweiligen personenbezogenen Daten, die du in die Formulare
                  eingibst, werden auch Informationen zu deinem Betriebssystem, Browser, Datum und
                  Uhrzeit deines Besuchs, Referrer-URL sowie deine IP-Adresse erhoben, an den
                  Anbieter übermittelt und auf Servern des Anbieters gespeichert.
                </p>
                <p className="mb-3">
                  Die Speicherung der von dir in die Formulare eingegebenen Informationen erfolgt
                  passwortgeschützt, damit sichergestellt ist, dass Drittzugriffe ausgeschlossen
                  werden und nur wir die Daten zum im Formular jeweilig benannten Zweck auswerten
                  können.
                </p>
                <p className="mb-3">
                  Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines
                  Vertrages mit dir erforderlich sind (dies gilt auch für Verarbeitungsvorgänge,
                  die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind), dient Art. 6
                  Abs. 1 lit. b DSGVO als Rechtsgrundlage. Hast du uns eine Einwilligung für die
                  Verarbeitung deiner Daten erteilt, erfolgt die Verarbeitung auf Grundlage des
                  Art. 6 Abs. 1 lit. a DSGVO. Eine erteilte Einwilligung kann jederzeit mit Wirkung
                  für die Zukunft widerrufen werden.
                </p>
                <p>
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unbefugte Weitergabe
                  an Dritte untersagt.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">7.6 Typeform</p>
                <p className="mb-3">
                  Für die Durchführung von Umfragen oder bei Online-Formularen verwenden wir die
                  Dienste des folgenden Anbieters: TYPEFORM SL, Carrer de Can Rabia 3-5, 4. Etage,
                  08017 Barcelona, Spanien.
                </p>
                <p className="mb-3">
                  Der Anbieter ermöglicht es uns, Umfragen und Onlineformulare zu gestalten und
                  auszuwerten. Neben den jeweiligen personenbezogenen Daten, die du in die Formulare
                  eingibst, werden auch Informationen zu deinem Betriebssystem, Browser, Datum und
                  Uhrzeit deines Besuchs, Referrer-URL sowie deine IP-Adresse erhoben, an den
                  Anbieter übermittelt und auf Servern des Anbieters gespeichert.
                </p>
                <p className="mb-3">
                  Die Speicherung der von dir in die Formulare eingegebenen Informationen erfolgt
                  passwortgeschützt, damit sichergestellt ist, dass Drittzugriffe ausgeschlossen
                  werden und nur wir die Daten zum im Formular jeweilig benannten Zweck auswerten
                  können.
                </p>
                <p className="mb-3">
                  Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines
                  Vertrages mit dir erforderlich sind (dies gilt auch für Verarbeitungsvorgänge,
                  die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind), dient Art. 6
                  Abs. 1 lit. b DSGVO als Rechtsgrundlage. Hast du uns eine Einwilligung für die
                  Verarbeitung deiner Daten erteilt, erfolgt die Verarbeitung auf Grundlage des
                  Art. 6 Abs. 1 lit. a DSGVO. Eine erteilte Einwilligung kann jederzeit mit Wirkung
                  für die Zukunft widerrufen werden.
                </p>
                <p>
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unbefugte Weitergabe
                  an Dritte untersagt.
                </p>
              </div>

            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 8 */}
          <section id="s8">
            <h2 className="text-lg font-semibold text-white mb-5">8) Tools und Sonstiges</h2>

            <div className="space-y-4">
              <p className="font-medium text-white">Cookie-Consent-Tool</p>
              <p>
                Diese Website nutzt zur Einholung wirksamer Nutzereinwilligungen für
                einwilligungspflichtige Cookies und cookie-basierte Anwendungen ein sog.
                „Cookie-Consent-Tool". Das „Cookie-Consent-Tool" wird dir bei Seitenaufruf in Form
                einer interaktiven Benutzeroberfläche angezeigt, auf welcher du per Häkchensetzung
                Einwilligungen für bestimmte Cookies und/oder cookie-basierte Anwendungen erteilen
                kannst. Hierbei werden durch den Einsatz des Tools alle einwilligungspflichtigen
                Cookies/Dienste nur dann geladen, wenn du entsprechende Einwilligungen per
                Häkchensetzung erteilst. So wird sichergestellt, dass nur im Falle einer erteilten
                Einwilligung derartige Cookies auf deinem jeweiligen Endgerät gesetzt werden.
              </p>
              <p>
                Das Tool setzt technisch notwendige Cookies, um deine Cookie-Präferenzen zu
                speichern. Personenbezogene Nutzerdaten werden hierbei grundsätzlich nicht
                verarbeitet.
              </p>
              <p>
                Kommt es im Einzelfall zum Zwecke der Speicherung, Zuordnung oder Protokollierung
                von Cookie-Einstellungen doch zur Verarbeitung personenbezogener Daten (wie etwa
                der IP-Adresse), erfolgt diese gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
                berechtigten Interesses an einem rechtskonformen, nutzerspezifischen und
                nutzerfreundlichen Einwilligungsmanagement für Cookies und mithin an einer
                rechtskonformen Ausgestaltung unseres Internetauftritts.
              </p>
              <p>
                Weitere Rechtsgrundlage für die Verarbeitung ist ferner Art. 6 Abs. 1 lit. c
                DSGVO. Wir unterliegen als Verantwortliche der rechtlichen Verpflichtung, den
                Einsatz technisch nicht notwendiger Cookies von der jeweiligen Nutzereinwilligung
                abhängig zu machen.
              </p>
              <p>
                Soweit erforderlich, haben wir mit dem Anbieter einen Auftragsverarbeitungsvertrag
                geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
                unberechtigte Weitergabe an Dritte untersagt.
              </p>
              <p>
                Weitere Informationen zum Betreiber und den Einstellungsmöglichkeiten des
                Cookie-Consent-Tools findest du direkt in der entsprechenden Benutzeroberfläche
                auf unserer Website.
              </p>
            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 9 */}
          <section id="s9">
            <h2 className="text-lg font-semibold text-white mb-5">9) Rechte des Betroffenen</h2>

            <div className="space-y-6">
              <div>
                <p className="mb-4">
                  <strong className="text-white">9.1</strong>{" "}
                  Das geltende Datenschutzrecht gewährt dir gegenüber uns als Verantwortlichen
                  hinsichtlich der Verarbeitung deiner personenbezogenen Daten die nachstehenden
                  Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei für die jeweiligen
                  Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen wird:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-[#C9D0DC]">
                  <li>Auskunftsrecht gemäß Art. 15 DSGVO</li>
                  <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
                  <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
                  <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
                  <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO</li>
                  <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
                  <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO</li>
                  <li>Recht auf Beschwerde gemäß Art. 77 DSGVO</li>
                </ul>
              </div>

              <div className="bg-[#161A22] border border-[#2A2F3A] rounded-xl p-5">
                <p className="font-semibold text-white mb-3 tracking-wide">9.2 WIDERSPRUCHSRECHT</p>
                <div className="space-y-4 text-[#D1D5DB] text-[13px] uppercase leading-relaxed tracking-wide">
                  <p>
                    Wenn wir im Rahmen einer Interessenabwägung deine personenbezogenen Daten
                    aufgrund unseres überwiegenden berechtigten Interesses verarbeiten, hast du das
                    jederzeitige Recht, aus Gründen, die sich aus deiner besonderen Situation
                    ergeben, gegen diese Verarbeitung Widerspruch mit Wirkung für die Zukunft
                    einzulegen.
                  </p>
                  <p>
                    Machst du von deinem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung
                    der betroffenen Daten. Eine Weiterverarbeitung bleibt aber vorbehalten, wenn wir
                    zwingende schutzwürdige Gründe für die Verarbeitung nachweisen können, die deine
                    Interessen, Grundrechte und Grundfreiheiten überwiegen, oder wenn die
                    Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                    dient.
                  </p>
                  <p>
                    Werden deine personenbezogenen Daten von uns verarbeitet, um Direktwerbung zu
                    betreiben, hast du das Recht, jederzeit Widerspruch gegen die Verarbeitung dir
                    betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen.
                    Du kannst den Widerspruch wie oben beschrieben ausüben.
                  </p>
                  <p>
                    Machst du von deinem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung
                    der betroffenen Daten zu Direktwerbezwecken.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[#2A2F3A]/60" />

          {/* 10 */}
          <section id="s10">
            <h2 className="text-lg font-semibold text-white mb-5">
              10) Dauer der Speicherung personenbezogener Daten
            </h2>

            <div className="space-y-4">
              <p>
                Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der
                jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig –
                zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels-
                und steuerrechtliche Aufbewahrungsfristen).
              </p>
              <p>
                Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen
                Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so
                lange gespeichert, bis du deine Einwilligung widerrufst.
              </p>
              <p>
                Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen
                rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der
                Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten
                nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr
                zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits
                kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.
              </p>
              <p>
                Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO werden diese Daten so lange gespeichert, bis du dein Widerspruchsrecht
                nach Art. 21 Abs. 1 DSGVO ausübst, es sei denn, wir können zwingende
                schutzwürdige Gründe für die Verarbeitung nachweisen, die deine Interessen, Rechte
                und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung
                oder Verteidigung von Rechtsansprüchen.
              </p>
              <p>
                Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert,
                bis du dein Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausübst.
              </p>
              <p>
                Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische
                Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte
                personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die
                sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
              </p>
            </div>
          </section>

          {/* Stand */}
          <p className="text-[11px] text-[#4B5563] pt-4">Stand: 06.03.2026, 16:33:57</p>

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
            <a href="/datenschutz" className="text-[#9CA3AF] text-sm">Datenschutz</a>
            <a href="/agb" className="text-[#6B7280] hover:text-[#9CA3AF] text-sm transition-colors">AGB</a>
            <a href="/widerrufsbelehrung" className="text-[#6B7280] hover:text-[#9CA3AF] text-sm transition-colors">Widerrufsbelehrung</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
