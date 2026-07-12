import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../utils/SplitText';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: '01', title: 'Ceramic Coating', desc: 'Multi-layer nano-protection for extreme gloss and durability.' },
  { id: '02', title: 'Paint Correction', desc: 'Multi-stage polishing to eliminate swirls and restore factory shine.' },
  { id: '03', title: 'Interior Restoration', desc: 'Deep extraction, leather conditioning, and detailing.' },
  { id: '04', title: 'PPF Wrapping', desc: 'Self-healing clear bra to protect against rock chips and scratches.' }
];

export default function Services() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });

    tl.to(sectionRef.current.querySelectorAll('.split-word'), {
      y: 0,
      duration: 1,
      stagger: 0.05,
      ease: 'power4.out',
    })
    .fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      },
      "-=0.7"
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-32 w-full z-10 relative bg-obsidian/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 tracking-tight uppercase">
          <SplitText text="Our Treatments" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, i) => (
            <div 
              key={i} 
              ref={el => cardsRef.current[i] = el}
              data-magnetic="true"
              className="group p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 rounded-2xl cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-accent transition-colors">{srv.title}</h3>
              <p className="text-neutral-400 font-light">{srv.desc}</p>
              <div className="mt-8 w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-accent transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
