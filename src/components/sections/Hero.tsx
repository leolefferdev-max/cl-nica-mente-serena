import { doctorData } from "@/types/doctor";

export function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "80vh" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
          alt="Médico acolhendo paciente com atenção e cuidado"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay pastel suave */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, hsl(260 40% 60% / 0.75) 0%, hsl(150 30% 55% / 0.45) 60%, hsl(30 30% 97% / 0.2) 100%)",
          }}
        />
      </div>

      {/* Blob decoration */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 opacity-20 animate-float"
        style={{
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          background: "hsl(260 40% 80%)",
        }}
      />
      <div
        className="absolute -bottom-24 right-0 w-80 h-80 opacity-15 animate-float"
        style={{
          borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
          background: "hsl(150 30% 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 pt-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse-gentle" />
            <span className="text-primary-foreground font-body text-sm font-medium">
              Neurologia com Cuidado Humano
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {doctorData.nome}
          </h1>

          <p className="font-display text-xl md:text-2xl text-primary-foreground/90 italic mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Cuidando do seu bem-estar neurológico com empatia e atenção
          </p>

          <p className="font-body text-primary-foreground/85 text-lg leading-relaxed mb-10 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {doctorData.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href={`https://wa.me/${doctorData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-foreground text-lavanda font-body font-bold text-base transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
            >
              Agendar Consulta
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary-foreground/60 text-primary-foreground font-body font-semibold text-base backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/10 hover:-translate-y-1"
            >
              Conheça o Médico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
