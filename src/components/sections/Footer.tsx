import { Brain, Heart } from "lucide-react";
import { doctorData } from "@/types/doctor";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-14"
      style={{
        background:
          "linear-gradient(135deg, hsl(260 20% 18%), hsl(260 15% 22%))",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-lavanda/20 flex items-center justify-center">
              <Brain className="w-5 h-5 text-lavanda" />
            </div>
            <div>
              <p className="font-display font-semibold text-primary-foreground text-lg leading-tight">
                {doctorData.nome}
              </p>
              <p className="font-body text-xs text-muted-foreground">
                CRM {doctorData.crm} · Neurologista
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["#sobre", "#servicos", "#depoimentos", "#contato"].map((href) => (
              <a
                key={href}
                href={href}
                className="font-body text-sm text-muted-foreground hover:text-lavanda transition-colors duration-300 capitalize"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={`https://wa.me/${doctorData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-lavanda text-primary-foreground font-body font-semibold text-sm transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5"
          >
            Agendar Consulta
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Heart className="w-4 h-4 text-lavanda animate-pulse-gentle" />
            <p className="font-display italic text-base">
              Cuidar é a nossa vocação.
            </p>
          </div>

          <p className="font-body text-xs text-muted-foreground max-w-2xl leading-relaxed">
            As informações contidas neste site são de caráter informativo e educativo, não substituindo consulta médica. Toda decisão clínica deve ser tomada em conjunto com um profissional habilitado. Em conformidade com o Código de Ética Médica e as normas do CFM.
          </p>

          <p className="font-body text-xs text-muted-foreground">
            © {year} {doctorData.nome} · CRM {doctorData.crm} · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
