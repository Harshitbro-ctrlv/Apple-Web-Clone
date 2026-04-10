import { useState, useRef } from "react";
function AppleLogo({ size = 16, fill = "#1d1d1f" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 814 1000" fill={fill} aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

// Horizontal scroll row with a right arrow chevron button
function HScroll({ children }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    ref.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };
  return (
    <div className="relative group">
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto scroll-smooth pb-2 hide-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
      {/* Right arrow */}
      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full bg-white border border-[#d2d2d7]
          flex items-center justify-center shadow-md
          opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Scroll right"
      >
        <span className="text-[#1d1d1f] text-lg leading-none">›</span>
      </button>
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full bg-white border border-[#d2d2d7]
          flex items-center justify-center shadow-md
          opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Scroll left"
      >
        <span className="text-[#1d1d1f] text-lg leading-none">‹</span>
      </button>
    </div>
  );
}

/* ── 1. TOP PROMO BAR ─────────────────────────────────── */
function PromoBar() {
  return (
    <div className="bg-[#f5f5f7] border-b border-[#d2d2d7] py-2 px-4 text-center text-[12px] text-[#1d1d1f]">
      *No Cost EMI available from ₹2,091/mo.{" "}
      <a href="#" className="text-[#0071e3] hover:underline">
        Get up to ₹6,500 off on select models &gt;
      </a>
    </div>
  );
}

/* ── 2. STORE HERO HEADER ────────────────────────────── */
function StoreHero() {
  return (
    <div className="max-w-[1040px] mx-auto px-5 py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h1 className="text-[48px] md:text-[56px] font-semibold tracking-[-0.025em] text-[#1d1d1f] leading-none">
          Store.
        </h1>
      </div>
      <div className="text-right">
        <p className="text-[17px] font-semibold text-[#1d1d1f] leading-snug">
          The best way to buy the<br />products you love.
        </p>
        <div className="mt-2 flex flex-col items-end gap-1">
          <a href="#" className="text-[#0071e3] text-[13px] hover:underline">
            Current promotions &gt;
          </a>
          <a href="#" className="text-[#0071e3] text-[13px] hover:underline">
            Apple Store app &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── 3. CATEGORY ICON ROW ─────────────────────────────── */
const CATEGORIES = [
  {
    label: "Mac",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1697133350818",
  },
  {
    label: "iPhone",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723673979498",
  },
  {
    label: "iPad",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1713835518537",
  },
  {
    label: "Apple Watch",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724708842953",
  },
  {
    label: "AirPods",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724708695874",
  },
  {
    label: "AirTag",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtag-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
  },
  {
    label: "Apple TV 4K",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628820505",
  },
  {
    label: "HomePod",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1672954786664",
  },
  {
    label: "Accessories",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628821505",
  },
];

function CategoryRow() {
  return (
    <div className="border-b border-[#d2d2d7]">
      <div className="max-w-[1040px] mx-auto px-5">
        <HScroll>
          {CATEGORIES.map((c) => (
            <a
              key={c.label}
              href="#"
              className="flex flex-col items-center gap-1 min-w-[80px] py-3 group"
            >
              <img
                src={c.img}
                alt={c.label}
                className="w-14 h-9 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span className="text-[12px] text-[#1d1d1f] group-hover:text-[#0071e3] whitespace-nowrap transition-colors">
                {c.label}
              </span>
            </a>
          ))}
        </HScroll>
      </div>
    </div>
  );
}

/* ── 4. "THE LATEST" HORIZONTAL SCROLL CARDS ──────────── */
const LATEST = [
  {
    label: "All For Pro",
    badge: "",
    name: "iPhone 17 Pro",
    price: "From ₹1,34,900",
    badgeColor: "",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=800&hei=800&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=75",
    dark: true,
  },
  {
    label: "New",
    badge: "New",
    name: "MacBook Neo",
    price: "The magic of Mac at a surprising price.",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=800&hei=740&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=75",
    dark: false,
  },
  {
    label: "New",
    badge: "New",
    name: "iPhone 17e",
    price: "Feature-loaded. Value-packed.",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=800&hei=800&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=75",
    dark: false,
  },
];

function LatestSection() {
  return (
    <section className="max-w-[1040px] mx-auto px-5 py-10">
      <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-5">
        <span className="font-semibold">The latest.</span>{" "}
        <span className="font-normal text-[#6e6e73]">
          Take a look at what's new right now.
        </span>
      </h2>
      <HScroll>
        {LATEST.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`
              min-w-[280px] max-w-[280px] rounded-[18px] overflow-hidden
              flex flex-col relative transition-transform hover:scale-[1.01]
              ${item.dark ? "bg-[#1d1d1f]" : "bg-[#f5f5f7]"}
            `}
          >
            {item.badge && (
              <span className="absolute top-3 left-3 text-[11px] font-semibold text-[#bf4800] bg-[#fff0e5] px-2 py-0.5 rounded-md">
                {item.badge}
              </span>
            )}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = item.fb;
              }}
            />
            <div className="p-4">
              <p
                className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${
                  item.dark ? "text-[rgba(255,255,255,0.5)]" : "text-[#6e6e73]"
                }`}
              >
                {item.label}
              </p>
              <h3
                className={`text-[19px] font-semibold leading-tight mb-1 ${
                  item.dark ? "text-white" : "text-[#1d1d1f]"
                }`}
              >
                {item.name}
              </h3>
              <p
                className={`text-[13px] ${
                  item.dark ? "text-[rgba(255,255,255,0.6)]" : "text-[#6e6e73]"
                }`}
              >
                {item.price}
              </p>
            </div>
          </a>
        ))}
      </HScroll>
    </section>
  );
}

/* ── 5. "APPLE STORE DIFFERENCE" 4-FEATURE STRIP ─────── */
const DIFFERENCES = [
  {
    icon: "💳",
    title: "No Cost EMI* Plus Instant Cashback.†",
    desc: "",
    link: "Learn more",
  },
  {
    icon: "🔄",
    title: "Exchange your smartphone.",
    desc: "get ₹3,100.00–₹67,700.00 in credit towards a new one.²",
    link: "Get an estimate",
  },
  {
    icon: "🎨",
    title: "Customise your Mac.",
    desc: "",
    link: "Configure now",
  },
  {
    icon: "✏️",
    title: "Make them yours.",
    desc: "Engrave a mix of names and numbers for free.",
    link: "Learn more",
  },
];

function StoreDifference() {
  return (
    <section className="border-t border-[#d2d2d7] py-10">
      <div className="max-w-[1040px] mx-auto px-5">
        <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-6">
          <span className="font-semibold">The Apple Store difference.</span>{" "}
          <span className="font-normal text-[#6e6e73]">
            Even more reasons to shop with us.
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {DIFFERENCES.map((d) => (
            <div
              key={d.title}
              className="bg-[#f5f5f7] rounded-[14px] p-5 flex flex-col gap-2"
            >
              <span className="text-2xl">{d.icon}</span>
              <p className="text-[14px] font-semibold text-[#1d1d1f] leading-snug">
                {d.title}
              </p>
              {d.desc && (
                <p className="text-[12px] text-[#6e6e73] leading-relaxed">
                  {d.desc}
                </p>
              )}
              <a
                href="#"
                className="text-[#0071e3] text-[13px] font-medium mt-auto hover:underline"
              >
                {d.link} &gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. "HELP IS HERE" 3-CARD ROW ─────────────────────── */
const HELP_CARDS = [
  {
    eyebrow: "Shop with a Specialist",
    title: "Shop with a Specialist over video.",
    desc: "Choose your new device in a guided, one-way video session.",
    cta: "Start now",
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&q=80",
  },
  {
    eyebrow: "Apple Specialist",
    title: "Shop one on one with a Specialist online.",
    desc: "Connect with a Specialist for a personal shopping experience.",
    cta: "Connect now",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
  {
    eyebrow: "Today at Apple",
    title: "Explore Apple Infinity.",
    desc: "Come and try it for yourself at the Apple Store.",
    cta: "Find a store",
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80",
  },
];

function HelpSection() {
  return (
    <section className="border-t border-[#d2d2d7] py-10">
      <div className="max-w-[1040px] mx-auto px-5">
        <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-6">
          <span className="font-semibold">Help is here.</span>{" "}
          <span className="font-normal text-[#6e6e73]">
            Whenever and however you need it.
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HELP_CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-[#f5f5f7] rounded-[18px] overflow-hidden flex flex-col"
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5 flex flex-col flex-1 gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73]">
                  {c.eyebrow}
                </p>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] leading-snug">
                  {c.title}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed flex-1">
                  {c.desc}
                </p>
                <a
                  href="#"
                  className="text-[#0071e3] text-[13px] font-medium hover:underline mt-auto"
                >
                  {c.cta} &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 7. ACCESSORIES HORIZONTAL SCROLL ─────────────────── */
const ACCESSORIES = [
  {
    badge: "New",
    name: "iPhone 17 Pro Silicone Case with MagSafe",
    price: "MRP ₹4900.00",
    note: "(Incl. of all taxes)",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXYL3?wid=400&hei=400&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=75",
  },
  {
    badge: "New",
    name: "Crossbody Strap — Bright Guava",
    price: "MRP ₹1800.00",
    note: "(Incl. of all taxes)",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQXW3?wid=400&hei=400&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=75",
  },
  {
    badge: "",
    name: "MagSafe Charger (1m)",
    price: "MRP ₹3500.00",
    note: "(Incl. of all taxes)",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=400&hei=400&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&q=75",
  },
  {
    badge: "",
    name: "AirPods Max — Midnight",
    price: "MRP ₹54,900.00",
    note: "(Incl. of all taxes)",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTP3?wid=400&hei=400&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=75",
  },
  {
    badge: "",
    name: "Apple Pencil Pro",
    price: "MRP ₹11,900.00",
    note: "(Incl. of all taxes)",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQQU3?wid=400&hei=400&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=75",
  },
];

function ProductScrollCard({ item }) {
  return (
    <div className="min-w-[220px] max-w-[220px] flex flex-col gap-2">
      <div className="bg-[#f5f5f7] rounded-[14px] overflow-hidden relative">
        {item.badge && (
          <span className="absolute top-2 left-2 text-[11px] font-semibold text-[#bf4800] bg-[#fff0e5] px-2 py-0.5 rounded-md z-10">
            {item.badge}
          </span>
        )}
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-48 object-contain p-4"
          onError={(e) => {
            e.target.src = item.fb;
          }}
        />
      </div>
      <p className="text-[13px] text-[#1d1d1f] font-medium leading-snug">
        {item.name}
      </p>
      <p className="text-[13px] text-[#1d1d1f]">{item.price}</p>
      <p className="text-[11px] text-[#6e6e73]">{item.note}</p>
    </div>
  );
}

function AccessoriesSection() {
  return (
    <section className="border-t border-[#d2d2d7] py-10">
      <div className="max-w-[1040px] mx-auto px-5">
        <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-1">
          Accessories.
        </h2>
        <p className="text-[15px] text-[#6e6e73] mb-6">
          Essentials that pair perfectly with your favourite devices.
        </p>
        <HScroll>
          {ACCESSORIES.map((item) => (
            <ProductScrollCard key={item.name} item={item} />
          ))}
        </HScroll>
      </div>
    </section>
  );
}

/* ── 8. AUDIO / AIRPODS SECTION ───────────────────────── */
const AUDIO = [
  {
    badge: "New",
    eyebrow: "Pro Hearing Aid",
    name: "AirPods Max 2 — Midnight",
    price: "MRP ₹79,900.00 (incl. all taxes)",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTP3?wid=600&hei=600&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=75",
    dark: false,
  },
  {
    badge: "New Colours",
    eyebrow: "Pro Hearing Aid",
    name: "AirPods Pro 3",
    price: "MRP ₹24,900.00 (incl. all taxes)",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=600&hei=600&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&q=75",
    dark: false,
  },
  {
    badge: "No Earbuds",
    eyebrow: "Active Noise Cancellation",
    name: "AirPods 4 with Active Noise Cancellation",
    price: "MRP ₹14,900.00 (incl. all taxes)",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXP93?wid=600&hei=600&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&q=75",
    dark: false,
  },
];

function AudioSection() {
  return (
    <section className="border-t border-[#d2d2d7] py-10">
      <div className="max-w-[1040px] mx-auto px-5">
        {/* Apple Music promo */}
        <div className="bg-[#f5f5f7] rounded-[18px] p-6 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73] mb-1">
              Included with your device
            </p>
            <h3 className="text-[22px] font-semibold text-[#1d1d1f]">
              Get 3 months of<br />Apple Music free.
            </h3>
            <p className="text-[13px] text-[#6e6e73] mt-1">
              Included with the purchase of selected Apple devices.³
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/1200px-Apple_Music_icon.svg.png"
            alt="Apple Music"
            className="w-16 h-16 object-contain"
          />
        </div>

        <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-1">
          Loud and clear.
        </h2>
        <p className="text-[15px] text-[#6e6e73] mb-6">
          Unparalleled choices for rich, high-quality sound.
        </p>

        <HScroll>
          {AUDIO.map((item) => (
            <div
              key={item.name}
              className="min-w-[260px] max-w-[260px] bg-[#f5f5f7] rounded-[14px] overflow-hidden flex flex-col relative"
            >
              {item.badge && (
                <span className="absolute top-2 left-2 text-[11px] font-semibold text-[#bf4800] bg-[#fff0e5] px-2 py-0.5 rounded-md z-10">
                  {item.badge}
                </span>
              )}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-52 object-contain p-4"
                onError={(e) => {
                  e.target.src = item.fb;
                }}
              />
              <div className="p-4 pt-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73] mb-1">
                  {item.eyebrow}
                </p>
                <h3 className="text-[15px] font-semibold text-[#1d1d1f] leading-snug mb-1">
                  {item.name}
                </h3>
                <p className="text-[12px] text-[#6e6e73]">{item.price}</p>
              </div>
            </div>
          ))}
        </HScroll>
      </div>
    </section>
  );
}

/* ── 9. NIKE x BEATS ──────────────────────────────────── */
const BEATS = [
  {
    badge: "New Colours",
    name: "Powerbeats Pro 2 — Nike Special Edition",
    price: "MRP ₹29,900",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQLJ3?wid=600&hei=600&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=75",
  },
  {
    badge: "New",
    name: "40mm Volt Splash Nike Sport Loop",
    price: "MRP ₹3,900",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJJ73?wid=600&hei=600&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=75",
  },
  {
    badge: "New",
    name: "Beats iPhone 17 Volt&Black Case",
    price: "MRP ₹3,900",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXYL3?wid=600&hei=600&fmt=jpeg&qlt=90",
    fb: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=75",
  },
];

function NikeBeats() {
  return (
    <section className="border-t border-[#d2d2d7] py-10">
      <div className="max-w-[1040px] mx-auto px-5">
        <div className="mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73] mb-1">
            COLLABORATION
          </p>
          <h2 className="text-[21px] font-semibold text-[#1d1d1f]">
            Nike × Beats.{" "}
            <span className="font-normal text-[#6e6e73]">Sport with style.</span>
          </h2>
          <p className="text-[14px] text-[#6e6e73] mt-1">
            Two icons join forces to level up your workout.
          </p>
        </div>
        <HScroll>
          {BEATS.map((item) => (
            <div
              key={item.name}
              className="min-w-[240px] max-w-[240px] bg-[#f5f5f7] rounded-[14px] overflow-hidden flex flex-col relative"
            >
              {item.badge && (
                <span className="absolute top-2 left-2 text-[11px] font-semibold text-[#bf4800] bg-[#fff0e5] px-2 py-0.5 rounded-md z-10">
                  {item.badge}
                </span>
              )}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-44 object-contain p-4"
                onError={(e) => {
                  e.target.src = item.fb;
                }}
              />
              <div className="p-4 pt-0">
                <h3 className="text-[14px] font-semibold text-[#1d1d1f] leading-snug mb-1">
                  {item.name}
                </h3>
                <p className="text-[12px] text-[#6e6e73]">{item.price}</p>
              </div>
            </div>
          ))}
        </HScroll>
      </div>
    </section>
  );
}

/* ── 10. APPLE EXPERIENCE ROW ─────────────────────────── */
const EXPERIENCE = [
  {
    title: "Apple Intelligence.",
    sub: "Create, communicate and get things done effortlessly.⁴",
    cta: "Learn more",
    bg: "bg-white border border-[#d2d2d7]",
    accent: "text-[#0071e3]",
  },
  {
    title: "Put your bow on it.",
    sub: "Make the gift seamlessly theirs with a personalised message created especially for them.",
    cta: "Shop gift cards",
    bg: "bg-[#f5f5f7]",
    accent: "text-[#0071e3]",
  },
  {
    title: "Four Apple services. One easy subscription.",
    sub: "Apple One includes Apple Music, Apple TV+, Apple Arcade, and iCloud+ in a single plan.",
    cta: "Learn more",
    bg: "bg-[#f5f5f7]",
    accent: "text-[#0071e3]",
  },
];

function ExperienceSection() {
  return (
    <section className="border-t border-[#d2d2d7] py-10">
      <div className="max-w-[1040px] mx-auto px-5">
        <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-6">
          <span className="font-semibold">The Apple experience.</span>{" "}
          <span className="font-normal text-[#6e6e73]">
            Do even more with Apple products and services.
          </span>
        </h2>
        <HScroll>
          {EXPERIENCE.map((e) => (
            <div
              key={e.title}
              className={`min-w-[280px] max-w-[280px] rounded-[18px] p-6 flex flex-col gap-3 min-h-[200px] ${e.bg}`}
            >
              <h3 className={`text-[18px] font-semibold leading-snug ${e.accent}`}>
                {e.title}
              </h3>
              <p className="text-[14px] text-[#1d1d1f] leading-relaxed flex-1">
                {e.sub}
              </p>
              <a
                href="#"
                className="text-[#0071e3] text-[13px] font-medium hover:underline mt-auto"
              >
                {e.cta} &gt;
              </a>
            </div>
          ))}
        </HScroll>
      </div>
    </section>
  );
}

/* ── 11. SAVINGS & OFFERS BANNER ──────────────────────── */
function SavingsSection() {
  return (
    <section className="border-t border-[#d2d2d7] py-10">
      <div className="max-w-[1040px] mx-auto px-5">
        <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-1">
          <span className="font-semibold">Savings and offers.</span>{" "}
          <span className="font-normal text-[#6e6e73]">
            Exclusive deals, special stores and more.
          </span>
        </h2>
        <div className="mt-6 bg-[#f5f5f7] rounded-[18px] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73] mb-2">
              Education
            </p>
            <h3 className="text-[22px] font-semibold text-[#1d1d1f]">
              Buy a new Mac or iPad<br />with education savings.⁵
            </h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#"
              className="inline-block bg-[#0071e3] text-white rounded-full px-6 py-2.5 text-[15px] hover:bg-[#0077ed] transition-colors"
            >
              Shop Mac
            </a>
            <a
              href="#"
              className="inline-block border border-[#0071e3] text-[#0071e3] rounded-full px-6 py-2.5 text-[15px] hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              Shop iPad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 12. QUICK LINKS PILLS ────────────────────────────── */
const QUICK_LINKS = [
  "Find a Store",
  "Order Status",
  "Financing",
  "Your Genius",
  "Apple Trade In",
  "Business",
  "Government",
  "Education",
];

function QuickLinks() {
  return (
    <section className="border-t border-[#d2d2d7] py-8">
      <div className="max-w-[1040px] mx-auto px-5">
        <h2 className="text-[17px] font-semibold text-[#1d1d1f] mb-4">
          Quick Links
        </h2>
        <div className="flex flex-wrap gap-2">
          {QUICK_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="
                text-[13px] text-[#1d1d1f] font-medium
                border border-[#d2d2d7] rounded-full
                px-4 py-1.5 hover:bg-[#f5f5f7] transition-colors
              "
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FOOTNOTES ───────────────────────────────────────── */
function Footnotes() {
  const notes = [
    "* No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers.",
    "† Instant Cashback offer is available on select banks.",
    "¹ Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device.",
    "² Offer valid on eligible iPhone models. Terms and conditions apply.",
    "³ Offer available for a limited time to new subscribers who purchase a qualifying Apple device.",
    "⁴ Apple Intelligence is available in beta on all iPhone 16 models with Siri and device language set to supported English.",
    "⁵ Valid for students, parents, teachers, and staff.",
  ];
  return (
    <section className="border-t border-[#d2d2d7] py-6">
      <div className="max-w-[1040px] mx-auto px-5">
        {notes.map((n) => (
          <p key={n} className="text-[11px] text-[#6e6e73] leading-relaxed mb-1">
            {n}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   MAIN StorePage EXPORT
   Drop-in replacement — receives setPage prop
   so buttons can navigate to Login/Signup.
══════════════════════════════════════════ */
export default function StorePage({ setPage }) {
  return (
    <main className="min-h-screen bg-white" aria-label="Apple Store India">
      {/* Hide horizontal scrollbars globally for this page */}
      <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}`}</style>

      <PromoBar />
      <StoreHero />
      <CategoryRow />
      <LatestSection />
      <StoreDifference />
      <HelpSection />
      <AccessoriesSection />
      <AudioSection />
      <NikeBeats />
      <ExperienceSection />
      <SavingsSection />
      <QuickLinks />

      {/* Sign-in nudge — wired to Login/Signup pages */}
      <section className="border-t border-[#d2d2d7] py-10 text-center">
        <div className="max-w-[480px] mx-auto px-5">
          <p className="text-[#6e6e73] mb-4 text-[16px]">
            Sign in for personalised recommendations, order tracking, and Apple Wallet.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => { setPage("login"); window.scrollTo(0, 0); }}
              className="bg-[#0071e3] text-white rounded-full px-6 py-2.5 text-[15px] hover:bg-[#0077ed] transition-colors border-none cursor-pointer"
            >
              Sign in to your Apple Account
            </button>
            <button
              onClick={() => { setPage("signup"); window.scrollTo(0, 0); }}
              className="border border-[#0071e3] text-[#0071e3] rounded-full px-6 py-2.5 text-[15px] hover:bg-[#0071e3] hover:text-white transition-colors bg-transparent cursor-pointer"
            >
              Create Apple Account
            </button>
          </div>
        </div>
      </section>

      <Footnotes />
    </main>
  );
}