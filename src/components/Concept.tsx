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
          <h2 className="text-2xl md:text-4xl font-serif font-light leading-relaxed text-gray-800 mb-8 whitespace-nowrap">
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
                Tailor maison Défi（テーラーメゾンディフィ）は、福岡を拠点とした出張型オーダースーツサロンです。福岡はもちろん、全国各地へ出張対応いたします。
              </p>
              <p>
                Défiとは、フランス語で「挑戦する」という言葉。挑戦し続けることで、最高の一着をお届けします。
              </p>
              <p>
                そして、何かに挑戦しようとするあなたの背中を、装いで後押ししたい。そんな想いが込められています。
              </p>
            </div>
          </div>
        </div>

        {/* Owner */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24 fade-in-up">
          <div className="md:order-2">
            <div className="relative">
              <div className="aspect-[2/3] overflow-hidden">
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
              代表者経歴
            </h3>
            <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
              <p>
                国内・外資系ラグジュアリーを含むアパレル業界で10年以上、企画・販売に携わる。
              </p>
              <p>
                その後、異業種を経験する中でファッションが人の自信や生き方に与える影響の大きさを実感。テーラードファッションでオーダーメイドを主軸に起業。
              </p>
            </div>
          </div>
        </div>

        {/* Why Tailored Fashion */}
        <div className="fade-in-up max-w-3xl mx-auto">
          <p className="text-xs tracking-widest text-primary uppercase mb-3 text-center">
            Our Belief
          </p>
          <h3 className="text-lg md:text-3xl font-serif font-light leading-relaxed mb-8 text-gray-800 text-center whitespace-nowrap">
            なぜ、テーラードファッションなのか
          </h3>
          <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
            <p>
              オーダーメイドは、衝動買いではなく『目的』を持って創るもの。その背景には、覚悟や挑戦といったドラマがあります。
            </p>
            <p>
              仕事で結果を出す人ほど、装いにも『目的』を持っています。自分をどう見せるか、どう臨むか——その選択がスーツに表れます。
            </p>
            <p>
              成人式、入社式、結婚式——人生の節目に選ばれる一着には、その人の覚悟が宿ります。そうした場面にこそ、文化としてテーラードファッションが根づいています。
            </p>
            <p>
              私が提供するのは『モノ』ではなく、あなたの生き方に寄り添う最高の一着です。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
