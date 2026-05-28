import { useEffect, useRef, useState } from "react";

const works = [
  {
    id: 1,
    title: "自然素材に包まれる平屋の家",
    tags: ["平屋", "3LDK", "33坪"],
    location: "金沢市 N様邸",
    image: "/images/works-01.png",
  },
  {
    id: 2,
    title: "吹き抜けリビングの開放的な家",
    tags: ["2階建て", "4LDK", "40坪"],
    location: "白山市 K様邸",
    image: "/images/works-02.png",
  },
  {
    id: 3,
    title: "中庭のある回遊動線の家",
    tags: ["平屋", "3LDK", "38坪"],
    location: "野々市市 T様邸",
    image: "/images/works-03.png",
  },
  {
    id: 4,
    title: "薪ストーブのある山小屋風の家",
    tags: ["2階建て", "3LDK", "35坪"],
    location: "金沢市 M様邸",
    image: "/images/works-04.png",
  },
  {
    id: 5,
    title: "ガレージ付きシンプルモダンの家",
    tags: ["2階建て", "4LDK", "45坪"],
    location: "かほく市 I様邸",
    image: "/images/works-05.png",
  },
  {
    id: 6,
    title: "和モダンの漆喰と杉の家",
    tags: ["平屋", "2LDK", "28坪"],
    location: "加賀市 S様邸",
    image: "/images/works-06.png",
  },
];

const GAP = 24; // gap-6 = 24px

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".fade-in-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Responsive layout + measure wrapper width
  useEffect(() => {
    const update = () => {
      const ipv = window.innerWidth < 768 ? 1 : 3;
      setItemsPerView(ipv);
      setActiveIndex(0);
      if (wrapperRef.current) {
        setWrapperWidth(wrapperRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Measure on first render
  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.offsetWidth);
    }
  }, []);

  const maxIndex = works.length - itemsPerView;

  // Pixel width of each card
  const itemWidth =
    wrapperWidth > 0
      ? (wrapperWidth - GAP * (itemsPerView - 1)) / itemsPerView
      : 0;

  // translateX in px
  const translateX = -(activeIndex * (itemWidth + GAP));

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(maxIndex, index)));
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // 横スワイプが縦より大きい && 50px以上で判定
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      goTo(activeIndex + (dx < 0 ? 1 : -1));
    }
  };

  return (
    <section id="works" ref={sectionRef} className="py-24 md:py-32 bg-warm-50">
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

        {/* Carousel wrapper */}
        <div className="fade-in-up">
          {/* Track */}
          <div
            ref={wrapperRef}
            className="relative overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${translateX}px)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {works.map((work) => (
                <div
                  key={work.id}
                  className="flex-none group cursor-pointer"
                  style={{ width: itemWidth > 0 ? `${itemWidth}px` : "100%" }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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

            {/* Prev arrow */}
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="前へ"
              className="absolute left-0 top-[35%] -translate-y-1/2 bg-white shadow-md w-10 h-10 md:w-10 md:h-10 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            >
              ‹
            </button>

            {/* Next arrow */}
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === maxIndex}
              aria-label="次へ"
              className="absolute right-0 top-[35%] -translate-y-1/2 bg-white shadow-md w-10 h-10 md:w-10 md:h-10 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            >
              ›
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {works.map((_, i) => {
              // PCは3枚ずつなので activeIndex ごとにドットをグループ化
              const dotIndex = itemsPerView === 1 ? i : Math.floor(i / itemsPerView);
              const totalDots = Math.ceil(works.length / itemsPerView);
              if (itemsPerView > 1 && i % itemsPerView !== 0) return null;
              const dotActive = itemsPerView === 1
                ? i === activeIndex
                : Math.floor(activeIndex / itemsPerView) === dotIndex;
              if (dotIndex >= totalDots) return null;
              return (
                <button
                  key={i}
                  onClick={() => goTo(itemsPerView === 1 ? i : dotIndex * itemsPerView)}
                  aria-label={`スライド ${i + 1}`}
                  className={`h-0.5 transition-all duration-300 ${
                    dotActive ? "w-8 bg-primary" : "w-4 bg-gray-300"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
