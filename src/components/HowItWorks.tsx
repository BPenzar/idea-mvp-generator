export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery Generator",
      description:
        "Odgovorite na 15 ključnih pitanja o vašem poslovnom kontekstu, ciljevima i resursima. AI procjenjuje sve ideje kroz prošireni RICE framework.",
      icon: "🔍",
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-600",
    },
    {
      number: "02",
      title: "Business PRD Generator",
      description:
        "Definirajte target korisnike, value proposition i MVP scope. AI kreira sveobuhvatan Business PRD s ROI procjenom i Go/Refine/Hold preporukom.",
      icon: "📋",
      color: "bg-green-50 border-green-200",
      textColor: "text-green-600",
    },
    {
      number: "03",
      title: "Tech PRD Generator",
      description:
        "Generirajte Claude Code-ready tehnički PRD s arhitekturom, database schema, API design i implementation planom. Copy-paste u Claude Code i pokrenite!",
      icon: "⚡",
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kako funkcionira?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sustavni proces u 3 koraka - od nejasne ideje do implementacije
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-gray-300 to-gray-300 md:block"></div>
                )}

                <div className="relative z-10 text-center">
                  {/* Icon circle */}
                  <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 ${step.color}`}>
                    <span className="text-3xl">{step.icon}</span>
                  </div>

                  {/* Step number */}
                  <div className={`mt-4 text-sm font-semibold ${step.textColor}`}>
                    KORAK {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 text-sm font-medium text-gray-700">
            <span>💡</span>
            <span>Cijeli proces traje 1-2 sata za kompletan projekt</span>
          </div>
        </div>
      </div>
    </section>
  );
}