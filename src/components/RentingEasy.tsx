import excavatorImg from "@/assets/excavator.png";

const RentingEasy = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto section-padding">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">How we make renting easy</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              U-Dig is very different compared to everyone else. Find out how renting heavy equipment for us is easier.
            </p>
            <button className="btn-outline">Find Out How</button>
          </div>
          <div className="md:w-1/2">
            <img src={excavatorImg} alt="Yellow excavator available for easy rental" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentingEasy;
