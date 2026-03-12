import heroImg from "@/assets/hero-loader.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] lg:min-h-[550px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Construction site with heavy equipment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      <div className="relative w-full">
        <div className="container mx-auto section-padding">
          <div className="bg-primary/90 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-10 py-5 -mb-0">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground uppercase tracking-wide">
              We understand your needs on construction
            </h2>
            <a href="#contact" className="btn-primary bg-secondary hover:bg-secondary/90 whitespace-nowrap text-sm py-2.5 px-6">
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
