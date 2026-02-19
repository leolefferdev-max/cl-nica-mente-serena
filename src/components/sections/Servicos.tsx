import { Brain, Smile, Shield, Sparkles, Heart, Clock } from "lucide-react";

const servicos = [
  {
    icon: Brain,
    title: "Consulta Neurológica",
    desc: "Avaliação completa do sistema nervoso com escuta atenta e diagnóstico preciso, realizado com calma e atenção.",
    bg: "bg-lavanda-light",
    iconBg: "bg-lavanda",
    iconColor: "text-primary-foreground",
  },
  {
    icon: Smile,
    title: "Qualidade de Vida",
    desc: "Suporte para condições que afetam o dia a dia, com foco em recuperar seu bem-estar e sua autonomia.",
    bg: "bg-sage-light",
    iconBg: "bg-sage",
    iconColor: "text-primary-foreground",
  },
  {
    icon: Shield,
    title: "Prevenção",
    desc: "Identificação de fatores de risco e estratégias preventivas para proteger a sua saúde cerebral a longo prazo.",
    bg: "bg-creme-dark",
    iconBg: "bg-lavanda-light",
    iconColor: "text-lavanda",
  },
  {
    icon: Sparkles,
    title: "Tratamentos Modernos",
    desc: "Acesso às terapias mais atuais e eficazes, baseadas nas últimas pesquisas científicas em neurologia.",
    bg: "bg-lavanda-pale",
    iconBg: "bg-sage-light",
    iconColor: "text-sage",
  },
  {
    icon: Heart,
    title: "Cuidado Integral",
    desc: "Atenção à saúde emocional e física do paciente, envolvendo família e rede de apoio no processo de cuidado.",
    bg: "bg-sage-light",
    iconBg: "bg-lavanda-light",
    iconColor: "text-lavanda",
  },
  {
    icon: Clock,
    title: "Acompanhamento",
    desc: "Seguimento contínuo e humanizado, ajustando o tratamento conforme sua evolução e suas necessidades.",
    bg: "bg-lavanda-light",
    iconBg: "bg-sage",
    iconColor: "text-primary-foreground",
  },
];

export function Servicos() {
  return (
    <section
      id="servicos"
      className="py-24"
      style={{ background: "var(--gradient-section)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-body text-lavanda font-semibold text-sm uppercase tracking-widest mb-3">
            O que oferecemos
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Serviços com atenção e cuidado
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Cada consulta é única, assim como você. Oferecemos serviços especializados com a atenção que você merece.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`${s.bg} rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-hover group cursor-default`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${s.iconBg} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 shadow-sm`}
                >
                  <Icon className={`w-6 h-6 ${s.iconColor}`} />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
