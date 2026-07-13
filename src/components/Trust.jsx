import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '9.82', label: 'דירוג במידרג' },
  { value: '100+', label: 'לקוחות מרוצים' },
  { value: '24/6', label: 'זמינות' },
  { value: '100%', label: 'אחריות' },
];

export default function Trust() {
  const sectionRef = useRef();
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      statsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 w-full z-10 relative bg-obsidian/90 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              ref={el => statsRef.current[i] = el}
              className="flex flex-col items-center justify-center space-y-2 p-6"
            >
              <h4 className="text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
                {stat.value}
              </h4>
              <p className="text-sm md:text-base font-light text-neutral-400 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
