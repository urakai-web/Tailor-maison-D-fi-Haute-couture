import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🌡️",
    title: "最高水準の断熱性能",
    subtitle: "High Insulation",
    description:
      "UA値0.46以下を標準仕様。冬は暖かく、夏は涼しい。光熱費を大幅に削減しながら、一年中快適な室内環境を実現します。",
    image: "/images/feature-01.png",
    imageLabel: "断熱施工の写真",
  },
  {
    icon: "🌿",
    title: "自然素材へのこだわり",
    subtitle: "Natural Materials",
    description:
      "無垢フローリング、漆喰壁、無垢材の構造材。化学物質を極力使わない素材選びで、アレルギーや化学物質過敏症の方も安心の住まい。",
    image: "/images/feature-02.png",
    imageLabel: "自然素材・木材の写真",
  },
  {
    icon: "☀️",
    title: "太陽光・創エネ設計",
    subtitle: "Renewable Energy",
    description:
      "南向き配置・軒の深さ・窓の位置を緻密に計算したパッシブ設計。太陽光発電との組み合わせで、光熱費をほぼゼロに。",
    image: "/images/feature-03.png",
    imageLabel: "太陽光パネル・外観写真",
  },
  {
    icon: "🏠",
    title: "長期優良住宅対応",
    subtitle: "Long-Term Quality",
    description:
      "耐震等級3、長期優良住宅認定に対応。地震に強く、資産価値の高い家。30年の長期保証と充実したアフターサポート。",
    image: "/images/feature-04.png",
    imageLabel: "構造・躯体の写真",
  },
];

export default function Features() {
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
    <section id="features" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Our Features
          </p>
          <h2 className="section-title">家づくりのこだわり</h2>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            快適で長く住み続けられる家を実現するために、金沢建築設計が大切にしている4つのポイント。
          </p>
        </div>

        {/* Feature items */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`fade-in-up grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.imageLabel}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute -bottom-3 w-24 h-1 bg-accent ${
                      index % 2 === 1 ? "right-4" : "left-4"
                    }`}
                  />
                </div>
              </div>

              {/* Text */}
              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <p className="text-xs tracking-widest text-accent uppercase mb-2">
                  {feature.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-serif font-light mb-6 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
