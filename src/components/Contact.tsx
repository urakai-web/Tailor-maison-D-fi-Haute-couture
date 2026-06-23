import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="fade-in-up">
          <p className="text-xs tracking-widest text-white/60 uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
            まずはお気軽に
            <br />
            ご相談ください
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl mx-auto">
            オーダースーツが初めての方も、お気軽にご相談ください。ご予算やご要望をお伺いしながら、最適なご提案をさせていただきます。
          </p>
        </div>

        <div className="fade-in-up mt-10">
          <a
            href="https://lin.ee/W2TBswv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#06C755] text-white text-sm tracking-widest px-12 py-4 hover:bg-[#05b04c] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで予約・相談する
          </a>
          <p className="text-white/50 text-xs mt-4">
            24時間受付中。お気軽にどうぞ。
          </p>
        </div>
      </div>
    </section>
  );
}
