import { useLanguage } from "../../contexts/LanguageContext";
import { AppearingText } from "../../components/motion/AppearingText";
import { Reveal } from "../../components/motion/Reveal";

// CDN sources
const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

// Faithful brand icons. Devicon = multi-color originals; Simple Icons = single-color
// official brand marks (we tint them to match the dark theme background).
const skillIcons: Record<string, { src: string; invert?: boolean }> = {
  // Frontend
  React: { src: `${DI}/react/react-original.svg` },
  TypeScript: { src: `${DI}/typescript/typescript-original.svg` },
  JavaScript: { src: `${DI}/javascript/javascript-original.svg` },
  "HTML/CSS": { src: `${DI}/html5/html5-original.svg` },
  "Tailwind CSS": { src: `${DI}/tailwindcss/tailwindcss-original.svg` },

  // Backend
  "Node.js": { src: `${DI}/nodejs/nodejs-original.svg` },
  Python: { src: `${DI}/python/python-original.svg` },
  FastAPI: { src: `${DI}/fastapi/fastapi-original.svg` },

  // AI & Automation — Simple Icons (brand-true monochrome, colored)
  n8n: { src: `${SI}/n8n/EA4B71` },
  "Google Apps Script": { src: `${SI}/googleappsscript/4285F4` },
  "OpenAI API": { src: `${SI}/openai/FFFFFF` },
  "Claude API": { src: `${SI}/anthropic/D97757` },
  "Gemini API": { src: `${SI}/googlegemini/8E75B2` },
  OCR: { src: `${SI}/tesseract/4E9A06` },

  // DevOps
  Docker: { src: `${DI}/docker/docker-original.svg` },
  Git: { src: `${DI}/git/git-original.svg` },
  GCP: { src: `${DI}/googlecloud/googlecloud-original.svg` },
  Vite: { src: `${DI}/vitejs/vitejs-original.svg` },

  // Data
  SQL: { src: `${DI}/mysql/mysql-original.svg` },
  Pandas: { src: `${DI}/pandas/pandas-original.svg` },
  "Scikit-Learn": { src: `${DI}/scikitlearn/scikitlearn-original.svg` },
  Matplotlib: { src: `${DI}/matplotlib/matplotlib-original.svg` },
  "Machine Learning": { src: `${SI}/scikitlearn/F7931E` },
};

function SkillIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const icon = skillIcons[name];
  if (!icon) return null;
  return (
    <img
      src={icon.src}
      alt={name}
      className={`${className} object-contain`}
      loading="lazy"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

function SkillCard({ name }: { name: string }) {
  return (
    <div className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/25 rounded-2xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5">
      <div className="w-8 h-8 flex items-center justify-center shrink-0">
        <SkillIcon name={name} className="w-7 h-7" />
      </div>
      <span className="font-['DM_Sans',sans-serif] text-white/90 text-sm">{name}</span>
    </div>
  );
}

function CategorySection({ name, skills, index }: { name: string; skills: readonly string[]; index: number }) {
  return (
    <Reveal>
      <div className="flex flex-col md:flex-row gap-6 md:gap-16">
        <div className="md:w-56 lg:w-64 shrink-0">
          <div className="font-['IBM_Plex_Mono',monospace] text-white/30 text-xs mb-2 tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3
            className="font-['Inter',sans-serif] text-white font-medium"
            style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}
          >
            {name}
          </h3>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((s) => (
            <SkillCard key={s} name={s} />
          ))}
        </div>
      </div>
    </Reveal>
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
              +34 660 444 115
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-8 md:right-16 lg:right-24 bottom-8 md:bottom-16">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=brunohuerres99@gmail.com&su=Hola%20Bruno%20%E2%80%94%20Quiero%20contactarte"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        style={{ minHeight: "clamp(220px, 28vw, 380px)" }}
      >
        <h1
          className="font-['DM_Sans',sans-serif] font-normal text-white text-center"
          style={{ fontSize: "clamp(32px, 6vw, 96px)", lineHeight: 1.1 }}
        >
          <AppearingText text={t.skillsTitle} />
        </h1>
      </div>

      {/* Skills — clean stacked sections */}
      <div className="flex-1 px-6 md:px-16 lg:px-[133px] pb-24">
        <div className="flex flex-col">
          {t.skillsCategories.map((cat, i) => (
            <div key={cat.name}>
              <div className="py-10 md:py-14">
                <CategorySection name={cat.name} skills={cat.skills} index={i} />
              </div>
              {i < t.skillsCategories.length - 1 && (
                <div className="border-t border-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}
