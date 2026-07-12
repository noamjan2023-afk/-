import { useRef } from 'react';

const projects = [
  { 
    title: 'Mercedes S-Class', 
    type: 'Paint Correction', 
    img: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1200&q=80' 
  },
  { 
    title: 'Porsche 911', 
    type: 'Ceramic Coating', 
    img: 'https://images.unsplash.com/photo-1503376710972-8862f92470a1?auto=format&fit=crop&w=1200&q=80' 
  },
  { 
    title: 'G-Wagon', 
    type: 'Interior Detail', 
    img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80' 
  },
  { 
    title: 'Audi RS6', 
    type: 'Full PPF Wrap', 
    img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80' 
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
          Recent Details
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