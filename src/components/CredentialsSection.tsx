const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const CREDENTIALS_CONTENT = {
  heading: "Stručno znanje i standardi higijene",
  subheading:
    "Profesionalne kvalifikacije i napredni protokoli sterilizacije obezbeđuju vašu sigurnost i negu.",
  card1ImageSrc: "/ordination.png",
  card1ImageAlt: "Profesionalne kvalifikacije i sertifikati",
  card1Title: "Profesionalne kvalifikacije",
  card1Description:
    "Napredne obuke i kvalifikacije u njezi stopala i upravljanju zdravljem stopala, osiguravajući praksu zasnovanu na dokazima.",
  card2ImageSrc: "/steril-env.png",
  card2ImageAlt: "Napredna sterilna klinička sredina",
  card2Title: "Sterilna klinička sredina",
  card2Description:
    "Instrumenti sterilizovani u autoklavnom procesu, oprema za jednokratnu upotrebu i pažljivi protokoli higijene — sterilizacija na medicinskom nivou svaki put.",
};

export default function CredentialsSection() {
  const c = CREDENTIALS_CONTENT;
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {c.heading}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">{c.subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col items-center">
            <div className="relative w-full mb-6">
              <div className="absolute -inset-3 bg-gradient-to-br from-teal-100 to-slate-100 rounded-2xl"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-lg overflow-hidden">
                <img
                  src={`${BASE_PATH}${c.card1ImageSrc}`}
                  alt={c.card1ImageAlt}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{c.card1Title}</h3>
            <p className="text-slate-600 text-center">{c.card1Description}</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full mb-6">
              <div className="absolute -inset-3 bg-gradient-to-br from-teal-100 to-slate-100 rounded-2xl"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-lg overflow-hidden">
                <img
                  src={`${BASE_PATH}${c.card2ImageSrc}`}
                  alt={c.card2ImageAlt}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{c.card2Title}</h3>
            <p className="text-slate-600 text-center">{c.card2Description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
