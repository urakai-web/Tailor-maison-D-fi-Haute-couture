import { useEffect, useRef } from "react";

const coatStyles = [
  {
    name: "チェスターコート（Chester coat）",
    description:
      "チェスターコートは英国発祥の伝統的なコートです。テーラーメゾンディフィ（Tailor maison Défi）のチェスターコートはその伝統的なデザインを踏襲しながら現代風にアレンジし提案致します。チェスターコートは膝丈程の長さでテーラードジャケットのようなラペルで構成されているため、ビジネスシーンにも最適です。素材はもちろん、着丈の長さやポケットなどのデザインディテールを変更できるのも、オーダーの魅力です。",
    image: "/images/lineup-coat.jpg", // TODO: チェスターコート用の画像に差し替え
  },
  {
    name: "ステンカラーコート（Soutien collar coat）",
    description:
      "ステンカラーコートは後襟部分が高く、前に向かって低く折り返せるようになった、いわゆる襟付きの膝丈コートです。ステンカラーコートもシンプルでどんなシーンにも合わせやすい定番のスタイルですが、素材やデザインディテールなどお好みにあわせて様々なシーンでご着用いただけます。",
    image: "/images/lineup-coat.jpg", // TODO: ステンカラーコート用の画像に差し替え
  },
  {
    name: "アルスターコート（Ulster coat）",
    description:
      "アルスターコートとは、大きな上襟と浅いVゾーン、フロントのダブルブレストのデザインが特徴のコート。特に防寒性や気密性が求められたこのようなデザインを踏襲し、現代的にアレンジされています。クラシカルな印象から幅広い年齢層に人気のアルスターコート。実用面ばかりではなく、冬のお洒落をお楽しみいただけます。",
    image: "/images/lineup-coat.jpg", // TODO: アルスターコート用の画像に差し替え
  },
  {
    name: "ラグランコート（raglan coat）",
    description:
      "しっかりとしたコート生地で仕立てるのはもちろんの事、スーツやジャケット用のフランネル素材で仕立てても柔らかい雰囲気が強調されて素敵です。また、スプリングコートもしくはレインコートとして、コットンギャバジンやワックスドコットン、さらにはナイロンで仕立てるのもおすすめ。堅苦しく無い雰囲気で、着こなし次第でビジネスから普段使いまで可能です。",
    image: "/images/lineup-coat.jpg", // TODO: ラグランコート用の画像に差し替え
  },
];

export default function LineUpCoat() {
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
              Coat
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">
              コート
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-20 fade-in-up">
            <p className="text-sm text-gray-600 leading-relaxed">
              礼節を重んじる方に最適なロングチェスターの重厚なるコートを始め、スーツにはもちろんジャケットスタイルや、カジュアルなニットスタイル等にも最適なショートコート、一重仕立ての軽いコートなどトレンドに合わせた一着をオーダーメイドで承っております。
            </p>
          </div>

          {/* Coat styles */}
          <div className="space-y-16">
            {coatStyles.map((style, index) => (
              <div
                key={style.name}
                className={`fade-in-up grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={style.image} alt={style.name} className="w-full h-full object-cover" />
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

          {/* Note */}
          <p className="text-xs text-gray-400 text-center mt-16 fade-in-up">
            ※他にもご要望のデザインがある場合はお気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}
