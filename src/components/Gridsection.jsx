import { gridItems } from "../data/Products";

function ProductCard({ title, desc, img, fallback, href, onNavigate }) {
  const handleClick = () => {
    if (href === "#mac" || href === "#watch" || href === "#") {
      // Navigate to store for now (all categories go to store page)
      onNavigate("store");
    }
  };

  return (
    <article 
      className="
      bg-apple-light rounded-[20px] overflow-hidden
      transition-all duration-300 ease-out cursor-pointer
      hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.10)]
    "
      onClick={handleClick}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Card image */}
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="w-full h-[220px] object-cover block bg-[#e0e0e5]"
        onError={(e) => { e.target.src = fallback; }}
      />

      {/* Card body */}
      <div className="p-6 pb-7">
        <h3 className="text-[20px] font-semibold text-apple-dark tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-[14px] text-apple-gray leading-relaxed">
          {desc}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="
            inline-block mt-3.5 text-[14px] font-medium
            text-apple-blue bg-transparent border-none cursor-pointer hover:underline
          "
        >
          Shop now →
        </button>
      </div>
    </article>
  );
}

/* ── Grid wrapper ── */
export default function GridSection({ setPage }) {
  return (
    <section className="py-24 px-5 bg-white" aria-label="Product grid">
      {/* Section header */}
      <div className="max-w-[1024px] mx-auto mb-12">
        <span className="section-label">Explore the lineup</span>
        <h2
          className="font-bold tracking-tight text-apple-dark"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          Shop the latest from Apple
        </h2>
      </div>

      {/* Responsive grid: 1 col → 2 col → 3 col */}
      <div className="
        max-w-[1024px] mx-auto
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
      ">
        {gridItems.map((item) => (
          <ProductCard key={item.title} {...item} onNavigate={setPage} />
        ))}
      </div>
    </section>
  );
}