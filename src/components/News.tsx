import { useEffect, useRef } from "react";

const img = "/images/fabric-placeholder.jpg";

interface FabricBrand {
  name: string;
  nameJa: string;
  description: string;
  representative?: string;
  logo?: string;
}

interface FabricSection {
  region: string;
  regionSub: string;
  brands: FabricBrand[];
}

const suitFabrics: FabricSection[] = [
  {
    region: "Italy",
    regionSub: "イタリア",
    brands: [
      {
        name: "Loro Piana",
        logo: "/images/brandlogo/loro-piana.jpg",
        nameJa: "ロロ・ピアーナ",
        description:
          "1924年創業、ゼニアに並ぶ世界的ブランド。カシミヤ／ビキューナなども含め、高級獣毛で世界的地位。「しなやかさと艶」のバランスが秀逸。",
        representative:
          "Four Seasons（フォーシーズンズ）／Tasmanian（タスマニアン）：通年／軽快高番手の二枚看板。Zelander Dream（ジランダードリーム）：春夏の強撚・軽量系。オーストラリス（AUSTRALIS）：スーパー130の美しい艶感の定番生地。",
      },
      {
        name: "Piacenza",
        logo: "/images/brandlogo/piacenza.png",
        nameJa: "ピアチェンツァ",
        description:
          "1733年創業の名門。カシミヤで名高く、梳毛も上品な艶と軽さ。高級獣毛ミックスのドレッシーなジャケット地も人気。",
        representative: "カシミヤ／ウール＆カシミヤ、ライトフランネル他",
      },
      {
        name: "Ermenegildo Zegna",
        logo: "/images/brandlogo/zegna.jpg",
        nameJa: "エルメネジルド・ゼニア",
        description:
          "1910年、トリヴェロ創業の言わずと知れたトップブランド。艶・手触り・発色の良さに加え、シリーズごとの機能性提案も豊富。",
        representative:
          "Trofeo（トロフェオ）／Electa（エレクタ）：同社の王道生地。特にトロフェオの艶は唯一無二。Traveller（トラベラー）：耐シワ・耐久志向。Cool Effect（クールエフェクト）：盛夏向け機能系。",
      },
      {
        name: "TALLIA DI DELFINO",
        logo: "/images/brandlogo/tallia-di-delfino.jpg",
        nameJa: "タリア・ディ・デルフィノ",
        description:
          "1903年創業。ゼニア／ロロピアーナと並ぶ「伊・三大ミル」の一角。艶と発色の良さ、ドレープの美しさでドレッシー需要に強い。",
        representative:
          "Napoli（ナポリ）：軽量な平織り、スーパー130ウールを使用したビジネス向け定番シリーズ。ラーナ＆セータ（Lana & Seta）：シルク混のツヤ感が特長。",
      },
      {
        name: "DRAGO",
        logo: "/images/brandlogo/drago.jpg",
        nameJa: "ドラゴ",
        description:
          "糸から一貫の実力派。ハイツイストや『軽く伸びる』実用ラインで人気。トレンド感と耐久性のバランスが良い。",
        representative:
          "SWING（スウィング）／VANTAGE（ヴァンテージ）：機能・実用系の定番ライン。SKYFALL（スカイフォール）：Super180's原毛でヘビーウェイトに織るラグジュアリー系。",
      },
      {
        name: "Vitale Barberis Canonico",
        logo: "/images/brandlogo/canonico.png",
        nameJa: "ヴィタール・バルベリス・カノニコ",
        description:
          "1663年創業の大黒柱。選びやすい目付と色柄の『王道イタリアン』。初めてのオーダーにも安心のクオリティとコスパ。",
        representative:
          "Perennial（ペレニアル）／Revenge（リベンジ）：王道ライン。Supersonic（スーパソニック）：防シワ・ストレッチ系ながらラグジュアリー感も。",
      },
      {
        name: "REDA",
        logo: "/images/brandlogo/reda.jpg",
        nameJa: "レダ",
        description:
          "1865年創業。カノニコと並んで『2大コスパ生地』と称される。コストと質感のバランスがよく、日常使いで頼れるラインが豊富。トレンド配色も得意。",
        representative:
          "MAIOR（マイオール）／FLEXO（フレクソ）：高番手の高級ラインでありながらナチュラルストレッチ系。ACTIVE（アクティブ）／ICESENSE（アイスセンス）：機能系レンジ。",
      },
      {
        name: "BIELLESI",
        logo: "/images/brandlogo/biellesi.jpg",
        nameJa: "ビエレッシ",
        description:
          "ビエラ地区の歴史ある生地産地で織られる高品質なイタリア生地。",
        representative: "COLLEZIONI、R、M、STシリーズ。",
      },
      {
        name: "E.THOMAS",
        logo: "/images/brandlogo/ethomas.jpg",
        nameJa: "イートーマス",
        description:
          "1922年にスイスのルガーノで創業されたイタリアの高級テキスタイルメーカー。",
        representative:
          "ウール、カシミヤ、シルク、リネンなどの天然素材を混紡した高品質な生地。",
      },
      {
        name: "MARLANE",
        logo: "/images/brandlogo/marlane.jpg",
        nameJa: "マルラーネ",
        description:
          "1952年創業の、マルゾットグループに属する高級生地メーカー。",
        representative:
          "SUPER 100'S〜120'Sの梳毛生地があり、耐久性や実用性が高く、ビジネスマンに人気。「プリマティスト」や「ザ・ガード」など防シワ性や撥水加工が施されている。",
      },
      {
        name: "Lanificio di Pray",
        logo: "/images/brandlogo/lanificio-di-pray.jpg",
        nameJa: "ラニフィーチョ ディ・プレイ",
        description:
          "イタリアのビエラ地方にて1948年創業の高級生地メーカー。",
      },
    ],
  },
  {
    region: "England",
    regionSub: "イギリス",
    brands: [
      {
        name: "DORMEUIL",
        logo: "/images/brandlogo/dormeuil.jpg",
        nameJa: "ドーメル",
        description:
          "1842年創業の仏系マーチャント。本社はパリですが、紳士服地は伝統的に英国内の名門ミルで製織。英国の骨太さとフランス的な艶感を併せ持ち、ビスポーク〜メゾンまで採用実績が幅広い総合ブランドです。",
        representative:
          "Amadeus（アマデウス）／Amadeus365（アマデウス365）：秋冬～通年向けの定番ライン。EXEL / EXEL NANO（エクセル）：ピュアウールのストレッチ系。Tonik Wool / Tonik 2000（トニック）：モヘア系の名作リバイバル。",
      },
      {
        name: "SCABAL",
        logo: "/images/brandlogo/scabal.jpg",
        nameJa: "スキャバル",
        description:
          "1938年創業。ベルギー系マーチャントで、製織は英国中心。ラインナップが非常に広く、伝統的な英国梳毛〜高番手のラグジュアリー、個性派のコレクションまで『選ぶ楽しさ』が魅力。",
        representative:
          "ザ・ロイヤル / The Royal：Super100'の定番シリーズ。Londoner（ロンドナー）：S140'sの艶とドレープ。Galaxy（ギャラクシー）：色柄が豊富な王道コレクション。Image（イマージュ）：実用寄りの春夏系スーティング。",
      },
      {
        name: "HOLLAND & SHERRY",
        logo: "/images/brandlogo/holland-sherry.jpg",
        nameJa: "ホーランド＆シェリー",
        description:
          "1836年にロンドンで創業した歴史ある織物商社。主に高品質な生地を提供しており、特にドブクロス製法で作られる生地が有名。",
        representative:
          "Cape Horn（トロピカルな生地）、Crisp Aire（清涼感のある素材）、SherryKash（カシミヤをブレンドした生地）、Formals Collection（フォーマルスーツ用の生地）など。",
      },
      {
        name: "Harrisons of Edinburgh",
        logo: "/images/brandlogo/harrisons.webp",
        nameJa: "ハリソンズ・オブ・エジンバラ",
        description:
          "1863年にエジンバラで創業された英国の名門生地商社。クラシックな英国スーツ地を提供し、特に高品質なウーステッド生地に定評があります。",
        representative:
          "Mystique（クラシックな英国スーチング）、FRONTIER（夏物に適した生地）、REGENCY（厳選されたメリノウールを使用し、軽快感のあるボディー）、Premier Cru（ハリソンズの高級レンジ）、Revised Classics（定番をアップデートし、現代的な感覚で再解釈したシリーズ）",
      },
      {
        name: "LASSIERE MILLS",
        logo: "/images/brandlogo/lassiere-mills.jpg",
        nameJa: "ラッシャーミルズ",
        description:
          "1949年、イングランド北部のYORKSHIRE（ヨークシャー）にある高級服地の聖地HUDDERSFIELD（ハダースフィールド）に設立されました。",
        representative:
          "CLASSIC MOHAIR（5%の混紡ながらモヘア特有のシャリ感を持ち、トレンドを抑えた遊び心も楽しめる生地）、LUSTER FINISH（春夏の素材でありながら光沢感を持ち、非常に上品なトロピカル生地）",
      },
      {
        name: "FOX BROTHERS",
        logo: "/images/brandlogo/fox-brothers.jpg",
        nameJa: "フォックスブラザーズ",
        description:
          "1772年創業。フランネルの代名詞的存在。重たすぎない柔らかな起毛感と上質なメランジ感で世界的評価が高く、秋冬に『雰囲気で差がつく』一本柱。",
        representative:
          "FOX CITY（フォックスシティ）：ハイツイストの平織り系。FOX AIR（フォックスエア）：盛夏向けの強撚系。",
      },
      {
        name: "DARROW DALE",
        logo: "/images/brandlogo/darrow-dale.png",
        nameJa: "ダローデイル",
        description:
          "1819年に創業されたイギリスの名門服地メーカー。実は日本のマーチャントが全て取り仕切っているので、日本以外の国では手に入らないという、面白いバックグラウンドがあります。英国生地ならではのコシと上品な光沢感が特徴です。",
      },
      {
        name: "Marling & Evans",
        logo: "/images/brandlogo/marling-evans.jpg",
        nameJa: "マーリング＆エヴァンス",
        description:
          "1782年創業。ナチュラルカラーやサスティナブル志向の梳毛・紡毛に強く、英国らしい素朴さと現代的センスの折衷が魅力。",
        representative:
          "Undyed British Wool（アンダイド）：無染色の人気生地。",
      },
    ],
  },
  {
    region: "Japan",
    regionSub: "国産",
    brands: [
      {
        name: "御幸毛織",
        logo: "/images/brandlogo/miyuki.jpg",
        nameJa: "",
        description:
          "日本を代表する総合毛織メーカー。ビジネス用途に最適な安定品質から高付加価値ラインまで幅広く、国内の気候・実用に即したコレクションが強み。",
        representative:
          "NAPOLENA（ナポレナ）：フラッグシップ梳毛。SHALICK（シャリック）：盛夏向けロングセラー。ACTIVA（アクティバ）：ストレッチ／耐シワ系。",
      },
      {
        name: "葛利毛織",
        logo: "/images/brandlogo/kuzuri.png",
        nameJa: "",
        description:
          "旧式織機を駆使した表情豊かな質感で知られる老舗。ドライタッチの強撚ウールや清涼感のある春夏素材など、クラフト感ある『良い顔』が持ち味。",
        representative:
          "DOMINX Standard Collection：DOMINXの基本バンチ。",
      },
      {
        name: "KUNISHIMA",
        logo: "/images/brandlogo/kunishima.jpg",
        nameJa: "",
        description:
          "尾州で最も古い歴史を持つ日本のテキスタイルメーカー。しなやかさと高い張り感を兼ね備えており、ウインドーペーン、ストライプ、トラッド柄などの美しい色で仕上げられ、周囲の方に安心感や信頼感を与えます。",
      },
      {
        name: "三星毛織",
        logo: "/images/brandlogo/mitsuboshi.png",
        nameJa: "",
        description:
          "創業は1887年（明治20年）と古く、尾州地域のなかでも主要なメーカーに数えられる三星毛織。特徴は、カシミヤやキャメル、アルパカなどの高級獣毛繊維をバラエティー豊かなコレクションとしてラインナップしている所です。",
      },
    ],
  },
];

