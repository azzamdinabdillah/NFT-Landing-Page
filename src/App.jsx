import CategoriesSection from "./pages/CategoriesSection"
import HeroSection from "./pages/HeroSection"
import ItemsSection from "./pages/ItemsSection"
import SellerSection from "./pages/SellerSection"

function App() {

  return (
    <div className="App bg-black pb-40">
      <HeroSection/>
      <ItemsSection/>
      <SellerSection/>
      <CategoriesSection/>
    </div>
  )
}

export default App
