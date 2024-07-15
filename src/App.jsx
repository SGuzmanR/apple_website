import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlight from "./components/Highlight"
import Model from "./components/Model"
import Features from "./components/Features"
import Works from "./components/Works"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <Works />
      <Footer />
    </main>
  )
}

export default App