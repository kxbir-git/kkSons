import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const navLinks = ["Rental Equipment", "Solutions", "Projects", "About", "Blog", "Contact"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="bg-secondary/80 backdrop-blur-sm">
        <div className="container mx-auto section-padding flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-primary">U-DIG</span>
            <span className="text-secondary-foreground text-xs hidden sm:block">Heavy Equipment Rental</span>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-secondary-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:206-123-4567" className="flex items-center gap-2 text-secondary-foreground text-sm">
              <Phone size={14} />
              Call 206-123-4567
            </a>
            <button className="flex items-center gap-2 text-secondary-foreground text-sm hover:text-primary transition-colors">
              <MessageCircle size={14} />
              Live chat
            </button>
          </div>

          <button
            className="lg:hidden text-secondary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-secondary/95 backdrop-blur-sm">
          <nav className="container mx-auto section-padding py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-secondary-foreground py-2 border-b border-secondary-foreground/10 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a href="tel:206-123-4567" className="flex items-center gap-2 text-secondary-foreground text-sm py-2">
              <Phone size={14} />
              Call 206-123-4567
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
