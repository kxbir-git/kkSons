import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const works = [
  { img: project1, title: "Commercial Complex" },
  { img: project2, title: "Highway Extension" },
  { img: project3, title: "Residential Foundation" },
];

const RecentWork = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="text-center mb-10">
          <span className="text-secondary font-heading text-sm uppercase tracking-widest">Work of Excellence</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Recent Projects</h2>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
          {works.map((w) => (
            <StaggerItem key={w.title}>
              <div className="group relative overflow-hidden rounded cursor-pointer">
                <img src={w.img} alt={w.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-heading text-lg font-bold text-primary-foreground">{w.title}</h3>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default RecentWork;
