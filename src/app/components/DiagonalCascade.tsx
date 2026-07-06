const SMOKE_DIR = "/campaigns/smoke";
const BLUE_DIR = "/campaigns/blue";

const IMAGES = [
  `${SMOKE_DIR}/image-camera-most-important-instruction-extrem-mr4rii1w-jrmy.jpg`,
  `${SMOKE_DIR}/image-full-portrait-fashion-photograph-of-the--mr4r8g49-2myx.jpg`,
  `${BLUE_DIR}/frame_hero1.jpg`,
  `${SMOKE_DIR}/image-close-up-fashion-detail-photograph-focus-mr4r941b-03mb.jpg`,
  `${BLUE_DIR}/frame_crouch.jpg`,
  `${SMOKE_DIR}/image-full-body-fashion-photograph-of-the-same-mr4r9ql4-m71h.jpg`,
  `${BLUE_DIR}/frame_hero2.jpg`,
  `${SMOKE_DIR}/image-camera-wide-angle-lens-45-degree-angle-i-mr4s3p71-jqk0.jpg`,
  `${BLUE_DIR}/frame_closeup.jpg`,
  `${SMOKE_DIR}/image-product-still-life-fashion-photography-o-mr4r7rx3-8bcl.jpg`,
  `${SMOKE_DIR}/image-camera-most-important-instruction-tight--mr4s2w0s-jcgx.jpg`,
  `${BLUE_DIR}/MODEL.png`,
];

interface ColumnConfig {
  offset: number;
  length: number;
  duration: number;
  reverse: boolean;
}

const COLUMNS: ColumnConfig[] = [
  { offset: 0, length: 4, duration: 34, reverse: false },
  { offset: 3, length: 4, duration: 44, reverse: true },
  { offset: 6, length: 4, duration: 38, reverse: false },
  { offset: 9, length: 4, duration: 48, reverse: true },
  { offset: 2, length: 4, duration: 30, reverse: false },
  { offset: 5, length: 4, duration: 42, reverse: true },
  { offset: 8, length: 4, duration: 36, reverse: false },
];

function buildColumnImages(offset: number, length: number): string[] {
  const items = Array.from(
    { length },
    (_, i) => IMAGES[(offset + i) % IMAGES.length]
  );
  // Duplicated once so the track can loop seamlessly from 0% to -50%.
  return [...items, ...items];
}

function CascadeColumn({ offset, length, duration, reverse }: ColumnConfig) {
  const images = buildColumnImages(offset, length);

  return (
    <div className="relative h-full min-w-[160px] flex-1 overflow-hidden">
      <div
        className={`cascade-track flex flex-col gap-4 ${reverse ? "cascade-track-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="aspect-[3/4] w-full shrink-0 overflow-hidden rounded-lg"
            style={{ transform: i % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)" }}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Full-bleed diagonal photo cascade, styled after K.I.N.D's editorial
 * background stream. Purely decorative — sits behind foreground UI.
 */
export function DiagonalCascade() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden bg-black"
      aria-hidden="true"
    >
      <div
        className="flex h-[140vh] w-[130vw] gap-4 opacity-80"
        style={{ transform: "rotate(-8deg) scale(1.15)" }}
      >
        {COLUMNS.map((col, i) => (
          <CascadeColumn key={i} {...col} />
        ))}
      </div>
    </div>
  );
}
