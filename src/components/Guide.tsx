import { useEffect, useRef } from "react";

const guideItems = [
  {
    step: "01",
    title: "料金",
    subtitle: "Price",
    description: "スーツ、シャツ、コートなど各アイテムの価格帯をご確認いただけます。",
  },
  {
    step: "02",
    title: "オーダーの流れ",
    subtitle: "Flow",
    description: "カウンセリングから納品まで、オーダーメイドの流れをご案内します。",
  },
  {
    step: "03",
    title: "よくあるご質問",
    subtitle: "FAQ",
    description: "初めての方でも安心。よくいただくご質問にお答えします。",
  },
];

export default function Guide() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="guide" ref={ref} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Guide
          </p>
          <h2 className="section-title">ご注文ガイド</h2>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            料金・オーダーの流れ・よくあるご質問をまとめています。
          </p>
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-8">
          {guideItems.map((item) => (
            <div
              key={item.step}
              className="fade-in-up bg-white p-10 text-center group hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-4xl font-serif font-light text-accent">
                {item.step}
              </span>
              <p className="text-[10px] tracking-widest text-primary uppercase mt-4 mb-2">
                {item.subtitle}
              </p>
              <h3 className="text-xl font-serif font-light text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <a href="/guide" className="btn-outline text-xs">
            ご注文ガイド詳細 →
          </a>
        </div>
      </div>
    </section>
  );
}
