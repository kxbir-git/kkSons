import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, CheckCircle, Clock } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Demolition"];

const projects = [
  {
    id: 1,
    title: "Downtown Commercial Complex",
    category: "Commercial",
    location: "Seattle, WA",
    date: "Jan 2024 – Present",
    status: "In Progress",
    progress: 72,
    image: project1,
    description: "Multi-story commercial building featuring excavation, foundation, and structural steel work with our fleet of excavators and cranes.",
    updates: [
      { date: "Mar 2024", text: "Steel framework completed on floors 1-5" },
      { date: "Feb 2024", text: "Foundation pouring finished ahead of schedule" },
      { date: "Jan 2024", text: "Site excavation and grading completed" },
    ],
  },
  {
    id: 2,
    title: "Highway 101 Extension",
    category: "Infrastructure",
    location: "Portland, OR",
    date: "Sep 2023 – Feb 2024",
    status: "Completed",
    progress: 100,
    image: project2,
    description: "3.5-mile highway extension with asphalt paving, grading, and drainage installation using our road construction equipment.",
    updates: [
      { date: "Feb 2024", text: "Final inspection passed, road opened to traffic" },
      { date: "Dec 2023", text: "Asphalt paving completed on all lanes" },
      { date: "Oct 2023", text: "Drainage systems installed along full stretch" },
    ],
  },
  {
    id: 3,
    title: "Riverside Homes Foundation",
    category: "Residential",
    location: "Bellevue, WA",
    date: "Nov 2023 – Jan 2024",
    status: "Completed",
    progress: 100,
    image: project3,
    description: "Basement excavation and foundation work for a 12-unit residential development using mini excavators and compact loaders.",
    updates: [
      { date: "Jan 2024", text: "All 12 foundations completed and inspected" },
      { date: "Dec 2023", text: "Units 7-12 excavation finished" },
      { date: "Nov 2023", text: "Initial site clearing and grading done" },
    ],
  },
  {
    id: 4,
    title: "Old Mill Demolition",
    category: "Demolition",
    location: "Tacoma, WA",
    date: "Feb 2024 – Present",
    status: "In Progress",
    progress: 45,
    image: project4,
    description: "Safe demolition of a 4-story industrial mill building with debris removal and site cleanup using heavy excavators.",
    updates: [
      { date: "Mar 2024", text: "Upper two floors demolished, debris cleared" },
      { date: "Feb 2024", text: "Hazard assessment complete, demolition started" },
    ],
  },
  {
    id: 5,
    title: "River Crossing Bridge",
    category: "Infrastructure",
    location: "Eugene, OR",
    date: "Jun 2023 – Present",
    status: "In Progress",
    progress: 85,
    image: project5,
    description: "Major bridge construction over the Willamette River featuring pile driving, crane work, and heavy structural assembly.",
    updates: [
      { date: "Mar 2024", text: "Deck paving underway, expected completion in April" },
      { date: "Jan 2024", text: "All bridge spans connected" },
      { date: "Sep 2023", text: "Pile driving completed for all piers" },
    ],
  },
  {
    id: 6,
    title: "Pine Valley Land Clearing",
    category: "Residential",
    location: "Bend, OR",
    date: "Dec 2023 – Feb 2024",
    status: "Completed",
    progress: 100,
    image: project6,
    description: "120-acre land clearing and grading project for a new residential development using bulldozers and skid steers.",
    updates: [
      { date: "Feb 2024", text: "Final grading complete, site ready for development" },
      { date: "Jan 2024", text: "Tree removal and stump grinding finished" },
      { date: "Dec 2023", text: "Perimeter clearing started" },
    ],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const detail = projects.find((p) => p.id === selectedProject);

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto section-padding flex items-center gap-4">
          <Link to="/" className="text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground">
            Our Projects
          </h1>
        </div>
      </div>

      <div className="container mx-auto section-padding py-10">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setSelectedProject(null); }}
              className={`font-heading text-sm uppercase tracking-wider px-5 py-2 border-2 transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project detail view */}
        {detail ? (
          <div className="animate-in fade-in duration-300">
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="text-sm font-medium">Back to gallery</span>
            </button>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded">
                <img src={detail.image} alt={detail.title} className="w-full h-80 lg:h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary/20 text-primary-foreground bg-primary px-3 py-1 text-xs font-heading font-bold uppercase">
                    {detail.category}
                  </span>
                  <span className={`flex items-center gap-1 text-xs font-semibold ${
                    detail.status === "Completed" ? "text-green-600" : "text-construction-blue"
                  }`}>
                    {detail.status === "Completed" ? <CheckCircle size={14} /> : <Clock size={14} />}
                    {detail.status}
                  </span>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{detail.title}</h2>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><MapPin size={14} />{detail.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} />{detail.date}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{detail.description}</p>

                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">Progress</span>
                    <span className="font-heading font-bold text-primary">{detail.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700"
                      style={{ width: `${detail.progress}%` }}
                    />
                  </div>
                </div>

                {/* Timeline updates */}
                <h3 className="font-heading text-xl font-bold mb-4">Project Updates</h3>
                <div className="space-y-4">
                  {detail.updates.map((update, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mt-1" />
                        {i < detail.updates.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                      </div>
                      <div className="pb-4">
                        <span className="text-xs font-heading font-bold text-primary uppercase">{update.date}</span>
                        <p className="text-sm text-muted-foreground mt-1">{update.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Gallery grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className="group text-left overflow-hidden rounded bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-heading font-bold uppercase">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-600 text-secondary-foreground"
                        : "bg-construction-blue text-secondary-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><MapPin size={12} />{project.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} />{project.date}</span>
                  </div>
                  {/* Mini progress bar */}
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-heading font-bold text-primary mt-1 inline-block">{project.progress}%</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
