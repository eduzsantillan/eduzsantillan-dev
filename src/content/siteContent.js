export const profile = {
  name: "Eduardo Zuñiga",
  email: "eduzsantillan@gmail.com",
  linkedin: "https://www.linkedin.com/in/eduzuniga/",
  github: "https://github.com/eduzsantillan",
  engineeringCV: "/assets/Eduardo_Zuniga_Senior_Backend_Engineer.pdf",
  consultingCV: "/assets/Eduardo_Zuniga_Software_Consulting.pdf",
};

const en = {
  nav: {
    consulting: "Services", work: "Projects", experience: "About", contact: "Contact", cta: "Let’s talk",
    menu: "Open navigation", close: "Close navigation", home: "Eduardo Zuñiga — home",
    language: "Switch to Spanish",
  },
  common: {
    project: "Discuss your project", cv: "Download engineering CV",
    consultingCV: "Consulting profile", skip: "Skip to content", back: "Back to top",
  },
  hero: {
    eyebrow: "Software development consulting",
    line1: "Custom software",
    line2: "for your business.",
    description: "I help product teams integrate payments, secure customer accounts, and improve the software they already rely on.",
    secondary: "See projects",
    pause: "Pause animations",
    resume: "Resume animations",
  },
  services: {
    title: "What I can build for you",
    items: [
      { id: "payments", title: "Payments & integrations", description: "Connect payment providers, banks, and third-party APIs to your product." },
      { id: "identity", title: "Identity & account security", description: "Add identity verification and protect account recovery and sensitive transactions." },
      { id: "modernization", title: "Backend modernization", description: "Improve performance and make your existing Java software easier to maintain." },
    ],
  },
  work: {
    title: "Selected projects",
    open: "Explore case study",
    close: "Close case study",
    items: [
      {
        slug: "account-protection", type: "identity", title: "Safer account recovery",
        summary: "Added identity checks to password recovery and financial transfers.",
        detail: "I implemented end-to-end KYC flows and trusted-device controls for sensitive operations.",
      },
      {
        slug: "financial-integrations", type: "payments", title: "Contractor payment requests",
        summary: "Enabled contractors to request funds directly on the platform.",
        detail: "I built the payment request APIs and workflow and contributed to global account and payment integrations.",
      },
      {
        slug: "enterprise-modernization", type: "modernization", title: "Java ERP modernization",
        summary: "Reorganized a Java ERP around business domains.",
        detail: "I contributed to the restructuring, fixed workflow defects, and ran regression tests across modules.",
      },
    ],
  },
  experience: {
    title: "Work directly with me",
    description: "I’m Eduardo, a software engineer with over 10 years of experience, including work at Ontop, SURA, and Martin Bros.",
    roleCta: "Discuss an engineering role",
  },
  contact: {
    title: "Have a project in mind?",
    description: "Tell me what you need and we’ll define the first deliverable together.",
    roleTitle: "Hiring a backend engineer?",
    roleDescription: "Share a few details about the role and your team.",
    email: "Email me about your project",
    roleEmail: "Discuss a role",
    projectSubject: "Software development project",
    roleSubject: "Senior backend engineering opportunity",
    steps: ["Define scope", "Build", "Hand over"],
    copy: "Copy email address",
    copied: "Email copied",
    copyFailed: "Copy unavailable. Use the email link.",
    footer: "Independent software consultant",
    rights: "All rights reserved.",
  },
  seo: {
    title: "Eduardo Zuñiga — Software Development Consultant",
    description: "Independent software development consulting for product teams. Payments, identity and account security, and Java modernization.",
  },
};

const es = {
  nav: {
    consulting: "Servicios", work: "Proyectos", experience: "Sobre mí", contact: "Contacto", cta: "Conversemos",
    menu: "Abrir navegación", close: "Cerrar navegación", home: "Eduardo Zuñiga — inicio",
    language: "Cambiar a inglés",
  },
  common: {
    project: "Hablemos de tu proyecto", cv: "Descargar CV de ingeniería",
    consultingCV: "Perfil de consultoría", skip: "Ir al contenido", back: "Volver al inicio",
  },
  hero: {
    eyebrow: "Consultoría en desarrollo de software",
    line1: "Software a medida",
    line2: "para tu negocio.",
    description: "Ayudo a equipos de producto a integrar pagos, proteger cuentas y mejorar el software que ya usan.",
    secondary: "Ver proyectos",
    pause: "Pausar animaciones",
    resume: "Reanudar animaciones",
  },
  services: {
    title: "En qué puedo ayudarte",
    items: [
      { id: "payments", title: "Pagos e integraciones", description: "Conecta tu producto con pasarelas de pago, bancos y APIs de terceros." },
      { id: "identity", title: "Identidad y seguridad", description: "Verifica la identidad de tus usuarios y protege la recuperación de cuentas y las operaciones sensibles." },
      { id: "modernization", title: "Modernización de backend", description: "Mejora el rendimiento y facilita el mantenimiento de tus sistemas Java." },
    ],
  },
  work: {
    title: "Proyectos seleccionados",
    open: "Explorar caso",
    close: "Cerrar caso",
    items: [
      {
        slug: "account-protection", type: "identity", title: "Recuperación de cuentas segura",
        summary: "Incorporé controles de identidad en la recuperación de contraseñas y las transferencias.",
        detail: "Implementé flujos de verificación de identidad (KYC) de extremo a extremo y controles de dispositivos de confianza.",
      },
      {
        slug: "financial-integrations", type: "payments", title: "Solicitudes de pago",
        summary: "Los contratistas pudieron solicitar fondos directamente desde la plataforma.",
        detail: "Desarrollé las APIs y el flujo de solicitudes de pago, y contribuí a las integraciones de pagos y cuentas globales.",
      },
      {
        slug: "enterprise-modernization", type: "modernization", title: "Modernización de un ERP Java",
        summary: "Reorganizamos un ERP en Java por dominios de negocio.",
        detail: "Contribuí a la reestructuración, corregí defectos en flujos de negocio y ejecuté pruebas de regresión entre módulos.",
      },
    ],
  },
  experience: {
    title: "Trabaja directamente conmigo",
    description: "Soy Eduardo, ingeniero de software con más de 10 años de experiencia, incluyendo proyectos en Ontop, SURA y Martin Bros.",
    roleCta: "Conversemos sobre una vacante",
  },
  contact: {
    title: "¿Tienes un proyecto en mente?",
    description: "Cuéntame qué necesitas y definimos juntos qué entregar primero.",
    roleTitle: "¿Buscas un ingeniero backend?",
    roleDescription: "Cuéntame sobre la vacante y tu equipo.",
    email: "Escríbeme sobre tu proyecto",
    roleEmail: "Conversar sobre un puesto",
    projectSubject: "Proyecto de desarrollo de software",
    roleSubject: "Oportunidad de ingeniería backend senior",
    steps: ["Definir alcance", "Construir", "Entregar"],
    copy: "Copiar correo electrónico",
    copied: "Correo copiado",
    copyFailed: "No se pudo copiar. Usa el enlace de correo.",
    footer: "Consultor independiente de software",
    rights: "Todos los derechos reservados.",
  },
  seo: {
    title: "Eduardo Zuñiga — Consultoría en Desarrollo de Software",
    description: "Consultoría de software para equipos de producto. Pagos, verificación de identidad, seguridad de cuentas y modernización Java.",
  },
};

export const translations = { en, es };
export const getContent = (language) => translations[language] || translations.en;

export const inquiryLink = (language, intent = "project") => {
  const { contact } = getContent(language);
  const subject = intent === "role" ? contact.roleSubject : contact.projectSubject;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;
};
