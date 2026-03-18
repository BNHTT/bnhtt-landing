import { useLanguage } from "../../contexts/LanguageContext";

// Devicon CDN base
const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// Skill icon definitions
const skillIcons: Record<string, { type: "img"; src: string } | { type: "svg"; content: React.ReactNode } | { type: "text"; label: string; color: string }> = {
  // Frontend
  React: { type: "img", src: `${DI}/react/react-original.svg` },
  TypeScript: { type: "img", src: `${DI}/typescript/typescript-original.svg` },
  JavaScript: { type: "img", src: `${DI}/javascript/javascript-original.svg` },
  "HTML/CSS": { type: "img", src: `${DI}/html5/html5-original.svg` },
  "Tailwind CSS": { type: "img", src: `${DI}/tailwindcss/tailwindcss-original.svg` },

  // Backend
  "Node.js": { type: "img", src: `${DI}/nodejs/nodejs-original.svg` },
  Python: { type: "img", src: `${DI}/python/python-original.svg` },
  FastAPI: { type: "img", src: `${DI}/fastapi/fastapi-original.svg` },

  // AI & Automation
  n8n: { type: "text", label: "n8n", color: "#ea4b71" },
  "Google Apps Script": {
    type: "svg",
    content: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path fill="#4CAF50" d="M37 45H11C8.8 45 7 43.2 7 41V7c0-2.2 1.8-4 4-4h19l11 11v27C41 43.2 39.2 45 37 45z" />
        <path fill="#81C784" d="M40 14H26V0L40 14z" />
        <path fill="#fff" d="M24 33.5c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5S29.2 33.5 24 33.5z" />
        <path fill="#4CAF50" d="M24 17c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7S20.1 17 24 17z" />
        <circle cx="24" cy="24" r="3" fill="#fff" />
      </svg>
    ),
  },
  "OpenAI API": { type: "text", label: "OpenAI", color: "#10a37f" },
  "Claude API": { type: "text", label: "Claude", color: "#d97757" },
  "Gemini API": { type: "text", label: "Gemini", color: "#4285f4" },
  OCR: { type: "text", label: "OCR", color: "#9333ea" },

  // DevOps
  Docker: { type: "img", src: `${DI}/docker/docker-original.svg` },
  Git: { type: "img", src: `${DI}/git/git-original.svg` },
  GCP: { type: "img", src: `${DI}/googlecloud/googlecloud-original.svg` },
  Vite: { type: "img", src: `${DI}/vitejs/vitejs-original.svg` },

  // Data
  SQL: { type: "img", src: `${DI}/postgresql/postgresql-original.svg` },
  Pandas: { type: "img", src: `${DI}/pandas/pandas-original.svg` },
  "Scikit-Learn": { type: "img", src: `${DI}/scikitlearn/scikitlearn-original.svg` },
  Matplotlib: { type: "img", src: `${DI}/matplotlib/matplotlib-original.svg` },
  "Machine Learning": {
    type: "svg",
    content: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#a78bfa" strokeWidth="2" />
        <circle cx="16" cy="8" r="2.5" fill="#a78bfa" />
        <circle cx="8" cy="22" r="2.5" fill="#a78bfa" />
        <circle cx="24" cy="22" r="2.5" fill="#a78bfa" />
        <line x1="16" y1="10.5" x2="10" y2="20" stroke="#a78bfa" strokeWidth="1.5" />
        <line x1="16" y1="10.5" x2="22" y2="20" stroke="#a78bfa" strokeWidth="1.5" />
        <line x1="10.5" y1="22" x2="21.5" y2="22" stroke="#a78bfa" strokeWidth="1.5" />
      </svg>
    ),
  },
};

