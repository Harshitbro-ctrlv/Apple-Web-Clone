import Navbar from "./components/Navbar";
import Hero  from "./components/Hero";
import ProductSection from "./components/Productsection";
import GridSection  from "./components/Gridsection";
import Footer from "./components/Footer";
import { productSections } from "./data/Products";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {productSections.map((section) => (
        <ProductSection key={section.id} {...section} />
      ))}
      <GridSection />
      <Footer />
    </>
  );
}