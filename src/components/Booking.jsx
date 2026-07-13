export default function Booking() {
  return (
    <section id="booking" className="py-32 w-full min-h-screen flex items-center justify-center z-10 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-6">יצירת קשר</h2>
          <p className="text-xl font-light text-neutral-400">אפשר להשאיר פרטים ונחזור אליכם בהקדם.</p>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="tel:054-590-8198" className="text-2xl font-bold text-accent hover:text-white transition-colors">054-590-8198</a>
            <span className="hidden md:block text-neutral-600">|</span>
            <a href="mailto:idan.ihie@gmail.com" className="text-2xl text-accent hover:text-white transition-colors">idan.ihie@gmail.com</a>
          </div>
        </div>
        
        <form className="space-y-8 backdrop-blur-md bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">שם מלא</label>
              <input type="text" className="bg-transparent border-b border-white/20 focus:border-accent text-white py-3 outline-none transition-colors" placeholder="ישראל ישראלי" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">טלפון</label>
              <input type="tel" className="bg-transparent border-b border-white/20 focus:border-accent text-white py-3 outline-none transition-colors" placeholder="050-0000000" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">פרטי הפנייה</label>
            <textarea rows="4" className="bg-transparent border-b border-white/20 focus:border-accent text-white py-3 outline-none transition-colors resize-none" placeholder="ספרו לנו איך נוכל לעזור..."></textarea>
          </div>
          <button type="button" className="w-full bg-white text-obsidian font-bold py-5 rounded-full uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-300">
            שליחה
          </button>
        </form>
      </div>
    </section>
  );
}
