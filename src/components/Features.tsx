import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const lineupItems = [
  {
    title: "スーツ",
    subtitle: "Suit",
    description: "ビジネスからフォーマルまで、あらゆるシーンに対応するオーダースーツ。",
    image: "/images/lineup-suit.jpg",
    href: "/lineup/suit",
  },
  {
    title: "シャツ",
    subtitle: "Shirt",
    description: "襟型・カフス・生地を自由に選べるオーダーシャツ。",
    image: "/images/lineup-shirt.png",
    href: "/lineup/shirt",
  },
  {
    title: "コート",
    subtitle: "Coat",
    description: "上質な素材で仕立てるオーダーコート。",
    image: "/images/lineup-coat.jpg",
    href: "/lineup/coat",
  },
  {
    title: "その他",
    subtitle: "Others",
    description: "ベスト、パンツ、ネクタイなど、トータルコーディネートに対応。",
    image: "/images/lineup-others.jpg",
    href: "/lineup/others",
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
            Lineup
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">
            ラインナップ
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
          <p className="text-sm text-gray-500 mt-6 max-w-xl mx-auto leading-relaxed">
            お客様のライフスタイルやご要望に合わせた、幅広いオーダーメイドアイテムをご用意しています。
          </p>
        </div>

        {/* Lineup grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lineupItems.map((item) => (
            <Link key={item.title} to={item.href} className="fade-in-up group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
