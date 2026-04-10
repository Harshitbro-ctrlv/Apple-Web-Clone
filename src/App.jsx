import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductSection from "./components/Productsection";
import GridSection from "./components/Gridsection";
import StorePage from "./components/Storepage";   // ← NEW full store page
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/RegisterPage";

import { productSections } from "./data/Products";

// ── Home page assembled inline ────────────────────
function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      {productSections.map((section) => (
        <ProductSection key={section.id} {...section} setPage={setPage} />
      ))}
      <GridSection setPage={setPage} />
    </>
  );
}

// ── Root app ──────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");

  // Scroll to top on every page change
  const navigate = (p) => { setPage(p); window.scrollTo(0, 0); };

  const showFooter = page === "home" || page === "store";

  return (
    <>
      {/* Sticky navbar — always visible */}
      <Navbar page={page} setPage={navigate} />

      {/* Page routing */}
      {page === "home"   && <HomePage  setPage={navigate} />}
      {page === "store"  && <StorePage setPage={navigate} />}
      {page === "login"  && <LoginPage  setPage={navigate} />}
      {page === "signup" && <SignupPage setPage={navigate} />}

      {/* Footer only on content pages */}
      {showFooter && <Footer />}
    </>
  );
}