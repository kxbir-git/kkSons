import { useState } from "react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const categories = ["Show All", "Construction", "Renovation", "Material Supply"];

const works = [
  { img: project1, title: "Commercial Complex", category: "Construction" },
  { img: project2, title: "Highway Extension", category: "Construction" },
  { img: project3, title: "Residential Foundation", category: "Renovation" },
  { img: project4, title: "Industrial Demolition", category: "Construction" },
  { img: project5, title: "Bridge Construction", category: "Construction" },
  { img: project6, title: "Land Clearing", category: "Material Supply" },
];

const RecentWork = () => {
  const [active, setActive] = useState("Show All");
  const filtered = active === "Show All" ? works : works.filter((w) => w.category === active);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto section-padding">
        <div className="text-center mb-10">
          <span className="text-secondary font-heading text-sm uppercase tracking-widest">Work of Excellence</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Recent Work</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-heading text-xs uppercase tracking-wider px-4 py-2 border transition-all duration-300 ${
                active === cat
                  ? "bg-secondary text-secondary-foreground border-secondary"
                  : "bg-transparent text-muted-foreground border-border hover:border-secondary hover:text-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((w, i) => (
            <div key={i} className="group relative overflow-hidden rounded cursor-pointer">
              <img src={w.img} alt={w.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-heading text-lg font-bold text-primary-foreground">{w.title}</h3>
                  <span className="text-secondary text-sm">{w.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/projects" className="btn-primary inline-block bg-secondary hover:bg-secondary/90 text-sm py-2.5 px-8">
            More Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
