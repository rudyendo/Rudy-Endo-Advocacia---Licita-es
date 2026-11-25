export const SITE_CONFIG = {
  // Preencha com o endpoint do seu formulário (Formspree, Make, Brevo, etc.)
  FORM_ENDPOINT: '',

  // URL do PDF do Checklist de Habilitação (coloque o arquivo em /public/checklist-habilitacao.pdf ou informe a URL completa)
  PDF_URL: '/checklist-habilitacao.pdf',

  // IDs de rastreamento (carregados automaticamente apenas se preenchidos)
  TRACKING: {
    GA4_ID: '',
    GTM_ID: '',
    META_PIXEL_ID: '',
  },

  BRANDING: {
    name: 'Rudy Endo Advocacia',
    legalName: 'Rudy Endo – Sociedade Individual de Advocacia',
    oabSociety: 'Registro OAB/RN nº 801',
    oabLawyer: 'OAB/RN nº 12.466',
    lawyerFullName: 'Rudy Anderson Diniz Endo',
    cnpj: '28.528.995/0001-87',
    logoUrl: '/assets/aistudio/logo_3ea6d8e0.png',
    aboutImageUrl: '/assets/aistudio/rudy-endo_750fad2e.jpeg',
    aboutImageAlt: 'Dr. Rudy Endo, advogado de licitações e contratos públicos em Natal/RN',
    heroImageUrl: '/hero-licitacoes.jpg',
    ogImageUrl: '/og-licitacoes.jpg',
  },

  CONTACT_INFO: {
    whatsappNumber: '5584998347202',
    whatsappDisplay: '(84) 99834-7202',
    whatsappPrefilledMessage:
      'Olá, Dr. Rudy! Minha empresa participa de licitações e preciso de orientação jurídica.',
    whatsappUrgentMessage:
      'Olá, Dr. Rudy! Tenho um prazo correndo em uma licitação e preciso de orientação urgente.',
    email: 'contato@rudyendo.adv.br',
    privacyEmail: 'contato@rudyendo.adv.br',
    address:
      'Rua Desembargador Régulo Tinôco, 1293-B, Sala 02 — Barro Vermelho, Natal/RN — CEP 59022-080',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+Desembargador+Régulo+Tinôco+1293+Barro+Vermelho+Natal+RN',
    hours: 'Segunda a sexta, das 9h às 18h, mediante agendamento',
  },
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(
    customMessage ?? SITE_CONFIG.CONTACT_INFO.whatsappPrefilledMessage
  );
  return `https://wa.me/${SITE_CONFIG.CONTACT_INFO.whatsappNumber}?text=${text}`;
}

export function getUrgentWhatsAppUrl(): string {
  return getWhatsAppUrl(SITE_CONFIG.CONTACT_INFO.whatsappUrgentMessage);
}

