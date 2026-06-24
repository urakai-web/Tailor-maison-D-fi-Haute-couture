import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "私たちについて", href: "/#about" },
  { label: "Line Up", href: "/lineup" },
  { label: "Fabric", href: "/fabric" },
  { label: "ご注文ガイド", href: "/guide" },
  { label: "仕立て事例", href: "/case" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isTop = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showWhite = isTop && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isTop ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span
            className={`text-lg font-logo font-normal tracking-widest transition-colors duration-300 ${
              showWhite ? "text-white" : "text-primary-dark"
            }`}
          >
            Tailor maison Défi
          </span>
          <span
            className={`text-[9px] font-logo tracking-widest mt-0.5 transition-colors duration-300 ${
              showWhite ? "text-white/80" : "text-gray-500"
            }`}
          >
            HAUTE COUTURE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide hover:text-primary transition-colors duration-300 ${
                  showWhite ? "text-white" : "text-gray-700"
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm tracking-wide hover:text-primary transition-colors duration-300 ${
                  showWhite ? "text-white" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href="https://lin.ee/W2TBswv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest bg-primary text-white px-6 py-2.5 hover:bg-primary-dark transition-colors duration-300"
          >
            LINE予約
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              showWhite ? "bg-white" : "bg-gray-800"
            } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              showWhite ? "bg-white" : "bg-gray-800"
            } ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              showWhite ? "bg-white" : "bg-gray-800"
            } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          isMenuOpen ? "max-h-96 shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-700 py-2 border-b border-gray-100 tracking-wide hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-700 py-2 border-b border-gray-100 tracking-wide hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href="https://lin.ee/W2TBswv"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm text-primary font-medium py-2 tracking-wide"
          >
            LINE予約
          </a>
        </nav>
      </div>
    </header>
  );
}
