export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[80vh] flex items-center justify-center bg-apple-light text-center"
      aria-label="Hero — iPhone 16 Pro"
    >
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(160deg, #e8e8ed 0%, #f5f5f7 50%, #d8d8e0 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-5 pt-10 pb-0">
        {/* Small "New" pill badge */}
        <span
          className="
          inline-block text-[12px] font-semibold tracking-[0.08em]
          uppercase text-apple-gray bg-black/[0.06]
          rounded-full px-3.5 py-1 mb-4
        "
        >
          New
        </span>

        {/* Product name */}
        <h1
          className="
            font-bold tracking-tight text-apple-dark
            leading-[1.05] mb-3
          "
          style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
        >
          iPhone 17 Pro
        </h1>

        {/* Tagline */}
        <p
          className="
            font-light text-apple-gray tracking-[-0.01em]
            mb-9 mx-auto max-w-lg
          "
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)" }}
        >
          Hello, Apple Intelligence.
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[17px] 
            rounded-full px-6 py-3 border-none cursor-pointer transition-colors duration-200"
          >
            Learn more
          </button>
          <button
            className="bg-transparent text-[#0071e3] text-[17px] 
            border border-[#0071e3] rounded-full px-6 py-3 cursor-pointer 
          hover:bg-[#0071e3] hover:text-white transition-all duration-200"
          >
            Shop iPhone
          </button>
        </div>

        {/* Hero product image */}
        <div className="mt-12 flex justify-center">
          <img
            src="/iPhone-17-Pro-Max-Concept-PNG.png"
            alt="iPhone 16 Pro — Desert Titanium"
            className="
              w-full max-w-[520px]
              animate-float-up
            "
            style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.12))" }}
            loading="eager"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=900&q=80";
            }}
          />
        </div>
      </div>
    </section>
  );
}
