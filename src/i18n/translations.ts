export type Language = "en" | "es";

export const translations = {
  en: {
    // Hero
    heroText: "Full-Stack Dev & AI Automations",

    // About
    aboutMain:
      "I combine full-stack development with AI automations to create solutions that generate real impact. From React and TypeScript web interfaces to AI agents with n8n, FastAPI, and LLM APIs — I work at the intersection of technology and business.",
    aboutSub:
      "Electronics technical graduate with experience in management and operations before transitioning to software. Today I build web applications, automation systems, and data analysis tools under the BNHTT IA Studio freelance studio.",
    moreAbout: "More about me",

    // Works section
    worksTitle: "Selected Work",
    worksDesc:
      "HERE'S A SELECTION OF PROJECTS BUILT WITH REAL USERS — COMBINING PRODUCT THINKING, AI AUTOMATION, AND FULL-STACK ENGINEERING.",
    exploreMore: "Explore more",

    // Projects
    projects: [
      {
        title: "OC-Dashboard",
        stack: "React · Node.js · Docker",
        desc: "Real-time media monitoring in production",
        status: "Beta · Production",
      },
      {
        title: "Nebula OCR",
        stack: "Python · FastAPI · React",
        desc: "Accounting automation with OCR",
        status: "MVP · In development",
      },
      {
        title: "Seamind Experience",
        stack: "React · TypeScript · Tailwind",
        desc: "Luxury travel platform in Bali",
        status: "Advanced development",
      },
      {
        title: "DJ Assist",
        stack: "Python · OpenCV · MediaPipe",
        desc: "Gesture-based MIDI control via webcam",
        status: "R&D · Functional PoC",
      },
    ],

    // All projects page
    projectsPageHeading: "real projects built with real users",
    projectsTopbar: "BNHTT IA Studio",
    projectsTopbarDesc:
      "Full-stack developer and AI automations specialist. I build web apps, automation systems, and data analysis tools.",

    allProjects: [
      {
        title: "OC-Dashboard",
        stack: "React · Node.js · Docker",
        desc: "Real-time media monitoring dashboard. Live in production for OrbitaComms.",
        status: "Beta · Production",
        color: "from-blue-900 to-indigo-800",
      },
      {
        title: "Nebula OCR",
        stack: "Python · FastAPI · React",
        desc: "Intelligent accounting automation with OCR and AI-powered data extraction.",
        status: "MVP · In development",
        color: "from-violet-900 to-purple-800",
      },
      {
        title: "Seamind Experience",
        stack: "React · TypeScript · Tailwind",
        desc: "Premium luxury travel platform focused on Bali experiences.",
        status: "Advanced development",
        color: "from-teal-900 to-cyan-800",
      },
      {
        title: "AI Appointment Agent",
        stack: "n8n · OpenAI · GCP",
        desc: "Conversational AI agent for automated appointment scheduling.",
        status: "Deployed",
        color: "from-green-900 to-emerald-800",
      },
      {
        title: "AI Contact Agent",
        stack: "n8n · Claude · Google Sheets",
        desc: "AI agent for intelligent contact management and follow-up automation.",
        status: "Deployed",
        color: "from-orange-900 to-amber-800",
      },
      {
        title: "DJ Assist",
        stack: "Python · OpenCV · MediaPipe",
        desc: "Real-time gesture recognition for MIDI control using webcam and hand tracking.",
        status: "R&D · Functional PoC",
        color: "from-red-900 to-rose-800",
      },
    ],

    academicProjects: [
      {
        title: "Wireless Robotic Arm",
        stack: "Electronics · Embedded Systems",
        desc: "Institutional Prize winner at Otto Krause Technical School.",
        status: "Prize · Otto Krause",
        color: "from-zinc-800 to-stone-700",
      },
      {
        title: "Reconnaissance Drone",
        stack: "Electronics · RC Systems",
        desc: "Custom-built reconnaissance drone project.",
        status: "Academic",
        color: "from-zinc-800 to-stone-700",
      },
      {
        title: "Hotel Booking Prediction",
        stack: "Python · Scikit-Learn · Pandas",
        desc: "ML model for hotel booking cancellation prediction — Data Science project.",
        status: "Data Science",
        color: "from-zinc-800 to-stone-700",
      },
    ],

    academicLabel: "Academic Projects",

    // Skills
    skillsTitle: "Skills that fuel my work",
    skillsCategories: [
      {
        name: "Frontend",
        skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      },
      {
        name: "Backend",
        skills: ["Node.js", "Python", "FastAPI"],
      },
      {
        name: "AI & Automation",
        skills: ["n8n", "Google Apps Script", "OpenAI API", "Claude API", "Gemini API", "OCR"],
      },
      {
        name: "DevOps",
        skills: ["Docker", "Git", "GCP", "Vite"],
      },
      {
        name: "Data",
        skills: ["SQL", "Pandas", "Scikit-Learn", "Matplotlib", "Machine Learning"],
      },
    ],

    // Contact footer
    contactTag: "That's all for now.",
    contactHeading: "Got a project in mind?",
    contactHeading2: "Let's talk",
    contactEmailLabel: "Email",
    contactPhoneLabel: "WhatsApp",
    getInTouch: "Get in touch",

    // DockNav
    navHome: "Home",
    navProjects: "Projects",
    navSkills: "Skills",
    navResume: "Resume",
    navGitHub: "GitHub",
    navContact: "Contact",
    navLinkedIn: "LinkedIn",
  },

  es: {
    // Hero
    heroText: "Desarrollador Full-Stack & IA",

    // About
    aboutMain:
      "Combino desarrollo full-stack con automatizaciones de IA para crear soluciones que generan impacto real. Desde interfaces web en React y TypeScript hasta agentes de IA con n8n, FastAPI y APIs de LLM, trabajo en el punto de encuentro entre tecnología y negocio.",
    aboutSub:
      "Egresado técnico electrónico, con experiencia en gestión y operaciones antes de hacer la transición al software. Hoy construyo aplicaciones web, sistemas de automatización y herramientas de análisis de datos bajo el estudio freelance BNHTT IA Studio.",
    moreAbout: "Más sobre mí",

    // Works section
    worksTitle: "Proyectos Reales",
    worksDesc:
      "UNA SELECCIÓN DE PROYECTOS CON USUARIOS REALES — COMBINANDO PRODUCT THINKING, AUTOMATIZACIÓN CON IA E INGENIERÍA FULL-STACK.",
    exploreMore: "Ver más",

    // Projects
    projects: [
      {
        title: "OC-Dashboard",
        stack: "React · Node.js · Docker",
        desc: "Monitoreo de medios en tiempo real en producción",
        status: "Beta · Producción",
      },
      {
        title: "Nebula OCR",
        stack: "Python · FastAPI · React",
        desc: "Automatización contable con OCR",
        status: "MVP · En desarrollo",
      },
      {
        title: "Seamind Experience",
        stack: "React · TypeScript · Tailwind",
        desc: "Plataforma de viajes de lujo en Bali",
        status: "Desarrollo avanzado",
      },
      {
        title: "DJ Assist",
        stack: "Python · OpenCV · MediaPipe",
        desc: "Control MIDI por gestos con webcam",
        status: "R&D · PoC funcional",
      },
    ],

    // All projects page
    projectsPageHeading: "proyectos reales con usuarios reales",
    projectsTopbar: "BNHTT IA Studio",
    projectsTopbarDesc:
      "Desarrollador full-stack y especialista en automatizaciones con IA. Construyo apps web, sistemas de automatización y herramientas de análisis de datos.",

    allProjects: [
      {
        title: "OC-Dashboard",
        stack: "React · Node.js · Docker",
        desc: "Dashboard de monitoreo de medios en tiempo real. En producción para OrbitaComms.",
        status: "Beta · Producción",
        color: "from-blue-900 to-indigo-800",
      },
      {
        title: "Nebula OCR",
        stack: "Python · FastAPI · React",
        desc: "Automatización contable inteligente con OCR y extracción de datos con IA.",
        status: "MVP · En desarrollo",
        color: "from-violet-900 to-purple-800",
      },
      {
        title: "Seamind Experience",
        stack: "React · TypeScript · Tailwind",
        desc: "Plataforma premium de viajes de lujo enfocada en experiencias en Bali.",
        status: "Desarrollo avanzado",
        color: "from-teal-900 to-cyan-800",
      },
      {
        title: "AI Agente de Turnos",
        stack: "n8n · OpenAI · GCP",
        desc: "Agente de IA conversacional para gestión automatizada de turnos.",
        status: "Desplegado",
        color: "from-green-900 to-emerald-800",
      },
      {
        title: "AI Agente de Contactos",
        stack: "n8n · Claude · Google Sheets",
        desc: "Agente de IA para gestión inteligente de contactos y automatización de seguimiento.",
        status: "Desplegado",
        color: "from-orange-900 to-amber-800",
      },
      {
        title: "DJ Assist",
        stack: "Python · OpenCV · MediaPipe",
        desc: "Reconocimiento de gestos en tiempo real para control MIDI con webcam y hand tracking.",
        status: "R&D · PoC funcional",
        color: "from-red-900 to-rose-800",
      },
    ],

    academicProjects: [
      {
        title: "Brazo Robótico Inalámbrico",
        stack: "Electrónica · Sistemas Embebidos",
        desc: "Premio Institucional en la Escuela Técnica Otto Krause.",
        status: "Premio · Otto Krause",
        color: "from-zinc-800 to-stone-700",
      },
      {
        title: "Dron de Reconocimiento",
        stack: "Electrónica · RC Systems",
        desc: "Dron de reconocimiento construido a medida.",
        status: "Académico",
        color: "from-zinc-800 to-stone-700",
      },
      {
        title: "Predicción de Cancelaciones",
        stack: "Python · Scikit-Learn · Pandas",
        desc: "Modelo ML para predicción de cancelaciones de reservas hoteleras.",
        status: "Data Science",
        color: "from-zinc-800 to-stone-700",
      },
    ],

    academicLabel: "Proyectos Académicos",

    // Skills
    skillsTitle: "Skills que impulsan mi trabajo",
    skillsCategories: [
      {
        name: "Frontend",
        skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      },
      {
        name: "Backend",
        skills: ["Node.js", "Python", "FastAPI"],
      },
      {
        name: "IA & Automatización",
        skills: ["n8n", "Google Apps Script", "OpenAI API", "Claude API", "Gemini API", "OCR"],
      },
      {
        name: "DevOps",
        skills: ["Docker", "Git", "GCP", "Vite"],
      },
      {
        name: "Datos",
        skills: ["SQL", "Pandas", "Scikit-Learn", "Matplotlib", "Machine Learning"],
      },
    ],

    // Contact footer
    contactTag: "Eso es todo por ahora.",
    contactHeading: "¿Tenés un proyecto en mente?",
    contactHeading2: "Hablemos",
    contactEmailLabel: "Email",
    contactPhoneLabel: "WhatsApp",
    getInTouch: "Contactame",

    // DockNav
    navHome: "Inicio",
    navProjects: "Proyectos",
    navSkills: "Skills",
    navResume: "CV",
    navGitHub: "GitHub",
    navContact: "Contacto",
    navLinkedIn: "LinkedIn",
  },
} as const;
