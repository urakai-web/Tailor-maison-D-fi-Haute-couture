import { useEffect, useRef } from "react";

export default function Concept() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/concept.png"
                  alt="自然素材の家づくり"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Our Concept
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light leading-relaxed mb-8 text-gray-800">
              「ちょうどいい家」を、<br />
              あなたと一緒に。
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
              <p>
                金沢建築設計は、石川県金沢市を拠点に、家族ひとりひとりのライフスタイルに寄り添った注文住宅を手がける工務店です。
              </p>
              <p>
                「大きすぎず、小さすぎず。自分たちにちょうどいい」そんな住まいを実現するために、お客様との対話を大切にしています。
              </p>
              <p>
                自然素材の温もり、優れた断熱性能、地域の気候に合わせた設計——。長く快適に暮らせる住まいを、誠実な職人の手でお届けします。
              </p>
            </div>
            <a href="#about" className="btn-outline mt-10 inline-block text-xs">
              私たちについて詳しく →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="fade-in-up mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-warm-200 pt-16">
          {[
            { num: "1998", unit: "年", label: "創業" },
            { num: "350", unit: "棟+", label: "施工実績" },
            { num: "UA値\n0.46", unit: "", label: "最高断熱基準" },
            { num: "30", unit: "年", label: "長期保証" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-light text-primary whitespace-pre-line">
                {stat.num}
                <span className="text-lg">{stat.unit}</span>
              </div>
              <div className="text-xs text-gray-500 tracking-widest mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
