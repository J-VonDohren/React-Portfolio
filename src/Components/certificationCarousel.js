import { useRef } from "react";

function CertificationsCarousel({ items }) {
  const trackRef = useRef(null);

  const scrollByCards = (direction = 1) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.getBoundingClientRect().width : 300;
    const gap = 16;

    el.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left button */}
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10
                   h-10 w-10 items-center justify-center rounded-full
                   bg-slate-900 text-amber-400 shadow-lg hover:bg-slate-900"
      >
        ‹
      </button>

      {/* Right button */}
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10
                   h-10 w-10 items-center justify-center rounded-full
                   bg-slate-900 text-amber-400 shadow-lg hover:bg-slate-900"
      >
        ›
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="
          mx-auto
          flex
          max-w-full
          justify-start
          gap-4
          overflow-x-auto
          pt-3 pb-4 -mt-3
          snap-x snap-mandatory scroll-smooth
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((c, idx) => (
          <CertCard key={idx} cert={c} />
        ))}
      </div>
    </div>
  );
}

function CertCard({ cert }) {
  const Wrapper = cert.link ? "a" : "div";

  return (
    <Wrapper
      data-card
      href={cert.link}
      target={cert.link ? "_blank" : undefined}
      rel={cert.link ? "noreferrer" : undefined}
      className="
        snap-start
        flex-shrink-0
        w-[260px] sm:w-[300px]
        rounded-3xl
        bg-slate-900
        text-slate-100
        p-6
        shadow-xl
        transition
        hover:-translate-y-1
      "
    >
      <div className="flex justify-center">
        <img
          src={cert.badgeSrc}
          alt={cert.title}
          className="h-24 w-24 object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="mt-5 text-lg font-bold text-center">
        {cert.title}
      </h3>

      <p className="mt-2 text-center text-sm text-slate-300">
        {cert.issuer}
      </p>

      {cert.date && (
        <p className="mt-1 text-center text-xs text-slate-400">
          {cert.date}
        </p>
      )}
    </Wrapper>
  );
}

export default CertificationsCarousel;
