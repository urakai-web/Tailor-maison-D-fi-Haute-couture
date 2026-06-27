import { useEffect, useRef, useState } from "react";
import { fetchList } from "../lib/microcms";
import type { Case, Tag } from "../lib/microcms";

export default function CaseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [cases, setCases] = useState<{ id: string; image: string; title: string; tags: string[]; instagramURL: string }[]>([]);
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const [activeTag, setActiveTag] = useState<string>("");

  useEffect(() => {
    fetchList<Case>("cases").then((contents) => {
      setCases(
        contents.map((c) => ({
          id: c.id,
          image: c.image.url,
          title: c.title,
          tags: c.tag?.map((t) => t.name) ?? [],
          instagramURL: c.instagramURL ?? "",
        }))
      );
    });

    fetchList<Tag>("tags").then((contents) => {
      setAllTags(contents);
    });
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
    ? cases.filter((c) => c.tags.includes(activeTag))
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
        {allTags.length > 0 && (
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
            {allTags.map((tag) => (
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
            const Wrapper = item.instagramURL ? "a" : "div";
            const linkProps = item.instagramURL
              ? { href: item.instagramURL, target: "_blank" as const, rel: "noopener noreferrer" }
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
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-widest text-accent uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
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
