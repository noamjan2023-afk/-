export default function Booking() {
  return (
    <section id="booking" className="py-32 w-full min-h-screen flex items-center justify-center z-10 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">יצירת קשר</h2>
          <p className="text-xl font-light text-neutral-400">חצור 1, ראשון לציון</p>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="https://wa.me/972524002658" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-[#25D366] hover:text-white transition-colors">052-400-2658 (וואטסאפ)</a>
            <span className="hidden md:block text-neutral-600">|</span>
            <a href="https://simpletor.app" target="_blank" rel="noopener noreferrer" className="text-2xl text-accent hover:text-white transition-colors">לקביעת תור באפליקציה</a>
          </div>
        </div>
      </div>
    </section>
  );
}
