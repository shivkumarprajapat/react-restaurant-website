import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Expert from "./components/Expert";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Json from './data/data.json'

function App() {
  const [PageData, setPageData] = useState({})
  useEffect(() => {
    setPageData(Json)
  }, [])
  return (
    <div className="App">
      <Header />
      <Home data={PageData.Home} />
      <About data={PageData.About} />
      <Services data={PageData.Service} />
      <Expert data={PageData.Expert} />
      <Testimonials data={PageData.Testimonials} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
