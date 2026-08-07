export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Técnico" | "Idiomas" | "Qualificação";
  summary: string;
  description: string;
  image: string;
  workload: string;
  duration: string;
  requirements: string;
  schedule: string;
  highlights: string[];
  curriculum: string[];
};

export const courses: Course[] = [
  {
    slug: "informatica",
    title: "Técnico em Informática e Redes",
    shortTitle: "Informática e Redes",
    category: "Técnico",
    summary:
      "Desenvolvimento de sistemas, lógica de programação, banco de dados e manutenção de redes.",
    description:
      "Formação técnica completa em montagem e manutenção de computadores, instalação de redes e fundamentos de desenvolvimento. Uma preparação prática para um dos mercados que mais crescem no país.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    workload: "440 horas",
    duration: "6 meses",
    requirements: "A partir de 15 anos, cursando ou concluído o Ensino Fundamental II.",
    schedule: "Manhã e noite, de segunda a quinta-feira.",
    highlights: [
      "Laboratório equipado para prática de montagem",
      "Certificado reconhecido pelo Instituto",
      "Encaminhamento para vagas de estágio",
    ],
    curriculum: [
      "Arquitetura e montagem de computadores",
      "Manutenção preventiva e corretiva",
      "Cabeamento estruturado e redes locais",
      "Sistemas operacionais e ferramentas de suporte",
      "Lógica de programação e introdução a banco de dados",
    ],
  },
  {
    slug: "administracao",
    title: "Técnico em Administração",
    shortTitle: "Administração",
    category: "Técnico",
    summary:
      "Rotinas administrativas, gestão financeira, recursos humanos e rotinas corporativas.",
    description:
      "Prepare-se para atuar em escritórios, departamentos financeiros e de recursos humanos com domínio das rotinas que sustentam qualquer organização.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    workload: "400 horas",
    duration: "6 meses",
    requirements: "A partir de 16 anos, Ensino Fundamental completo.",
    schedule: "Tarde e noite, de segunda a quinta-feira.",
    highlights: [
      "Rotinas reais de departamento pessoal",
      "Excel aplicado à gestão",
      "Simulações de atendimento e negociação",
    ],
    curriculum: [
      "Rotinas administrativas e organização de documentos",
      "Departamento pessoal e legislação trabalhista",
      "Matemática financeira aplicada",
      "Atendimento e comunicação corporativa",
      "Planilhas e relatórios gerenciais",
    ],
  },
  {
    slug: "comunicacao-visual",
    title: "Técnico em Comunicação Visual",
    shortTitle: "Comunicação Visual",
    category: "Técnico",
    summary:
      "Design gráfico, softwares de edição, identidade visual e fundamentos das artes visuais.",
    description:
      "Do conceito à arte final: aprenda composição, tipografia e as ferramentas usadas no mercado para criar peças gráficas e identidades visuais.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    workload: "360 horas",
    duration: "5 meses",
    requirements: "A partir de 15 anos. Não é necessário saber desenhar.",
    schedule: "Manhã e tarde, de terça a sexta-feira.",
    highlights: [
      "Portfólio construído durante o curso",
      "Ferramentas de edição vetorial e de imagem",
      "Projetos reais para a comunidade",
    ],
    curriculum: [
      "Fundamentos do design e teoria das cores",
      "Tipografia e composição",
      "Edição de imagem e ilustração vetorial",
      "Identidade visual e branding",
      "Preparação de arquivos para impressão e web",
    ],
  },
  {
    slug: "ingles-teens",
    title: "Inglês Teens — In Action",
    shortTitle: "Inglês Teens",
    category: "Idiomas",
    summary:
      "Metodologia interativa para adolescentes focada no desenvolvimento da conversação.",
    description:
      "Turmas pensadas para adolescentes, com dinâmicas, música, jogos e projetos que colocam o inglês em uso desde a primeira aula.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    workload: "160 horas",
    duration: "1 ano letivo",
    requirements: "Adolescentes de 12 a 17 anos.",
    schedule: "Sábados pela manhã.",
    highlights: [
      "Turmas reduzidas",
      "Foco em conversação desde o início",
      "Material didático incluso",
    ],
    curriculum: [
      "Vocabulário do cotidiano e da escola",
      "Estruturas básicas e tempos verbais",
      "Compreensão auditiva com música e vídeo",
      "Projetos de apresentação oral",
    ],
  },
  {
    slug: "ingles",
    title: "Inglês Básico a Pré-Intermediário",
    shortTitle: "Inglês Básico",
    category: "Idiomas",
    summary:
      "Estruturas essenciais do idioma para iniciantes ampliarem suas oportunidades.",
    description:
      "Para quem está começando ou quer retomar o idioma. Um percurso do zero ao pré-intermediário com foco em situações reais de trabalho e vida cotidiana.",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
    workload: "200 horas",
    duration: "1 ano letivo",
    requirements: "A partir de 16 anos, sem conhecimento prévio.",
    schedule: "Noite, duas vezes por semana.",
    highlights: [
      "Professores da própria comunidade",
      "Conversação guiada em todas as aulas",
      "Certificado ao final do módulo",
    ],
    curriculum: [
      "Alfabeto, números e apresentações",
      "Presente, passado e futuro simples",
      "Vocabulário profissional e entrevistas",
      "Leitura e escrita de textos curtos",
    ],
  },
  {
    slug: "eletromecanica",
    title: "Eletromecânica de Autos",
    shortTitle: "Eletromecânica",
    category: "Qualificação",
    summary:
      "Diagnóstico elétrico e mecânico em automóveis com foco na prática profissional.",
    description:
      "Qualificação com forte carga prática em oficina, cobrindo diagnóstico elétrico, sistemas de injeção e manutenção mecânica de veículos leves.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    workload: "320 horas",
    duration: "4 meses",
    requirements: "A partir de 18 anos, Ensino Fundamental completo.",
    schedule: "Noite, de segunda a quinta-feira.",
    highlights: [
      "Oficina-escola com veículos para prática",
      "Uso de scanner e multímetro automotivo",
      "Alta empregabilidade na região",
    ],
    curriculum: [
      "Segurança e ferramentas de oficina",
      "Sistemas elétricos e diagnóstico com multímetro",
      "Injeção eletrônica e leitura de scanner",
      "Motores, freios e suspensão",
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
