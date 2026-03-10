import miniExcavatorImg from "@/assets/mini-excavator.png";

const rentals = [
  {
    name: "John Deere 17D",
    tag: "Perfect for small residential and commercial jobs",
    img: miniExcavatorImg,
    daily: { reg: "$230", comp: "$220" },
    weekly: { reg: "$975", comp: "$875" },
    monthly: { reg: "$2,455", comp: "$2,350" },
  },
];

const PopularRentals = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto section-padding">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-secondary-foreground mb-12">
          What others rent the most
        </h2>
        <div className="max-w-3xl mx-auto">
          {rentals.map((item) => (
            <div key={item.name} className="bg-background rounded p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/2">
                <h3 className="font-heading text-2xl font-bold mb-4">{item.name}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2"></th>
                        <th className="text-center py-2 font-semibold">Daily</th>
                        <th className="text-center py-2 font-semibold">Weekly</th>
                        <th className="text-center py-2 font-semibold">Monthly</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 font-medium">Reg.</td>
                        <td className="text-center py-2">{item.daily.reg}</td>
                        <td className="text-center py-2">{item.weekly.reg}</td>
                        <td className="text-center py-2">{item.monthly.reg}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Comp.</td>
                        <td className="text-center py-2">{item.daily.comp}</td>
                        <td className="text-center py-2">{item.weekly.comp}</td>
                        <td className="text-center py-2">{item.monthly.comp}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="btn-outline mt-4 text-sm">Deere 17D Details</button>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {item.tag}
                </div>
                <img src={item.img} alt={item.name} className="w-full max-w-xs mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRentals;
