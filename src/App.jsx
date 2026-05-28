import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import HoneySlider from "./components/HoneySlider";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <div className="scroll-smooth">

      {/* SEO META TAGS */}
      <Helmet>
        <title>Honey Farm Rwanda | Pure Organic Honey 🐝</title>

        <meta
          name="description"
          content="Buy pure organic honey in Rwanda. Natural bee products directly from Honey Farm. Fresh, healthy and 100% organic honey."
        />

        <meta
          name="keywords"
          content="honey Rwanda, organic honey, pure honey, beeswax, bee products Rwanda, natural honey farm"
        />

        <meta name="author" content="Honey Farm Rwanda" />

        {/* Open Graph (Facebook / WhatsApp sharing) */}
        <meta property="og:title" content="Honey Farm Rwanda 🐝" />
        <meta
          property="og:description"
          content="Pure organic honey directly from our farm in Rwanda."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/boss.png" />
        <meta property="og:url" content="https://your-site.netlify.app" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Honey Farm Rwanda | Organic Honey"
        />
        <meta
          name="twitter:description"
          content="Pure natural honey from healthy bees in Rwanda."
        />
        <meta name="twitter:image" content="/boss.png" />
      </Helmet>

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Home />
        <About />
        <Products />
        <HoneySlider />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}