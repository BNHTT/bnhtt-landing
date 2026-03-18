import { useLanguage } from "../../contexts/LanguageContext";

function ArrowIcon() {
  return (
    <div className="flex items-center justify-center shrink-0 size-[40px]">
      <div className="rotate-45">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  stack,
  desc,
  status,
  color,
}: {
  title: string;
  stack: string;
  desc: string;
  status: string;
  color: string;
}) {
  return (
    <div className="flex flex-col gap-5 w-full group cursor-pointer">
      <div className="relative rounded-[28px] overflow-hidden aspect-[16/9]">
        <div className={`w-full h-full bg-gradient-to-br ${color} flex flex-col items-start justify-end p-8`}>
          <span className="font-['IBM_Plex_Mono',monospace] text-white/50 text-xs tracking-widest uppercase mb-2">
            {stack}
          </span>
          <p className="font-['DM_Sans',sans-serif] text-white/80 text-sm leading-relaxed max-w-sm">
            {desc}
          </p>
          <span className="mt-4 font-['IBM_Plex_Mono',monospace] text-xs text-white/40 border border-white/20 rounded-full px-3 py-1">
            {status}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ArrowIcon />
        <span
          className="font-['Inter',sans-serif] font-normal text-black"
          style={{ fontSize: "clamp(16px, 2vw, 36px)" }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}

function TopBar() {
  const { t } = useLanguage();
  return (
    <div className="w-full px-6 md:px-16 lg:px-[133px] py-8 md:py-12 flex flex-col sm:flex-row items-start sm:justify-between gap-4">
      <p className="font-['Inter',sans-serif] font-medium text-black" style={{ fontSize: "clamp(14px, 1.2vw, 20px)" }}>
        @ {t.projectsTopbar}
      </p>
      <p
        className="font-['Inter',sans-serif] font-light text-black text-right max-w-[600px]"
        style={{ fontSize: "clamp(11px, 0.9vw, 20px)" }}
      >
        {t.projectsTopbarDesc}
      </p>
    </div>
  );
}

function ContactFooter() {
  const { t } = useLanguage();
  return (
    <div className="bg-white w-full relative overflow-hidden">
      <div className="px-6 md:px-16 lg:px-[133px] py-16 md:py-[66px] flex flex-col gap-16">
        <div>
          <p className="font-['IBM_Plex_Mono',monospace] text-black mb-1" style={{ fontSize: "clamp(12px, 1vw, 20px)" }}>
            {t.contactTag}
          </p>
          <p
            className="font-['Inter',sans-serif] font-normal text-black"
            style={{ fontSize: "clamp(32px, 5vw, 77px)", lineHeight: 1.1 }}
          >
            {t.contactHeading}
          </p>
          <p
            className="font-['Inter',sans-serif] font-normal text-black"
            style={{ fontSize: "clamp(32px, 5vw, 77px)", lineHeight: 1.1 }}
          >
            {t.contactHeading2}
          </p>
        </div>
        <div className="w-full border-t border-black" />
        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <p className="text-[#7e7e7e] mb-1" style={{ fontSize: "clamp(12px, 0.9vw, 16px)" }}>
              {t.contactEmailLabel}:
            </p>
            <p className="text-black font-['Inter',sans-serif]" style={{ fontSize: "clamp(16px, 1.5vw, 24px)" }}>
              brunohuerres99@gmail.com
            </p>
          </div>
          <div>
            <p className="text-[#7e7e7e] mb-1" style={{ fontSize: "clamp(12px, 0.9vw, 16px)" }}>
              {t.contactPhoneLabel}
            </p>
            <p className="text-black font-['Inter',sans-serif]" style={{ fontSize: "clamp(16px, 1.5vw, 24px)" }}>
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

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white flex flex-col w-full min-h-screen">
      <TopBar />

      <div className="flex-1 px-6 md:px-16 lg:px-[133px] pb-16">
        <div className="py-12 md:py-16">
          <h1
            className="font-['Inter',sans-serif] font-medium text-black max-w-4xl"
            style={{ fontSize: "clamp(28px, 5vw, 80px)", lineHeight: 1.15 }}
          >
            {t.projectsPageHeading}
          </h1>
        </div>

        {/* Main projects grid */}
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.allProjects.slice(0, 2).map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.allProjects.slice(2, 4).map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.allProjects.slice(4, 6).map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>

        {/* Academic projects */}
        <div className="mt-20">
          <h2
            className="font-['Inter',sans-serif] font-medium text-black mb-10"
            style={{ fontSize: "clamp(22px, 3vw, 50px)", lineHeight: 1.2 }}
          >
            {t.academicLabel}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.academicProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}
