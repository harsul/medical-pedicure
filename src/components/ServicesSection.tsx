import {
  Stethoscope,
  CheckCircle,
  Award,
  HeartHandshake,
  Scissors,
  Microscope,
  type LucideIcon,
} from "lucide-react";

export const SERVICES_CONTENT = {
  heading: "Usluge koje vraćaju lak korak",
  subheading:
    "Pedi Studio nudi širok spektar specijaliziranih tretmana",
};

export const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Scissors,
    title: "Medicinsk pedikir",
    description:"Za razliku od estetskih tretmana, mi se fokusiramo na zdravlje i trajno rješavanje bolnih stanja. Uz 100% sterilizaciju instrumenata, sigurnost naših klijenata je na prvom mjestu. Posebno smo specijalizirani za osjetljive pacijente i njegu dijabetičkog stopala."  },
  {
    icon: Stethoscope,
    title: "Procjena stanja stopala za dijabetičare",
    description:
      "Specijalistička njega prilagođena povećanoj osjetljivosti i cirkulatornim rizicima povezanim sa dijabetesom. Uključuje vaskularne i neurološke preglede, provjere integriteta kože i sigurnu njegu noktiju.",
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

export default function ServicesSection() {
  const c = SERVICES_CONTENT;
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-wide">
            {c.heading}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">{c.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-slate-100 border-l-4 border-l-teal-400 bg-slate-50 hover:bg-teal-50 transition-colors"
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
  );
}
