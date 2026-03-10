const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto section-padding py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-secondary-foreground/60">
            <span>©2024 U-DIG</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-secondary-foreground/60">Get the latest news and promotions</span>
            <button className="btn-outline-light text-sm py-2 px-4">Get Our Emails</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