const shirtFabrics: FabricBrand[] = [
  {
    name: "Caccioppoli",
    logo: "/images/brandlogo/caccioppoli.png",
    nameJa: "カチョッポリ",
    description:
      "イタリアのナポリで生産され、独特のカラーバリエーションと色使いが特徴。",
  },
  {
    name: "ALBINI",
    logo: "/images/brandlogo/albini.jpg",
    nameJa: "アルビニ",
    description: "イタリアの伝統と革新を誇るシャツ生地界の巨星。",
  },
  {
    name: "CANCLINI",
    logo: "/images/brandlogo/canclini.jpg",
    nameJa: "カンクリーニ",
    description: "現代的センスと伝統を兼ね備えた人気ブランド。",
  },
  {
    name: "THOMAS MASON",
    logo: "/images/brandlogo/thomas-mason.jpg",
    nameJa: "トーマス・メイソン",
    description: "英国のクラシックとエレガンスを体現する名門。",
  },
  {
    name: "ALUMO",
    logo: "/images/brandlogo/alumo.png",
    nameJa: "アルモ",
    description:
      "スイスらしい徹底した品質管理で知られる高級シャツ生地メーカー。",
  },
  {
    name: "Getzner",
    logo: "/images/brandlogo/getzner.jpg",
    nameJa: "ゲッツナー",
    description:
      "英国製でもイタリア製でもない、またスイス製でもない珍しいオーストリア製の生地。凹凸感（立体感）のある表情や織り柄の陰影を活かしたファンシーなテクスチャーが持ち味。",
  },
  {
    name: "CARLO RIVA",
    logo: "/images/brandlogo/carlo-riva.jpg",
    nameJa: "カルロ・リーバ",
    description: "『生地の芸術品』とも言われる幻の最高級ブランド。",
  },
  {
    name: "MONTI",
    logo: "/images/brandlogo/monti.jpg",
    nameJa: "モンティ",
    description: "イタリアンファブリックの粋と実用性を両立。",
  },
];

