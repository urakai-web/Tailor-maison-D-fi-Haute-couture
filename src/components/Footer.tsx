const footerNav = [
  {
    heading: "会社情報",
    links: [
      { label: "私たちについて", href: "#about" },
      { label: "スタッフ紹介", href: "#" },
      { label: "会社概要", href: "#" },
      { label: "採用情報", href: "#" },
    ],
  },
  {
    heading: "家づくり",
    links: [
      { label: "家づくりのこだわり", href: "#features" },
      { label: "設計の流れ", href: "#" },
      { label: "資金・ローン", href: "#" },
      { label: "よくある質問", href: "#" },
    ],
  },
  {
    heading: "実績・お知らせ",
    links: [
      { label: "施工事例", href: "#works" },
      { label: "お知らせ", href: "#news" },
      { label: "ブログ", href: "#" },
      { label: "イベント情報", href: "#" },
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
              <p className="text-white font-serif font-light text-xl tracking-widest">
                金沢建築設計
              </p>
              <p className="text-gray-500 text-[10px] tracking-widest mt-1">
                KANAZAWA ARCHITECTURE DESIGN
              </p>
            </div>
            <address className="not-italic text-sm leading-8 space-y-1">
              <p>〒920-0000</p>
              <p>石川県金沢市大豆田本町1-2-3</p>
              <p>
                TEL:{" "}
                <a
                  href="tel:0762000000"
                  className="hover:text-white transition-colors"
                >
                  076-200-0000
                </a>
              </p>
              <p>
                FAX:{" "}
                <a
                  href="tel:0762000001"
                  className="hover:text-white transition-colors"
                >
                  076-200-0001
                </a>
              </p>
            </address>
            <div className="mt-6 text-xs space-y-1">
              <p>営業時間：9:00〜17:30</p>
              <p>定休日：水曜日・祝日</p>
            </div>

            {/* SNS */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-colors text-sm"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-colors text-sm"
              >
                FB
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-white hover:text-white transition-colors text-sm"
              >
                YT
              </a>
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
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
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
          <p>© 2025 金沢建築設計株式会社 All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              サイトマップ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
