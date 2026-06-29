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
import TiePage from "./pages/TiePage";
import CoatPage from "./pages/CoatPage";
import BeltPage from "./pages/BeltPage";
import GiftPage from "./pages/GiftPage";
import JacketPage from "./pages/JacketPage";
import SlacksPage from "./pages/SlacksPage";
import VestPage from "./pages/VestPage";
import TshirtPage from "./pages/TshirtPage";
import PoloPage from "./pages/PoloPage";
import ShirtPage from "./pages/ShirtPage";
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
            <Route path="/lineup/tie" element={<TiePage />} />
            <Route path="/lineup/coat" element={<CoatPage />} />
            <Route path="/lineup/belt" element={<BeltPage />} />
            <Route path="/lineup/gift" element={<GiftPage />} />
            <Route path="/lineup/jacket" element={<JacketPage />} />
            <Route path="/lineup/slacks" element={<SlacksPage />} />
            <Route path="/lineup/vest" element={<VestPage />} />
            <Route path="/lineup/tshirt" element={<TshirtPage />} />
            <Route path="/lineup/polo" element={<PoloPage />} />
            <Route path="/lineup/shirt" element={<ShirtPage />} />
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
