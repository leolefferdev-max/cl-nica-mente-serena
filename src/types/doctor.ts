export interface DoctorData {
  nome: string;
  especialidade: string;
  crm: string;
  telefone: string;
  whatsapp: string;
  email: string;
  endereco: string;
  instagram: string;
  bio: string;
  formacao: string;
  foto: string;
}

export const doctorData: DoctorData = {
  nome: "{{nome}}",
  especialidade: "{{especialidade}}",
  crm: "{{crm}}",
  telefone: "{{telefone}}",
  whatsapp: "{{whatsapp}}",
  email: "{{email}}",
  endereco: "{{endereco}}",
  instagram: "{{instagram}}",
  bio: "{{bio}}",
  formacao: "{{formacao}}",
  foto: "{{foto}}",
};
