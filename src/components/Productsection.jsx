export default function ProductSection({
  id,
  label,
  title,
  desc,
  imgSrc,
  imgAlt,
  fallback,
  reverse,
}) {
  return (
    <section
      id={id}
      // Alternate background on every other section for visual rhythm
      className={`
        py-24 px-5 border-b border-[#e5e5e5]
        ${reverse ? "bg-apple-light" : "bg-white"}
      `}
      aria-label={title}
    >
      <div
        className={`
          max-w-[1024px] mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-14 items-center
          ${reverse ? "md:[&>*:first-child]:order-last" : ""}
        `}
      >
        {/* ── Text block ── */}
        <div>
          {label && <span className="section-label">{label}</span>}

          <h2
            className="font-bold tracking-tight text-apple-dark leading-[1.1] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            {title}
          </h2>

          <p className="text-[17px] leading-relaxed text-apple-gray mb-7 max-w-[440px]">
            {desc}
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="#" className="btn-apple">Learn more</a>
            <a href="#store" className="btn-apple-outline">Buy</a>
          </div>
        </div>

        {/* ── Image block ── */}
        <div className="
          overflow-hidden bg-[#ffffff]
          min-h-[300px] flex items-center justify-center
          group
        ">
          <img
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            onError={(e) => { e.target.src = fallback; }}
          />
        </div>
      </div>
    </section>
  );
}