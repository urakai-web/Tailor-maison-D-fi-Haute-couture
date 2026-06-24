import { Link } from "react-router-dom";

const footerNav = [
  {
    heading: "About",
    links: [
      { label: "経営理念", href: "/#about" },
      { label: "私たちについて", href: "/#about" },
      { label: "オーナー経歴", href: "/#about" },
    ],
  },
  {
    heading: "Service",
    links: [
      { label: "ラインナップ", href: "/lineup" },
      { label: "ファブリック", href: "/fabric" },
      { label: "ご注文ガイド", href: "/guide" },
    ],
  },
  {
    heading: "Gallery",
    links: [
      { label: "仕立て事例", href: "/case" },
      { label: "Instagram", href: "https://www.instagram.com/yuma.nishinami" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <p className="text-white font-logo font-light text-lg tracking-widest">
                Tailor maison Défi
              </p>
              <p className="text-gray-500 text-[9px] font-logo tracking-widest mt-1">
                HAUTE COUTURE
              </p>
            </div>
            <div className="text-sm leading-8 space-y-1">
              <p>福岡県 出張型オーダースーツサロン</p>
            </div>
            <div className="mt-6 text-xs space-y-1">
              <p>完全予約制</p>
            </div>

          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white text-xs tracking-widest uppercase mb-6 pb-3 border-b border-gray-700">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : link.href.startsWith("/#") ? (
                      <a
                        href={link.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2025 Tailor maison Défi Haute couture All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
