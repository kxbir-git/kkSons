import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 15, label: "Years of Experience", suffix: "+" },
  { value: 200, label: "Total Projects", suffix: "+" },
  { value: 50, label: "Staff Members", suffix: "+" },
  { value: 180, label: "Happy Customers", suffix: "+" },
];

const useCountUp = (target: number, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView]);
  return count;
};

const StatItem = ({ value, label, suffix, inView }: { value: number; label: string; suffix: string; inView: boolean }) => {
  const count = useCountUp(value, inView);
  return (
    <div className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-2">
        {count}{suffix}
      </div>
      <div className="font-heading text-sm uppercase tracking-wider text-primary-foreground/80">{label}</div>
    </div>
  );
};

const StatsCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-primary py-16">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
