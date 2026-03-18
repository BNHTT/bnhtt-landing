import { Link, useLocation } from "react-router";
import svgPaths from "../../imports/svg-s096nqqoxa";
import { useLanguage } from "../../contexts/LanguageContext";

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d={svgPaths.p204f8680}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 8L9.5 11L6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M11 14H15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2L18 6.5V13.5L10 18L2 13.5V6.5L10 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 2V18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 6.5L10 11L18 6.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d={svgPaths.p737a500}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
      <path
        d="M10 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V8M10 1L17 8M10 1V8H17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p10d75280} fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

interface DockItemProps {
  to?: string;
  href?: string;
  active?: boolean;
  label: string;
  children: React.ReactNode;
}

function DockItem({ to, href, active, label, children }: DockItemProps) {
  const base =
    "relative shrink-0 size-[50px] rounded-[31px] flex items-center justify-center transition-all hover:scale-110 group";
  const bg = active ? "bg-[#d4d4d4] text-black" : "bg-[#262626] text-[#d4d4d4]";

  const content = (
    <>
      {children}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={`${base} ${bg}`}>{content}</div>
      </a>
    );
  }

  return (
    <Link to={to || "/"}>
      <div className={`${base} ${bg}`}>{content}</div>
    </Link>
  );
}

function LangToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      className="relative shrink-0 h-[50px] px-3 rounded-[31px] flex items-center justify-center transition-all hover:scale-110 group bg-[#262626] text-[#d4d4d4]"
      title="Toggle language"
    >
      <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-widest select-none">
        {lang === "en" ? "EN" : "ES"}
      </span>
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {lang === "en" ? "Switch to ES" : "Switch to EN"}
      </span>
    </button>
  );
}

export function DockNav() {
  const location = useLocation();
  const { t, lang } = useLanguage();

  const isHome = location.pathname === "/";
  const isProjects = location.pathname === "/projects";
  const isSkills = location.pathname === "/skills";

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#171717] flex gap-[11px] items-center px-5 py-2.5 rounded-[18px] shadow-2xl">
        <DockItem to="/" active={isHome} label={t.navHome}>
          <HomeIcon />
        </DockItem>

        <DockItem to="/projects" active={isProjects} label={t.navProjects}>
          <TerminalIcon />
        </DockItem>

        <DockItem to="/skills" active={isSkills} label={t.navSkills}>
          <CubeIcon />
        </DockItem>

        <DockItem
          href={lang === "en" ? "/CV_Bruno_Nicolas_Huerres_EN.pdf" : "/CV_Bruno_Nicolas_Huerres_ES.pdf"}
          label={t.navResume}
        >
          <FileIcon />
        </DockItem>

        <DockItem href="https://github.com/BNHTT" label={t.navGitHub}>
          <GithubIcon />
        </DockItem>

        <DockItem href="https://www.linkedin.com/in/bruno-nicolas-huerres/" label={t.navLinkedIn}>
          <LinkedInIcon />
        </DockItem>

        <DockItem href="mailto:brunohuerres99@gmail.com" label={t.navContact}>
          <ArrowUpRightIcon />
        </DockItem>

        <LangToggle />
      </div>
    </div>
  );
}
