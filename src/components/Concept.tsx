import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Philosophy */}
        <div className="text-center mb-20 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light leading-relaxed text-gray-800 mb-8">
            挑戦の数だけ、物語がある。
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            テーラードファッションを通してお客様と目的や感動を共有し、挑戦する人の『覚悟』をカタチにする。
          </p>
        </div>

        {/* About Us */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24 fade-in-up">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/aboutme.jpg"
                alt="Tailor maison Défi サロン"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
          </div>

          <div>
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              About Us
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-8 text-gray-800">
              私たちについて
            </h3>
            <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
              <p>
                Tailor maison Défi（テーラーメゾンディフィ）は、福岡の出張型オーダースーツサロンです。
              </p>
              <p>
                Défiとは、フランス語で「挑戦する」という言葉。至高のお仕立て服を創るために常に挑戦し続けるといった意味です。
              </p>
              <p>
                また、同じように何かに挑戦しようとしている方々のお役に立ちたい。そんな想いが、この屋号には込められています。
              </p>
            </div>
          </div>
        </div>

        {/* Owner */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24 fade-in-up">
          <div className="md:order-2">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/owner.jpg"
                  alt="オーナー"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-accent -z-10" />
            </div>
          </div>

          <div className="md:order-1">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Owner
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-8 text-gray-800">
              オーナー経歴
            </h3>
            <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
              <p>
                国内、外資系ラグジュアリー含むアパレル業界で10年程勤め、幅広い年齢層のお客様を対応させて頂き、企画・販売経験を積む。
              </p>
              <p>
                その後は、化粧品メーカーの卸売や高齢者市場における生活のサポート、住まい紹介コンサルティングといった異業種に関わっていく中で、ファッションの重要性を深く認識し、テーラードファッションを通してオーダーメイドを主軸に起業する。
              </p>
            </div>
          </div>
        </div>

        {/* Why Tailored Fashion */}
        <div className="fade-in-up max-w-3xl mx-auto">
          <p className="text-xs tracking-widest text-primary uppercase mb-3 text-center">
            Our Belief
          </p>
          <h3 className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-8 text-gray-800 text-center">
            なぜ、テーラードファッションなのか
          </h3>
          <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
            <p>
              テーラードファッションのオーダーメイドは、衝動買いではなく、『目的』を持って創るものだからです。目的を持ってあつらえる背景には、それぞれ覚悟や挑戦といったドラマがあります。
            </p>
            <p>
              ビジネスの場において成果を出す人。いわゆる仕事のできる人は、『目的』を持って社会に貢献しています。だからこそ紆余曲折ありながらも事業を拡大させたり、重要なポストについてる方が多いです。そして、自身の装いに対しても『目的』を持って選択しています。
            </p>
            <p>
              また、個人の生活様式の中においてもそれぞれ『目的』があるからこそ装いをオーダーメイドされます。成人式や入学・卒業式、入社式、七五三、結婚式——それらは単なる消費行動とは異なり、その人の覚悟や意思の表明が垣間見え、そこには文化としてテーラードファッションが共存します。
            </p>
            <p>
              私は、アパレル＝衣類や装飾品といった『モノ』を指す販売ではなく、ファッション＝時代や人々の心理といったあらゆる環境の変化によって移り変わるスタイルだったり生き方といった広い視点でお客様に感動を与えられる最高の一着をご提供いたします。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