export const NAVIGATION = {
  links: [
    { label: 'Início', href: '#inicio' },
    { label: 'Riscos', href: '#riscos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ],
  ctaLabel: 'Falar no WhatsApp',
};

export const HERO_CONTENT = {
  badge: 'LICITAÇÕES E CONTRATOS PÚBLICOS · LEI 14.133/2021',
  titleLine1: 'Na licitação, um documento errado elimina a melhor proposta.',
  titleLine2: 'Não dispute sozinho.',
  subtitle:
    'Edital com exigência abusiva, inabilitação por detalhe, contrato com preço defasado, multa do órgão. Assessoria integral para empresas que vendem para o governo: do edital à execução do contrato, incluindo o acompanhamento da disputa.',
  primaryCta: 'Tenho um prazo correndo — falar agora',
  secondaryCta: 'Baixar o checklist de habilitação',
  supportItems: [
    'Advogado pós-graduado em Licitações e Contratos Administrativos',
    'Resposta em até 24h úteis, prazos urgentes priorizados',
    'Atuação online em todo o Brasil',
  ],
};

export const RISKS_CONTENT = {
  eyebrow: 'RISCOS DA DISPUTA E DO CONTRATO',
  title: 'O que pode custar caro para quem vende ao governo',
  subtitle:
    'Na licitação, os prazos são curtos e os detalhes decidem. Estes são os pontos em que as empresas mais perdem.',
  items: [
    {
      number: '01',
      title: 'Inabilitada por um detalhe.',
      description:
        'A melhor proposta pode ser descartada por certidão vencida, atestado de capacidade técnica mal descrito ou exigência do edital que ninguém leu com atenção.',
    },
    {
      number: '02',
      title: 'Três dias úteis para recorrer.',
      description:
        'A intenção de recorrer deve ser manifestada logo após a decisão, e as razões vêm em 3 dias úteis. Sem preparo, a chance de reverter o resultado passa.',
    },
    {
      number: '03',
      title: 'Edital com exigência ilegal.',
      description:
        'Cláusula restritiva ou especificação direcionada pode ser impugnada até 3 dias úteis antes da abertura. Depois disso, a disputa fica bem mais difícil.',
    },
    {
      number: '04',
      title: 'Proposta desclassificada como inexequível.',
      description:
        'Preço baixo demais sem demonstração de viabilidade leva à desclassificação. Saber comprovar a composição do preço faz diferença.',
    },
    {
      number: '05',
      title: 'Contrato que virou prejuízo — ou pagamento que não chega.',
      description:
        'Insumos sobem, o preço fica defasado, o órgão atrasa o pagamento. A lei prevê reequilíbrio, reajuste e medidas contra atrasos — mas o pedido precisa ser feito do jeito certo.',
    },
    {
      number: '06',
      title: 'Sanção que tira a empresa do mercado público.',
      description:
        'Impedimento de licitar pode chegar a 3 anos; a declaração de inidoneidade, a 6. A defesa no processo administrativo é o momento decisivo.',
    },
  ],
  closingLine:
    'Tem uma sessão marcada ou um prazo correndo? Quanto antes o edital ou a decisão for analisado, mais opções a sua empresa tem.',
  ctaLabel: 'Falar com o advogado agora',
};

export const SERVICES_CONTENT = {
  eyebrow: 'COMO PODEMOS AJUDAR',
  title: 'Assessoria integral: do edital ao último pagamento do contrato.',
  items: [
    {
      id: 'analise-edital',
      title: 'Análise de edital e habilitação',
      description:
        'Leitura jurídica do edital antes da sessão: riscos, exigências de habilitação, pontos impugnáveis e conferência da documentação da empresa.',
    },
    {
      id: 'impugnacoes',
      title: 'Impugnações e pedidos de esclarecimento',
      description:
        'Questionamento de cláusulas restritivas, ilegais ou direcionadas, dentro do prazo legal, para que a disputa aconteça em condições justas.',
    },
    {
      id: 'recursos',
      title: 'Recursos e contrarrazões',
      description:
        'Atuação contra inabilitação, desclassificação ou julgamento irregular — e defesa do resultado quando a sua empresa vence e é questionada.',
    },
    {
      id: 'reequilibrio',
      title: 'Reequilíbrio, reajuste e repactuação',
      description:
        'Pedidos fundamentados para recompor o preço do contrato quando custos sobem por fatos que fogem ao controle da empresa.',
    },
    {
      id: 'gestao-contratos',
      title: 'Gestão jurídica de contratos',
      description:
        'Aditivos, prorrogações, notificações, pagamentos em atraso e encerramento do contrato, com documentação que protege a empresa.',
    },
    {
      id: 'sancoes',
      title: 'Defesa em processos sancionatórios',
      description:
        'Defesa em processos de multa, impedimento de licitar e declaração de inidoneidade, na esfera administrativa e, se necessário, judicial.',
    },
  ],
  featured: {
    title: 'Assessoria integral em licitações',
    description:
      'Para empresas que querem um parceiro em todas as etapas: monitoramento e análise de editais, organização da documentação de habilitação, acompanhamento da disputa nas plataformas de compras públicas, recursos, e gestão do contrato até o último pagamento. Tudo concentrado em um só escritório — e ninguém perde prazo entre uma etapa e outra.',
  },
  ctaLabel: 'Falar com o advogado agora',
};

export const TARGET_AUDIENCE_CONTENT = {
  eyebrow: 'PARA QUEM ATENDEMOS',
  title: 'Do primeiro pregão ao contrato em andamento',
  cards: [
    {
      id: 'iniciantes',
      title: 'Empresas começando no mercado público',
      description:
        'Orientação para cadastro, documentação e leitura de editais — incluindo os benefícios de ME e EPP previstos na Lei Complementar 123/2006. Se a empresa não tem estrutura própria, a assessoria integral cuida de todas as etapas.',
    },
    {
      id: 'frequentes',
      title: 'Empresas que já licitam com frequência',
      description:
        'Assessoria integral mensal ou atuação por demanda: análise de editais, acompanhamento das disputas, recursos e gestão dos contratos em andamento.',
    },
    {
      id: 'assessorias',
      title: 'Assessorias e consultorias de licitação',
      description:
        'Parceria jurídica para os seus clientes: impugnações, recursos, reequilíbrios e defesas, com um único interlocutor.',
      ctaLabel: 'Conversar sobre parceria',
    },
  ],
};

export const HOW_IT_WORKS_CONTENT = {
  eyebrow: 'SEM COMPLICAÇÃO',
  title: 'Rápido como o prazo exige',
  steps: [
    {
      number: '01',
      title: 'Envie o edital ou conte o caso',
      description:
        'Pelo WhatsApp ou formulário, informando se há prazo correndo. Casos com prazo curto são priorizados.',
    },
    {
      number: '02',
      title: 'Receba o diagnóstico e a proposta',
      description:
        'O advogado analisa o caso e envia uma proposta por escrito — por peça ou assessoria mensal.',
    },
    {
      number: '03',
      title: 'Atuação no prazo e acompanhamento',
      description:
        'Atuação em cada etapa contratada — peças, acompanhamento da disputa e gestão do contrato — dentro do prazo e com retorno claro.',
    },
  ],
};

export const CHECKLIST_CONTENT = {
  eyebrow: 'MATERIAL GRATUITO',
  title: 'Checklist de Habilitação: os erros que mais eliminam empresas em licitações',
  description:
    'Um guia prático, escrito pelo Dr. Rudy Endo, para conferir a documentação antes da sessão — e não perder a disputa por um detalhe.',
  listTitle: 'Você vai encontrar:',
  items: [
    'Certidões e prazos de validade que mais causam inabilitação',
    'Como conferir se os atestados atendem ao edital',
    'Os benefícios de ME e EPP que muitas empresas deixam de usar',
    'Quando e como impugnar um edital',
    'Prazos de recurso na Lei 14.133/2021',
  ],
  formTitle: 'Receba o checklist gratuito',
  porteOptions: ['MEI', 'ME', 'EPP', 'Média', 'Grande'],
  consentText:
    'Concordo em receber o material e comunicações da Rudy Endo Advocacia, conforme a',
  consentLinkLabel: 'Política de Privacidade',
  submitLabel: 'Quero o checklist',
  microtext: 'Seus dados não são compartilhados com terceiros.',
  thankYou: {
    title: 'Pronto! Seu checklist está aqui.',
    text: 'Clique abaixo para baixar. Se surgir alguma dúvida durante a conferência, fale com a gente pelo WhatsApp.',
    downloadLabel: 'Baixar o checklist (PDF)',
    whatsappLabel: 'Falar no WhatsApp',
  },
};

export const ABOUT_CONTENT = {
  eyebrow: 'QUEM VAI ESTAR AO SEU LADO',
  title: 'Dr. Rudy Endo',
  nameLine: 'Advogado · OAB/RN nº 12.466',
  paragraphs: [
    'Pós-graduado em Licitações e Contratos Administrativos e em Direito Administrativo, Rudy Endo assessora empresas em licitações e na execução de contratos com a Administração Pública há 5 anos, oferecendo assessoria integral: do edital e da disputa até a execução do contrato. Também é pós-graduado em Direito Imobiliário Aplicado e em Direito Notarial e Registral, formação que soma em contratos de obras, serviços de engenharia e questões envolvendo imóveis públicos.',
    'Seu método é direto: em licitação, prazo perdido não volta. Por isso, quem atende é o próprio advogado, com resposta rápida e peças entregues dentro do prazo.',
  ],
  differentialsTitle: 'Diferenciais',
  differentials: [
    'Pós-graduação em Licitações e Contratos Administrativos e em Direito Administrativo',
    'Assessoria integral: todas as etapas da licitação e do contrato em um só lugar',
    'Atendimento direto com o advogado responsável',
    'Prioridade para casos com prazo correndo',
    'Atuação com base na Lei 14.133/2021 e na jurisprudência do TCU',
    'Peças e orientações por escrito, em linguagem clara para a equipe comercial',
    'Atendimento online para empresas de todo o Brasil',
  ],
};

export const HIGHLIGHTS_CONTENT = [
  {
    value: '5 anos',
    label: 'em licitações e contratos administrativos',
  },
  {
    value: '2',
    label: 'pós-graduações: Licitações e Contratos Administrativos e Direito Administrativo',
  },
  {
    value: '24h úteis',
    label: 'prazo máximo de retorno',
  },
  {
    value: 'Brasil',
    label: 'atendimento online em todos os estados',
  },
];

export const FAQ_CONTENT = {
  title: 'Dúvidas frequentes',
  items: [
    {
      question: 'Minha empresa nunca participou de licitação. Por onde começar?',
      answer:
        'Pelo cadastro nas plataformas de compras públicas, pela organização das certidões e atestados e pela leitura cuidadosa do edital. ME e EPP contam com tratamento diferenciado pela Lei Complementar 123/2006, como prazo para regularizar a situação fiscal.',
    },
    {
      question: 'Qual é o prazo para recorrer?',
      answer:
        'Pela Lei 14.133/2021, a intenção de recorrer deve ser manifestada logo após a decisão, e as razões do recurso são apresentadas em 3 dias úteis. Por isso é importante falar com o advogado antes da sessão.',
    },
    {
      question: 'Até quando posso impugnar um edital?',
      answer: 'Até 3 dias úteis antes da data de abertura da licitação.',
    },
    {
      question: 'Quando é possível pedir reequilíbrio do contrato?',
      answer:
        'Quando fatos imprevisíveis — ou previsíveis, mas de consequências incalculáveis — tornam o contrato excessivamente oneroso, como alta extraordinária de insumos. O pedido precisa ser bem documentado.',
    },
    {
      question: 'O órgão está atrasando os pagamentos. O que fazer?',
      answer:
        'É possível notificar, cobrar correção e, em atrasos superiores a 2 meses, a lei permite à empresa pedir a extinção do contrato ou suspender sua execução. Cada caso precisa ser analisado antes de qualquer medida.',
    },
    {
      question: 'Vocês atendem empresas de qualquer estado?',
      answer:
        'Sim. A maior parte das licitações é eletrônica, e o atendimento é feito online para empresas de todo o Brasil.',
    },
    {
      question: 'O que é a assessoria integral?',
      answer:
        'É o acompanhamento da empresa em todas as etapas: análise de editais, documentação de habilitação, acompanhamento da disputa nas plataformas, impugnações, recursos e gestão dos contratos firmados. A empresa pode contratar a assessoria integral (mensal) ou apenas uma demanda específica. Se já tiver uma assessoria de licitações, trabalhamos em conjunto com ela.',
    },
    {
      question: 'Quanto custa?',
      answer:
        'Depende do caso: há atuação por peça (impugnação, recurso, reequilíbrio) ou assessoria mensal. Após a conversa inicial, enviamos proposta por escrito.',
    },
  ],
};

export const CONTACT_CONTENT = {
  eyebrow: 'FALE COM O ADVOGADO',
  title: 'Conte o que está acontecendo na licitação ou no contrato',
  description:
    'Informe se há prazo correndo. Você recebe retorno do próprio advogado em até 24 horas úteis — casos urgentes são priorizados.',
  porteOptions: ['MEI', 'ME', 'EPP', 'Média', 'Grande'],
  experienceOptions: [
    'Ainda não participamos',
    'Participamos eventualmente',
    'Participamos com frequência',
    'Já temos contratos ativos',
  ],
  subjectOptions: [
    'Análise de edital e habilitação',
    'Impugnação ou esclarecimento',
    'Recurso ou contrarrazões',
    'Reequilíbrio, reajuste ou repactuação',
    'Pagamento atrasado',
    'Multa ou sanção',
    'Assessoria integral (do edital ao contrato)',
    'Outro',
  ],
  deadlineOptions: [
    'Não',
    'Sim — vence em até 3 dias úteis',
    'Sim — vence em mais de 3 dias úteis',
  ],
  urgentDeadlineValue: 'Sim — vence em até 3 dias úteis',
  urgentWarningText:
    'Prazo curto? Fale agora pelo WhatsApp para atendimento prioritário.',
  submitLabel: 'Quero receber orientação',
  microtextPrefix: 'Prazo curto?',
  microtextLink: 'Fale agora pelo WhatsApp.',
  thankYou: {
    title: 'Mensagem recebida!',
    text: 'Retornaremos em até 24 horas úteis — casos urgentes são priorizados. Se tiver um prazo imediato, fale agora pelo WhatsApp.',
    whatsappLabel: 'Falar no WhatsApp agora',
  },
};

export const FLOATING_WHATSAPP_CONTENT = {
  label: 'Prazo correndo? Fale com o advogado',
  ariaLabel: 'Prazo correndo? Fale com o advogado no WhatsApp',
};

export const FOOTER_CONTENT = {
  societyLine:
    'Rudy Endo – Sociedade Individual de Advocacia · Registro OAB/RN nº 801 · CNPJ 28.528.995/0001-87',
  lawyerLine: 'Titular: Rudy Anderson Diniz Endo — OAB/RN nº 12.466',
  legalNote:
    '© 2026 Rudy Endo Advocacia. Conteúdo de caráter informativo, em conformidade com o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do CFOAB.',
};

export const PRIVACY_POLICY_CONTENT = {
  title: 'Política de Privacidade',
  text: 'A Rudy Endo – Sociedade Individual de Advocacia (Registro OAB/RN nº 801 · CNPJ 28.528.995/0001-87) coleta apenas os dados informados nos formulários deste site (nome, e-mail, WhatsApp e informações sobre sua empresa e demandas em licitações e contratos administrativos), com a finalidade de responder ao seu contato, enviar o material solicitado e, com seu consentimento, comunicações sobre Licitações e Contratos Públicos. Os dados não são vendidos nem compartilhados com terceiros, exceto ferramentas necessárias à operação do site (envio de formulários e análise de acessos). Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail contato@rudyendo.adv.br, nos termos da Lei nº 13.709/2018 (LGPD).',
};
