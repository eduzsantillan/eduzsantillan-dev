const en = {
  hero: {
    headline:
      "I help teams ship reliable backend systems and AI-powered features.",
    subheadline:
      "Experience across fintech, SaaS, and data-heavy platforms. Spring Boot, AWS, React.",
    idealFor:
      "Ideal for teams that need to ship fast, reduce technical risk, and improve performance.",
    proofChips: [
      "Reporting speed: 100s → <1s",
      "~80% fewer production bugs",
      "AI-powered ID verification",
    ],
    primaryCta: "Book a 30-min call",
    secondaryCta: "See case studies",
    tag: "Software Consultant · Vancouver, BC",
  },
  trustBar: {
    items: [
      { icon: "🌎", text: "Remote across Canada & USA · Pacific Time" },
      { icon: "🌐", text: "English / Spanish" },
      { icon: "☁️", text: "AWS Certified" },
      { icon: "🤖", text: "Azure AI Engineer" },
      { icon: "🎓", text: "Professor / Mentor" },
    ],
  },
  services: {
    title: "Services",
    intro: "How I can help your team",
    deliverablesLabel: "Deliverables",
    items: [
      {
        title: "MVP Build",
        subtitle: "Idea → Production",
        description:
          "Transform your concept into a working product ready for real users and feedback.",
        deliverables: [
          "Working product deployed to production",
          "System architecture documentation",
          "Cloud infrastructure setup",
        ],
        outcome: "Launch-ready product with real users",
        icon: "🚀",
      },
      {
        title: "Backend & Microservices",
        subtitle: "Scalable Infrastructure",
        description:
          "Design and build robust backend systems that grow with your business needs.",
        deliverables: [
          "Production-ready APIs deployed",
          "Database schema & optimization",
          "Integration with existing systems",
        ],
        outcome: "Reliable backend that scales",
        icon: "⚙️",
      },
      {
        title: "Performance & Reliability",
        subtitle: "Speed & Stability",
        description:
          "Identify bottlenecks and implement fixes that users will notice immediately.",
        deliverables: [
          "Performance report + implemented fixes",
          "Before/after metrics documented",
          "Monitoring & alerting setup",
        ],
        outcome: "Faster app, happier users",
        icon: "⚡",
      },
      {
        title: "AI Feature Delivery",
        subtitle: "Prototype → Production",
        description:
          "Add AI-powered features to your product—not just demos, real production features.",
        deliverables: [
          "Working AI feature in production",
          "Evaluation metrics & guardrails",
          "Documentation & maintenance guide",
        ],
        outcome: "AI feature your users can rely on",
        icon: "🤖",
      },
      {
        title: "Architecture Review",
        subtitle: "1-Week Assessment",
        description:
          "Get expert analysis of your current system with a clear action plan.",
        deliverables: [
          "Roadmap + architecture diagram",
          "Risk assessment with prioritized fixes",
          "Quick wins you can implement today",
        ],
        outcome: "Clear path forward for your tech",
        icon: "🔍",
      },
    ],
  },
  caseStudies: {
    title: "Case Studies",
    intro:
      "Real results from production systems. Details anonymized for client privacy.",
    viewDetails: "View details →",
    modalLabels: {
      challenge: "The Challenge",
      constraints: "Constraints",
      actions: "What I Did",
      results: "Results",
      stack: "Tech Stack",
      cta: "Want similar results for your project?",
      ctaButton: "Book a call",
    },
    items: [
      {
        id: "reporting-performance",
        title: "Reporting Performance Optimization",
        industry: "Fintech Platform",
        context:
          "Slow reports were blocking ops teams from making timely decisions.",
        problem:
          "Reporting queries taking 100+ seconds were causing timeout errors and user frustration. The ops team couldn't get the data they needed to run the business.",
        constraints:
          "High-traffic production system, couldn't afford downtime, needed results in 3 weeks.",
        actions: [
          "Profiled and identified the slowest queries",
          "Implemented intelligent caching with Redis",
          "Optimized database indexes and query patterns",
          "Redesigned data aggregation algorithm",
        ],
        results: [
          { metric: "100s → <1s", label: "Query response (faster decisions)" },
          { metric: "99.9%", label: "Uptime maintained" },
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "AWS"],
      },
      {
        id: "stability-quality",
        title: "Stability & Quality Improvement",
        industry: "SaaS Platform",
        context:
          "Frequent bugs were eroding user trust and slowing down the team.",
        problem:
          "Low test coverage and inconsistent code quality meant bugs kept reaching production. The team was spending more time fixing issues than building features.",
        constraints:
          "Needed to improve quality without stopping feature development.",
        actions: [
          "Introduced testing practices and CI/CD gates",
          "Refactored critical modules for testability",
          "Mentored team on quality-first development",
          "Set up monitoring and alerting",
        ],
        results: [
          { metric: "~80%", label: "Fewer production bugs (more stability)" },
          { metric: "3x", label: "Faster release cycles" },
        ],
        stack: ["Java", "Spring Boot", "JUnit", "Docker", "CI/CD"],
      },
      {
        id: "identity-verification",
        title: "Identity Verification System",
        industry: "Fintech / Compliance",
        context:
          "Manual ID checks couldn't keep up with user growth and compliance needs.",
        problem:
          "Manual ID validation was slow, error-prone, and creating a bottleneck for onboarding. Compliance requirements demanded faster, more accurate verification.",
        constraints:
          "Strict compliance requirements, needed 99%+ accuracy, sub-5-second response time.",
        actions: [
          "Implemented AWS Rekognition for document verification",
          "Built selfie-to-ID matching workflow",
          "Created fraud detection guardrails",
          "Designed fallback flows for edge cases",
        ],
        results: [
          { metric: "90%+", label: "Automated (less manual work)" },
          { metric: "< 5s", label: "Verification time" },
        ],
        stack: ["AWS Rekognition", "AWS Lambda", "Spring Boot", "S3", "React"],
      },
    ],
  },
  process: {
    title: "How We Work",
    intro: "A clear process from first call to delivery",
    steps: [
      {
        step: 1,
        title: "Discovery Call",
        description:
          "We discuss your goals, challenges, and timeline. I'll tell you honestly if I can help.",
        icon: "📞",
      },
      {
        step: 2,
        title: "Proposal + Milestones",
        description:
          "You receive a clear scope, timeline, and investment. No surprises.",
        icon: "📋",
      },
      {
        step: 3,
        title: "Weekly Demos + Delivery",
        description:
          "Working software delivered every week. You see progress, not just promises.",
        icon: "🔄",
      },
      {
        step: 4,
        title: "Handoff + Support",
        description:
          "Complete documentation, knowledge transfer, and optional ongoing support.",
        icon: "✅",
      },
    ],
  },
  about: {
    title: "About Eduardo",
    description:
      "I work with product teams across Canada and the US to build software that supports business goals. From fast-moving teams to established organizations, I help ship reliable systems that scale.",
    credibilityBullets: [
      "8+ years delivering production systems",
      "Backend + cloud specialization (Spring Boot, AWS)",
      "AI features in real products (not just demos)",
    ],
    highlights: [
      "AWS Certified Cloud Practitioner",
      "Azure AI Engineer Associate",
      "Computer Science Professor",
      "Fintech · SaaS · Enterprise",
    ],
  },
  resultsStrip: {
    label: "Proven Results:",
    items: [
      { metric: "<1s", label: "Reporting" },
      { metric: "-80%", label: "Bugs" },
      { metric: "90%+", label: "Automation" },
      { metric: "3x", label: "Faster releases" },
    ],
  },
  contact: {
    headline: "Let's build something reliable together.",
    bullets: [
      "Production-ready systems",
      "Clear milestones + weekly demos",
      "No surprises",
    ],
    microPromise:
      "In the call: clarify scope, risks, timeline, and next steps. No pressure.",
    responseTime: "I reply within 1–2 business days.",
    bookingLabel: "Book a 30-min call",
    bookingSubtitle: "Free discovery session",
    emailLabel: "Email me",
    linkedinLabel: "Connect on LinkedIn",
    linkedinSubtitle: "Let's network",
    formTitle: "Or send a message",
    formPlaceholder: "What are you trying to build or improve?",
    formButton: "Send Message",
    formSending: "Sending...",
    formSuccess: "Message sent! I'll get back to you soon.",
    formError: "Something went wrong. Please try email instead.",
    bookingUrl: "https://calendly.com/eduzsantillan/30min",
    email: "eduzsantillan@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/eduzuniga/",
    githubUrl: "https://github.com/eduzsantillan",
    youtubeUrl: "https://www.youtube.com/channel/UClYgKxDslmfUmGoVIYkTPHw",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Book a call",
    resumeLabel: "Download resume",
  },
  seo: {
    title: "Eduardo Zúñiga — Software Consultant (Backend, AI, Cloud)",
    description:
      "I build scalable backend + AI features for SaaS/Fintech teams. 8+ years delivering secure production systems. Spring Boot, AWS, React.",
    ogImage: "/og-image.png",
  },
};