function SkillIcon({ name }: { name: string }) {
  const icon = skillIcons[name];
  if (!icon) return null;

  if (icon.type === "img") {
    return (
      <img
        src={icon.src}
        alt={name}
        className="w-8 h-8 object-contain"
        loading="lazy"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
    );
  }

  if (icon.type === "svg") {
    return <div className="w-8 h-8 flex items-center justify-center">{icon.content}</div>;
  }

  // text badge
  return (
    <span
      className="font-['IBM_Plex_Mono',monospace] text-xs font-bold px-2 py-1 rounded"
      style={{ color: icon.color, border: `1px solid ${icon.color}` }}
    >
      {icon.label}
    </span>
  );
}

function SkillCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-5 border border-white/10">
      <div className="h-10 flex items-center justify-center">
        <SkillIcon name={name} />
      </div>
      <span className="font-['DM_Sans',sans-serif] text-white/80 text-sm text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

function CategorySection({ name, skills }: { name: string; skills: readonly string[] }) {
  return (
    <div className="flex flex-col gap-6">
      <h3
        className="font-['Inter',sans-serif] font-medium text-white/50 uppercase tracking-widest"
        style={{ fontSize: "clamp(11px, 1vw, 14px)" }}
      >
        {name}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}

function ContactFooter() {
  const { t } = useLanguage();
  return (
    <div className="bg-black w-full relative overflow-hidden border-t border-white/10">
      <div className="px-6 md:px-16 lg:px-[133px] py-16 md:py-[66px] flex flex-col gap-16">
        <div>
          <p className="font-['IBM_Plex_Mono',monospace] text-white mb-1" style={{ fontSize: "clamp(12px, 1vw, 20px)" }}>
            {t.contactTag}
          </p>
          <p className="font-['Inter',sans-serif] font-normal text-white" style={{ fontSize: "clamp(32px, 5vw, 77px)", lineHeight: 1.1 }}>
            {t.contactHeading}
          </p>
          <p className="font-['Inter',sans-serif] font-normal text-white" style={{ fontSize: "clamp(32px, 5vw, 77px)", lineHeight: 1.1 }}>
            {t.contactHeading2}
          </p>
        </div>
        <div className="w-full border-t border-white" />
        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <p className="text-[#7e7e7e] mb-1" style={{ fontSize: "clamp(12px, 0.9vw, 16px)" }}>{t.contactEmailLabel}:</p>
            <p className="text-white font-['Inter',sans-serif]" style={{ fontSize: "clamp(16px, 1.5vw, 24px)" }}>
              brunohuerres99@gmail.com
            </p>
          </div>
          <div>
            <p className="text-[#7e7e7e] mb-1" style={{ fontSize: "clamp(12px, 0.9vw, 16px)" }}>{t.contactPhoneLabel}</p>
            <p className="text-white font-['Inter',sans-serif]" style={{ fontSize: "clamp(16px, 1.5vw, 24px)" }}>
              +54 9 11-3929-6842
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-8 md:right-16 lg:right-24 bottom-8 md:bottom-16">
        <a href="mailto:brunohuerres99@gmail.com">
          <div className="size-[140px] md:size-[180px] lg:size-[200px] rounded-full bg-[#455CE9] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
            <span className="font-['Inter',sans-serif] text-white text-center" style={{ fontSize: "clamp(12px, 1.2vw, 20px)" }}>
              {t.getInTouch}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full overflow-x-hidden flex flex-col min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <div
        className="flex items-center justify-center px-6 md:px-16 lg:px-[133px]"
        style={{ minHeight: "clamp(260px, 35vw, 480px)" }}
      >
        <h1
          className="font-['DM_Sans',sans-serif] font-normal text-white text-center"
          style={{ fontSize: "clamp(32px, 7vw, 110px)", lineHeight: 1.1 }}
        >
          {t.skillsTitle}
        </h1>
      </div>

      {/* Skills by category */}
      <div className="flex-1 px-6 md:px-16 lg:px-[133px] pb-24 flex flex-col gap-16">
        {t.skillsCategories.map((cat) => (
          <CategorySection key={cat.name} name={cat.name} skills={cat.skills} />
        ))}
      </div>

      <ContactFooter />
    </div>
  );
}
