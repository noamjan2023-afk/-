const projects = [
  { id: 1, title: 'The Obsidian House', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Glass Pavilion', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Brutalist Core', image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Eco-Tower Concept', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop' },
];

export default function Showcase() {
  const ProjectCard = ({ project }) => (
    <div className="shrink-0 w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex flex-col justify-center mx-4 relative group">
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
    <section className="w-full h-screen bg-obsidian z-10 relative flex items-center overflow-hidden border-t border-white/5 pointer-events-none" data-magnetic="true">
      <div className="animate-marquee">
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
