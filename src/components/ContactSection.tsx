import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <span className="text-secondary font-heading text-sm uppercase tracking-widest">Can We Help?</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <a href="tel:+919770077077" className="flex items-center gap-4 hover:text-secondary transition-colors">
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Call Us</div>
                  <div className="font-semibold text-lg">(+91) 9770-077-077</div>
                </div>
              </a>
              <a href="mailto:enquiry@mgcgroups.in" className="flex items-center gap-4 hover:text-secondary transition-colors">
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Email Us</div>
                  <div className="font-semibold">enquiry@mgcgroups.in</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60">Address</div>
                  <div className="font-semibold">B/19 E8, Ishwar Nagar, Dana Pani Road, Gulmohar, Bhopal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / form */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Newsletter Sign-up</h3>
            <p className="text-primary-foreground/70 mb-6">Latest updates and news delivered to your inbox.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary resize-none"
              />
              <button type="submit" className="btn-primary bg-secondary hover:bg-secondary/90 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
