export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Qualificação Profissional";
  summary: string;
  description: string;
  image: string;
  workload: string;
  duration: string;
  requirements: string;
  schedule: string;
  /** Janela do ano em que o curso é ofertado, quando houver restrição. */
  availability?: string;
  profile: string;
  market: string;
  highlights: string[];
  /** Disciplinas do curso. */
  curriculum: string[];
};

const CATEGORY = "Qualificação Profissional" as const;

export const courses: Course[] = [
  {
    slug: "assistente-administrativo",
    title: "Curso de Assistente Administrativo",
    shortTitle: "Assistente Administrativo",
    category: CATEGORY,
    summary:
      "Processos administrativos e atividades de apoio em RH, finanças, produção, logística e vendas.",
    description:
      "Prepara o aluno para executar processos administrativos e atividades de apoio em áreas como RH, finanças, produção, logística e vendas.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    workload: "440 horas",
    duration: "6 meses — de segunda a sexta",
    requirements: "Idade a partir de 15 anos; cursando o ensino médio ou concluído.",
    schedule: "Manhã ou tarde",
    profile:
      "Prepara o aluno para executar processos administrativos e atividades de apoio em áreas como RH, finanças, produção, logística e vendas.",
    market: "Empresas urbanas e rurais, prestando suporte administrativo.",
    highlights: [
      "440 horas de formação gratuita",
      "Turmas de manhã ou tarde, de segunda a sexta",
      "Foco em rotinas reais de escritório",
    ],
    curriculum: [
      "Conceitos Administrativos",
      "Rotinas de Escritório e Comunicação",
      "Contabilidade e Escrita Fiscal",
      "Recursos Humanos e Marketing",
      "Ferramentas de Qualidade e Gestão",
      "Informática Aplicada",
      "Comunicação Oral e Escrita",
      "Raciocínio Lógico e Matemática Financeira",
      "Mundo do Trabalho",
    ],
  },
  {
    slug: "ajustador-mecanico",
    title: "Curso de Ajustador Mecânico",
    shortTitle: "Ajustador Mecânico",
    category: CATEGORY,
    summary:
      "Reparo, confecção e substituição de peças e componentes mecânicos com prática em oficina.",
    description:
      "Responsável por reparar, confeccionar e substituir peças e componentes mecânicos.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    workload: "440 horas",
    duration: "6 meses — de segunda a sexta",
    requirements: "Idade a partir de 15 anos; cursando o ensino médio ou concluído.",
    schedule: "Manhã ou tarde",
    profile:
      "Responsável por reparar, confeccionar e substituir peças e componentes mecânicos.",
    market:
      "Oficinas mecânicas, ferramentarias, indústrias metalúrgicas, montadoras e manutenção industrial.",
    highlights: [
      "Oficinas práticas equipadas",
      "Software CAD, prototipagem e impressão 3D",
      "Alta demanda na indústria metalúrgica",
    ],
    curriculum: [
      "Processos Mecânicos de Usinagem",
      "Tecnologia de Máquinas",
      "Desenho Técnico Mecânico",
      "Metrologia",
      "Matemática Aplicada",
      "Software CAD",
      "Prototipagem e Impressão 3D",
      "Comunicação",
      "Mundo do Trabalho",
    ],
  },
  {
    slug: "torneiro-mecanico",
    title: "Curso de Torneiro Mecânico",
    shortTitle: "Torneiro Mecânico",
    category: CATEGORY,
    summary:
      "Operação de tornos mecânicos convencionais e introdução à programação CNC.",
    description: "Opera tornos mecânicos convencionais para usinagem de peças.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
    workload: "440 horas",
    duration: "6 meses — de segunda a sexta",
    requirements: "Idade a partir de 15 anos; cursando o ensino médio ou concluído.",
    schedule: "Manhã ou tarde",
    profile: "Opera tornos mecânicos convencionais para usinagem de peças.",
    market:
      "Usinagem em indústrias metalúrgicas e montagem de conjuntos mecânicos (tornos convencionais e CNC).",
    highlights: [
      "Prática em tornos convencionais",
      "Programação e operação CNC",
      "Metrologia e desenho técnico",
    ],
    curriculum: [
      "Processos de Usinagem em Torno",
      "Desenho Técnico",
      "Tecnologia Mecânica",
      "Programação e Operação CNC",
      "Metrologia",
      "Matemática",
      "Software CAD",
      "Prototipagem e Impressão 3D",
      "Comunicação",
      "Mundo do Trabalho",
    ],
  },
  {
    slug: "assistente-recursos-humanos",
    title: "Curso de Assistente de Recursos Humanos",
    shortTitle: "Assistente de RH",
    category: CATEGORY,
    summary:
      "Apoio à gestão de pessoas: recrutamento, treinamento, benefícios e departamento pessoal.",
    description:
      "Apoia a gestão de políticas de RH, remuneração, benefícios, cultura organizacional, saúde, diversidade, recrutamento e treinamento.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    workload: "440 horas",
    duration: "6 meses — de segunda a sexta",
    requirements: "Idade a partir de 16 anos; cursando o ensino médio ou concluído.",
    schedule: "Manhã ou tarde",
    profile:
      "Apoia a gestão de políticas de RH, remuneração, benefícios, cultura organizacional, saúde, diversidade, recrutamento e treinamento.",
    market:
      "Empresas de diversos setores, gerenciando processos de recrutamento e gestão de pessoas.",
    highlights: [
      "Rotinas completas de departamento pessoal",
      "Recrutamento, seleção e treinamento",
      "Folha de pagamento e rescisão",
    ],
    curriculum: [
      "Mercado de Trabalho",
      "Recursos Humanos",
      "Recrutamento e Seleção",
      "Treinamento",
      "Departamento Pessoal",
      "Folha de Pagamento",
      "Rescisão",
      "Higiene e Segurança",
      "Comunicação",
      "Raciocínio Lógico",
      "Informática",
      "Matemática",
      "Mundo do Trabalho",
    ],
  },
  {
    slug: "montador-reparador-computadores",
    title: "Curso de Montador e Reparador de Computadores",
    shortTitle: "Montador e Reparador de Computadores",
    category: CATEGORY,
    summary:
      "Manutenção de computadores e hardware, instalação de sistemas operacionais e softwares.",
    description:
      "Realiza manutenção em computadores e hardwares, instala sistemas operacionais e softwares.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    workload: "440 horas",
    duration: "6 meses — manhã ou tarde (segunda a sexta)",
    requirements: "Idade a partir de 15 anos; cursando o ensino médio ou concluído.",
    schedule: "Manhã ou tarde",
    availability: "Turmas apenas de fevereiro a junho",
    profile:
      "Realiza manutenção em computadores e hardwares, instala sistemas operacionais e softwares.",
    market:
      "Setor de TI, manutenção, substituição de peças e configuração de sistemas.",
    highlights: [
      "Laboratório de montagem e manutenção",
      "Instalação de sistemas operacionais",
      "Turmas ofertadas de fevereiro a junho",
    ],
    curriculum: [
      "Arquitetura de Computadores",
      "Sistemas Operacionais",
      "Eletrônica Básica",
      "Montagem e Manutenção",
      "Comunicação",
      "Raciocínio Lógico",
      "Informática",
      "Matemática Aplicada",
      "Mundo do Trabalho",
    ],
  },
  {
    slug: "instalador-reparador-redes",
    title: "Curso de Instalador e Reparador de Redes de Computadores",
    shortTitle: "Instalador e Reparador de Redes",
    category: CATEGORY,
    summary:
      "Instalação e manutenção de infraestruturas físicas de redes, sistemas e equipamentos ativos.",
    description:
      "Manutenção e instalação de infraestruturas físicas de redes, sistemas e equipamentos ativos.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    workload: "440 horas",
    duration: "6 meses — manhã ou tarde (segunda a sexta)",
    requirements: "Idade a partir de 15 anos; cursando o ensino médio ou concluído.",
    schedule: "Manhã ou tarde",
    availability: "Turmas apenas de julho a dezembro",
    profile:
      "Manutenção e instalação de infraestruturas físicas de redes, sistemas e equipamentos ativos.",
    market: "Setor de TI, configurando infraestruturas de redes.",
    highlights: [
      "Cabeamento estruturado na prática",
      "Instalação e manutenção de redes",
      "Turmas ofertadas de julho a dezembro",
    ],
    curriculum: [
      "Eletroeletrônica",
      "Cabeamento Estruturado",
      "Instalação de Redes",
      "Manutenção",
      "Instalação de Sistemas Operacionais",
      "Comunicação",
      "Raciocínio Lógico",
      "Informática",
      "Matemática Aplicada",
      "Mundo do Trabalho",
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
