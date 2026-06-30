import { useEffect, useRef } from "react";

const beltItems = [
  {
    name: "アメリカンオイルレザーベルト",
    nameEn: "American Oil Leather Belt",
    description:
      "アメリカの老舗タンナーであるホーウィン社のオイルレザー「クロムエクセル」。このレザーは世界で愛され続けるアメリカンレザーの代表格です。ハードな使用にも耐えうる丈夫な素材で、その反面手に馴染む上質な柔らかさを併せ持ちます。クロムエクセルレザーの特徴に着目し腹部を柔軟にサポートしながら快適さを追求。デザインはビジネスに偏りすぎないモダンなスタイルを採用しました。ビジネスシーンはもちろんスポーツシーンや作業着への着用など幅広く対応。",
    specs: "表＝本革（アメリカシカゴ製）／裏＝本革（イタリアトリノ製）／バックル：真鍮（埼玉県羽生製）／カラー：ブラック・ブラウン・ネイビー（3色）／帯幅：33mm",
    image: "/images/lineup-suit.jpg", // TODO: アメリカンオイルレザーベルト用の画像に差し替え
  },
  {
    name: "栃木レザーオイルシュリンクベルト",
    nameEn: "Tochigi Leather Oil Shrink Belt",
    description:
      "栃木レザーを使った常識を覆す伸縮ベルト。国内では有数のタンナーである栃木レザーのコラボによって製品化に成功。ベジタブルタンニン鞣しの製法を頑なに貫く栃木レザー。栃木レザーのならではの経年変化や革の味わいは折り紙つきです。この栃木レザーの優位性はそのままに、独自の技法によって伸縮性を持たせた初のベルトです。",
    specs: "表＝本革（栃木県栃木製）／裏＝本革（イタリア製）／バックル：真鍮（埼玉県羽生製）／カラー：ブラック・ダークブラウン・ネイビー（3色）／帯幅：33mm",
    image: "/images/lineup-suit.jpg", // TODO: 栃木レザーベルト用の画像に差し替え
  },
  {
    name: "イタリアンシュリンクレザーベルト",
    nameEn: "Italian Shrink Leather Belt",
    description:
      "幅広い年齢層に人気のあるイタリアンシュリンクレザーシリーズ。世界最高峰の産地であるイタリアトスカーナ地方の上質なシュリンク型押しレザーを使用。使うほどに味わいがます様は革好きの方を魅了し続けます。裏革はヨーロッパの有名バッグブランドで数多く採用されているイタリア製を使用。華やかなオレンジ色が大人の遊び心を演出します。",
    specs: "",
    image: "/images/lineup-suit.jpg", // TODO: イタリアンシュリンクレザーベルト用の画像に差し替え
  },
  {
    name: "バックスキンベルト",
    nameEn: "Buckskin Belt",
    description:
      "人気の高いバックスキン（スエード）シリーズ。靴合わせでは定番のバックスキン（スエードレザー）に伸縮機能を採用し付け心地を追求しました。付け心地の良さはもちろん、伸縮することでピン穴にも負担がかからず驚くほどの高寿命を実現しています。",
    specs: "表＝牛革（日本製）／裏＝牛革（イタリア製）／バックル：真鍮／カラー：ダークブラウン・ブラック・ネイビー（3色）／帯幅：30mm",
    image: "/images/lineup-suit.jpg", // TODO: バックスキンベルト用の画像に差し替え
  },
  {
    name: "姫路スムースレザーベルト",
    nameEn: "Himeji Smooth Leather Belt",
    description:
      "待望のレディースベルトが誕生しました。国内有数の革産地である兵庫県姫路産の日本タンナーズ協会認定レザーを使用。女性のさまざまなシーンにマッチするよう至ってシンプルに、そして耐久性を兼ね備えた日本製本革を使用したJAPAN PRIDEの逸品です。伸縮機能が備わったこちらのベルトは、腰回りをしっかりと支えながら帯自体で最大5センチ伸縮し、着けていることを忘れる程の快適さをご提供します。",
    specs: "",
    image: "/images/lineup-suit.jpg", // TODO: 姫路スムースレザーベルト用の画像に差し替え
  },
  {
    name: "イタリアンオイルレザーベルト",
    nameEn: "Italian Oil Leather Belt",
    description:
      "働き盛りのビジネスマンへ贈る、唯一無二のヨーロピアンシリーズ。選び抜かれたイタリアンオイルレザーに彫られた流線模様が、個性と優雅さを醸し出す。イタリアのトスカーナ地方で作られたオイルレザー使用し、革のもつ強固さと上質さを両立させた逸品。素材自体の持つ耐久性とエイジング（経年変化）は使用者だけが味わえる特別なベルトです。",
    specs: "",
    image: "/images/lineup-suit.jpg", // TODO: イタリアンオイルレザーベルト用の画像に差し替え
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
                  src="/images/lineup-suit.jpg" // TODO: ベルトメイン画像に差し替え
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
                  Tailor maison Défi（テーラーメゾンディフィ）では、ドレススタイルに合う本革のレザーベルトでかつ動きやすさも重視した伸びるレザーベルト（長沢ベルト）を販売しております。
                </p>
                <p>
                  メッシュベルトだと少しばかりチープに見えてしまい、通常のレザーベルトだとお腹が圧迫され長時間着用していると不快に。そんなお悩みを解消してくれる逸品ベルトです。
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
