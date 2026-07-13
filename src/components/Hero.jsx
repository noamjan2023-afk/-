import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero({ isLoaded }) {
  const h1Ref = useRef();
  const pRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    if (isLoaded) {
      const tl = gsap.timeline();
      tl.to('.hero-text', {
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.2
      })
        .fromTo(pRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          "-=0.8"
        )
        .fromTo(ctaRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
          "-=0.6"
        );
    }
  }, [isLoaded]);

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mix-blend-difference z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6">
          <h1 ref={h1Ref} className="text-5xl md:text-7xl font-display font-black tracking-tight text-white leading-none">
            <span className="block overflow-hidden pb-2"><span className="hero-text block translate-y-full">איתור נזילות</span></span>
            <span className="block overflow-hidden pb-2"><span className="hero-text block translate-y-full text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">במצלמה טרמית</span></span>
            <span className="block overflow-hidden pb-2"><span className="hero-text block translate-y-full">ברמת מומחה</span></span>
          </h1>

          <p ref={pRef} className="text-lg md:text-xl font-light text-neutral-300 max-w-md opacity-0 leading-relaxed">
            עידן עבודות אינסטלציה - פתרונות מתקדמים לאיתור נזילות, תחזוקת מערכות מים וביוב, ושיפוץ חדרי רחצה באזור המרכז.
          </p>

          {/* New Interactive Call To Action */}
          <div ref={ctaRef} className="opacity-0 pt-4 flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              data-magnetic="true"
              className="px-8 py-4 bg-transparent border border-white text-white font-display font-bold tracking-widest text-sm rounded-full hover:bg-white hover:text-obsidian transition-all duration-300 shadow-lg hover:shadow-accent/20"
            >
              יצירת קשר
            </button>
            <a
              href="tel:054-590-8198"
              className="px-8 py-4 bg-accent text-obsidian font-display font-bold tracking-widest text-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-accent/50 flex items-center justify-center"
            >
              054-590-8198
            </a>
            <a
              href="https://wa.me/972545908198"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-display font-bold tracking-widest text-sm rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              וואטסאפ
            </a>
          </div>
        </div>
        <div className="hidden md:block">
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce">
        <span className="text-sm tracking-[0.3em] uppercase mb-2 font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>
    </section>
  );
}