import { useState } from "react";
import { Award, Handshake, Heart, Users, ChevronDown, ChevronUp } from "lucide-react";

const highlights = [
  { icon: Award, label: "We Have Reputation for Excellence" },
  { icon: Handshake, label: "We Build Partnerships" },
  { icon: Heart, label: "Guided by Commitment" },
  { icon: Users, label: "A Team of Professionals" },
];

const values = [
  {
    title: "Vision",
    content: "To be the leading global brand in building material suppliers by connecting people with us.",
  },
  {
    title: "Mission",
    content: "To be a part of people's life by providing superior Goods and services to build a dream.",
  },
  {
    title: "Customer Satisfaction",
    content: "We measure how our product, service, and overall experience either falls short, meets, or exceeds customer expectations.",
  },
];

const AboutSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: About text */}
          <div>
            <span className="text-secondary font-heading text-sm uppercase tracking-widest">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Let's Build Dream Together
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The MGC group has made a prominent name for itself in the field for providing supreme quality construction and services. We understand the need, demand, and desire of today's era, and fulfill them very well. We equip their material and services to more than 80% of builders in Bhopal city.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="bg-secondary/10 text-secondary p-2 rounded mt-0.5">
                    <item.icon size={18} />
                  </div>
                  <span className="font-heading text-sm font-semibold uppercase text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values accordion */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground mb-6">
              We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.
            </p>
            <div className="space-y-3">
              {values.map((item, i) => (
                <div key={item.title} className="border border-border rounded overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center justify-between px-5 py-4 font-heading font-bold text-foreground uppercase tracking-wide text-sm hover:bg-muted transition-colors"
                  >
                    {item.title}
                    {openIndex === i ? <ChevronUp size={18} className="text-secondary" /> : <ChevronDown size={18} className="text-muted-foreground" />}
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
