import { useEffect, useRef, useState } from "react";

const works = [
  {
    id: 1,
    title: "自然素材に包まれる平屋の家",
    tags: ["平屋", "3LDK", "33坪"],
    location: "金沢市 N様邸",
    image: "/images/works-01.png",
    label: "施工事例01 — 外観写真",
    bg: "from-stone-600 to-stone-700",
  },
  {
    id: 2,
    title: "吹き抜けリビングの開放的な家",
    tags: ["2階建て", "4LDK", "40坪"],
    location: "白山市 K様邸",
    image: "/images/works-02.png",
    label: "施工事例02 — リビング写真",
    bg: "from-stone-700 to-stone-800",
  },
  {
    id: 3,
    title: "中庭のある回遊動線の家",
    tags: ["平屋", "3LDK", "38坪"],
    location: "野々市市 T様邸",
    image: "/images/works-03.png",
    label: "施工事例03 — 中庭写真",
    bg: "from-stone-500 to-stone-600",
  },
  {
    id: 4,
    title: "薪ストーブのある山小屋風の家",
    tags: ["2階建て", "3LDK", "35坪"],
    location: "金沢市 M様邸",
    image: "/images/works-04.png",
    label: "施工事例04 — 薪ストーブ写真",
    bg: "from-stone-800 to-stone-900",
  },
  {
    id: 5,
    title: "ガレージ付きシンプルモダンの家",
    tags: ["2階建て", "4LDK", "45坪"],
    location: "かほく市 I様邸",
    image: "/images/works-05.png",
    label: "施工事例05 — 外観写真",
    bg: "from-stone-600 to-stone-500",
  },
  {
    id: 6,
    title: "和モダンの漆喰と杉の家",
    tags: ["平屋", "2LDK", "28坪"],
    location: "加賀市 S様邸",
    image: "/images/works-06.png",
    label: "施工事例06 — 和室写真",
    bg: "from-stone-700 to-stone-600",
  },
];

export default function Works() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = works.length - itemsPerView;

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
    <section id="works" ref={ref} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 fade-in-up">
          <div>
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Works
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">
              施工事例
            </h2>
          </div>
          <a
            href="#works"
            className="text-xs tracking-widest text-primary border-b border-primary pb-0.5 mt-4 md:mt-0 hover:text-primary-dark hover:border-primary-dark transition-colors self-start md:self-auto"
          >
            全ての施工事例を見る →
          </a>
        </div>

        {/* Carousel */}
        <div className="fade-in-up relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${activeIndex} * (100% / ${itemsPerView} + 8px)))`,
            }}
          >
            {works.map((work) => (
              <div
                key={work.id}
                className="flex-none w-[calc(33.333%-1rem)] min-w-[280px] group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wide border border-gray-300 text-gray-500 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{work.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Nav arrows */}
          <button
            onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/3 -translate-y-1/2 bg-white shadow-md w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="前へ"
          >
            ‹
          </button>
          <button
            onClick={() => setActiveIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={activeIndex === maxIndex}
            className="absolute right-0 top-1/3 -translate-y-1/2 bg-white shadow-md w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="次へ"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
