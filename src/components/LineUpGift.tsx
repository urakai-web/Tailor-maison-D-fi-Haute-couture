import { useEffect, useRef } from "react";

const giftCards = [
  { price: "¥10,000", tax: "税込11,000" },
  { price: "¥30,000", tax: "税込33,000" },
  { price: "¥50,000", tax: "税込55,000" },
];

export default function LineUpGift() {
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
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Gift
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">
              お仕立券（ギフト券）
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20 fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/lineup-suit.jpg" // TODO: ギフト用の画像に差し替え
                  alt="お仕立券"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>

            <div>
              <h3 className="text-xl font-serif font-light text-gray-800 mb-6">
                大切な方へ極上の一着を贈る
              </h3>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  ご家族やご友人、ビジネスパートナーへの特別な贈り物に、お好きな生地やデザインで自分だけの1着を作れる「お仕立て券」はいかがでしょうか。
                </p>
                <p>
                  相手のサイズや好みのデザインが分からなくても、失敗しない一生もののギフトとして大変喜ばれています。
                </p>
                <p>
                  特別なお仕立て体験：熟練のフィッターによる丁寧な採寸とカウンセリングの時間をあわせてプレゼントできます。
                </p>
              </div>
            </div>
          </div>

          {/* Gift scenes */}
          <div className="bg-warm-50 p-8 md:p-12 mb-16 fade-in-up">
            <h4 className="text-lg font-serif font-light text-gray-800 mb-4 text-center">
              おすすめのギフトシーン
            </h4>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              昇進祝い・栄転祝い・就職祝い・父の日・誕生日・還暦祝い・結婚式の引き出物など
            </p>
          </div>

          {/* Price */}
          <div className="fade-in-up">
            <h4 className="text-center text-lg font-serif font-light text-gray-800 mb-6">
              Price
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {giftCards.map((card) => (
                <div key={card.price} className="bg-warm-50 p-6 text-center">
                  <p className="text-lg md:text-xl font-serif font-light text-gray-800">
                    {card.price}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">({card.tax})</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">
              ※ご予算に応じて変更可能です
            </p>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-600 text-center mt-12 fade-in-up leading-relaxed">
            オーダー初心者の方でも安心してお創りいただけるよう、私が責任もって対応させていただきます。
          </p>
        </div>
      </div>
    </section>
  );
}
