import { useEffect, useRef } from "react";

const newsItems = [
  {
    date: "2025.12.10",
    category: "イベント",
    categoryColor: "bg-primary text-white",
    title: "完成見学会のお知らせ【金沢市K様邸】12月21日(日)開催",
  },
  {
    date: "2025.11.28",
    category: "ブログ",
    categoryColor: "bg-accent text-white",
    title: "断熱リフォームの現場レポート｜Before & After",
  },
  {
    date: "2025.11.15",
    category: "お知らせ",
    categoryColor: "bg-gray-600 text-white",
    title: "年末年始の営業スケジュールについて",
  },
  {
    date: "2025.10.30",
    category: "ブログ",
    categoryColor: "bg-accent text-white",
    title: "自然素材の家に暮らして3年が経ちました【オーナーインタビュー】",
  },
  {
    date: "2025.10.12",
    category: "イベント",
    categoryColor: "bg-primary text-white",
    title: "住まいのお悩み相談会 11月開催決定！予約受付中",
  },
];

export default function News() {
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
    <section id="news" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left: section header */}
          <div className="fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Information
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-6">
              お知らせ
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              最新のイベント情報・ブログ記事・会社からのお知らせをご覧いただけます。
            </p>
            <a
              href="#news"
              className="btn-outline text-xs mt-8 inline-block"
            >
              全て見る
            </a>
          </div>

          {/* Right: news list */}
          <div className="md:col-span-2 fade-in-up">
            <ul className="divide-y divide-gray-100">
              {newsItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#news"
                    className="flex flex-col sm:flex-row sm:items-center gap-3 py-5 group hover:bg-warm-50 -mx-4 px-4 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <time className="text-xs text-gray-400 w-24">
                        {item.date}
                      </time>
                      <span
                        className={`text-[10px] tracking-wide px-2 py-0.5 ${item.categoryColor} whitespace-nowrap`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-primary transition-colors leading-relaxed">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
