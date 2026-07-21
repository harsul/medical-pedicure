import { ChevronDown } from "lucide-react";

export const FAQ_CONTENT = {
  heading: "Česta pitanja",
  subheading:
    "Iskreni, dokazima potkrepljeni odgovori koji će vam pomoći da razumete vaš tretman.",
};

export const faqs: { question: string; answer: string }[] = [
  {
    question:
      "Zašto je medicinski pedikir drugačiji?",
    answer: `Za razliku od klasičnih estetskih tretmana, medicinski pedikir u Pedi Studiju fokusiran je na zdravlje stopala i rješavanje konkretnih, bolnih stanja. Tretmani se izvode po najvišim higijenskim standardima, uz stopostotnu sterilizaciju instrumenata, što pruža maksimalnu sigurnost svim klijentima.
Naš cilj nije samo privremeno sakriti problem, već ga trajno i bezbjedno riješiti. Zbog mog dugogodišnjeg iskustva u medicini, posebnu pažnju posvećujemo klijentima s osjetljivim problemima, poput dijabetičkog stopala, gdje svaka greška može biti opasna.`,
  },
  {
    question: "Da li je ovaj tretman bezbedan ako sam dijabetičar?",
    answer: `Nije samo sigurno - snažno se preporučuje. Ljudi sa dijabetesom su bitno ugroženiji od komplikacija stopala zbog periferne neuropatije (smanjene osjetljivosti) i oštećene cirkulacije. To znači da male pucnjeve kože, probleme sa noktima ili pritisne rane koje mogu proći nezapažene mogu brzo prerasti u ozbiljne infekcije.

Naši pregledi njege stopala za dijabetičare koriste isključivo sterilizirane instrumente za jednokratnu upotrebu ili autoklava za sprečavanje bilo kakvog rizika od uvodjenja infekcije. Pažljivo vodimo računa da izbjegnemo mikro-traume na koži. Svaki pregled također uključuje kratku vaskularnu i neurološku procjenu kako bi se bilo kakve promjene u cirkulaciji ili osjetljivosti prepoznale rano i — gdje je potrebno — proslijeđene odgovarajućem liječniku.`,
  },
  {
    question: "Da li tretman boli?",
    answer: `Medicinski tretmani pedikiranja su neinvazivni i dizajnirani da budu udobni i bez bola. Radimo metodično i nježno, a naš klinički pristup znači da nikada ne žurimo niti primjenjujemo nepotrebnu silu. Većina klijenata nalazi iskustvo duboko opuštajućim.

Ako dolazite na tretman uraslih nokta ili imate posebno osjetljivo stanje, uvijek ćemo prvo razgovarati o tome šta možete očekivati i raditi tempom koji vas čini ugodnim tijekom cijelog tretmana.`,
  },
];

export default function FaqSection() {
  const c = FAQ_CONTENT;
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {c.heading}
          </h2>
          <p className="text-slate-500">{c.subheading}</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-800 text-left">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
