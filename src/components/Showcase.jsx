import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const projects = [
  { id: 1, title: 'The Obsidian House', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Glass Pavilion', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Brutalist Core', image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Eco-Tower Concept', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop' },
];

export default function Showcase() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const xPercent = useRef(0);
  const direction = useRef(-1);
  const speed = useRef(0.05); // Base auto-scroll speed
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Only track if mouse is vertically within the section
      if (e.clientY < rect.top || e.clientY > rect.bottom) return;

      const mouseX = e.clientX;
      const width = window.innerWidth;
      // Normalized from -0.5 (left edge) to 0.5 (right edge)
      const normalizedX = (mouseX / width) - 0.5; 
      
      // If mouse is near center, stop or move very slowly.
      // If mouse is near edges, move faster in that direction.
      // Negative normalizedX (left side) -> direction = 1 (scrolls right to reveal left items)
      // Positive normalizedX (right side) -> direction = -1 (scrolls left to reveal right items)
      direction.current = normalizedX > 0 ? -1 : 1;
      
      // Speed scales up based on distance from center. Max speed multiplier is 0.4
      speed.current = Math.abs(normalizedX) * 0.4;
    };

    const handleMouseLeave = () => {
      // Reset to default slow leftward scroll when mouse leaves the section
      direction.current = -1;
      speed.current = 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);
    if (sectionRef.current) {
      sectionRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    const animate = () => {
      if (xPercent.current <= -50) {
        xPercent.current = 0;
      } else if (xPercent.current > 0) {
        xPercent.current = -50;
      }
      
      gsap.set(containerRef.current, { xPercent: xPercent.current });
      xPercent.current += speed.current * direction.current;
      requestRef.current = requestAnimationFrame(animate);
    }
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const ProjectCard = ({ project }) => (
    <div className="shrink-0 w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex flex-col justify-center mx-4 relative group cursor-pointer">
      <div className="w-full h-full overflow-hidden rounded-3xl relative pointer-events-none border border-white/10">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="absolute bottom-10 left-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">{project.title}</h3>
          <p className="text-accent uppercase tracking-widest mt-3 text-sm font-bold">View Project</p>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full h-screen bg-obsidian z-10 relative flex items-center overflow-hidden border-t border-white/5" data-magnetic="true">
      <div ref={containerRef} className="flex w-max">
        {/* First set of projects */}
        <div className="flex shrink-0">
          {projects.map((project) => (
            <ProjectCard key={`first-${project.id}`} project={project} />
          ))}
        </div>
        {/* Second identical set of projects for seamless looping */}
        <div className="flex shrink-0">
          {projects.map((project) => (
            <ProjectCard key={`second-${project.id}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
