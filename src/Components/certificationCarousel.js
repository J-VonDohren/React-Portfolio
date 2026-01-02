import { useMemo, useRef } from "react";

function CertificationsCarousel({ items }) {
  const trackRef = useRef(null);

  const scrollByCards = (direction = 1) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.getBoundingClientRect().width : 320;
    const gap = 16; // matches gap-4
    el.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
  };

  // Hide arrows when there's nothing to scroll
  const showArrows = useMemo(() => {
    // 2 cards usually fit; 3+ tends to overflow depending on screen.
    // If you want stricter: use items.length > 2
    return items.length > 2;
  }, [items.length]);

  return (
    <div className="relative">
      {/* FRAME: hugs content width, but clamps to a max width (matches your current look) */}
      <div className="mx-auto w-max max-w-5xl px-12">
        {/* Track (KEEPING your hover cut-off fix) */}
        <div
          ref={trackRef}
          className="justify-center flex gap-4 overflow-x-auto pt-3 pb-4 -mt-3
                     snap-x snap-mandatory scroll-smooth
                     [-ms-overflow-style:none] [scrollbar-width:none]
                     [&::-webkit-scrollbar]:hidden"
        >
          {items.map((c, idx) => (
            <CertCard key={idx} cert={c} />
          ))}
        </div>
      </div>

      {/* Buttons */}
      {showArrows && (
        <>
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10
                       h-10 w-10 items-center justify-center rounded-full
                       bg-slate-900 text-amber-400 shadow-lg hover:bg-slate-900"
            aria-label="Scroll certifications left"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10
                       h-10 w-10 items-center justify-center rounded-full
                       bg-slate-900 text-amber-400 shadow-lg hover:bg-slate-900"
            aria-label="Scroll certifications right"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

function CertCard({ cert }) {
  const CardWrapper = cert.link ? "a" : "div";
  const wrapperProps = cert.link
    ? { href: cert.link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      data-card
      className="snap-start flex-shrink-0 w-[260px] sm:w-[300px]
                 rounded-3xl bg-slate-900 text-slate-100 p-6 shadow-xl
                 hover:translate-y-[-2px] transition"
    >
      <div className="flex justify-center">
        <img
          src={cert.badgeSrc}
          alt={`${cert.title} badge`}
          className="h-24 w-24 object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="mt-5 text-lg font-bold text-center">{cert.title}</h3>

      <p className="mt-2 text-center text-sm text-slate-300">{cert.issuer}</p>

      {cert.date && (
        <p className="mt-1 text-center text-xs text-slate-400">{cert.date}</p>
      )}
    </CardWrapper>
  );
}

export default CertificationsCarousel;
