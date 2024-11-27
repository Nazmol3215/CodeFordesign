import AdminDashboard from "./Components/AdminDashboard"
import AppTwoenty from "./Components/AppTwoenty"
// import ChartExample from "./Components/ChartExample"
import ProductCard from "./Components/ColorOption"
import ProductGrid from "./Components/ProductGrid"
import AppTen from "./Components/ProductsOne"
import ShoppingCart from "./Components/ShoppingCart"
import ShoppingListFour from "./Components/ShoppingListFour"
import VendorPerformanceReport from "./VendorSignUp/VendorPerformanceReport"
import VendorSignUp from "./VendorSignUp/VendorSignUp"











import AboutSection from "./WebsiteLink/AboutSection"
import Footer from "./WebsiteLink/Footer"
import HeroSection from "./WebsiteLink/HeroSection"
import Navbar from "./WebsiteLink/Navbar"
import ProductSection from "./WebsiteLink/ProductSection"


function App() {

  return (
    <>
<Navbar/>




<AboutSection/>
<HeroSection/>
<ProductSection/>
<Footer/>
<AdminDashboard/>
<AppTwoenty/>
{/* <ChartExample/> */}
<ProductCard/>
<ProductGrid/>
<AppTen/>
<ShoppingCart/>
<ShoppingListFour/>
<VendorPerformanceReport/>
<VendorSignUp/>



    </>
  )
}

export default App
