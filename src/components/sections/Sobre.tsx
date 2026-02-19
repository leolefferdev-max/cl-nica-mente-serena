import { GraduationCap, Heart, Users } from "lucide-react";
import { doctorData } from "@/types/doctor";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Formação",
    desc: doctorData.formacao,
    bg: "bg-lavanda-light",
    iconColor: "text-lavanda",
  },
  {
    icon: Heart,
    title: "Filosofia de Cuidado",
    desc: "Acredito que cada paciente merece atenção integral — corpo e mente. Minha missão é oferecer um espaço seguro, acolhedor e de total confiança.",
    bg: "bg-sage-light",
    iconColor: "text-sage",
  },
  {
    icon: Users,
    title: "Pacientes Atendidos",
    desc: "Ao longo de anos de prática, acompanhei centenas de famílias, sempre com dedicação, escuta ativa e tratamento personalizado.",
    bg: "bg-creme-dark",
    iconColor: "text-lavanda",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-card">
      {/* Blob decorativo */}
      <div
        className="absolute left-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{
          borderRadius: "40% 60% 70% 30% / 50% 40% 60% 50%",
          background: "hsl(260 40% 60%)",
          transform: "translateX(-50%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 m-4 rounded-3xl bg-lavanda-light opacity-50"
              style={{ borderRadius: "60% 40% 50% 50% / 40% 50% 50% 60%" }}
            />
            <div className="relative w-full max-w-sm">
              <div
                className="w-full aspect-[3/4] overflow-hidden shadow-hover"
                style={{ borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%" }}
              >
                <img
                  src={doctorData.foto === "{{foto}}"
                    ? "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                    : doctorData.foto}
                  alt={`Dr. ${doctorData.nome} sorrindo`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* CRM badge */}
              <div className="absolute -bottom-4 -right-4 bg-card shadow-card px-4 py-3 rounded-2xl border border-border">
                <p className="font-body text-xs text-muted-foreground">CRM</p>
                <p className="font-display font-semibold text-foreground">
                  {doctorData.crm}
                </p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <p className="font-body text-lavanda font-semibold text-sm uppercase tracking-widest mb-3">
              Sobre o Médico
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6 leading-tight">
              Um cuidado que vai além do diagnóstico
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
              Sei que consultar um neurologista pode gerar ansiedade e dúvidas. Por isso, meu compromisso é estar presente de verdade — ouvindo, explicando e acolhendo você e sua família em cada etapa.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              Com uma abordagem humanizada e baseada em evidências científicas, ofereço diagnóstico preciso e tratamento individualizado, sempre respeitando o seu tempo e a sua história.
            </p>

            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`flex items-start gap-4 p-5 rounded-2xl ${card.bg} transition-all duration-300 hover:shadow-soft`}
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-card shadow-sm">
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground mb-0.5">
                        {card.title}
                      </p>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
