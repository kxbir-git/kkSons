import supportPerson from "@/assets/support-person.png";

const HelpSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto section-padding">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={supportPerson}
              alt="Our friendly support team member ready to help you"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">We're here to help you</h2>
            <p className="text-muted-foreground mb-2">Need a quick question answered?</p>
            <p className="text-muted-foreground mb-6">Let's chat online to get what you need.</p>
            <button className="btn-outline">Chat Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
