import { useState, useEffect } from "react";
import { Brain, Menu, X } from "lucide-react";
import { doctorData } from "@/types/doctor";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-lavanda-light flex items-center justify-center transition-all duration-300 group-hover:bg-lavanda group-hover:shadow-soft">
            <Brain className="w-5 h-5 text-lavanda transition-colors duration-300 group-hover:text-primary-foreground" />
          </div>
          <div>
            <span className="font-display font-semibold text-foreground text-lg leading-tight block">
              {doctorData.nome}
            </span>
            <span className="text-muted-foreground text-xs font-body">
              Neurologista
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-muted-foreground hover:text-lavanda transition-colors duration-300 text-sm relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-lavanda after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={`https://wa.me/${doctorData.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-lavanda text-primary-foreground font-body font-semibold text-sm transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5 hover:bg-primary"
        >
          Agendar Consulta
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-lavanda-light text-lavanda"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-6 flex flex-col gap-4 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-foreground hover:text-lavanda transition-colors duration-300 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${doctorData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lavanda text-primary-foreground font-body font-semibold text-sm mt-2"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
