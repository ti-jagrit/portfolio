import About from "./components/about/about";
import Porthfolio from "./components/about/porthfolio";
import Contact from "./components/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero/>
      <About/>
    <Porthfolio/>
    <Contact/>
      
    </div>
  );
}

export default App;
