import { useState, useEffect } from "react";

const navItems = [
  { label: "私たちについて", href: "#about" },
  { label: "ラインナップ", href: "#lineup" },
  { label: "ファブリック", href: "#fabric" },
  { label: "ご注文ガイド", href: "#guide" },
  { label: "仕立て事例", href: "#case" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className={`text-lg font-serif font-light tracking-widest transition-colors duration-300 ${
              isScrolled ? "text-primary-dark" : "text-white"
            }`}
          >
            Tailor maison Défi
          </span>
          <span
            className={`text-[9px] tracking-widest mt-0.5 transition-colors duration-300 ${
              isScrolled ? "text-gray-500" : "text-white/80"
            }`}
          >
            HAUTE COUTURE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide hover:text-primary transition-colors duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://line.me/"
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
              isScrolled ? "bg-gray-800" : "bg-white"
            } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-gray-800" : "bg-white"
            } ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-gray-800" : "bg-white"
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
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-700 py-2 border-b border-gray-100 tracking-wide hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://line.me/"
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
