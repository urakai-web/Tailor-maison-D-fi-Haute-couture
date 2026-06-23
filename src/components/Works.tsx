import { useEffect, useRef } from "react";

const cases = [
  { id: 1, image: "/images/works-01.png", title: "ビジネススーツ", tag: "Suit" },
  { id: 2, image: "/images/works-02.png", title: "フォーマルスーツ", tag: "Suit" },
  { id: 3, image: "/images/works-03.png", title: "オーダーシャツ", tag: "Shirt" },
  { id: 4, image: "/images/works-04.png", title: "カジュアルセットアップ", tag: "Suit" },
  { id: 5, image: "/images/works-05.png", title: "オーダーコート", tag: "Coat" },
  { id: 6, image: "/images/works-06.png", title: "ウェディングスーツ", tag: "Suit" },
];

export default function Case() {
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
    <section id="case" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Case
          </p>
          <h2 className="section-title">仕立て事例</h2>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            お客様の『覚悟』をカタチにした、これまでのお仕立て事例をご紹介します。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 fade-in-up">
          {cases.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-[10px] tracking-widest text-white/80 uppercase">
                      {item.tag}
                    </span>
                    <p className="text-sm text-white font-light">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs"
          >
            Instagramで更に見る →
          </a>
        </div>
      </div>
    </section>
  );
}