const es = {
  hero: {
    headline:
      "Ayudo a equipos a entregar sistemas backend confiables y funciones con IA.",
    subheadline:
      "Experiencia en fintech, SaaS y plataformas de datos. Spring Boot, AWS, React.",
    idealFor:
      "Ideal para equipos que necesitan entregar rápido, reducir riesgo técnico y mejorar rendimiento.",
    proofChips: [
      "Velocidad de reportes: 100s → <1s",
      "~80% menos bugs en producción",
      "Verificación de ID con IA",
    ],
    primaryCta: "Agendar llamada de 30 min",
    secondaryCta: "Ver casos de éxito",
    tag: "Consultor de Software · Vancouver, BC",
  },
  trustBar: {
    items: [
      { icon: "🌎", text: "Remoto en Canadá y USA · Hora del Pacífico" },
      { icon: "🌐", text: "Inglés / Español" },
      { icon: "☁️", text: "AWS Certificado" },
      { icon: "🤖", text: "Azure AI Engineer" },
      { icon: "🎓", text: "Profesor / Mentor" },
    ],
  },
  services: {
    title: "Servicios",
    intro: "Cómo puedo ayudar a tu equipo",
    deliverablesLabel: "Entregables",
    items: [
      {
        title: "Desarrollo de MVP",
        subtitle: "Idea → Producción",
        description:
          "Transforma tu concepto en un producto funcional listo para usuarios reales.",
        deliverables: [
          "Producto funcional en producción",
          "Documentación de arquitectura",
          "Configuración de infraestructura cloud",
        ],
        outcome: "Producto listo para lanzar",
        icon: "🚀",
      },
      {
        title: "Backend y Microservicios",
        subtitle: "Infraestructura Escalable",
        description:
          "Diseño y construcción de sistemas backend robustos que crecen con tu negocio.",
        deliverables: [
          "APIs listas para producción",
          "Esquema de BD y optimización",
          "Integración con sistemas existentes",
        ],
        outcome: "Backend confiable que escala",
        icon: "⚙️",
      },
      {
        title: "Rendimiento y Confiabilidad",
        subtitle: "Velocidad y Estabilidad",
        description:
          "Identifico cuellos de botella e implemento mejoras que los usuarios notan.",
        deliverables: [
          "Reporte de rendimiento + mejoras implementadas",
          "Métricas antes/después documentadas",
          "Configuración de monitoreo y alertas",
        ],
        outcome: "App más rápida, usuarios felices",
        icon: "⚡",
      },
      {
        title: "Entrega de Funciones con IA",
        subtitle: "Prototipo → Producción",
        description:
          "Agrego funciones con IA a tu producto—no solo demos, funciones reales en producción.",
        deliverables: [
          "Función de IA funcional en producción",
          "Métricas de evaluación y guardrails",
          "Documentación y guía de mantenimiento",
        ],
        outcome: "Función de IA en la que tus usuarios confían",
        icon: "🤖",
      },
      {
        title: "Revisión de Arquitectura",
        subtitle: "Evaluación de 1 Semana",
        description:
          "Obtén análisis experto de tu sistema actual con un plan de acción claro.",
        deliverables: [
          "Roadmap + diagrama de arquitectura",
          "Evaluación de riesgos con fixes priorizados",
          "Quick wins que puedes implementar hoy",
        ],
        outcome: "Camino claro para tu tecnología",
        icon: "🔍",
      },
    ],
  },
  caseStudies: {
    title: "Casos de Éxito",
    intro:
      "Resultados reales de sistemas en producción. Detalles anonimizados por privacidad.",
    viewDetails: "Ver detalles →",
    modalLabels: {
      challenge: "El Desafío",
      constraints: "Restricciones",
      actions: "Lo que Hice",
      results: "Resultados",
      stack: "Stack Tecnológico",
      cta: "¿Quieres resultados similares para tu proyecto?",
      ctaButton: "Agendar llamada",
    },
    items: [
      {
        id: "reporting-performance",
        title: "Optimización de Rendimiento de Reportes",
        industry: "Plataforma Fintech",
        context:
          "Reportes lentos bloqueaban al equipo de operaciones para tomar decisiones.",
        problem:
          "Consultas de reportes tomando 100+ segundos causaban errores de timeout y frustración. El equipo de ops no podía obtener los datos para operar el negocio.",
        constraints:
          "Sistema de alto tráfico, no podíamos tener downtime, resultados necesarios en 3 semanas.",
        actions: [
          "Perfilé e identifiqué las consultas más lentas",
          "Implementé caché inteligente con Redis",
          "Optimicé índices y patrones de consultas",
          "Rediseñé algoritmo de agregación de datos",
        ],
        results: [
          {
            metric: "100s → <1s",
            label: "Respuesta de consulta (decisiones más rápidas)",
          },
          { metric: "99.9%", label: "Uptime mantenido" },
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "AWS"],
      },
      {
        id: "stability-quality",
        title: "Mejora de Estabilidad y Calidad",
        industry: "Plataforma SaaS",
        context:
          "Bugs frecuentes erosionaban la confianza y ralentizaban al equipo.",
        problem:
          "Baja cobertura de tests y calidad inconsistente significaban bugs llegando a producción. El equipo pasaba más tiempo arreglando que construyendo.",
        constraints:
          "Necesitábamos mejorar calidad sin detener el desarrollo de features.",
        actions: [
          "Introduje prácticas de testing y gates de CI/CD",
          "Refactoricé módulos críticos para testabilidad",
          "Mentoricé al equipo en desarrollo quality-first",
          "Configuré monitoreo y alertas",
        ],
        results: [
          {
            metric: "~80%",
            label: "Menos bugs en producción (más estabilidad)",
          },
          { metric: "3x", label: "Ciclos de release más rápidos" },
        ],
        stack: ["Java", "Spring Boot", "JUnit", "Docker", "CI/CD"],
      },
      {
        id: "identity-verification",
        title: "Sistema de Verificación de Identidad",
        industry: "Fintech / Cumplimiento",
        context:
          "Verificación manual de IDs no podía seguir el ritmo del crecimiento.",
        problem:
          "Validación manual de IDs era lenta, propensa a errores y creaba cuellos de botella. El cumplimiento demandaba verificación más rápida y precisa.",
        constraints:
          "Requisitos estrictos de cumplimiento, necesidad de 99%+ precisión, respuesta <5 segundos.",
        actions: [
          "Implementé AWS Rekognition para verificación de documentos",
          "Construí flujo de matching selfie-a-ID",
          "Creé guardrails de detección de fraude",
          "Diseñé flujos de fallback para casos edge",
        ],
        results: [
          { metric: "90%+", label: "Automatizado (menos trabajo manual)" },
          { metric: "< 5s", label: "Tiempo de verificación" },
        ],
        stack: ["AWS Rekognition", "AWS Lambda", "Spring Boot", "S3", "React"],
      },
    ],
  },
  process: {
    title: "Cómo Trabajamos",
    intro: "Un proceso claro desde la primera llamada hasta la entrega",
    steps: [
      {
        step: 1,
        title: "Llamada de Descubrimiento",
        description:
          "Discutimos tus objetivos, desafíos y timeline. Te diré honestamente si puedo ayudar.",
        icon: "📞",
      },
      {
        step: 2,
        title: "Propuesta + Hitos",
        description:
          "Recibes un alcance claro, timeline e inversión. Sin sorpresas.",
        icon: "📋",
      },
      {
        step: 3,
        title: "Demos Semanales + Entrega",
        description:
          "Software funcional entregado cada semana. Ves progreso, no solo promesas.",
        icon: "🔄",
      },
      {
        step: 4,
        title: "Entrega + Soporte",
        description:
          "Documentación completa, transferencia de conocimiento y soporte opcional.",
        icon: "✅",
      },
    ],
  },
  about: {
    title: "Sobre Eduardo",
    description:
      "Trabajo con equipos de producto en Canadá y Estados Unidos construyendo software que apoya los objetivos del negocio. Desde equipos ágiles hasta organizaciones establecidas, ayudo a entregar sistemas confiables que escalan.",
    credibilityBullets: [
      "8+ años entregando sistemas en producción",
      "Especialización en backend + cloud (Spring Boot, AWS)",
      "Funciones de IA en productos reales (no solo demos)",
    ],
    highlights: [
      "AWS Certified Cloud Practitioner",
      "Azure AI Engineer Associate",
      "Profesor de Ciencias de la Computación",
      "Fintech · SaaS · Enterprise",
    ],
  },
  resultsStrip: {
    label: "Resultados Probados:",
    items: [
      { metric: "<1s", label: "Reportes" },
      { metric: "-80%", label: "Bugs" },
      { metric: "90%+", label: "Automatización" },
      { metric: "3x", label: "Releases más rápidos" },
    ],
  },
  contact: {
    headline: "Construyamos algo confiable juntos.",
    bullets: [
      "Sistemas listos para producción",
      "Hitos claros + demos semanales",
      "Sin sorpresas",
    ],
    microPromise:
      "En la llamada: aclaramos alcance, riesgos, timeline y próximos pasos. Sin presión.",
    responseTime: "Respondo en 1–2 días hábiles.",
    bookingLabel: "Agendar llamada de 30 min",
    bookingSubtitle: "Sesión de descubrimiento gratis",
    emailLabel: "Envíame un email",
    linkedinLabel: "Conectar en LinkedIn",
    linkedinSubtitle: "Hagamos networking",
    formTitle: "O envía un mensaje",
    formPlaceholder: "¿Qué estás tratando de construir o mejorar?",
    formButton: "Enviar Mensaje",
    formSending: "Enviando...",
    formSuccess: "¡Mensaje enviado! Te responderé pronto.",
    formError: "Algo salió mal. Por favor intenta por email.",
    bookingUrl: "https://calendly.com/eduzsantillan/30min",
    email: "eduzsantillan@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/eduzuniga/",
    githubUrl: "https://github.com/eduzsantillan",
    youtubeUrl: "https://www.youtube.com/channel/UClYgKxDslmfUmGoVIYkTPHw",
  },
  nav: {
    links: [
      { label: "Servicios", href: "#services" },
      { label: "Casos de Éxito", href: "#case-studies" },
      { label: "Sobre Mí", href: "#about" },
      { label: "Contacto", href: "#contact" },
    ],
    ctaLabel: "Agendar llamada",
    resumeLabel: "Descargar CV",
  },
  seo: {
    title: "Eduardo Zúñiga — Consultor de Software (Backend, IA, Cloud)",
    description:
      "Construyo backend escalable + funciones de IA para equipos de SaaS/Fintech. 8+ años entregando sistemas seguros en producción. Spring Boot, AWS, React.",
    ogImage: "/og-image.png",
  },
};

export const translations = { en, es };

export const getContent = (language) =>
  translations[language] || translations.en;
