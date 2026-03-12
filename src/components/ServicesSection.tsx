import { Building2, Boxes, Paintbrush, Home, Wrench, Truck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construction",
    desc: "We are involved in the assembly and erection of structures, primarily those used to provide shelter.",
  },
  {
    icon: Boxes,
    title: "Building Material",
    desc: "We offer a wide range of building materials like Sand, Bricks, Cement, Iron Rods, Malwa, Copra, Jeera Dust etc.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    desc: "At our service, we ensure your house design is in the hands of our panel of experienced designers.",
  },
  {
    icon: Home,
    title: "Exterior Design",
    desc: "It includes your home's size and shape, how it fits into the surrounding neighbourhood and streetscape.",
  },
  {
    icon: Wrench,
    title: "Renovation",
    desc: "The act or process of repairing, renewing, or restoring property back to good condition.",
  },
  {
    icon: Truck,
    title: "JCB/Excavation/Truck",
    desc: "We offer JCB/Excavation/Truck on a daily or monthly rental basis with a skilled driver.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto section-padding">
        <div className="text-center mb-12">
          <span className="text-secondary font-heading text-sm uppercase tracking-widest">We Are Specialists In</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">What We Do</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background p-6 rounded border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-secondary/10 text-secondary w-14 h-14 rounded flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <s.icon size={28} />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-secondary transition-colors">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
