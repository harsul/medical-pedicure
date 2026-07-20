import { BadgeCheck, ShieldCheck, Footprints, MapPin, Clock, Phone } from "lucide-react";

export const ABOUT_CONTENT = {
  aboutHeading: "O Nama",
  aboutParagraph1:
    "Specijalizirana praksa za zdravlje stopala posvećena pružanju klinačke izvrsnosti na svakom pregledu. Naš praktičar ima napredne kvalifikacije u njezi stopala i donosi iskrenu posvećenost tretmanu zasnovanom na dokazima i usmerenom na pacijenta.",
  aboutParagraph2:
    "Verujemo da su zdrava stopala fundamentalna za kvalitet života - i da svako zaslužuje pristup istom standardu njege, bilo da upravlja složenim stanjem poput dijabetesa ili jednostavno održavajući zdravlje stopala iz dana u dan.",
  aboutParagraph3:
    "Svaki detalj - od sterilnosti naših instrumenata do tempa vašeg pregleda - je osmišljen sa vašom udobnošću, sigurnošću i dugoročnim zdravljem stopala na umu. Naša misija je da redefinišemo šta znači brinuti o stopalima, pružajući iskustvo koje je jednako stručno koliko i brižno.",
  badge1: "Potpuno osiguran i opremljen na klinačkim standardima",
  badge2: "Instrumenti sterilizovani u autoklavnom procesu - svaki put",
  badge3: "Specijalizirana njega za sve zdravstvene probleme stopala",

  contactHeading: "Pronađite Nas",
  locationLabel: "Lokacija",
  locationLine1: "Srdjana Aleksica 14, Otoka",
  locationLine2: "Sarajevo, Bosna i Hercegovina",
  locationMapsUrl:
    "https://www.google.com/maps/search/Srdjana+Aleksica+14+Otoka+Sarajevo+Bosna+i+Hercegovina",
  hoursLabel: "Radno Vrijeme",
  hoursWeekdays: "Pon-Pet: 18:00 - 21:00",
  hoursSaturday: "Sub: 09:00 - 12:00",
  hoursSunday: "Ned: Zatvoreno",
  contactLabel: "Kontakt",
  phone: "+387 61 566 787",
};

export default function AboutSection() {
  const c = ABOUT_CONTENT;
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {c.aboutHeading}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">{c.aboutParagraph1}</p>
            <p className="text-slate-600 leading-relaxed mb-4">{c.aboutParagraph2}</p>
            <p className="text-slate-600 leading-relaxed">{c.aboutParagraph3}</p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm text-slate-600">{c.badge1}</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm text-slate-600">{c.badge2}</span>
              </div>
              <div className="flex items-center gap-3">
                <Footprints className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm text-slate-600">{c.badge3}</span>
              </div>
            </div>
          </div>

          <div id="contact">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {c.contactHeading}
            </h2>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 mb-1">{c.locationLabel}</p>
                  <a
                    href={c.locationMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 text-sm hover:text-teal-600 transition-colors"
                  >
                    {c.locationLine1}
                    <br />
                    {c.locationLine2}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 mb-1">{c.hoursLabel}</p>
                  <p className="text-slate-600 text-sm">
                    {c.hoursWeekdays}
                    <br />
                    {c.hoursSaturday}
                    <br />
                    {c.hoursSunday}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 mb-1">{c.contactLabel}</p>
                  <p className="text-slate-600 text-sm">{c.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
