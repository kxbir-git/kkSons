import skidSteerImg from "@/assets/skid-steer.png";

const PromoSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto section-padding">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <img src={skidSteerImg} alt="Skid steer rental with free delivery" className="w-full max-w-sm mx-auto" />
          </div>
          <div className="md:w-1/2">
            <div className="bg-primary inline-block px-4 py-1 mb-4">
              <span className="font-heading text-primary-foreground font-bold text-sm uppercase">Special Offer</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Free delivery on all skid steer rentals
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <div className="bg-primary/20 border border-primary px-4 py-2 inline-block mb-6">
              <span className="text-sm font-semibold">Offer valid from 10/01/2016 - 10/02/2016</span>
            </div>
            <div>
              <button className="btn-outline flex items-center gap-2">
                See Offer →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
