import { useEffect, useRef } from "react";

export default function LineUpVest() {
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
            <p className="text-xs tracking-widest text-primary uppercase mb-3">Gilet / Vest</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">ジレ・ベスト</h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {/* 1. スリーピース用ベスト */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24 fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/lineup-suit.jpg" alt="スリーピース用ベスト" className="w-full h-full object-cover" /> {/* TODO: インナーベスト用の画像に差し替え */}
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-light text-gray-800 mb-2">スーツスリーピース用ベスト</h3>
              <p className="text-xs text-accent mb-6">インナーベスト / Inner Vest</p>
              <p className="text-sm text-gray-700 font-medium mb-4">
                【王道の品格】スリーピースで魅せる、洗練されたクラシックスタイル
              </p>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  ジャケットの中に着用し、品格とフォーマル度を格上げするために欠かせないアイテムです。ジャケットを脱いだ瞬間も、圧倒的な美しさと気品をキープ。スーツと同生地で仕立てるスリーピース用ベストは、Vゾーンに奥行きを与え、胸元をたくましく、立体的に演出します。
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-accent flex-none">―</span>
                  <span>美しいVゾーンの設計：ジャケットのボタンを開けた際、最もVゾーンが美しく見える絶妙な襟元の深さを追求。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent flex-none">―</span>
                  <span>もたつきのないシャープな背中：背面には滑りの良い高級キュプラ裏地（またはサテン地）を採用。ジャケットを羽織っても着膨れせず、スマートなシルエットを保ちます。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent flex-none">―</span>
                  <span>こだわりのディテール：フロントの5つ（または6つ）ボタン、ウエストの絞りをミリ単位で調節できる尾錠（バックストラップ）など、正統派の仕様を網羅。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent flex-none">―</span>
                  <span>確かなフォーマル感：結婚式や重要なビジネス商談、パーティーなど、ここぞという場面で大人の風格と信頼感を漂わせます。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. オッドベスト */}
          <div className="grid md:grid-cols-2 gap-16 items-center fade-in-up">
            <div className="md:order-2 relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/lineup-suit.jpg" alt="オッドベスト" className="w-full h-full object-cover" /> {/* TODO: オッドベスト用の画像に差し替え */}
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-accent -z-10" />
            </div>
            <div className="md:order-1">
              <h3 className="text-xl font-serif font-light text-gray-800 mb-2">オッドベスト</h3>
              <p className="text-xs text-accent mb-6">着崩すコーディネート向け / Odd Vest</p>
              <p className="text-sm text-gray-700 font-medium mb-4">
                【個性を愉しむ】いつもの装いを一変させる、主役級の「オッドベスト」
              </p>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  「手持ちのスーツやジャケットに、新鮮な変化を加えたい」「大人のジャケパンスタイルをワンランク上に導きたい」。そんな遊び心を満たす、単体（オッド）で魅せるオーダーベストです。
                </p>
                <p>
                  温かみのあるツイード、爽やかなリネン、艶やかな千鳥格子やチェック柄など、コーディネートの主役になる生地を厳選。背面を裏地ではなく、前身頃と同じ表地で仕立てる「共地バック」の選択も可能で、ジャケットを脱いだときも「カジュアルなアウター」として完璧に成立します。
                </p>
                <p>
                  ノータイでも品良く決まる：シャツの襟元を開けたラフなスタイルでも、ベストを1枚挟むだけでルーズにならず、大人のスマートカジュアルが完成します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
