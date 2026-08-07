export const site = {
  name: "Instituto Social Nossa Senhora de Fátima",
  shortName: "Instituto Social",
  since: 1971,
  phone: "(11) 3798-5037",
  phoneHref: "tel:+551137985037",
  whatsapp: "(11) 96398-6252",
  whatsappHref: "https://wa.me/5511963986252",
  email: "secretaria@acaonsfatima.org.br",
  emailHref: "mailto:secretaria@acaonsfatima.org.br",
  address: "São Paulo — SP",
} as const;

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/cursos", label: "Cursos" },
  { to: "/padaria", label: "Padaria" },
  { to: "/contato", label: "Contato" },
] as const;
