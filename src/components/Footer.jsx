
const COLUMNS = [
  {
    heading: "Shop and Learn",
    links: [
      "Store", "Mac", "iPad", "iPhone", "Watch",
      "AirPods", "TV & Home", "Accessories", "Gift Cards",
    ],
  },
  {
    heading: "Services",
    links: [
      "Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+",
      "Apple Arcade", "iCloud", "Apple One", "Apple Card", "App Store",
    ],
  },
  {
    heading: "Apple Store",
    links: [
      "Find a Store", "Genius Bar", "Today at Apple", "Apple Camp",
      "Apple Store App", "Refurbished Mac", "Financing",
      "Apple Trade In", "Order Status", "Shopping Help",
    ],
  },
  {
    heading: "About Apple",
    links: [
      "Newsroom", "Apple Leadership", "Career Opportunities",
      "Investors", "Ethics & Compliance", "Events", "Contact Apple",
    ],
  },
];

/* ── Individual column ── */
function FooterColumn({ heading, links }) {
  return (
    <div>
      <h4 className="text-[12px] font-semibold text-apple-dark mb-2.5 tracking-[0.01em]">
        {heading}
      </h4>
      <ul className="list-none">
        {links.map((link) => (
          <li key={link} className="mb-1.5">
            <a
              href="#"
              className="text-[12px] text-apple-gray hover:text-apple-dark no-underline transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="bg-apple-light border-t border-apple-border pt-10 pb-5 px-5 text-[12px] text-apple-gray"
      aria-label="Site footer"
    >
      <div className="max-w-[1024px] mx-auto">

        {/* Legal disclaimer — mimics Apple's real footer */}
        <p className="pb-4 border-b border-apple-border leading-relaxed mb-5">
          1. Trade-in values will vary based on the condition, year, and configuration of your eligible
          trade-in device. Additional terms from Apple or Apple's trade-in partners may apply.
          Not all devices are eligible for credit.{" "}
          <em>(This is a fan-made educational clone.)</em>
        </p>

        {/* Link columns grid: 2 cols mobile → 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-7">
          {COLUMNS.map((col) => (
            <FooterColumn key={col.heading} {...col} />
          ))}
        </div>

        {/* Bottom bar: copyright + policy links */}
        <div className="
          border-t border-apple-border pt-4
          flex flex-wrap justify-between items-center gap-2.5
        ">
          <p>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>

          <div className="flex gap-4 flex-wrap">
            {["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-apple-gray hover:text-apple-dark no-underline transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}