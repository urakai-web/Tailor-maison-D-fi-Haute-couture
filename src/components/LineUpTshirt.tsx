import { useEffect, useRef } from "react";

export default function LineUpTshirt() {
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
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">T-Shirt</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">オーダーTシャツ</h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {/* REDA ACTIVE */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20 fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/lineup-suit.jpg" alt="REDA ACTIVE Tシャツ" className="w-full h-full object-cover" /> {/* TODO: Tシャツ用の画像に差し替え */}
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-light text-gray-800 mb-6">
                REDA ACTIVE
              </h3>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  イタリアの老舗生地メーカー"REDA"より抜群の伸縮性のあるREDA ACTIVEを使用したオーダーWOOL Tシャツ。
                </p>
                <p>
                  REDA ACTIVE が使用するウールは、牧場まで完全に追跡できるZQ認定のミュールジングフリーのメリノウールです。REDAの高品質な素材は環境配慮されたサステナブルな工程によって作られます。
                </p>
                <p>
                  通気性が高く、抗菌防臭、調温機能で蒸れずに快適で、滑らかな肌さわりでありながら、皺になりにくい為、出張にも最適です。ウールの弱点であったチクチクする、洗うと縮むというデメリットを克服し、洗濯機で洗うことも可能となりました。高品質とイージーケアを両立した究極のシャツ素材です。
                </p>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="bg-warm-50 p-8 md:p-12 mb-16 fade-in-up">
            <h4 className="text-center text-lg font-serif font-light text-gray-800 mb-6">
              REDA ACTIVE スペック
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div><span className="text-xs text-accent block mb-1">素材</span>SUPER120's merino wool 100%</div>
              <div><span className="text-xs text-accent block mb-1">目付</span>190～350g/m</div>
              <div><span className="text-xs text-accent block mb-1">コレクション</span>30色以上</div>
              <div><span className="text-xs text-accent block mb-1">サイズ</span>XXS～6XL</div>
              <div><span className="text-xs text-accent block mb-1">タイプ</span>クルーネック・モックネック・ロングスリーブ・ハーフスリーブ</div>
              <div><span className="text-xs text-accent block mb-1">納期</span>約3週間（着丈や袖の長さの微調整可）</div>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-3xl mx-auto space-y-5 text-sm text-gray-600 leading-relaxed fade-in-up">
            <p>
              高品質メリノウールSUPER120'sを贅沢に使用することでウール特有のあのいやな"チクチク"感は皆無です！また、他の繊維に比べ汗や湿気を外部へ放出する能力が高いのでいつでも快適に過ごせます。
            </p>
            <p>
              そのほか、メリノウールは抗菌性もあり、臭いのもととなるバクテリアなどの繁殖を抑えることでほかの繊維より防臭効果が期待できます。
            </p>
            <p>
              また、消耗品という観点から国産の綿100％の生地でお買い求めしやすく高品質なオーダーTシャツもご用意がございます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
