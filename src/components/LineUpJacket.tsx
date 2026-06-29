import { useEffect, useRef } from "react";

export default function LineUpJacket() {
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
            <p className="text-xs tracking-widest text-primary uppercase mb-3">Jacket</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">ジャケット</h2>
            <div className="w-12 h-px bg-accent mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/lineup-suit.jpg" alt="ジャケット" className="w-full h-full object-cover" /> {/* TODO: ジャケット用の画像に差し替え */}
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
            <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
              <p>
                様々なニーズに応じたジャケパンスタイルをご準備しています。on/offで使用できる万能スタイル・ビジネススタイル・優雅なリゾートスタイル・ポップなカジュアルスタイルなど、その場の雰囲気を盛り上げるコーディネートをご提案いたします。
              </p>
              <p>
                大人の男性にとってテーラードジャケットは、ワードローブに必須の最強かつ万能なアイテムです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
