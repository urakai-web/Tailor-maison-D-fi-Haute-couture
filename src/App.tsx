import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/Concept";
import LineUp from "./components/Features";
import Fabric from "./components/News";
import Guide from "./components/Guide";
import Case from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <LineUp />
        <Fabric />
        <Guide />
        <Case />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
