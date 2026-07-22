import { Footprints, CalendarCheck } from "lucide-react";

export const NAVBAR_CONTENT = {
  brandName: "Pedi Studio",
  brandTagline: "medicinski pedikir",
  navUsluge: "Usluge",
  navFaq: "FAQ",
  navONama: "O Nama",
  ctaFull: "Zakažite Pregled",
  ctaShort: "Zakažite",
};

export default function Navbar() {
  const c = NAVBAR_CONTENT;
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="h-1 bg-teal-500 w-full" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Footprints className="w-6 h-6 text-teal-600" />
            <span className="text-xl font-display font-normal text-slate-900 tracking-tight">
              {c.brandName}{" "}
              <span className="text-teal-600 italic">{c.brandTagline}</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-teal-600 transition-colors">
              {c.navUsluge}
            </a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">
              {c.navFaq}
            </a>
            <a href="#about" className="hover:text-teal-600 transition-colors">
              {c.navONama}
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
          >
            <CalendarCheck className="w-4 h-4" />
            <span className="hidden sm:inline">{c.ctaFull}</span>
            <span className="sm:hidden">{c.ctaShort}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
