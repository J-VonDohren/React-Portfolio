import { useEffect, useRef, useState } from "react";

function CertificationsCarousel({ items }) {
  const trackRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const measure = () => {
    const el = trackRef.current;
    if (!el) return;
    // Is the content wider than the visible track?
    setIsOverflowing(el.scrollWidth > el.clientWidth + 1);
  };

  useEffect(() => {
    measure();
    const el = trackRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items]);

  const scrollByCards = (direction = 1) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.getBoundingClientRect().width : 300;
    const gap = 16; // gap-4
    el.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Buttons only if it actually overflows */}
      {isOverflowing && (
        <>
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10
                       h-10 w-10 items-center justify-center rounded-full
                       bg-slate-900 text-amber-400 shadow-lg hover:bg-slate-900"
            aria-label="Scroll certifications left"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10
                       h-10 w-10 items-center justify-center rounded-full
                       bg-slate-900 text-amber-400 shadow-lg hover:bg-slate-900"
            aria-label="Scroll certifications right"
          >
            ›
          </button>
        </>
      )}

      {/* Track */}
      <div
        ref={trackRef}
        className={[
          "flex gap-4 overflow-x-auto",
          "pt-3 pb-4 -mt-3", // ✅ keeps your hover-cut fix
          "snap-x snap-mandatory scroll-smooth",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "px-2 md:px-12", // space so cards/buttons never feel clipped
          isOverflowing ? "justify-start" : "justify-center", // ✅ centre when it fits
        ].join(" ")}
      >
        {items.map((c, idx) => (
          <CertCard key={idx} cert={c} />
        ))}
      </div>
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
