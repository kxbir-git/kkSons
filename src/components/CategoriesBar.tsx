import excavatorImg from "@/assets/excavator.png";
import miniExcavatorImg from "@/assets/mini-excavator.png";
import skidSteerImg from "@/assets/skid-steer.png";

const categories = [
  { name: "Excavators", img: excavatorImg },
  { name: "Mini Excavators", img: miniExcavatorImg, active: true },
  { name: "Skid Steers", img: skidSteerImg },
  { name: "Compact Track Loaders", img: excavatorImg },
  { name: "Backhoes", img: miniExcavatorImg },
  { name: "Equipment Operators", img: skidSteerImg },
];

const CategoriesBar = () => {
  return (
    <section className="bg-muted border-y border-border">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-3 sm:grid-cols-6 divide-x divide-border">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`flex flex-col items-center gap-2 py-6 px-2 text-center transition-all hover:bg-primary/10 ${
                cat.active ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              <img src={cat.img} alt={cat.name} className="w-12 h-12 object-contain" />
              <span className="text-xs font-semibold uppercase tracking-wide">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesBar;
