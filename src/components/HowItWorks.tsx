import { Search, FileText, HardHat } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find the machine right for you",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    cta: "Find",
  },
  {
    icon: FileText,
    title: "Get an instant quote on rent online",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    cta: "Get Quote",
    highlighted: true,
  },
  {
    icon: HardHat,
    title: "Dig yourself or hire us to do it",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    cta: "Dig",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto section-padding">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
          Here's how we make renting<br />heavy equipment easy
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.title} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <step.icon size={28} className="text-construction-gray" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{step.description}</p>
              <button className={step.highlighted ? "btn-primary" : "btn-outline"}>
                {step.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
