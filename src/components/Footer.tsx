const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">

      {/* Bottom footer */}
      <div className="container mx-auto section-padding py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <span>© 2026 KK & Sons. All rights reserved.</span>
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
