import { BadgeCheck, ShieldCheck, Footprints, MapPin, Clock, Phone } from "lucide-react";

export const ABOUT_CONTENT = {
  aboutHeading: "O Nama",
  aboutParagraph1:"Zakažite svoj termin na vrijeme i priuštite svojim stopalima njegu kakvu zaslužuju. Jer zdrav korak je lak korak!",
  aboutParagraph2:"Pedi Studio je specijalizirani centar za medicinski pedikir na čijem se čelu nalazi medicinska sestra sa 15 godina radnog iskustva u struci.",
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
  hoursWeekdays: "Pon-Sub: 08:00 - 20:00",
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-wide">
              {c.aboutHeading}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">{c.aboutParagraph1}</p>
            <p className="text-slate-600 leading-relaxed mb-4">{c.aboutParagraph2}</p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-lg px-3 py-2">
                <BadgeCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">{c.badge1}</span>
              </div>
              <div className="flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-lg px-3 py-2">
                <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">{c.badge2}</span>
              </div>
              <div className="flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-lg px-3 py-2">
                <Footprints className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">{c.badge3}</span>
              </div>
            </div>
          </div>

          <div id="contact">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-wide">
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
