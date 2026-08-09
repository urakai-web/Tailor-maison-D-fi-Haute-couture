import { useEffect, useRef } from "react";

const beltItems = [
  {
    name: "アメリカンオイルレザーベルト",
    nameEn: "American Oil Leather Belt",
    description:
      "アメリカ産の最高品質オイルレザーを使用した逸品。ハードな使用にも耐えうる丈夫さと、手に馴染む上質な柔らかさを兼ね備えています。独自の伸縮構造により様々な動きに追従し、腹部をやさしく包み込みます。裏革にはイタリア産本革のブラックカラーを採用。バックルはアンティークシルバー・アンティークゴールドの2色展開で、革の雰囲気をさらに引き立てます。",
    specs: "表＝本革（アメリカシカゴ製）／裏＝本革（イタリアトリノ製）／バックル：真鍮（埼玉県羽生製）／カラー：ブラック・ブラウン・ネイビー（3色）／帯幅：33mm",
    image: "/images/belt-american-oil.jpg",
  },
  {
    name: "栃木レザーオイルシュリンクベルト",
    nameEn: "Tochigi Leather Oil Shrink Belt",
    description:
      "ベジタブルタンニン鞣しの製法を頑なに貫く、国内屈指の産地で生まれたオイルシュリンクレザーを使用。使い込むほどに深まる経年変化と革の味わいは格別です。その優位性を活かしながら独自の伸縮機能を搭載。クールさを演出するブラックニッケルのバックルと相まって、日本の革を所有する喜びを存分に味わえる一本です。",
    specs: "表＝本革（栃木県栃木製）／裏＝本革（イタリア製）／バックル：真鍮（埼玉県羽生製）／カラー：ブラック・ダークブラウン・ネイビー（3色）／帯幅：33mm",
    image: "/images/belt-tochigi.jpg",
  },
  {
    name: "イタリアンシュリンクレザーベルト",
    nameEn: "Italian Shrink Leather Belt",
    description:
      "世界最高峰の革産地、イタリア・トスカーナ地方の上質なシュリンク型押しレザーを使用。使うほどに味わいが増す様は革好きの方を魅了し続けます。裏革にはヨーロッパの名だたるブランドでも採用されるイタリア製本革を使用。独自の伸縮機能により帯自体で最大5cm伸縮し、腹部の圧迫感から解放されます。",
    specs: "",
    image: "/images/belt-italian-shrink.jpg",
  },
  {
    name: "バックスキンベルト",
    nameEn: "Buckskin Belt",
    description:
      "コーディネートの定番素材であるバックスキン（スエード）に伸縮機能を搭載。国内有数の革産地・姫路産のバックスキンを使用し、裏革にはイタリア製本革を採用しました。本革バックスキンならではの手触りや質感、香りを楽しみながら、帯全体で最大5cm伸縮する快適な着け心地を実現しています。",
    specs: "表＝牛革（日本製）／裏＝牛革（イタリア製）／バックル：真鍮／カラー：ダークブラウン・ブラック・ネイビー（3色）／帯幅：30mm",
    image: "/images/belt-buckskin.jpg",
  },
  {
    name: "姫路スムースレザーベルト",
    nameEn: "Himeji Smooth Leather Belt",
    description:
      "国内有数の革産地、兵庫県姫路産のスムースレザーを使用した、柄のないシンプルなデザインが幅広いシーンに対応する一本。独自の伸縮機能を搭載し、帯自体で最大5cm伸縮。ピン穴への負担も軽減されるため長くご愛用いただけます。",
    specs: "",
    image: "/images/belt-himeji.jpg",
  },
  {
    name: "イタリアンオイルレザーベルト",
    nameEn: "Italian Oil Leather Belt",
    description:
      "イタリア・トスカーナ産オイルレザーに施した流線模様の型押しが、個性と優雅さを醸し出します。裏革には鮮やかなオレンジカラーのイタリア製本革を使用し、見えない部分にも妥協なし。独自の伸縮機能で帯自体が最大4cm伸縮し、上質な本革の味わいとともに快適な着け心地をご堪能いただけます。",
    specs: "",
    image: "/images/belt-italian-oil.jpg",
  },
  {
    name: "イタリアンレザーナローベルト",
    nameEn: "Italian Leather Narrow Belt",
    description:
      "帯幅25mmの細身シルエットが男女問わず幅広いスタイリングに映える、ユニセックス仕様のナローベルト。イタリア・トスカーナ産フィレンツェ近郊のオイルレザーを使用し、使い込むほどに増す艶と色の深みが魅力です。全8色展開のカラーバリエーションと3色のバックルで個性を自由に表現できます。伸縮機能も搭載し、スタイリッシュな見た目と快適な着け心地を両立した、一度使うと手放せない逸品です。",
    specs: "表＝牛革（イタリア トスカーナ製）／裏＝牛革（イタリア トリノ製）／バックル：真鍮／帯幅：25mm",
    image: "/images/belt-narrow.jpg",
  },
];

export default function LineUpBelt() {
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
              Belt
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">
              ベルト
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20 fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/belt-american-oil.jpg"
                  alt="レザーベルト"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>

            <div>
              <h3 className="text-xl font-serif font-light text-gray-800 mb-6">
                Made in Japan 伸びるレザーベルト
              </h3>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  Tailor maison Défi（テーラーメゾンディフィ）では、ドレススタイルに合う本革のレザーベルトでかつ動きやすさも重視した伸びるレザーベルトを販売しております。
                </p>
                <p>
                  メッシュベルトだと少しばかりチープに見えてしまい、通常のレザーベルトだとお腹が圧迫され長時間着用していると不快に。そんなお悩みを解消してくれる逸品ベルトです。
                </p>
                <p>
                  紳士ベルトの町工場として1967年に創業した職人たちが手作りで仕上げる、思いのこもった一本です。
                </p>
              </div>
            </div>
          </div>

          {/* Belt items */}
          <div className="space-y-16">
            {beltItems.map((item, index) => (
              <div
                key={item.name}
                className={`fade-in-up grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <h4 className="text-lg font-serif font-light text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-xs text-accent tracking-wide mb-4">
                    {item.nameEn}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  {item.specs && (
                    <p className="text-xs text-gray-400 leading-relaxed mt-4">
                      {item.specs}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
