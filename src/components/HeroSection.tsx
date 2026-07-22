import { ShieldCheck, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { BASE_PATH } from "@/lib/config";

export const HERO_CONTENT = {
  badgeText: "Njega stopala na kliničkom nivou",
  headingLine1: "Stručni medicinski",
  headingLine2: "pedikir i savjetovanje",
  subheading:"Kada se pojave problemi poput uraslih noktiju, bolnih kurjih očiju, dubokih pukotina na petama ili gljivičnih infekcija, estetski pedikir više nije dovoljan. Stopalima je tada potreban stručan, medicinski pristup.",
  ctaWhatsapp: "Zakažite putem WhatsApp",
  ctaServices: "Pogledajte usluge",
  trustBadge1: "Instrumenti sterilizovani u autoklavnom procesu",
  trustBadge2: "Protokol bez vode",
  trustBadge3: "Tretman bezbjedan za dijabetičare",
  whatsappUrl: "https://wa.me/+38761566787",
  imageSrc: "/hero-image.png",
  imageAlt: "Medical pedicure professional examination",
};

export default function HeroSection() {
  const c = HERO_CONTENT;
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-700 text-sm font-medium bg-teal-50 border border-teal-200 px-3 py-1 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4" />
              {c.badgeText}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-display font-normal text-slate-900 leading-tight mb-6">
              {c.headingLine1}{" "}
              <span className="text-teal-600 italic">{c.headingLine2}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
              {c.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={c.whatsappUrl}
                className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {c.ctaWhatsapp}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 font-semibold px-6 py-3.5 rounded-full hover:border-teal-500 hover:text-teal-600 transition-colors"
              >
                {c.ctaServices}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 border border-slate-200 rounded-xl bg-white/70 px-5 py-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                {c.trustBadge1}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                {c.trustBadge2}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                {c.trustBadge3}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-100 to-slate-100 rounded-3xl"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={`${BASE_PATH}${c.imageSrc}`}
                  alt={c.imageAlt}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
