export default function Booking() {
  return (
    <section id="booking" className="py-32 w-full min-h-screen flex items-center justify-center z-10 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">Book Your Detail</h2>
          <p className="text-xl font-light text-neutral-400">Secure your spot at Rishon LeZion's premier auto styling center.</p>
        </div>
        
        <form className="space-y-8 backdrop-blur-md bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Name</label>
              <input type="text" className="bg-transparent border-b border-white/20 focus:border-accent text-white py-3 outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Email</label>
              <input type="email" className="bg-transparent border-b border-white/20 focus:border-accent text-white py-3 outline-none transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Vehicle Model & Requested Services</label>
            <textarea rows="4" className="bg-transparent border-b border-white/20 focus:border-accent text-white py-3 outline-none transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
          </div>
          <button type="button" className="w-full bg-white text-obsidian font-bold py-5 rounded-full uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-300">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
