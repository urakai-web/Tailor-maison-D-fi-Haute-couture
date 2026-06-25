import { useEffect, useRef } from "react";

const standardFeatures = [
  "ボタン各種（ホーン・シェル・ナット）",
  "キュプラ裏地",
  "AMFステッチ",
  "本切羽",
  "ネーム入れ",
  "ピークドラペル",
  "ラペル幅変更",
];

const priceItems = [
  { name: "2Pスーツ", price: "¥60,000", tax: "税込66,000" },
  { name: "3Pスーツ", price: "¥75,000", tax: "税込82,500" },
  { name: "ジャケット", price: "¥40,000", tax: "税込44,000" },
  { name: "スラックス", price: "¥27,000", tax: "税込29,700" },
  { name: "ベスト", price: "¥24,000", tax: "税込26,400" },
  { name: "シャツ", price: "¥13,000", tax: "税込14,300" },
  { name: "ネクタイ", price: "¥13,000", tax: "税込14,300" },
  { name: "コート", price: "¥70,000", tax: "税込77,000" },
  { name: "ドレスTシャツ", price: "¥13,000", tax: "税込14,300" },
  { name: "ポロシャツ", price: "¥13,000", tax: "税込14,300" },
  { name: "ベルト", price: "¥15,000", tax: "税込16,500" },
];

const giftCards = [
  { price: "¥10,000", tax: "税込11,000" },
  { price: "¥30,000", tax: "税込33,000" },
  { price: "¥50,000", tax: "税込55,000" },
];

export default function Price() {
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
    <section id="price" ref={ref}>
      {/* Intro */}
      <div className="py-24 md:py-32 bg-warm-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/lineup-suit.jpg"
                  alt="オーダースーツ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>

            <div>
              <p className="text-xs tracking-widest text-primary uppercase mb-3">
                Price
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-gray-800 mb-8">
                適正価格で、<br />理想のオーダースーツを。
              </h2>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  オーダースーツを作る際、オプションが重なって予想外の高額になってしまった経験はありませんか？
                </p>
                <p>
                  Tailor maison Défi（テーラーメゾンディフィ）では、お客様に心からカスタマイズを楽しんでいただけるよう、他店では有料となる上質な仕立てをすべて「標準仕様」として最初から価格に含めています。
                </p>
                <p>
                  表示価格のまま、安心して理想の1着をお仕立てください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Features */}
      <div className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Standard
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-gray-800">
              標準仕様の例
            </h3>
            <p className="text-xs text-gray-400 mt-2">※記載は一部</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 fade-in-up">
            {standardFeatures.map((feature) => (
              <div
                key={feature}
                className="bg-warm-50 p-5 text-center text-sm text-gray-700 font-light"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Price List */}
      <div className="py-20 md:py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Price List
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-gray-800">
              料金
            </h3>
          </div>

          <div className="fade-in-up bg-white">
            {priceItems.map((item, index) => (
              <div
                key={item.name}
                className={`flex items-center justify-between px-6 md:px-10 py-5 ${
                  index < priceItems.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="text-sm md:text-base text-gray-800">
                  {item.name}
                </span>
                <span className="text-sm md:text-base text-gray-800 text-right">
                  {item.price}
                  <span className="text-xs text-gray-400 ml-1">
                    ({item.tax})〜
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Gift Cards */}
          <div className="mt-12 fade-in-up">
            <h4 className="text-lg font-serif font-light text-gray-800 mb-4 text-center">
              お仕立て券
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {giftCards.map((card) => (
                <div
                  key={card.price}
                  className="bg-white p-6 text-center"
                >
                  <p className="text-lg md:text-xl font-serif font-light text-gray-800">
                    {card.price}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    ({card.tax})
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">
              ※ご予算に応じて変更可能です
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
