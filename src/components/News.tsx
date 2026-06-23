import { useEffect, useRef } from "react";

export default function Fabric() {
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
    <section id="fabric" ref={ref} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/feature-01.png"
                  alt="取り扱い生地"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Fabric
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light leading-relaxed mb-4 text-gray-800">
              凛と、美しく。
            </h2>
            <p className="text-lg font-serif font-light text-gray-700 mb-8">
              洗練されたクオリティーファブリック
            </p>
            <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
              <p>
                イタリア、イギリスファブリックを中心に取り揃えており、ご希望やご予算に応じてご提案させていただきます。
              </p>
              <p>
                あらかじめご希望の生地メーカーや記載のない気になるブランドがございましたら、事前にお問い合わせいただけますと幸いです。
              </p>
            </div>
            <a href="/fabric" className="btn-outline mt-10 inline-block text-xs">
              取り扱い生地を見る →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
