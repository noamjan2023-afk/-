import { useRef } from 'react';

const projects = [
  {
    title: 'Skyline Residence',
    type: 'Architecture',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Aurora Pavilion',
    type: 'Interior Design',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Atlas Tower',
    type: 'Bespoke Concept',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Horizon Villa',
    type: 'Luxury Living',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Showcase() {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add('active');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => { isDown = false; };
  const handleMouseUp = () => { isDown = false; };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full py-32 bg-obsidian z-10 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase">
          Featured Work
        </h2>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 md:px-20 pb-10 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {projects.map((project, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[85vw] md:w-[50vw] h-[60vh] relative rounded-3xl overflow-hidden group select-none border border-white/10"
          >
            {/* Background Image instead of Gray Box */}
            <img
              src={project.img}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Overlay Gradient for Typography Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-90 pointer-events-none" />

            <div className="absolute bottom-10 left-10 transform translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white">{project.title}</h3>
              <p className="text-accent uppercase tracking-widest mt-2 text-sm font-medium">{project.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}