import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "The professionalism and skill MGC uses in daily operation and for special projects are a welcome part of working with such a fine supplier. The expertise that MGC brings on the field is by far world class!",
    name: "Mr Ashish",
    company: "Sahib Developers",
  },
  {
    text: "MGC's overall commitment to quality and customer satisfaction is excellent.",
    name: "Mr. Sanjeev Agrawal",
    company: "SAGE Group",
  },
  {
    text: "Working with any and all MGC employees is excellent and satisfying in all phases.",
    name: "Mr. Triplani",
    company: "Ashima Divine City",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto section-padding">
        <div className="text-center mb-12">
          <span className="text-secondary font-heading text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">What Our Clients Say</h2>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <Quote size={40} className="text-secondary/30 mx-auto mb-4" />
          <p className="text-muted-foreground text-lg leading-relaxed italic mb-6 min-h-[80px]">
            "{t.text}"
          </p>
          <div className="font-heading font-bold text-foreground text-lg">{t.name}</div>
          <div className="text-secondary text-sm font-medium">{t.company}</div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-secondary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
