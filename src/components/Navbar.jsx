import { useState } from "react";

const NAV_LINKS = [
  { label: "Store",   action: "store" },
  { label: "Mac",     action: null },
  { label: "iPhone",  action: null },
  { label: "iPad",    action: null },
  { label: "Watch",   action: null },
  { label: "AirPods", action: null },
  { label: "Login",   action: "login" },
  { label: "Support", action: null },
];

export default function Navbar({ page, setPage }) {
  // Controls mobile menu open/closed
  const [open, setOpen] = useState(false);

  const handleNavClick = (action) => {
    if (action) {
      setPage(action);
      setOpen(false);
    }
  };

  return (
    <>
      {/* ── Desktop / tablet nav bar ── */}
      <nav
        className="
          sticky top-0 z-50 h-12
          nav-backdrop
          border-b border-black/[0.08]
        "
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1024px] mx-auto h-full flex items-center justify-between px-5">

          {/* Apple logo */}
          <button
            onClick={() => setPage("home")}
            className="bg-transparent border-none cursor-pointer"
          >
            <img
              src="/apple-logo-svgrepo-com.svg"
              className="text-[22px] text-apple-dark leading-none h-6 w-5.5"
              aria-label="Apple home"
              alt="Apple logo"
            />
          </button>

          {/* Desktop links — hidden below md */}
          <ul className="hidden md:flex list-none" role="list">
            {NAV_LINKS.map(({ label, action }) => (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(action)}
                  disabled={!action}
                  className={`
                    block px-3 text-[12px] leading-[48px] 
                    transition-opacity duration-150 border-none bg-transparent
                    ${
                      action
                        ? "text-apple-dark/80 hover:text-apple-dark cursor-pointer"
                        : "text-apple-dark/50 cursor-not-allowed"
                    }
                  `}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger — shown below md */}
          <button
            className="
              md:hidden bg-transparent border-none cursor-pointer
              text-lg text-apple-dark px-2 py-1
            "
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu overlay ── */}
      {open && (
        <div
          className="
            fixed inset-0 top-12 z-40 flex flex-col
            items-center pt-10 gap-0
            bg-white/95 backdrop-blur-lg
            md:hidden
          "
          role="dialog"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, action }) => (
            <button
              key={label}
              onClick={() => handleNavClick(action)}
              disabled={!action}
              className={`
                w-4/5 text-center py-3.5 text-[17px]
                border-b border-black/[0.08] transition-opacity
                border-none bg-transparent
                ${
                  action
                    ? "text-apple-dark/85 hover:text-apple-dark cursor-pointer"
                    : "text-apple-dark/50 cursor-not-allowed"
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}