import { useEffect, useRef, useState } from "react";
import { client } from "../lib/microcms";
import type { Case, Tag } from "../lib/microcms";

const fallbackCases = [
  { id: "1", image: "/images/case-placeholder.jpg", title: "ビジネススーツ", tag: "Suit", instagramUrl: "" },
  { id: "2", image: "/images/case-placeholder.jpg", title: "フォーマルスーツ", tag: "Suit", instagramUrl: "" },
  { id: "3", image: "/images/case-placeholder.jpg", title: "オーダーシャツ", tag: "Shirt", instagramUrl: "" },
  { id: "4", image: "/images/case-placeholder.jpg", title: "カジュアルセットアップ", tag: "Suit", instagramUrl: "" },
  { id: "5", image: "/images/case-placeholder.jpg", title: "オーダーコート", tag: "Coat", instagramUrl: "" },
  { id: "6", image: "/images/case-placeholder.jpg", title: "ウェディングスーツ", tag: "Suit", instagramUrl: "" },
];

export default function CaseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [cases, setCases] = useState<{ id: string; image: string; title: string; tag: string; instagramUrl: string }[]>(fallbackCases);
  const [tags, setTags] = useState<Tag[]>([]);
  const [activeTag, setActiveTag] = useState<string>("");

  useEffect(() => {
    client
      .getList<Case>({ endpoint: "cases", queries: { limit: 50 } })
      .then((res) => {
        if (res.contents.length > 0) {
          setCases(
            res.contents.map((c) => ({
              id: c.id,
              image: c.image.url,
              title: c.title,
              tag: c.tag?.name ?? "",
              instagramUrl: c.instagramUrl ?? "",
            }))
          );
        }
      })
      .catch(() => {});

    client
      .getList<Tag>({ endpoint: "tags", queries: { limit: 50 } })
      .then((res) => setTags(res.contents))
      .catch(() => {});
  }, []);

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
  }, [cases]);

  const filtered = activeTag
    ? cases.filter((c) => c.tag === activeTag)
    : cases;

  return (
    <section id="case" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Case
          </p>
          <h2 className="section-title">仕立て事例</h2>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            お客様の『覚悟』をカタチにした、これまでのお仕立て事例をご紹介します。
          </p>
        </div>

        {/* Tag filter */}
        {tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10 fade-in-up">
            <button
              onClick={() => setActiveTag("")}
              className={`text-xs tracking-widest px-5 py-2 border transition-colors duration-300 ${
                activeTag === ""
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 text-gray-500 hover:border-primary hover:text-primary"
              }`}
            >
              ALL
            </button>
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTag(tag.name)}
                className={`text-xs tracking-widest px-5 py-2 border transition-colors duration-300 ${
                  activeTag === tag.name
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 text-gray-500 hover:border-primary hover:text-primary"
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 fade-in-up">
          {filtered.map((item) => {
            const Wrapper = item.instagramUrl ? "a" : "div";
            const linkProps = item.instagramUrl
              ? { href: item.instagramUrl, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper key={item.id} className="cursor-pointer" {...linkProps}>
                <div className="overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2">
                  <span className="text-[10px] tracking-widest text-accent uppercase">
                    {item.tag}
                  </span>
                  <p className="text-sm text-gray-800 font-light mt-0.5">
                    {item.title}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <a
            href="https://www.instagram.com/yuma.nishinami"
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
