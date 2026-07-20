import {
  Stethoscope,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Scissors,
  Clock,
  CheckCircle,
  ChevronDown,
  Award,
  BadgeCheck,
  HeartHandshake,
  Footprints,
  ArrowRight,
  CalendarCheck,
  Microscope,
  Phone,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  {
    icon: Scissors,
    title: "Medicinska pedikiranja (Medi-Pedi)",
    description:
      "Klinički razred pedikiranja bez vode izvedene sa instrumentima steriliziranim u autoklavnom procesu. Fokusirano isključivo na zdravlje vaših stopala - tretiranje i sprečavanje stanja bezbedno i higijjenski.",
  },
  {
    icon: Stethoscope,
    title: "Procjena stanja stopala za dijabetičare",
    description:
      "Specijalistička njega prilagođena povećanoj osjetljivosti i cirkulatornim rizicima povezanim sa dijabetesom. Uključuje vaskularne i neurološke preglede, provjere integriteta kože i sigurnu negu noktiju.",
  },
  {
    icon: CheckCircle,
    title: "Tretman uraslog nokta",
    description:
      "Precizan tretman koji minimizira bol za urasle nokte koristeći sterilizirane specijalizirane alate. Pruža se konzervativna njega sa uputama za hirurške intervencije gdje je potrebno.",
  },
  {
    icon: Award,
    title: "Uklanjanje kurjeg oka i zadebljanja kože",
    description:
      "Sigurno i kontrolisano uklanjanje problematične zadebljane kože, kurjeg oka - ublažavanje bola i pritiska bez agresivnih ili štetnih teknika.",
  },
  {
    icon: Microscope,
    title: "Tretman gljivičnih i bakterijskih infekcija noktiju",
    description:
      "Klinička procjena i tretman gljivičnih infekcija noktiju (onihomikoza) sa dokazanim savjetima o higijeni, obuči i odgovarajućim topikalnim ili oralnim tretmanima.",
  },
  {
    icon: HeartHandshake,
    title: "Savjetovanje za zdravlje stopala i preventivna njega",
    description:
      "Personalizovani savjet o izboru obuće, ortopedskim uloškama, rutinama samo-njege i preventivnim strategijama za održavanje dugoročnog zdravlja i pokretljivosti stopala.",
  },
];

