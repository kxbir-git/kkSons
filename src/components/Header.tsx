import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Main header */}
      <div className="bg-background shadow-sm">
        <div className="container mx-auto section-padding flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-2 rounded">
              <span className="font-heading text-xl font-bold">KK & Sons</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-bold text-primary block leading-tight">KK &Sons</span>
              <span className="text-xs text-muted-foreground">Construction</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-secondary" />
              <div>
                <span className="text-muted-foreground block text-xs">Call Us</span>
                <a href="tel:+919700707307" className="font-semibold text-foreground">(+91) 8303361848</a>
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} className="text-secondary" />
              <div>
                <span className="text-muted-foreground block text-xs">Email Us</span>
                <a href="mailto:khanshoaib38989@gmail.com" className="font-semibold text-foreground">khanshoaib38989@gmail.com</a>
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <a
              href="https://wa.me/918303361848"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-2.5 px-4 rounded hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">Get A Quote</a>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-primary">
        <div className="container mx-auto section-padding hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-primary-foreground text-sm font-heading font-medium uppercase tracking-wider px-5 py-3 hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground text-sm font-heading font-medium uppercase tracking-wider px-5 py-3 hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary">
          <nav className="container mx-auto section-padding py-4 flex flex-col">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-primary-foreground py-3 border-b border-primary-foreground/10 font-heading uppercase tracking-wider text-sm hover:text-secondary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground py-3 border-b border-primary-foreground/10 font-heading uppercase tracking-wider text-sm hover:text-secondary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="mt-4 space-y-3 text-primary-foreground text-sm">
              <a href="tel:+919700707307" className="flex items-center gap-2">
                <Phone size={14} /> (+91) 8303361848
              </a>
              <a href="mailto:khanshoaib38989@gmail.com" className="flex items-center gap-2">
                <Mail size={14} /> khanshoaib38989@gmail.com
              </a>
              <a href="https://wa.me/918303361848" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366]">
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
