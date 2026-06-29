import { useEffect, useRef } from "react";

const shirtFabrics = [
  {
    name: "トーマス・メイソン（THOMAS MASON）",
    description: "1796年に英国のランカシャーで創業した世界最高峰のシャツ生地ブランド。",
    image: "/images/lineup-shirt.png", // TODO: トーマス・メイソン用の画像に差し替え
  },
  {
    name: "アルビニ（Albini）",
    description: "トーマス・メイソン（THOMAS MASON）も傘下に抱える世界最大のシャツ生地メーカー。",
    image: "/images/lineup-shirt.png", // TODO: アルビニ用の画像に差し替え
  },
  {
    name: "リバティ（LIBERTY）",
    description: "ロンドンの老舗百貨店『リバティ』が手がけるテキスタイルブランド。超長綿を使用したシルクタッチが特徴のタナローン（Tana Lawn）生地や唯一無二の繊細なプリントデザインが有名です。",
    image: "/images/lineup-shirt.png", // TODO: リバティ用の画像に差し替え
  },
];

export default function LineUpShirt() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref}>
      <div className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">Shirt</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">シャツ</h2>
            <p className="text-sm text-gray-400 mt-1">Dress & Casual</p>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20 fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/lineup-shirt.png" alt="オーダーシャツ" className="w-full h-full object-cover" /> {/* TODO: シャツメイン画像に差し替え */}
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-light text-gray-800 mb-6">
                着ることが楽しくなるスタイリングを
              </h3>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  スーツやジャケットは、それ一点で魅せるものではなく、シャツやネクタイ、ベルト、靴など、他のアイテムとの調和によって魅力が引き立つものです。その中でもシャツは、あなどれないアイテムの代表格。
                </p>
                <p>
                  美しいシルエットで快適な着心地を楽しんでいただければと思います。
                </p>
              </div>
            </div>
          </div>

          {/* Design & Fabric */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-warm-50 p-8 fade-in-up">
              <h4 className="text-lg font-serif font-light text-gray-800 mb-4">
                デザイン（Design）
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                衿型のデザインは30種類以上、カフス型は10種類以上の中から選択が可能。
              </p>
            </div>
            <div className="bg-warm-50 p-8 fade-in-up">
              <h4 className="text-lg font-serif font-light text-gray-800 mb-4">
                生地（Fabric）
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                200種類近いサンプル生地があり、国産からインポートまで取り揃えております。
              </p>
            </div>
          </div>

          {/* Featured Fabrics */}
          <div className="fade-in-up">
            <div className="text-center mb-12">
              <h4 className="text-xl font-serif font-light text-gray-800 tracking-wide">
                Featured Fabric
              </h4>
              <div className="w-12 h-px bg-accent mx-auto mt-4" />
            </div>

            <div className="space-y-16">
              {shirtFabrics.map((fabric, index) => (
                <div
                  key={fabric.name}
                  className={`fade-in-up grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={fabric.image} alt={fabric.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                    <h5 className="text-lg font-serif font-light text-gray-800 mb-4">
                      {fabric.name}
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {fabric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
