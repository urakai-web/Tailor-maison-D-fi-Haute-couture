import { useEffect, useRef } from "react";

const tieDetails = [
  {
    title: "シルエット",
    titleEn: "Silhouette",
    description:
      "ノットやディンプルが作りやすいように、誰でも簡単に美しく結べるように、胸元にあたるシルエットで設計させているのが特徴です。\n\n既成のネクタイは、ストレートに近い型が多いですが、Tailor maison Défi（テーラーメゾンディフィ）では、つけた後のシルエットが美しくなるように、首元部分から大剣にかけゆるやかなS字を描くボトル型のシルエットを推奨しております。\n\nこの曲線の位置や幅を体型にあわせて、調整していますので、胸元はふわっと、ノットはきゅっとしまったネクタイとして、理想的な美しいシルエットが描けるようになっています。",
    image: "/images/lineup-suit.jpg", // TODO: シルエット用の画像に差し替え
  },
  {
    title: "結びやすさ",
    titleEn: "Easy to Tie",
    description:
      "この結び易さをサポートするのが、100%のウール芯と、結び始めが分かるココムスポイントです。\n\n一般的なネクタイに使用される化繊の芯に比べて、ウール芯は柔らかいためネクタイがスムーズにしまり、ノットが綺麗に整います。\n\nココムスポイントは、ネクタイを結び始める際に大剣と小剣を交差する目安となるポイントです。このポイントを基準に結んで頂けると、結び上がりの長さが丁度ベルト付近にくるので結び直さなくて済みますよというポイントになっています。",
    image: "/images/lineup-suit.jpg", // TODO: 結びやすさ用の画像に差し替え
  },
  {
    title: "セッテピエゲ・ディエチピエゲ",
    titleEn: "Sette Pieghe / Dieci Pieghe",
    description:
      "セッテピエゲ・ディエチピエゲとは、芯が入っていないネクタイです。芯の代わりに、表地を何層にも織り込んで仕立て上げていきます。生地を折り畳む回数がそれぞれ異なります。\n\nセッテピエゲ・ディエチピエゲを縫製できる職人がいる工房は国内でもかなり希少です。通常のネクタイと比べ約２倍の生地を使い、生地を何回も折り返すことからうまくネクタイの形に折り込めるよう型を設計することがとても大事になるからです。最難易度のネクタイと言っても過言ではありません。\n\n最大の魅力は、芯がないため結んだ際、生地のはりに応じて自然なしわが入り、通常のネクタイ以上に、深みのあるディンプルに仕上がります。",
    image: "/images/lineup-suit.jpg", // TODO: セッテピエゲ用の画像に差し替え
  },
];

export default function LineUpTie() {
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
              Tie
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">
              ネクタイ
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20 fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/lineup-suit.jpg" // TODO: ネクタイメイン画像に差し替え
                  alt="オーダーネクタイ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>

            <div>
              <h3 className="text-xl font-serif font-light text-gray-800 mb-6">
                Made in JAPANの誇り。
              </h3>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  国内老舗工房によるハンドメイドネクタイ。多くの手作業が入る工程の為、締め応えやVゾーンの立体感が違います。ネクタイの柄は100種類以上、ネクタイの長さや、剣先の幅、芯地の太さや厚みなど、ご自身のご希望に合わせてお選びいただけます。
                </p>
                <p>
                  きちんとネクタイをしめることで、埋もれない存在感、強固な信頼感の獲得につながります。それは、国際基準のフォーマルでもあり、世界中で最も広く通じるビジネスの公式的な記しともいえます。
                </p>
                <p>
                  良質なネクタイをきちんとしめる。ノータイ化がすすむ現代だからこそ、そこに違いや魅力がうまれるのです。
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-16 mb-20">
            {tieDetails.map((detail, index) => (
              <div
                key={detail.title}
                className={`fade-in-up grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={detail.image} alt={detail.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <h4 className="text-lg font-serif font-light text-gray-800">
                    {detail.title}
                  </h4>
                  <p className="text-xs text-accent tracking-wide mb-4">
                    {detail.titleEn}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                    {detail.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Uniform / Gift */}
          <div className="grid md:grid-cols-2 gap-12 fade-in-up">
            <div className="bg-warm-50 p-8">
              <h4 className="text-lg font-serif font-light text-gray-800 mb-4">
                ユニフォーム・リボン・特殊タイ
                <span className="block text-xs text-accent tracking-wide mt-1">
                  Uniform / Ribbon / Special Tie
                </span>
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                国内有数の大企業の制服で使用されるネクタイや衣装を担っている工房です。制服や衣装としてご利用の際もぜひ御相談ください。
              </p>
            </div>
            <div className="bg-warm-50 p-8">
              <h4 className="text-lg font-serif font-light text-gray-800 mb-4">
                ギフト（GIFT）
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                オーダーネクタイは、プレゼント用でも人気がございます。プレゼントする方を思い浮かべ、オリジナルのネクタイをオーダーしてみませんか？また、プレゼントの場合、専用のギフトボックスをご用意いたします。お気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