function BrandCard({ brand }: { brand: FabricBrand }) {
  return (
    <div className="fade-in-up grid md:grid-cols-[280px_1fr] gap-6 md:gap-10 items-start">
      <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-4">
        <img
          src={brand.logo || img}
          alt={brand.name}
          className={brand.logo ? "max-w-full max-h-full object-contain" : "w-full h-full object-cover"}
        />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-serif font-light text-gray-800">
          {brand.name}
        </h3>
        {brand.nameJa && (
          <p className="text-xs text-accent tracking-wide mt-1">
            {brand.nameJa}
          </p>
        )}
        <p className="text-sm text-gray-600 leading-relaxed mt-4">
          {brand.description}
        </p>
        {brand.representative && (
          <div className="mt-3">
            <p className="text-xs text-primary font-medium mb-1">代表生地</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              {brand.representative}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Fabric() {
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
    ref.current
      ?.querySelectorAll(".fade-in-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="fabric" ref={ref} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Fabric
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-4">
            凛と、美しく。
          </h2>
          <p className="text-lg font-serif font-light text-gray-700 mb-6">
            洗練されたクオリティーファブリック
          </p>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            イタリア、イギリスファブリックを中心に取り揃えており、ご希望やご予算に応じてご提案させていただきます。あらかじめご希望の生地メーカーや記載のない気になるブランドがございましたら、事前にお問い合わせいただけますと幸いです。
          </p>
        </div>

        {/* Suit Fabrics */}
        <div className="fade-in-up text-center mt-20 mb-16">
          <h3 className="text-2xl font-serif font-light text-gray-800 tracking-wide">
            Suit Fabric
          </h3>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>

        {suitFabrics.map((section) => (
          <div key={section.region} className="mb-20">
            {/* Region header */}
            <div className="fade-in-up flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gray-200" />
              <div className="text-center">
                <p className="text-lg font-serif font-light text-gray-800 tracking-widest">
                  {section.region}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {section.regionSub}
                </p>
              </div>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Brand list */}
            <div className="space-y-12">
              {section.brands.map((brand) => (
                <BrandCard key={brand.name} brand={brand} />
              ))}
            </div>
          </div>
        ))}

        {/* Shirt Fabrics */}
        <div className="fade-in-up text-center mt-24 mb-16">
          <h3 className="text-2xl font-serif font-light text-gray-800 tracking-wide">
            Shirt Fabric
          </h3>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>

        <div className="space-y-12">
          {shirtFabrics.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>

        {/* Note */}
        <div className="fade-in-up mt-20 text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            ※シーズン毎の仕入れ状況により、取扱い生地ブランドに変動があります。
          </p>
        </div>
      </div>
    </section>
  );
}
