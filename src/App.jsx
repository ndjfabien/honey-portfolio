import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import HoneySlider from "./components/HoneySlider"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Products />
      <HoneySlider />
      <Contact />
      <Footer />
    </div>
  )
}