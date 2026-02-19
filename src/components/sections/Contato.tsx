import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";
import { doctorData } from "@/types/doctor";

export function Contato() {
  const waMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta."
  );
  const waLink = `https://wa.me/${doctorData.whatsapp}?text=${waMessage}`;

  return (
    <section id="contato" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-body text-lavanda font-semibold text-sm uppercase tracking-widest mb-3">
            Fale Conosco
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Estamos aqui para você
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">
            Dar o primeiro passo é a parte mais difícil. Mas você não precisa
            enfrentar isso sozinho — nossa equipe está pronta para acolher você
            com carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Informações */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: Phone,
                label: "Telefone",
                value: doctorData.telefone,
                href: `tel:${doctorData.telefone}`,
              },
              {
                icon: Mail,
                label: "E-mail",
                value: doctorData.email,
                href: `mailto:${doctorData.email}`,
              },
              {
                icon: MapPin,
                label: "Endereço",
                value: doctorData.endereco,
                href: `https://maps.google.com/?q=${encodeURIComponent(doctorData.endereco)}`,
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: `@${doctorData.instagram}`,
                href: `https://instagram.com/${doctorData.instagram}`,
              },
              {
                icon: Clock,
                label: "Horários",
                value: "Segunda a Sexta, 8h às 18h",
                href: undefined,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 bg-lavanda-light rounded-2xl hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-card shadow-sm">
                  <Icon className="w-5 h-5 text-lavanda" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-foreground hover:text-lavanda transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA acolhedor + Mapa */}
          <div className="flex flex-col gap-6">
            <div className="bg-lavanda rounded-3xl p-10 text-center shadow-hover">
              <h3 className="font-display text-3xl font-bold text-primary-foreground mb-4">
                Pronto para dar o primeiro passo?
              </h3>
              <p className="font-body text-primary-foreground/85 mb-8 leading-relaxed">
                Agende sua consulta de forma rápida e simples pelo WhatsApp.
                Respondemos com carinho e atenção a cada mensagem.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-card text-lavanda font-body font-bold text-base transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
              >
                {/* WhatsApp icon inline */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar via WhatsApp
              </a>
            </div>

            {/* Mapa embed placeholder */}
            <div className="w-full h-56 rounded-3xl overflow-hidden shadow-card bg-muted flex items-center justify-center">
              <iframe
                title="Localização do consultório"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(doctorData.endereco)}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
