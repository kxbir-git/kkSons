import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Recent projects strip */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto section-padding py-8">
          <div className="text-center mb-6">
            <span className="text-secondary font-heading text-sm uppercase tracking-widest">Work of Excellence</span>
            <h3 className="font-heading text-xl font-bold mt-1">Recent Projects</h3>
          </div>
          <div className="flex justify-center gap-4">
            {[project1, project2, project3].map((img, i) => (
              <Link key={i} to="/projects" className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded hover:opacity-80 transition-opacity">
                <img src={img} alt={`Recent project ${i + 1}`} className="w-full h-full object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="container mx-auto section-padding py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <span>© 2024 MGC Groups. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-secondary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
