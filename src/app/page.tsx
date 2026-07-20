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

const services = [
  {
    icon: Scissors,
    title: "Medical Pedicure (Medi-Pedi)",
    description:
      "A clinical-grade waterless pedicure performed with autoclave-sterilised instruments. Focused entirely on the health of your feet — treating and preventing conditions safely and hygienically.",
  },
  {
    icon: Stethoscope,
    title: "Diabetic Foot Care & Assessment",
    description:
      "Specialist care tailored to the heightened sensitivity and circulatory risks associated with diabetes. Includes vascular and neurological screening, skin integrity checks, and safe nail care.",
  },
  {
    icon: CheckCircle,
    title: "Ingrown Toenail Treatment",
    description:
      "Precise, pain-minimising treatment for ingrowing toenails using sterile specialist tools. Conservative management provided, with surgical referral guidance where appropriate.",
  },
  {
    icon: Award,
    title: "Callus, Corn & Hard Skin Removal",
    description:
      "Safe and controlled removal of problematic hard skin, corns, and calluses — relieving pain and pressure without aggressive or tissue-damaging techniques.",
  },
  {
    icon: Microscope,
    title: "Fungal Nail Treatment",
    description:
      "Clinical assessment and treatment of fungal nail infections (onychomycosis), with evidence-based advice on hygiene, footwear, and appropriate topical or oral treatment pathways.",
  },
  {
    icon: HeartHandshake,
    title: "Foot Health Advising & Preventative Care",
    description:
      "Personalised guidance on footwear selection, orthotic insoles, self-care routines, and preventative strategies to maintain long-term foot health and mobility.",
  },
];

const faqs = [
  {
    question:
      "What is the difference between a medical pedicure and a standard salon pedicure?",
    answer: `A medical pedicure — often called a Medi-Pedi — is performed by a trained foot health specialist in a clinical setting, using instruments that are autoclave-sterilised between every patient. Unlike a standard salon pedicure, our treatment is waterless: soaking feet in shared water is avoided entirely, eliminating the risk of cross-contamination and fungal transmission.

We do not use aggressive filing, harsh abrasive scrubs, or excessive cutting that can damage delicate skin and create entry points for infection. Instead, we use precision surgical instruments to treat the nail plate, surrounding tissue, and skin in a controlled, evidence-based way — with a focus entirely on health outcomes, not cosmetic appearance.`,
  },
  {
    question: "Is this treatment safe if I am diabetic?",
    answer: `Not only is it safe — it is strongly recommended. People living with diabetes are at significantly higher risk of foot complications due to peripheral neuropathy (reduced sensation) and impaired circulation. This means minor skin breaks, nail problems, or pressure sores that might go unnoticed can rapidly escalate into serious infections.

Our diabetic foot care appointments use exclusively sterile, single-use or autoclave-sterilised instruments to prevent any risk of introducing infection. We take meticulous care to avoid micro-trauma to the skin. Each appointment also includes a brief vascular and neurological assessment so that any changes in circulation or sensation are identified early and — where necessary — referred onward to the appropriate clinician.`,
  },
  {
    question: "Does the treatment hurt?",
    answer: `Medical pedicure treatments are non-invasive and designed to be comfortable and pain-free. We work methodically and gently, and our clinical approach means we never rush or apply unnecessary force. Most clients find the experience deeply relaxing.

If you are attending for ingrown toenail treatment or have a particularly sensitive condition, we will always discuss what to expect beforehand and work at a pace that keeps you comfortable throughout.`,
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
                <span className="text-teal-600">Foot Care</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
              <a
                href="#services"
                className="hover:text-teal-600 transition-colors"
              >
                Services
              </a>
              <a href="#faq" className="hover:text-teal-600 transition-colors">
                FAQ
              </a>
              <a
                href="#about"
                className="hover:text-teal-600 transition-colors"
              >
                About
              </a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
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
                Clinical-Grade Foot Health Care
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
                Professional Medical{" "}
                <span className="text-teal-600">
                  Pedicure & Foot Advising
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                Expert foot health care delivered with clinical precision.
                Autoclave-sterilised instruments, a waterless protocol, and
                personalised treatment — because your feet deserve more than a
                salon appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/[INSERT_WHATSAPP_NUMBER]"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 font-semibold px-6 py-3.5 rounded-full hover:border-teal-500 hover:text-teal-600 transition-colors"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  Autoclave-sterilised instruments
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  Waterless protocol
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  Diabetic-safe treatment
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
                    src="/hero-image.png"
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
              Clinical Expertise & Standards
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Professional qualifications and state-of-the-art sterilisation protocols ensure your safety and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Ordination */}
            <div className="flex flex-col items-center">
              <div className="relative w-full mb-6">
                <div className="absolute -inset-3 bg-gradient-to-br from-teal-100 to-slate-100 rounded-2xl"></div>
                <div className="relative bg-white p-4 rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="/ordination.png"
                    alt="Professional qualifications and certifications"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Professional Qualifications
              </h3>
              <p className="text-slate-600 text-center">
                Advanced training and credentials in podiatric care and foot health management, ensuring evidence-based clinical practice.
              </p>
            </div>

            {/* Steril Environment */}
            <div className="flex flex-col items-center">
              <div className="relative w-full mb-6">
                <div className="absolute -inset-3 bg-gradient-to-br from-teal-100 to-slate-100 rounded-2xl"></div>
                <div className="relative bg-white p-4 rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="/steril-env.png"
                    alt="State-of-the-art sterilisation environment"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Sterile Clinical Environment
              </h3>
              <p className="text-slate-600 text-center">
                Autoclave-sterilised instruments, single-use supplies, and meticulous hygiene protocols — medical-grade sterilisation every time.
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
              Our Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Every treatment is tailored to your individual foot health needs,
              carried out with clinical precision and genuine care.
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
              Common Questions
            </h2>
            <p className="text-slate-500">
              Honest, evidence-based answers to help you understand your
              treatment.
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
                About Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are a specialist foot health practice dedicated to delivering
                clinical excellence in every appointment. Our practitioner holds
                advanced qualifications in podiatric care and brings a genuine
                commitment to evidence-based, patient-centred treatment.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We believe that healthy feet are fundamental to quality of life
                — and that everyone deserves access to the same standard of
                care, whether managing a complex condition like diabetes or
                simply maintaining day-to-day foot health.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every detail — from the sterility of our instruments to the
                pace of your appointment — is designed with your comfort,
                safety, and long-term wellbeing in mind.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Fully insured &amp; trained to clinical standards
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Autoclave-sterilised instruments — every time
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Footprints className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm text-slate-600">
                    Specialist care for all foot health conditions
                  </span>
                </div>
              </div>
            </div>

            <div id="contact">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Find Us
              </h2>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 mb-1">Location</p>
                    <p className="text-slate-600 text-sm">
                      [Insert Street Address]
                      <br />
                      [Insert City &amp; Postcode]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 mb-1">
                      Opening Hours
                    </p>
                    <p className="text-slate-600 text-sm">
                      [Insert Opening Hours]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 mb-1">Contact</p>
                    <p className="text-slate-600 text-sm">
                      Prefer WhatsApp? Tap below to message us directly.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/[INSERT_WHATSAPP_NUMBER]"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl transition-colors shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Message Us on WhatsApp
              </a>
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
                <span className="text-teal-400">Foot Care</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 text-center order-last sm:order-none">
              &copy; 2025 MediPed Foot Care. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/[INSERT_INSTAGRAM_HANDLE]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                @YourInstagram
              </a>
              <a
                href="https://wa.me/[INSERT_WHATSAPP_NUMBER]"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
