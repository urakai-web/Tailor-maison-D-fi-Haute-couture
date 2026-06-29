import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopPage from "./pages/TopPage";
import LineUpPage from "./pages/LineUpPage";
import FabricPage from "./pages/FabricPage";
import PricePage from "./pages/PricePage";
import GuidePage from "./pages/GuidePage";
import CasePage from "./pages/CasePage";
import SuitPage from "./pages/SuitPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/lineup" element={<LineUpPage />} />
            <Route path="/lineup/suit" element={<SuitPage />} />
            <Route path="/fabric" element={<FabricPage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/case" element={<CasePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
