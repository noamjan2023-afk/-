import { useRef } from 'react';

const projects = [
  {
    title: 'דירוג נמוך (Low Fade)',
    type: 'עיצוב שיער',
    img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'עיצוב זקן פרימיום',
    type: 'טיפוח זקן',
    img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'תספורת ילדים',
    type: 'שירות אישי',
    img: 'https://images.unsplash.com/photo-1534063222387-a25eb6629ce4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'קלאסי ומודרני',
    type: 'מספרת גברים',
    img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80'
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
          תספורות נבחרות
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