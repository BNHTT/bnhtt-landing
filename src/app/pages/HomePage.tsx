import { useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useLanguage } from "../../contexts/LanguageContext";
import svgPaths from "../../imports/svg-s096nqqoxa";

function ArrowIcon() {
  return (
    <div className="flex items-center justify-center shrink-0 size-[40px]">
      <div className="rotate-45">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d={svgPaths.p7b95800} fill="black" />
        </svg>
      </div>
    </div>
  );
}

function HeroSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "clamp(400px, 55vw, 800px)" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.mov" type="video/quicktime" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-8">
        <div className="hero-marquee">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="font-['Inter',sans-serif] font-medium text-white opacity-90 pr-24 shrink-0"
              style={{ fontSize: "clamp(40px, 9vw, 160px)", lineHeight: 1 }}
            >
              {t.heroText}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  const { t } = useLanguage();
  return (
    <div className="w-full px-6 md:px-16 lg:px-[133px] py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        <p
          className="font-['DM_Sans',sans-serif] font-medium text-black w-full lg:max-w-[60%]"
          style={{ fontSize: "clamp(20px, 2.5vw, 40px)", lineHeight: 1.3 }}
        >
          {t.aboutMain}
        </p>
        <div className="shrink-0 w-full lg:w-auto">
          <p
            className="font-['DM_Sans',sans-serif] font-light text-[#616161] text-right mb-4"
            style={{ fontSize: "clamp(14px, 1.2vw, 22px)", maxWidth: "487px" }}
          >
            {t.aboutSub}
          </p>
          <div className="flex items-center justify-end gap-2">
            <a
              href="https://www.linkedin.com/in/bruno-nicolas-huerres/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['DM_Sans',sans-serif] text-black hover:opacity-70 transition-opacity"
              style={{ fontSize: "clamp(16px, 1.5vw, 30px)" }}
            >
              {t.moreAbout}
            </a>
            <div className="flex items-center justify-center size-10 border border-gray-300 rounded-full">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d={svgPaths.p7b95800} fill="black" />
              </svg>
            </div>
          </div>
          <p
            className="font-['IBM_Plex_Mono',monospace] text-[#999] text-right mt-6"
            style={{ fontSize: "clamp(10px, 0.75vw, 13px)" }}
          >
            ✦ {t.portfolioNotice}
          </p>
        </div>
      </div>
    </div>
  );
}

// Gradient placeholder card for projects
function ProjectPlaceholder({
  gradient,
  stack,
  subtitle,
  desc,
}: {
  gradient: string;
  stack: string;
  subtitle: string;
  desc: string;
}) {
  return (
    <div className={`w-full rounded-[28px] bg-gradient-to-br ${gradient} flex flex-col items-start justify-end gap-1 p-8 min-h-[260px] md:min-h-[300px]`}>
      <span className="font-['IBM_Plex_Mono',monospace] text-white/50 text-xs tracking-widest uppercase mb-2">
        {stack}
      </span>
      <p className="font-['DM_Sans',sans-serif] text-white font-medium text-sm leading-snug">
        {subtitle}
      </p>
      <p className="font-['DM_Sans',sans-serif] text-white/60 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

const projectGradients = [
  "from-blue-900 to-indigo-800",
  "from-violet-900 to-purple-800",
  "from-teal-900 to-cyan-800",
  "from-red-900 to-rose-800",
];

function ProjectCard({
  title,
  stack,
  gradient,
  subtitle,
  desc,
  delay = 0,
}: {
  title: string;
  stack: string;
  gradient: string;
  subtitle: string;
  desc: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex flex-col gap-5 w-full"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <div className="relative rounded-[28px] overflow-hidden">
        <ProjectPlaceholder gradient={gradient} stack={stack} subtitle={subtitle} desc={desc} />
      </div>
      <div className="flex items-center gap-3">
        <ArrowIcon />
        <span
          className="font-['Inter',sans-serif] font-normal text-black"
          style={{ fontSize: "clamp(16px, 2vw, 32px)" }}
        >
          {title}
        </span>
      </div>
    </motion.div>
  );
}

function ImpressiveWorksSection() {
  const { t } = useLanguage();
  const projects = t.projects;

  return (
    <div className="w-full px-6 md:px-16 lg:px-[133px] pb-16 md:pb-24">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">
        <h2
          className="font-['Inter',sans-serif] font-medium text-black"
          style={{ fontSize: "clamp(36px, 6vw, 100px)", lineHeight: 1 }}
        >
          {t.worksTitle}
        </h2>
        <p
          className="font-['DM_Sans',sans-serif] font-light text-black max-w-[428px]"
          style={{ fontSize: "clamp(12px, 1.1vw, 22px)", lineHeight: 1.4 }}
        >
          {t.worksDesc}
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard title={projects[0].title} stack={projects[0].stack} gradient={projectGradients[0]} subtitle={projects[0].subtitle} desc={projects[0].desc} delay={0} />
          <ProjectCard title={projects[1].title} stack={projects[1].stack} gradient={projectGradients[1]} subtitle={projects[1].subtitle} desc={projects[1].desc} delay={0.15} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard title={projects[2].title} stack={projects[2].stack} gradient={projectGradients[2]} subtitle={projects[2].subtitle} desc={projects[2].desc} delay={0} />
          <ProjectCard title={projects[3].title} stack={projects[3].stack} gradient={projectGradients[3]} subtitle={projects[3].subtitle} desc={projects[3].desc} delay={0.15} />
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link to="/projects">
          <button className="flex items-center gap-2 px-8 py-3 border border-[#aeaeae] rounded-full hover:bg-gray-50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="font-['Inter',sans-serif] text-black" style={{ fontSize: "clamp(14px, 1.2vw, 20px)" }}>
              {t.exploreMore}
            </span>
          </button>
        </Link>
      </div>
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

export default function HomePage() {
  return (
    <div className="bg-white flex flex-col w-full min-h-screen">
      <HeroSection />
      <AboutSection />
      <ImpressiveWorksSection />
      <ContactFooter />
    </div>
  );
}
