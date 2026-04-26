import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import LogoCloud from "./components/LogoCloud";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <ProductList />
      <LogoCloud />
    </div>
  );
}
