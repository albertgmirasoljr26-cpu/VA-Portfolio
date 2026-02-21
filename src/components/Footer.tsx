const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-serif text-lg font-semibold text-foreground tracking-tight">
        VA<span className="text-primary">.</span>Studio
      </p>
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
