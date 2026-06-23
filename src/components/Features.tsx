import { useEffect, useRef } from "react";

const lineupItems = [
  {
    title: "スーツ",
    subtitle: "Suit",
    description: "ビジネスからフォーマルまで、あらゆるシーンに対応するオーダースーツ。",
    image: "/images/feature-01.png",
  },
  {
    title: "シャツ",
    subtitle: "Shirt",
    description: "襟型・カフス・生地を自由に選べるオーダーシャツ。",
    image: "/images/feature-02.png",
  },
  {
    title: "コート",
    subtitle: "Coat",
    description: "上質な素材で仕立てるオーダーコート。",
    image: "/images/feature-03.png",
  },
  {
    title: "その他",
    subtitle: "Others",
    description: "ベスト、パンツ、ネクタイなど、トータルコーディネートに対応。",
    image: "/images/feature-04.png",
  },
];

export default function LineUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="lineup" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Line Up
          </p>
          <h2 className="section-title">ラインナップ</h2>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            お客様のライフスタイルやご要望に合わせた、幅広いオーダーメイドアイテムをご用意しています。
          </p>
        </div>

        {/* Lineup grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lineupItems.map((item) => (
            <div key={item.title} className="fade-in-up group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-[10px] tracking-widest text-accent uppercase mb-1">
                  {item.subtitle}
                </p>
                <h3 className="text-lg font-serif font-light text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <a href="/lineup" className="btn-outline text-xs">
            ラインナップ詳細 →
          </a>
        </div>
      </div>
    </section>
  );
}
