import Navbar from "./components/Navbar"
import CategoriesSection from "./pages/CategoriesSection"
import Footer from "./pages/Footer"
import HeroSection from "./pages/HeroSection"
import ItemsSection from "./pages/ItemsSection"
import SellerSection from "./pages/SellerSection"

function App() {

  return (
    <div className="App bg-black">
      <Navbar/>
      <HeroSection/>
      <ItemsSection/>
      <SellerSection/>
      <CategoriesSection/>
      <Footer/>
    </div>
  )
}

export default App
