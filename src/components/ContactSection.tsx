import { Phone, MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto section-padding text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          We'll make your smile. You'll see
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <a href="tel:206-123-4567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone size={18} />
            <span className="text-sm font-medium">Call 206-123-4567</span>
          </a>
          <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle size={18} />
            <span className="text-sm font-medium">Live chat</span>
          </button>
          <a href="mailto:info@u-dig.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
            <span className="text-sm font-medium">Email us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
