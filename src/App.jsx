import Navbar from "./components/Navbar";
import CategoriesSection from "./pages/CategoriesSection";
import Footer from "./pages/Footer";
import HeroSection from "./pages/HeroSection";
import ItemsSection from "./pages/ItemsSection";
import SellerSection from "./pages/SellerSection";

function App() {
  return (
    <div className="App bg-black">
      <Navbar />
      <HeroSection />

      <div className="max-w-[1600px] mx-auto">
        <ItemsSection />
        <SellerSection />
        <CategoriesSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
