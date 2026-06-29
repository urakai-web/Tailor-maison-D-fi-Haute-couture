import { useEffect, useRef } from "react";

const suitStyles = [
  {
    name: "Italian classico style",
    description:
      "クラシカルなイタリアンモデル。英国モデルのような、かっちりとした印象とは違い、柔らかな印象。緩やかなドロップショルダー。丸みのあるシルエットが特徴的。遊び心のあるエレガンスなスタイル。30代〜幅広い年齢層の方に人気です。",
    image: "/images/lineup-suit.jpg", // TODO: Italian classico style用の画像に差し替え
  },
  {
    name: "British style",
    description:
      "英国ブリテッシュラインを基軸に、肩先を盛り上げたビルドアップショルダーを採用。前裾を大きく切り落としたカッタウェイフロントにする事で立体感を出しつつ、胸から裾にかけて、体に沿いながら流線を作っている。",
    image: "/images/lineup-suit.jpg", // TODO: British style用の画像に差し替え
  },
  {
    name: "Casual style",
    description:
      "基本的には、全てのモデルでの対応が可能。アウトポケットや腰紐付きのウエストゴムパンツ、スポーティージャケットなどの特殊モデルまで対応しております。",
    image: "/images/lineup-suit.jpg", // TODO: Casual style用の画像に差し替え
  },
];

const suitPrices = [
  { name: "2Pスーツ", price: "¥60,000", tax: "税込66,000" },
  { name: "3Pスーツ", price: "¥75,000", tax: "税込82,500" },
  { name: "ジャケット", price: "¥40,000", tax: "税込44,000" },
  { name: "スラックス", price: "¥27,000", tax: "税込29,700" },
  { name: "ベスト", price: "¥24,000", tax: "税込26,400" },
];

export default function LineUpSuit() {
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
              Suit
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">
              スーツ
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20 fade-in-up">
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

            <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
              <p>
                当店では、創り手とお客様の感覚にギャップがうまれないように、ゲージ服を活用しながらメイドトゥメジャー（イージーオーダー）を採用しております。
              </p>
              <p>
                大手百貨店ブランドや安価なチェーン店とは異なり、細かな体型の補正に加え、通常では難しいようなデザインにも幅広く対応。シルエットや、着心地にも大きな違いが感じられ『こんなのあったらいいな』をカタチにすることができます。
              </p>
              <p>
                縫製に関しては、老舗テーラー直系の高度な職人技と最新テクノロジーを融合させた「多品種大量生産」のオーダーメイド体制にある工房と提携しているため、基本は1か月以内で納品できます。
              </p>
              <p>
                また、IACDA（国内衣装デザイナー・エグゼクティブ協会）日本支部から毛芯技術や品質、技術者の優秀さが認められ、国内最優秀縫製工場として、最高の評価三ツ星に認定されている工房なども契約しており、お客様のニーズに適正な工房でお仕立ていたします。
              </p>
              <p>
                ビジネスはもちろん、パーティーシーンやカジュアルスタイルのご提案も致します。
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="mb-20 fade-in-up">
            <h3 className="text-center text-lg font-serif font-light text-gray-800 mb-6">
              Price
            </h3>
            <div className="bg-warm-50">
              {suitPrices.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between px-6 md:px-10 py-4 ${
                    index < suitPrices.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="text-sm text-gray-800">{item.name}</span>
                  <span className="text-sm text-gray-800">
                    {item.price}
                    <span className="text-xs text-gray-400 ml-1">({item.tax})〜</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Styles */}
          <div className="mb-20">
            <div className="text-center mb-12 fade-in-up">
              <h3 className="text-xl font-serif font-light text-gray-800 tracking-wide">
                Style
              </h3>
              <div className="w-12 h-px bg-accent mx-auto mt-4" />
            </div>

            <div className="space-y-16">
              {suitStyles.map((style, index) => (
                <div
                  key={style.name}
                  className={`fade-in-up grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={style.image}
                        alt={style.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                    <h4 className="text-lg font-serif font-light text-gray-800 mb-4">
                      {style.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {style.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attention to detail */}
          <div className="fade-in-up">
            <div className="text-center mb-12">
              <h3 className="text-xl font-serif font-light text-gray-800 tracking-wide">
                Attention to detail
              </h3>
              <p className="text-xs text-gray-400 mt-1">細部へのこだわり</p>
              <div className="w-12 h-px bg-accent mx-auto mt-4" />
            </div>

            <div className="space-y-5 text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                オーダーメイドの魅力のひとつでもある細部へのこだわり。スーツを創る上で最も重要な項目の一つとされる、ジャケットの芯について。
              </p>
              <p>
                Tailor maison Défi（テーラーメゾンディフィ）では、多くのジャケットの芯地に毛芯を用いており、用途やイメージに合わせてフル毛芯、ラペル毛芯、軽量毛芯、芯地なしなど使い分けを行っております。これは、服地の素材、糸の細さ、目付（重さ）、着用用途によって適している芯が異なる為です。毛芯が入る事で、胸廻り立体感や服地のハリなどが生まれ、型崩れもしにくくなります。
              </p>
              <p>
                また、裏地についてなのですが、通常5000～6000円程のキュプラ裏地が標準仕様（無料）となっております。裏地は、デザインだけでなく着心地にも左右します。キュプラ裏地の特徴としては、吸湿速乾性が抜群で、蒸れにくく、滑りが良いという事。汗をかいた時、ポリエステル裏地のムレやべたつきの不快感は、高温多湿である日本で生活していると顕著に感じられます。快適にかっこよく着用するためにも裏地へのこだわりはかかせません。
              </p>
              <p>
                その他にも釦の種類や付け方、ポケット部分の強度を高める仕様、常にシャープな印象をキープできるクリースステッチなどがお選びいただけます。お仕立ていただくオーダースーツを、体にフィットするだけでなく、素敵な見た目のまま、長くご着用いただけるようご提案いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
