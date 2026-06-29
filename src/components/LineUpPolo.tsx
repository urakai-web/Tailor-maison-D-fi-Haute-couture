import { useEffect, useRef } from "react";

const features = [
  {
    title: "立体的な「台襟」仕様",
    description: "ワイシャツと同じ帯状のパーツを採用。襟元がへたらず、人前に立つシーンでもピシッとした誠実な印象を与えます。",
  },
  {
    title: "50種類以上の厳選生地",
    description: "高級ドレスシャツのような上質素材から、ノンアイロン、高ストレッチ、接触冷感、吸汗速乾など、夏のビジネスを快適にする高機能素材を豊富にラインナップ。",
  },
  {
    title: "自由なカスタマイズ",
    description: "色や柄だけでなく、襟・袖・ボタン・ポケットの形まで、職場の雰囲気や好みに合わせて自由にデザインできます。",
  },
];

export default function LineUpPolo() {
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
            <p className="text-xs tracking-widest text-primary uppercase mb-3">Polo Shirt</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">オーダーポロシャツ</h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20 fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/lineup-suit.jpg" alt="オーダーポロシャツ" className="w-full h-full object-cover" /> {/* TODO: ポロシャツ用の画像に差し替え */}
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-light text-gray-800 mb-6">
                ビジネスカスタムメイド ポロシャツ
              </h3>
              <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                <p>
                  ビジネスシーンで一番サマになる、あなただけの理想のポロシャツを。
                </p>
                <p>
                  「仕事で着るにはカジュアルすぎる」「既製品ではサイズが合わない」そんなビジネスパーソンの悩みを解決する、オーダーメイドのビジネスポロシャツです。上品なシルエットで、ワイシャツ代わりとしてはもちろん、ジャケットと合わせても美しく決まります。
                </p>
              </div>
            </div>
          </div>

          {/* 3 Features */}
          <div className="mb-16 fade-in-up">
            <h4 className="text-center text-lg font-serif font-light text-gray-800 mb-8">
              3つのこだわり
            </h4>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="bg-warm-50 p-8">
                  <h5 className="text-sm font-medium text-gray-800 mb-3">{f.title}</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center leading-relaxed fade-in-up">
            「もしかして、ワイシャツのときよりピシッとしてるかも。」そう実感できる、あなただけの特別な一着をご提案致します。
          </p>
        </div>
      </div>
    </section>
  );
}
