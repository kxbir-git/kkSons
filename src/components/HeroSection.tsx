import heroImg from "@/assets/hero-loader.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Heavy construction equipment loader on site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent" />
      </div>
      <div className="relative container mx-auto section-padding pt-24">
        <div className="max-w-lg">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight mb-4">
            Dig yourself
          </h1>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-md">
            Rent! USA provides the heavy equipment you need for fast & easy work on any construction project.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-outline-light">Watch Video</button>
            <button className="btn-primary">Rental Solutions</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
