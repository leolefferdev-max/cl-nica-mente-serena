import { Quote } from "lucide-react";

const depoimentos = [
  {
    texto:
      "Entrei com muito medo na primeira consulta e saí me sentindo acolhida e segura. O médico explicou tudo com paciência e atenção. Minha vida mudou muito desde então.",
    nome: "M. A.",
    detalhe: "Paciente há 2 anos",
  },
  {
    texto:
      "Finalmente encontrei um neurologista que realmente me ouve. Ele tem um jeito muito humano de tratar. Recomendo de coração para quem busca um cuidado de verdade.",
    nome: "R. S.",
    detalhe: "Paciente há 3 anos",
  },
  {
    texto:
      "Meu filho foi diagnosticado com epilepsia e estávamos desesperados. O médico nos tranquilizou, explicou cada passo do tratamento e hoje meu filho tem uma vida normal.",
    nome: "J. F.",
    detalhe: "Mãe de paciente",
  },
];

const diferenciais = [
  { num: "98%", label: "satisfação dos pacientes" },
  { num: "+10", label: "anos de experiência" },
  { num: "+500", label: "pacientes acompanhados" },
];

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="py-24 bg-creme-dark relative overflow-hidden"
    >
      {/* Blobs decorativos */}
      <div
        className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
        style={{
          borderRadius: "40% 60% 60% 40% / 50% 50% 50% 50%",
          background: "hsl(260 40% 60%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{
          borderRadius: "60% 40% 40% 60% / 50% 60% 40% 50%",
          background: "hsl(150 30% 55%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Números */}
        <div className="grid grid-cols-3 gap-6 mb-20">
          {diferenciais.map((d) => (
            <div key={d.label} className="text-center">
              <p className="font-display text-5xl font-bold text-lavanda mb-1">
                {d.num}
              </p>
              <p className="font-body text-muted-foreground text-sm">{d.label}</p>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-body text-lavanda font-semibold text-sm uppercase tracking-widest mb-3">
            O que dizem os pacientes
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground">
            Histórias de cuidado e transformação
          </h2>
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="bg-card rounded-3xl p-7 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1 flex flex-col gap-4"
            >
              <Quote className="w-8 h-8 text-lavanda opacity-60" />
              <p className="font-body text-muted-foreground leading-relaxed italic flex-1">
                "{d.texto}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-foreground text-sm">
                  {d.nome}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {d.detalhe}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CFM Disclaimer */}
        <div className="bg-card/70 border border-border rounded-2xl p-5 text-center">
          <p className="font-body text-xs text-muted-foreground leading-relaxed">
            <strong>Aviso CFM:</strong> Os depoimentos acima são relatos espontâneos de pacientes e não constituem publicidade enganosa. As informações aqui presentes têm caráter exclusivamente informativo e não substituem consulta médica. Em caso de dúvida, consulte um profissional de saúde habilitado.
          </p>
        </div>
      </div>
    </section>
  );
}
