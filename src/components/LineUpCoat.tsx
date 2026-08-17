import { useEffect, useRef } from "react";

const coatStyles = [
  {
    name: "チェスターコート（Chester coat）",
    description:
      "英国発祥の正統派スタイルを現代に昇華させたチェスターコート。テーラードジャケットの流れを汲む美しいラペルと端正な膝丈のデザインは、ビジネスシーンに確かな品格を添えます。\n\nさらに、上質な素材選びはもちろん、着丈の微調整やポケットの意匠変更など、ディテールを自分好みに作り込めるのもオーダーならではの贅沢です。",
    image: "/images/coat-chester.jpg",
  },
  {
    name: "ステンカラーコート（Soutien collar coat）",
    description:
      "ステンカラーコートは、後ろ襟が高く立ち上がり、前方に向けて低く折り返る独特の襟線が特徴的な膝丈の定番アウターです。シンプルで洗練されたシルエットは、ビジネスからカジュアルまで幅広いシーンに溶け込みます。\n\n選ぶ素材や細部のディテールによって印象が大きく変わるため、自分のスタイルに合わせた自由なコーディネートを楽しめるのが魅力です。",
    image: "/images/coat-soutien.jpg",
  },
  {
    name: "アルスターコート（Ulster coat）",
    description:
      "大きめの襟元と浅いVライン、そして存在感のあるダブルブレストが目を引くアルスターコート。高い防寒性と気密性を備えた伝統的なミリタリー・ワークスタイルをベースに、現代の街に馴染む洗練されたシルエットへと進化を遂げました。\n\nそのクラシカルで品格のある佇まいは、世代を問わず多くの男性を魅了しています。機能美だけにとどまらない、冬の装いを格上げしてくれる特別な一着です。",
    image: "/images/coat-ulster.jpg",
  },
  {
    name: "ラグランコート（raglan coat）",
    description:
      "しっかりとしたコート生地で仕立てるのはもちろんの事、スーツやジャケット用のフランネル素材で仕立てても柔らかい雰囲気が強調されて素敵です。また、スプリングコートもしくはレインコートとして、コットンギャバジンやワックスドコットン、さらにはナイロンで仕立てるのもおすすめ。堅苦しく無い雰囲気で、着こなし次第でビジネスから普段使いまで可能です。",
    image: "/images/coat-raglan.jpg",
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
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img src={style.image} alt={style.name} className="w-full h-full object-contain" />
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
