import { profile } from "@/data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      aria-label="app-footer">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-8">
        <p className="text-muted-foreground text-md">
          © {year} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
