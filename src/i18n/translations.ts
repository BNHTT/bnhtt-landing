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
        subtitle: "Real-time media monitoring dashboard in production for OrbitaComms.",
        desc: "It centralizes news mentions and brand coverage across multiple sources, giving the team instant visibility without manually scanning dozens of outlets. The team can now react to media events in minutes instead of hours.",
        status: "Beta · Production",
      },
      {
        title: "Nebula OCR",
        stack: "Python · FastAPI · React",
        subtitle: "Intelligent accounting automation with OCR and AI-powered data extraction.",
        desc: "It extracts structured data from bank statements and invoices automatically — eliminating hours of manual data entry by converting scanned documents into clean, exportable records.",
        status: "MVP · In development",
      },
      {
        title: "Seamind Experience",
        stack: "React · TypeScript · Tailwind",
        subtitle: "Premium luxury travel platform focused on curated Bali experiences.",
        desc: "It solves the fragmented booking problem for high-end travelers by offering a single, beautifully designed interface to discover and plan bespoke trips.",
        status: "Advanced development",
      },
      {
        title: "DJ Assist",
        stack: "Python · OpenCV · MediaPipe",
        subtitle: "Gesture-based MIDI control via webcam — no extra hardware required.",
        desc: "It lets DJs and producers map hand movements to software parameters in real time using computer vision. Just a camera and creative intent.",
        status: "R&D · Functional PoC",
        tag: "Personal Project",
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
        subtitle: "Real-time media monitoring dashboard in production for OrbitaComms.",
        desc: "It aggregates news mentions and brand coverage from multiple sources, replacing manual tracking with a single live dashboard. The team can now react to media events in minutes instead of hours.",
        status: "Beta · Production",
        color: "from-blue-900 to-indigo-800",
      },
      {
        title: "Nebula OCR",
        stack: "Python · FastAPI · React",
        subtitle: "Intelligent accounting automation with OCR and AI-powered data extraction.",
        desc: "It reads bank statements and financial documents, extracts transaction data, and exports it in structured formats — eliminating the repetitive manual work that accountants spend hours on every month.",
        status: "MVP · In development",
        color: "from-violet-900 to-purple-800",
      },
      {
        title: "Seamind Experience",
        stack: "React · TypeScript · Tailwind",
        subtitle: "Premium luxury travel platform focused on curated Bali experiences.",
        desc: "It consolidates fragmented itinerary planning into a single, beautifully crafted interface — connecting travelers with premium local experiences through seamless, intuitive design.",
        status: "Advanced development",
        color: "from-teal-900 to-cyan-800",
      },
      {
        title: "AI Appointment Agent",
        stack: "n8n · OpenAI · GCP",
        subtitle: "Conversational AI agent for fully automated appointment scheduling.",
        desc: "Deployed via WhatsApp and web, it handles natural-language conversations with clients, checks availability in real time, books slots, and sends confirmations — removing the back-and-forth entirely.",
        status: "Deployed",
        color: "from-green-900 to-emerald-800",
      },
      {
        title: "AI Contact Agent",
        stack: "n8n · Claude · Google Sheets",
        subtitle: "AI agent for intelligent contact management and follow-up automation.",
        desc: "It manages contact databases, classifies leads, and triggers follow-up sequences automatically — using Claude to decide the right action for each contact based on context and history.",
        status: "Deployed",
        color: "from-orange-900 to-amber-800",
      },
      {
        title: "DJ Assist",
        stack: "Python · OpenCV · MediaPipe",
        subtitle: "Real-time gesture recognition for MIDI control — just a webcam.",
        desc: "It turns hand movements into MIDI signals using computer vision, letting musicians and producers control audio software without any extra hardware — just a camera and your hands.",
        status: "R&D · Functional PoC",
        color: "from-red-900 to-rose-800",
        tag: "Personal Project",
      },
    ],

    academicProjects: [
      {
        title: "Wireless Robotic Arm",
        stack: "Electronics · Embedded Systems",
        subtitle: "Institutional Prize winner at Otto Krause Technical School.",
        desc: "A wirelessly controlled robotic arm built from scratch as a final project — integrating embedded control systems, RF communication, and custom mechanical design.",
        status: "Prize · Otto Krause",
        color: "from-zinc-800 to-stone-700",
      },
      {
        title: "Reconnaissance Drone",
        stack: "Electronics · RC Systems",
        subtitle: "Custom-built fixed-wing reconnaissance drone.",
        desc: "Covered flight dynamics, RC electronics, structural assembly, and onboard camera integration — designed to survey areas not easily accessible on foot.",
        status: "Academic",
        color: "from-zinc-800 to-stone-700",
      },
      {
        title: "Hotel Booking Prediction",
        stack: "Python · Scikit-Learn · Pandas",
        subtitle: "ML model for hotel booking cancellation prediction.",
        desc: "Trained on historical reservation data to predict cancellations — exploring feature engineering, model comparison, and interpretability to help hotels forecast revenue loss.",
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

    // Portfolio notice
    portfolioNotice: "This portfolio is actively being updated — new projects and visuals coming soon.",

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
        subtitle: "Dashboard de monitoreo de medios en tiempo real en producción para OrbitaComms.",
        desc: "Centraliza menciones y cobertura mediática de múltiples fuentes, reemplazando el seguimiento manual con un único panel en vivo para que el equipo pueda reaccionar en minutos.",
        status: "Beta · Producción",
      },
      {
        title: "Nebula OCR",
        stack: "Python · FastAPI · React",
        subtitle: "Automatización contable inteligente con OCR y extracción de datos con IA.",
        desc: "Lee extractos bancarios y documentos financieros, extrae y estructura los datos automáticamente — eliminando el trabajo manual repetitivo que los contadores hacen cada mes.",
        status: "MVP · En desarrollo",
      },
      {
        title: "Seamind Experience",
        stack: "React · TypeScript · Tailwind",
        subtitle: "Plataforma de viajes de lujo enfocada en experiencias curadas en Bali.",
        desc: "Consolida la planificación fragmentada de itinerarios en una interfaz elegante — conectando viajeros con experiencias locales premium a través de un diseño intuitivo.",
        status: "Desarrollo avanzado",
      },
      {
        title: "DJ Assist",
        stack: "Python · OpenCV · MediaPipe",
        subtitle: "Control MIDI por gestos con webcam — sin hardware adicional.",
        desc: "Convierte movimientos de manos en señales MIDI usando visión por computadora, permitiendo a músicos y productores controlar software de audio solo con una cámara.",
        status: "R&D · PoC funcional",
        tag: "Proyecto Personal",
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
        subtitle: "Dashboard de monitoreo de medios en tiempo real en producción para OrbitaComms.",
        desc: "Agrega menciones de marca y cobertura mediática desde múltiples fuentes, reemplazando el seguimiento manual con un único panel en vivo. El equipo puede reaccionar a eventos mediáticos en minutos.",
        status: "Beta · Producción",
        color: "from-blue-900 to-indigo-800",
      },
      {
        title: "Nebula OCR",
        stack: "Python · FastAPI · React",
        subtitle: "Automatización contable inteligente con OCR y extracción de datos con IA.",
        desc: "Lee extractos bancarios y documentos financieros, extrae y estructura los datos automáticamente — eliminando el trabajo manual repetitivo que los contadores hacen cada mes.",
        status: "MVP · En desarrollo",
        color: "from-violet-900 to-purple-800",
      },
      {
        title: "Seamind Experience",
        stack: "React · TypeScript · Tailwind",
        subtitle: "Plataforma de viajes de lujo enfocada en experiencias curadas en Bali.",
        desc: "Consolida la planificación fragmentada de itinerarios en una interfaz cuidadosamente diseñada — conectando viajeros con experiencias locales premium de forma intuitiva.",
        status: "Desarrollo avanzado",
        color: "from-teal-900 to-cyan-800",
      },
      {
        title: "AI Agente de Turnos",
        stack: "n8n · OpenAI · GCP",
        subtitle: "Agente de IA conversacional para gestión automatizada de turnos.",
        desc: "Desplegado vía WhatsApp y web, mantiene conversaciones en lenguaje natural, consulta disponibilidad en tiempo real, reserva turnos y envía confirmaciones automáticamente.",
        status: "Desplegado",
        color: "from-green-900 to-emerald-800",
      },
      {
        title: "AI Agente de Contactos",
        stack: "n8n · Claude · Google Sheets",
        subtitle: "Agente de IA para gestión inteligente de contactos y seguimiento automático.",
        desc: "Gestiona bases de contactos, clasifica leads y activa secuencias de seguimiento — usando Claude para decidir la acción correcta por contacto según contexto e historial.",
        status: "Desplegado",
        color: "from-orange-900 to-amber-800",
      },
      {
        title: "DJ Assist",
        stack: "Python · OpenCV · MediaPipe",
        subtitle: "Control MIDI por gestos en tiempo real — solo una webcam.",
        desc: "Convierte gestos de manos en señales MIDI usando visión por computadora. Permite a músicos y productores controlar software de audio sin hardware adicional — solo una cámara.",
        status: "R&D · PoC funcional",
        color: "from-red-900 to-rose-800",
        tag: "Proyecto Personal",
      },
    ],

    academicProjects: [
      {
        title: "Brazo Robótico Inalámbrico",
        stack: "Electrónica · Sistemas Embebidos",
        subtitle: "Premio Institucional en la Escuela Técnica Otto Krause.",
        desc: "Brazo robótico inalámbrico construido desde cero — integrando control embebido, comunicación RF y diseño mecánico personalizado.",
        status: "Premio · Otto Krause",
        color: "from-zinc-800 to-stone-700",
      },
      {
        title: "Dron de Reconocimiento",
        stack: "Electrónica · RC Systems",
        subtitle: "Dron de ala fija construido a medida.",
        desc: "Abarcó dinámica de vuelo, electrónica RC, ensamblaje estructural e integración de cámara — diseñado para relevar zonas de difícil acceso a pie.",
        status: "Académico",
        color: "from-zinc-800 to-stone-700",
      },
      {
        title: "Predicción de Cancelaciones",
        stack: "Python · Scikit-Learn · Pandas",
        subtitle: "Modelo ML para predicción de cancelaciones de reservas hoteleras.",
        desc: "Entrenado sobre datos históricos de reservas, exploró ingeniería de features y comparación de modelos para ayudar a los hoteles a anticipar pérdidas de ingresos.",
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

    // Portfolio notice
    portfolioNotice: "Este portfolio está en constante actualización — nuevos proyectos e imágenes próximamente.",

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