const faqs = [
  {
    question:
      "Koja je razlika između medicinskog pedikiranja i standardne salon pedikiranja?",
    answer: `Medicinska pedikiranja - često nazvana Medi-Pedi, izvedena je od strane obučenog specijalista za zdravlje stopala u klinički okruženju, koristeći instrumente koji su sterilizovani u autoklavnom procesu između svakog pacijenta. Za razliku od standardne salon pedikiranja, naš tretman je bez vode: potapanje stopala u deljenu vodu se u potpunosti izbjegava, čime se eliminiše rizik od unakrsne kontaminacije i prenosivanja gljivica.

Ne koristimo agresivno pilanje, oštre abrazivne peelingove ili prekomerno rezanje koje može oštetiti osjetljivu kožu i stvoriti prolazne točke za infekciju. Umjesto toga, koristimo precizne kirurške instrumente za tretiranje nokta, okružujućeg tkiva i kože na kontrolisani, dokazima potkrepljen način — sa fokusom isključivo na zdravstvene rezultate, a ne na estetski izgled.`,
  },
  {
    question: "Da li je ovaj tretman bezbedan ako sam dijabetičar?",
    answer: `Nije samo sigurno —- snažno se preporučuje. Ljudi sa dijabetesom su bitno ugroženiji od komplikacija stopala zbog periferne neuropatije (smanjene osjetljivosti) i oštećene cirkulacije. To znači da male pucnjeve kože, probleme sa noktima ili pritisne rane koje mogu proći nezapažene mogu brzo prerasti u ozbiljne infekcije.

Naši pregledi njege stopala za dijabetičare koriste isključivo sterilizirane instrumente za jednokratnu upotrebu ili autoklava za sprečavanje bilo kakvog rizika od uvodjenja infekcije. Pažljivo vodimo računa da izbjegnemo mikro-traume na koži. Svaki pregled također uključuje kratku vaskularnu i neurološku procjenu kako bi se bilo kakve promjene u cirkulaciji ili osjetljivosti prepoznale rano i — gdje je potrebno — proslijeđene odgovarajućem liječniku.`,
  },
  {
    question: "Da li tretman boli?",
    answer: `Medicinski tretmani pedikiranja su neinvazivni i dizajnirani da budu udobni i bez bola. Radimo metodično i nježno, a naš klinički pristup znači da nikada ne žurimo niti primjenjujemo nepotrebnu silu. Većina klijenata nalazi iskustvo duboko opuštajućim.

Ako dolazite na tretman uraslih nokta ili imate posebno osjetljivo stanje, uvijek ćemo prvo razgovarati o tome šta možete očekivati i raditi tempom koji vas čini ugodnim tijekom cijelog tretmana.`,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Footprints className="w-6 h-6 text-teal-600" />
              <span className="text-lg font-semibold text-slate-900 tracking-tight">
                MediPed{" "}
                <span className="text-teal-600">njega stopala</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
              <a
                href="#services"
                className="hover:text-teal-600 transition-colors"
              >
                Usluge
              </a>
              <a href="#faq" className="hover:text-teal-600 transition-colors">
                FAQ
              </a>
              <a
                href="#about"
                className="hover:text-teal-600 transition-colors"
              >
                O Nama
              </a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Zakažite Pregled</span>
              <span className="sm:hidden">Zakažite</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-slate-50 py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 90% 10%, rgb(204 251 241 / 0.5), transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="inline-flex items-center gap-2 text-teal-700 text-sm font-medium bg-teal-50 border border-teal-200 px-3 py-1 rounded-full mb-6">
                <ShieldCheck className="w-4 h-4" />
                Njega stopala na kliničkom nivou
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
                Stručna medicinska{" "}
                <span className="text-teal-600">
                  pedikiranja i savjetovanje
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                Stručna njega stopala dostavljana sa klinačkom preciznošću.
                Instrumenti sterilizovani u autoklavnom procesu, protokol bez vode i
                personalizovani tretman — jer vaša stopala zaslužuju više od
                salon posete.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/[INSERT_WHATSAPP_NUMBER]"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Zakažite putem WhatsApp
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 font-semibold px-6 py-3.5 rounded-full hover:border-teal-500 hover:text-teal-600 transition-colors"
                >
                  Pogledajte usluge
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  Instrumenti sterilizovani u autoklavnom procesu
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  Protokol bez vode
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  Tretman bezbjedan za dijabetičare
                </div>
              </div>
            </div>

            {/* Right side - Image with frame */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Frame effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-100 to-slate-100 rounded-3xl"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={`${BASE_PATH}/hero-image.png`}
                    alt="Medical pedicure professional examination"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Environment */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Stručno znanje i standardi higijene
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Profesionalne kvalifikacije i napredni protokoli sterilizacije obezbeđuju vašu sigurnost i negu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Ordination */}
            <div className="flex flex-col items-center">
              <div className="relative w-full mb-6">
                <div className="absolute -inset-3 bg-gradient-to-br from-teal-100 to-slate-100 rounded-2xl"></div>
                <div className="relative bg-white p-4 rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={`${BASE_PATH}/ordination.png`}
                    alt="Profesionalne kvalifikacije i sertifikati"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Profesionalne kvalifikacije
              </h3>
              <p className="text-slate-600 text-center">
                Napredne obuke i kvalifikacije u njezi stopala i upravljanju zdravljem stopala, osiguravajući praksu zasnovanu na dokazima.
              </p>
            </div>

            {/* Steril Environment */}
            <div className="flex flex-col items-center">
              <div className="relative w-full mb-6">
                <div className="absolute -inset-3 bg-gradient-to-br from-teal-100 to-slate-100 rounded-2xl"></div>
                <div className="relative bg-white p-4 rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={`${BASE_PATH}/steril-env.png`}
                    alt="Napredna sterilna klinička sredina"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Sterilna klinička sredina
              </h3>
              <p className="text-slate-600 text-center">
                Instrumenti sterilizovani u autoklavnom procesu, oprema za jednokratnu upotrebu i pažljivi protokoli higijene — sterilizacija na medicinskom nivou svaki put.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Naše usluge
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Svaki tretman je prilagođen vašim individualnim potrebama za zdravlje stopala,
              proveden sa klinačkom preciznošću i pažljom brigom.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-teal-50 hover:border-teal-200 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-100 group-hover:bg-teal-200 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Česta pitanja
            </h2>
            <p className="text-slate-500">
              Iskreni, dokazima potkrepljeni odgovori koji će vam pomoći da razumete
              vaš tretman.
            </p>
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

      {/* About & Location */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                O Nama
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Specijalizirana praksa za zdravlje stopala posvećena pružanju
                klinačke izvrsnosti na svakom pregledu. Naš praktičar ima
                napredne kvalifikacije u njezi stopala i donosi iskrenu
                posvećenost tretmanu zasnovanom na dokazima i usmerenom na pacijenta.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Verujemo da su zdrava stopala fundamentalna za kvalitet života
                - i da svako zaslužuje pristup istom standardu
                njege, bilo da upravlja složenim stanjem poput dijabetesa ili
                jednostavno održavajući zdravlje stopala iz dana u dan.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Svaki detalj - od sterilnosti naših instrumenata do
                tempa vašeg pregleda - je osmišljen sa vašom udobnošću,
                sigurnošću i dugoročnim zdravljem stopala na umu. Naša misija je da
                redefinišemo šta znači brinuti o stopalima, pružajući iskustvo koje je
                jednako stručno koliko i brižno.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Potpuno osiguran i opremljen na klinačkim standardima
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Instrumenti sterilizovani u autoklavnom procesu - svaki put
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Footprints className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Specijalizirana njega za sve zdravstvene probleme stopala
                  </span>
                </div>
              </div>
            </div>

            <div id="contact">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Pronađite Nas
              </h2>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 mb-1">Lokacija</p>
                    <a
                      href="https://www.google.com/maps/search/Srdjana+Aleksica+14+Otoka+Sarajevo+Bosna+i+Hercegovina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 text-sm hover:text-teal-600 transition-colors"
                    >
                      Srdjana Aleksica 14, Otoka
                      <br />
                      Sarajevo, Bosna i Hercegovina
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 mb-1">
                      Radno Vrijeme
                    </p>
                    <p className="text-slate-600 text-sm">
                      Pon-Pet: 18:00 - 21:00
                      <br />
                      Sub: 09:00 - 12:00
                      <br />
                      Ned: Zatvoreno
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 mb-1">Kontakt</p>
                    <p className="text-slate-600 text-sm">
                      +387 61 566 787
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Footprints className="w-5 h-5 text-teal-400" />
              <span className="text-white font-semibold tracking-tight">
                MediPed{" "}
                <span className="text-teal-400">njega <samp></samp>topala</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 text-center order-last sm:order-none">
              &copy; 2026 Sva prava zadržana.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/[INSERT_FACEBOOK_PAGE]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-500 hover:text-[#1877F2] transition-colors duration-200"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com/[INSERT_INSTAGRAM_HANDLE]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-500 hover:text-[#E1306C] transition-colors duration-200"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="viber://chat?number=%2B38761566787"
                aria-label="Viber"
                className="text-slate-500 hover:text-[#7360f2] transition-colors duration-200"
              >
                <FaViber size={20} />
              </a>
              <a
                href="https://wa.me/+38761566787"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-slate-500 hover:text-[#25D366] transition-colors duration-200"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
