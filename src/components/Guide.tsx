import { useEffect, useRef } from "react";

const flowSteps = [
  {
    title: "ご予約",
    description:
      "完全予約制となります。LINE・インスタDMよりご予約を承っております。ご希望の日時、出張場所をお知らせください。",
    note: "※自宅サロンでも採寸を承りますので、ご希望の方はご相談下さい。",
    cta: true,
  },
  {
    title: "ご来店・スタイリスト訪問",
    description:
      "ご指定の日時、場所にオーナー自らが伺います。ご自宅、オフィス、レンタルルーム（こちらで手配致します）、自宅サロンなど。",
  },
  {
    title: "ヒアリング",
    description:
      "Tailor maison Défi（テーラーメゾンディフィ）では、ヒアリングをとても大切にしています。オーダースーツをお求めになられるお客様は、どんな「目的」をお持ちでオーダーメイドしたいのか確認させて頂きます。その「目的」を共有させて頂く事で、よりご希望に沿った仕上がりを実現できます。",
  },
  {
    title: "生地選び",
    description:
      "イタリア・イギリスを中心とした、上質な生地を御用意しております。その他に実用的なウォッシャブル生地やシワになりにくい生地もご用意しております。丁寧に生地の説明をしながら、用途に合わせて的確なご提案をさせていただきますので、安心してお任せください。",
  },
  {
    title: "採寸",
    description:
      "理想的な一着は、採寸から生まれます。ミリ単位で寸法を取り、ゲージ服を用いながら着心地や細部の確認を行います。様々な体形に対応可能な、特殊補正を加えながらお客様1人1人に合った一着を仕立てていきます。",
  },
  {
    title: "デザイン",
    description:
      "オーダーの醍醐味であるデザイン決め。豊富な裏地や釦より、お好きなものをお選び頂けます。是非お客様だけの拘りを盛り込んでください。",
  },
  {
    title: "お会計",
    description:
      "お会計は当日となります。現金・バーコード決済・お振込みにて承ります。その他支払い方法をご希望の場合は、ご相談下さい。",
  },
  {
    title: "納品",
    description:
      "基本的には、納品時もご指定頂いた日時、場所へ直接お届けさせて頂きます。仕上がり後の確認も含め一度納品時にフィッティングを推奨しております。サイズの確認と補正の説明をさせて頂きます。ご希望の方には無料でスーツ姿の記念写真を、撮影させて頂いております。皆様の笑顔が見られる、最高の瞬間でもあります。納品は約1ヶ月後となります。お急ぎの方は御予約の際に御相談下さい。",
  },
];

export default function Guide() {
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
    <section id="guide" ref={ref}>
      {/* Flow Section */}
      <div className="py-24 md:py-32 bg-warm-50">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Flow
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-4">
              オーダーの流れ
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              想いをカタチに変える
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-0">
            {flowSteps.map((step, index) => (
              <div key={step.title} className="fade-in-up relative">
                {/* Connector line */}
                {index < flowSteps.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-16 bottom-0 w-px bg-gray-200" />
                )}

                <div className="flex gap-6 md:gap-8 pb-12">
                  {/* Step number */}
                  <div className="flex-none w-12 h-12 md:w-16 md:h-16 bg-accent text-white flex items-center justify-center text-sm md:text-base font-serif font-light relative z-10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 md:pt-3">
                    <h3 className="text-lg md:text-xl font-serif font-light text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    {step.note && (
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        {step.note}
                      </p>
                    )}
                    {step.cta && (
                      <a
                        href="https://lin.ee/W2TBswv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xs text-primary border-b border-primary pb-0.5 mt-3 hover:text-primary-dark hover:border-primary-dark transition-colors"
                      >
                        ご予約はこちら →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
